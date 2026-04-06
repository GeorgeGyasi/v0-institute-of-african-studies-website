import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('[v0] Init endpoint called');
    console.log('[v0] @vercel/postgres is deprecated. Please use Neon integration instead.');

    return NextResponse.json({
      success: true,
      message: 'To set up database, connect Neon through Vercel project settings.',
    });
  } catch (error: any) {
    console.error('[v0] Initialization error:', error);
    
    return NextResponse.json(
      { 
        error: 'Database initialization encountered an issue',
        details: error.message,
      },
      { status: 500 }
    );
  }
}

