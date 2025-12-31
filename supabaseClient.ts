import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sjfvsxqifojgjmipxlio.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqZnZzeHFpZm9qZ2ptaXB4bGlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcwMzE2NDYsImV4cCI6MjA4MjYwNzY0Nn0.-guchORPkh7c1_P8L7_c07Kx-Zy0eGI9MbVUa_SasBs';

export const supabase = createClient(supabaseUrl, supabaseKey);