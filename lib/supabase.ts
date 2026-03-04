import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

// Client for browser
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Server client (for sensitive operations)
export const supabaseServer = createClient(supabaseUrl, supabaseServiceKey || supabaseAnonKey);

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
