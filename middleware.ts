import { type NextRequest, NextResponse } from 'next/server';
import { createServerClient, serialize } from '@supabase/ssr';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Only protect admin routes
  if (!pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  // Allow setup and login pages without authentication
  if (pathname === '/admin/login' || pathname === '/admin/setup') {
    return NextResponse.next();
  }

  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          const cookieString = request.headers.get('cookie') || '';
          return cookieString.split(';').map(cookie => {
            const [name, value] = cookie.trim().split('=');
            return { name, value };
          });
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/admin/login';
    return NextResponse.redirect(redirectUrl);
  }

  return supabaseResponse;
}

export const config = {
  matcher: ['/admin/:path*'],
};
