import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useWeatherTheme } from '../../hooks/useWeatherTheme';
import { useLanguage } from '../LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

/**
 * RootLayout — persistent shell wrapping all routes.
 * Sets data-lobby attribute for lobby-scoped CSS variables.
 * Includes page transition animations via framer-motion.
 */
const RootLayout = () => {
    const { mode, cycleMode, resolvedTheme, weather } = useWeatherTheme();
    const { tone } = useLanguage();
    const location = useLocation();

    // Determine current lobby for CSS theming
    const lobby = location.pathname.includes('empresas') ? 'empresas'
        : location.pathname.includes('voicey') ? 'voicey'
        : location.pathname.includes('games') ? 'games'
        : 'hub';

    // WA context from route
    const waContext = lobby === 'empresas' ? 'empresas'
        : lobby === 'voicey' ? 'voicey_access'
        : lobby === 'games' ? 'games_invest'
        : 'hub';

    const isMagical = tone === 'magical';

    return (
        <div
            data-lobby={lobby}
            className={`min-h-screen transition-colors duration-700 ${
                isMagical
                    ? 'bg-[#0f051e] text-purple-100'
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100'
            } overflow-x-hidden`}
        >
            {/* Ambient background blobs */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full transition-all duration-1000 ${
                    isMagical ? 'bg-purple-600/30 blur-[120px]' : 'bg-[rgb(var(--accent-rgb,6,182,212)/0.08)] dark:bg-[rgb(var(--accent-rgb,6,182,212)/0.15)] blur-[120px]'
                }`} />
                <div className={`absolute bottom-[20%] right-[-5%] w-[30%] h-[60%] rounded-full transition-all duration-1000 ${
                    isMagical ? 'bg-green-600/10 blur-[100px]' : 'bg-purple-600/5 dark:bg-purple-600/10 blur-[100px]'
                }`} />
            </div>

            <Navbar themeMode={mode} onThemeCycle={cycleMode} weather={weather} />

            <main className="relative z-10 pt-24">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer />
            <WhatsAppButton context={waContext} variant="sticky" />
        </div>
    );
};

export default RootLayout;
