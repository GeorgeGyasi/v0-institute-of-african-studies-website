import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const SQL_INIT = `
CREATE TABLE IF NOT EXISTS public.staff_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  specialty TEXT,
  email TEXT NOT NULL UNIQUE,
  photo_url TEXT,
  bio TEXT,
  department TEXT,
  rank TEXT,
  phone TEXT,
  office TEXT,
  research_interests TEXT,
  publications TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.staff_profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Enable read access for all users" ON public.staff_profiles;
CREATE POLICY "Enable read access for all users" 
  ON public.staff_profiles 
  FOR SELECT 
  USING (true);

DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON public.staff_profiles;
CREATE POLICY "Enable insert for authenticated users only"
  ON public.staff_profiles
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Enable update for authenticated users only" ON public.staff_profiles;
CREATE POLICY "Enable update for authenticated users only"
  ON public.staff_profiles
  FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Enable delete for authenticated users only" ON public.staff_profiles;
CREATE POLICY "Enable delete for authenticated users only"
  ON public.staff_profiles
  FOR DELETE
  USING (auth.role() = 'authenticated');
`;

export async function POST(request: NextRequest) {
  try {
    console.log('[v0] Init endpoint called');
    const postgresUrl = process.env.POSTGRES_URL;
    console.log('[v0] POSTGRES_URL set:', !!postgresUrl);
    
    if (!postgresUrl) {
      console.error('[v0] POSTGRES_URL environment variable is not set');
      return NextResponse.json(
        { 
          error: 'POSTGRES_URL environment variable not set. Please configure your Supabase connection.',
          success: false
        },
        { status: 500 }
      );
    }

    console.log('[v0] Creating PostgreSQL pool...');
    const pool = new Pool({
      connectionString: postgresUrl,
      ssl: { rejectUnauthorized: false },
    });

    console.log('[v0] Connecting to PostgreSQL...');
    const client = await pool.connect();
    console.log('[v0] Connected successfully');

    try {
      console.log('[v0] Executing initialization SQL...');
      await client.query(SQL_INIT);
      console.log('[v0] Database initialized successfully');

      return NextResponse.json({
        success: true,
        message: 'Database initialized successfully',
      });
    } finally {
      client.release();
      await pool.end();
    }
  } catch (error: any) {
    console.error('[v0] Database initialization error:', error);
    console.error('[v0] Error message:', error.message);
    console.error('[v0] Error code:', error.code);
    
    return NextResponse.json(
      { 
        error: 'Failed to initialize database',
        details: error.message,
        code: error.code
      },
      { status: 500 }
    );
  }
}

