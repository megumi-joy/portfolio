// import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-url.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'

let warned = false;
if (supabaseUrl === 'https://placeholder-url.supabase.co' && !warned) {
    console.warn("Supabase URL is not configured. Please check SUPABASE_SETUP.md");
    warned = true;
}

// export const supabase = createClient(supabaseUrl, supabaseAnonKey)
export const supabase = { auth: { getSession: () => Promise.resolve({ data: { session: null } }), onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } }) } };
