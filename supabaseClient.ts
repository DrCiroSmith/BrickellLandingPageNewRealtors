import { createClient } from '@supabase/supabase-js';

// Supabase Configuration
// The anon key should be a JWT token starting with 'eyJ'
// Get these values from your Supabase project dashboard:
// Settings > API > Project URL and anon/public key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://sjfvsxqifojgjmipxlio.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseKey) {
  console.error('Missing VITE_SUPABASE_ANON_KEY environment variable. Please configure it in your environment or Vercel dashboard.');
}

export const supabase = createClient(supabaseUrl, supabaseKey || '');