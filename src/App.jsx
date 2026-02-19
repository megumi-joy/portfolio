import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Plans from './components/Plans';
import Contact from './components/Contact';
import { LanguageProvider } from './components/LanguageContext';
import ResumeModal from './components/Resume/ResumeModal';
import Shop from './components/Shop';
import Admin from './components/Admin';
import Auth from './components/Auth';
import { supabase } from './lib/supabase';
import { ShoppingCart, Layout, ShieldCheck } from 'lucide-react';

function App() {
  const [showResume, setShowResume] = useState(false);
  const [view, setView] = useState('portfolio'); // 'portfolio', 'shop', 'admin'
  const [user, setUser] = useState(null);

  const isSupabaseConfigured =
    import.meta.env.VITE_SUPABASE_URL &&
    import.meta.env.VITE_SUPABASE_URL !== 'YOUR_SUPABASE_URL';

  useEffect(() => {
    if (!isSupabaseConfigured) {
      console.warn("Supabase is not configured. Shop and Admin features will be disabled.");
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [isSupabaseConfigured]);

  return (
    <LanguageProvider>
      <div className="bg-slate-900 min-h-screen text-slate-100 selection:bg-cyan-500 selection:text-cyan-900 overflow-x-hidden">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[60%] rounded-full bg-purple-600/10 blur-[100px]" />
        </div>

        <Header
          currentView={view}
          onViewChange={setView}
          user={user}
        />

        <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 space-y-32 pt-24">
          {view === 'portfolio' && (
            <>
              <Hero onOpenResume={() => setShowResume(true)} />
              <Skills />
              <Experience />
              <Projects />
              <Plans />
              <Contact />
            </>
          )}

          {view === 'shop' && (
            <div className="pt-10">
              {user ? <Shop user={user} /> : <Auth onUserChange={setUser} />}
            </div>
          )}

          {view === 'admin' && (
            <div className="pt-10">
              <Admin />
            </div>
          )}
        </main>

        <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />

        <footer className="relative z-10 py-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Aurora Sunrise. Built with React & Tailwind.</p>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;
