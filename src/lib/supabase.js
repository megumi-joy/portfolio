import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'

if (supabaseUrl === 'YOUR_SUPABASE_URL') {
    console.warn("Supabase URL is not configured. Please check SUPABASE_SETUP.md");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
