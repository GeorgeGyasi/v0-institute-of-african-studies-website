import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    console.log('[v0] Fetching staff from Vercel Postgres...');
    
    const result = await sql`
      SELECT * FROM staff_profiles ORDER BY name
    `;

    console.log('[v0] Staff fetched successfully:', result.rows.length);
    return NextResponse.json(result.rows || []);
  } catch (error: any) {
    console.error('[v0] API error:', error.message);
    // Return empty array instead of 500 error, so page still loads
    return NextResponse.json([]);
  }
}
