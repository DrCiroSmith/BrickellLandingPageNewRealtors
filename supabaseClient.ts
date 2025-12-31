import { createClient } from '@supabase/supabase-js';

// Supabase Configuration
// The anon key should be a JWT token starting with 'eyJ'
// Get these values from your Supabase project dashboard:
// Settings > API > Project URL and anon/public key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://sjfvsxqifojgjmipxlio.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqZnZzeHFpZm9qZ2ptaXB4bGlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0Njg0NDUsImV4cCI6MjA1MTA0NDQ0NX0.placeholder';

export const supabase = createClient(supabaseUrl, supabaseKey);