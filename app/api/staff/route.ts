import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

export async function GET(request: NextRequest) {
  const dbUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL;
  
  if (!dbUrl) {
    return NextResponse.json([]);
  }

  const pool = new Pool({
    connectionString: dbUrl,
  });

  try {
    console.log('[v0] Fetching staff from database...');
    
    const result = await pool.query('SELECT * FROM staff_profiles ORDER BY name');
    console.log('[v0] Staff fetched successfully:', result.rows.length);
    
    return NextResponse.json(result.rows || []);
  } catch (error: any) {
    console.error('[v0] API error:', error.message);
    // Return empty array if database query fails
    return NextResponse.json([]);
  } finally {
    await pool.end();
  }
}
