import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

// Only create client when needed (lazy singleton for browser)
let _supabaseClient: ReturnType<typeof createClient> | null = null;

export function getSupabaseClient() {
  if (typeof window === "undefined") {
    // For server-side, always create fresh instance
    return createClient(supabaseUrl, supabaseAnonKey);
  }
  
  // For client-side, use singleton to prevent multiple instances
  if (!_supabaseClient) {
    _supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  }
  return _supabaseClient;
}

export type StaffProfile = {
  id: string;
  name: string;
  role: string;
  specialty?: string;
  email: string;
  photo_url?: string;
  bio?: string;
  department?: string;
  rank?: string;
  phone?: string;
  office?: string;
  research_interests?: string;
  publications?: string;
  created_at: string;
  updated_at: string;
};
