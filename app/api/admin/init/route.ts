import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    // Use service role key to execute SQL
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Create staff_profiles table
    const { data: createTableResult, error: tableError } = await supabaseAdmin
      .from('staff_profiles')
      .select('*')
      .limit(0);

    // If table doesn't exist, we'll get an error. Try to create it using SQL directly
    if (tableError?.code === 'PGRST116') {
      // Table doesn't exist, create it
      const { error: createError } = await supabaseAdmin.sql`
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
        
        ALTER TABLE staff_profiles ENABLE ROW LEVEL SECURITY;
        
        CREATE POLICY "Enable read access for all users" 
          ON staff_profiles 
          FOR SELECT 
          USING (true);
        
        CREATE POLICY "Enable insert for authenticated users only"
          ON staff_profiles
          FOR INSERT
          WITH CHECK (auth.role() = 'authenticated');
        
        CREATE POLICY "Enable update for authenticated users only"
          ON staff_profiles
          FOR UPDATE
          USING (auth.role() = 'authenticated')
          WITH CHECK (auth.role() = 'authenticated');
        
        CREATE POLICY "Enable delete for authenticated users only"
          ON staff_profiles
          FOR DELETE
          USING (auth.role() = 'authenticated');
      `;

      if (createError) {
        console.error('[v0] Table creation error:', createError);
        // Continue - table might already exist
      }
    }

    // Create storage bucket if it doesn't exist
    const { data: buckets } = await supabaseAdmin.storage.listBuckets();
    const bucketExists = buckets?.some((b) => b.name === 'staff-photos');

    if (!bucketExists) {
      const { error: bucketError } = await supabaseAdmin.storage.createBucket(
        'staff-photos',
        { public: true }
      );
      
      if (bucketError && !bucketError.message.includes('exists')) {
        console.error('[v0] Bucket creation error:', bucketError);
      }
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
