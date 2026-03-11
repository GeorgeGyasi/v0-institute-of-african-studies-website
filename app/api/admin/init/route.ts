import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST(request: NextRequest) {
  try {
    console.log('[v0] Checking database initialization...');

    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Try to query the table to see if it exists
    const { error: queryError } = await supabaseAdmin
      .from('staff_profiles')
      .select('*')
      .limit(1);

    // If table exists, return success
    if (!queryError || queryError.code !== 'PGRST205') {
      console.log('[v0] Table already exists');
      return NextResponse.json({
        success: true,
        message: 'Database already initialized',
      });
    }

    // Table doesn't exist - try to create it
    console.log('[v0] Table does not exist, running init script...');
    
    try {
      const { stdout, stderr } = await execAsync('cd /vercel/share/v0-project && npx tsx scripts/init-db.ts', {
        timeout: 30000,
      });
      
      console.log('[v0] Init script output:', stdout);
      if (stderr) console.error('[v0] Init script stderr:', stderr);

      return NextResponse.json({
        success: true,
        message: 'Database initialized successfully',
      });
    } catch (execError: any) {
      console.error('[v0] Script execution error:', execError.message);
      
      // Table creation failed - return helpful error
      return NextResponse.json(
        { 
          error: 'Database table creation failed. Please ensure POSTGRES_URL is properly configured.',
          details: execError.message 
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('[v0] Initialization error:', error);
    return NextResponse.json(
      { error: 'Failed to initialize database' },
      { status: 500 }
    );
  }
}

