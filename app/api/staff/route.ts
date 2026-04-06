import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    console.log('[v0] Fetching staff from database...');
    
    // TODO: Connect to database when Neon integration is set up
    // For now, return empty array to prevent errors
    console.log('[v0] Database not yet connected - returning empty staff list');
    return NextResponse.json([]);
  } catch (error: any) {
    console.error('[v0] API error:', error.message);
    // Return empty array instead of 500 error, so page still loads
    return NextResponse.json([]);
  }
}
