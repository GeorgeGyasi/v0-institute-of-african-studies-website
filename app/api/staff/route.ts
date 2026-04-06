import { getSupabaseClient } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('staff_profiles')
      .select('*')
      .order('name');

    if (error) {
      console.error('[v0] Database error:', error);
      // Return empty array if database is unavailable
      return NextResponse.json([]);
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('[v0] API error:', error);
    // Return empty array instead of 500 error, so page still loads
    return NextResponse.json([]);
  }
}
