import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import ToneToggle from './ToneToggle';
import { Menu, X, ShoppingBag, LogOut, ShieldCheck, CalendarDays } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ currentView, onViewChange, user }) => {
    const { language, setLanguage, activeProfile } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Scroll effect for header background
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: activeProfile.ui?.stats?.roles || 'Experience', href: '#experience', view: 'portfolio' },
        { name: activeProfile.ui?.stats?.projects || 'Projects', href: '#projects', view: 'portfolio' },
        // { name: 'Schedule', href: '#schedule', view: 'schedule' },
        // { name: 'Shop', href: '#shop', view: 'shop' },
    ];

    const toggleLanguage = (lang) => {
        setLanguage(lang);
        setMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo / Name */}
                <a href="#" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                    {activeProfile.name}
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Tone Toggle */}
                    <ToneToggle />

                    {/* Shop/Auth/Admin Section */}
                    <div className="flex items-center gap-4 border-l border-slate-700 pl-6">
                        {user ? (
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => supabase.auth.signOut()}
                                    className="text-slate-400 hover:text-red-400 transition-colors"
                                    title="Sign Out"
                                >
                                    <LogOut size={18} />
                                </button>
                                {user.email === 'megumi.joy@gmail.com' && (
                                    <button
                                        onClick={() => onViewChange('admin')}
                                        className={`p-2 rounded-lg transition-all ${currentView === 'admin' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-cyan-400'}`}
                                        title="Admin Dashboard"
                                    >
                                        <ShieldCheck size={20} />
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                {/* <button
                                    onClick={() => onViewChange('schedule')}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all ${currentView === 'schedule' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                                >
                                    <CalendarDays size={16} />
                                    Schedule
                                </button>
                                <button
                                    onClick={() => onViewChange('shop')}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all ${currentView === 'shop' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                                >
                                    <ShoppingBag size={16} />
                                    Shop
                                </button> */}
                            </div>
                        )}

                        {/* Language Switcher */}
                        <div className="flex items-center gap-2 bg-slate-800/50 p-1 rounded-full border border-slate-700">
                            {['en', 'es', 'ru', 'uk'].map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => toggleLanguage(lang)}
                                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all ${language === lang
                                        ? 'bg-cyan-500 text-white shadow-md'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-700'
                                        }`}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => {
                                        onViewChange(link.view);
                                        setMobileMenuOpen(false);
                                        if (link.view === 'portfolio') window.location.hash = link.href;
                                    }}
                                    className={`text-lg font-medium text-left ${currentView === link.view ? 'text-cyan-400' : 'text-slate-300'}`}
                                >
                                    {link.name}
                                </button>
                            ))}

                            <hr className="border-slate-800 my-2" />

                            <div className="flex flex-wrap gap-2">
                                {['en', 'es', 'ru', 'uk'].map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => toggleLanguage(lang)}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold uppercase flex-1 ${language === lang
                                            ? 'bg-cyan-500 text-white'
                                            : 'bg-slate-800 text-slate-400'
                                            }`}
                                    >
                                        {lang}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-6 flex justify-center border-t border-slate-800 pt-4">
                                <ToneToggle />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
