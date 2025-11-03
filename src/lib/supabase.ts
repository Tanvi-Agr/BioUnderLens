import { createClient } from '@supabase/supabase-js';

const envUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const envKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Fallback to provided credentials if env not configured
const supabaseUrl = envUrl || 'https://japhacrmyrfzafnzszlj.supabase.co';
const supabaseKey = envKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphcGhhY3JteXJmemFmbnpzemxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxNzQ4ODYsImV4cCI6MjA3Nzc1MDg4Nn0.nElOq0uwmbjk8Nb-xaZ4kh25CYDH9o7CVLX08ntNk1M';

export const supabase = createClient(supabaseUrl, supabaseKey);
