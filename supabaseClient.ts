import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sjfvsxqifojgjmipxlio.supabase.co';
const supabaseKey = 'sb_publishable_C_5jaw7dltX8JRTtmSLxjw_QeHb9PgU';

export const supabase = createClient(supabaseUrl, supabaseKey);