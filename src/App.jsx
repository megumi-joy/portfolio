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

function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <LanguageProvider>
      <div className="bg-slate-900 min-h-screen text-slate-100 selection:bg-cyan-500 selection:text-cyan-900 overflow-x-hidden">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[60%] rounded-full bg-purple-600/10 blur-[100px]" />
        </div>

        <Header />

        <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 space-y-32 pt-24">
          <Hero onOpenResume={() => setShowResume(true)} />
          <Skills />
          <Experience />
          <Projects />
          <Plans />
          <Contact />
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
