import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Plans from './components/Plans';
import Contact from './components/Contact';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import ResumeModal from './components/Resume/ResumeModal';
import Shop from './components/Shop';
import Admin from './components/Admin';
import Auth from './components/Auth';
import GameLanding from './components/GameLanding';
import Blog from './components/Blog';
import { ShoppingCart, Layout, ShieldCheck } from 'lucide-react';

function AppLayout() {
  const [showResume, setShowResume] = useState(false);
  const [view, setView] = useState('portfolio'); // 'portfolio', 'shop', 'admin', 'schedule', 'game'
  const [activeGameId, setActiveGameId] = useState(null);
  const [user, setUser] = useState(null);
  const { tone } = useLanguage();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get('game');
    if (gameId) {
      setActiveGameId(gameId);
      setView('game');
    }
  }, []);

  const handleBackToPortfolio = () => {
    setView('portfolio');
    setActiveGameId(null);
    window.history.pushState({}, '', window.location.pathname);
  };
  const isMagical = tone === 'magical';

  const isSupabaseConfigured = false;

  useEffect(() => {
    // Supabase logic can go here if needed
  }, [isSupabaseConfigured]);

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${isMagical ? 'bg-[#0f051e] text-purple-100 selection:bg-green-500 selection:text-green-900' : 'bg-slate-900 text-slate-100 selection:bg-cyan-500 selection:text-cyan-900'
      } overflow-x-hidden`}>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full transition-colors duration-1000 ${isMagical ? 'bg-purple-600/30 blur-[120px]' : 'bg-blue-600/20 blur-[120px]'
          }`} />
        <div className={`absolute bottom-[20%] right-[-5%] w-[30%] h-[60%] rounded-full transition-colors duration-1000 ${isMagical ? 'bg-green-600/10 blur-[100px]' : 'bg-purple-600/10 blur-[100px]'
          }`} />
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

        {view === 'game' && activeGameId && (
          <GameLanding
            gameId={activeGameId}
            onBack={handleBackToPortfolio}
          />
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

        {view === 'schedule' && (
          <div className="pt-10">
            {user ? <Schedule user={user} /> : <Auth onUserChange={setUser} />}
          </div>
        )}

        {view === 'blog' && (
          <div className="pt-10">
            <Blog />
          </div>
        )}
      </main>

      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />

      <footer className="relative z-10 py-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Megumi Joy. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppLayout />
    </LanguageProvider>
  );
}

export default App;
