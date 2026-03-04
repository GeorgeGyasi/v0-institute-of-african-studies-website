import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Create staff_profiles table
    const { error: tableError } = await supabase.rpc('exec', {
      sql: `
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
      `,
    });

    if (tableError && !tableError.message.includes('already exists')) {
      console.error('[v0] Table creation error:', tableError);
    }

    // Enable RLS
    const { error: rlsError } = await supabase.rpc('exec', {
      sql: `ALTER TABLE IF EXISTS staff_profiles ENABLE ROW LEVEL SECURITY;`,
    });

    if (rlsError && !rlsError.message.includes('already')) {
      console.error('[v0] RLS error:', rlsError);
    }

    // Create storage bucket if it doesn't exist
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketExists = buckets?.some((b) => b.name === 'staff-photos');

    if (!bucketExists) {
      await supabase.storage.createBucket('staff-photos', { public: true });
    }

    return NextResponse.json({
      success: true,
      message: 'Database initialized successfully',
    });
  } catch (error) {
    console.error('[v0] Initialization error:', error);
    return NextResponse.json(
      { error: 'Failed to initialize database' },
      { status: 500 }
    );
  }
}
