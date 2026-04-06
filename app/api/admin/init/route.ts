import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: NextRequest) {
  try {
    console.log('[v0] Init endpoint called');

    console.log('[v0] Creating staff_profiles table...');
    
    // Create the table using Vercel Postgres
    await sql`
      CREATE TABLE IF NOT EXISTS staff_profiles (
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
    `;

    console.log('[v0] Table created successfully');

    return NextResponse.json({
      success: true,
      message: 'Database initialized successfully',
    });
  } catch (error: any) {
    console.error('[v0] Database initialization error:', error);
    console.error('[v0] Error message:', error.message);
    
    // If table already exists, that's fine
    if (error.message?.includes('already exists')) {
      return NextResponse.json({
        success: true,
        message: 'Database already initialized',
      });
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to initialize database',
        details: error.message,
      },
      { status: 500 }
    );
  }
}

