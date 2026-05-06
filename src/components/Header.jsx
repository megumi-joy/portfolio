import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ currentView, onViewChange, user }) => {
    const { language, setLanguage, activeProfile } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            // Scroll spy
            const sections = ['experience', 'skills', 'projects', 'blog', 'contact'];
            let current = '';
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) current = id;
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Journey', hash: '#experience', sectionId: 'experience' },
        { name: 'Projects', hash: '#projects', sectionId: 'projects' },
        { name: 'Arsenal', hash: '#skills', sectionId: 'skills' },
        { name: 'Insights', hash: '#blog', sectionId: 'blog' },
        { name: 'Contact', hash: '#contact', sectionId: 'contact' },
    ];

    const handleNavClick = (link) => {
        if (currentView !== 'portfolio') {
            onViewChange('portfolio');
            setTimeout(() => {
                const el = document.querySelector(link.hash);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const el = document.querySelector(link.hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    const toggleLanguage = (lang) => {
        setLanguage(lang);
        setMobileMenuOpen(false);
    };

    const LANG_FLAGS = { en: '🇬🇧', es: '🇪🇸', ru: '🇷🇺', uk: '🇺🇦' };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-slate-900/90 backdrop-blur-md py-3 shadow-lg shadow-black/30' : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">

                {/* Logo */}
                <button
                    onClick={() => { onViewChange('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="text-xl font-black tracking-tight flex-shrink-0"
                >
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                        {activeProfile?.name || 'Anton'}
                    </span>
                </button>

                {/* Desktop Nav — centered */}
                <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
                    {navLinks.map((link) => (
                        <button
                            key={link.hash}
                            onClick={() => handleNavClick(link)}
                            className={`outline-none px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                activeSection === link.sectionId
                                    ? 'text-cyan-400'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            {link.name}
                        </button>
                    ))}
                </nav>

                {/* Right: Language Switcher only */}
                <div className="hidden md:flex items-center gap-2 flex-shrink-0">
                    <Globe size={14} className="text-slate-500" />
                    <div className="flex items-center bg-slate-800/60 p-0.5 rounded-full border border-slate-700/60">
                        {['en', 'es', 'ru', 'uk'].map((lang) => (
                            <button
                                key={lang}
                                onClick={() => toggleLanguage(lang)}
                                title={lang.toUpperCase()}
                                className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase transition-all ${
                                    language === lang
                                        ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                                }`}
                            >
                                {LANG_FLAGS[lang]}
                            </button>
                        ))}
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
                        className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-slate-800 overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link)}
                                    className="text-lg font-medium text-left py-2 px-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                                >
                                    {link.name}
                                </button>
                            ))}

                            <hr className="border-slate-800 my-3" />

                            <div className="flex items-center gap-2">
                                <Globe size={14} className="text-slate-500" />
                                <span className="text-xs text-slate-500 uppercase tracking-wider">Language</span>
                            </div>
                            <div className="flex gap-2">
                                {['en', 'es', 'ru', 'uk'].map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => toggleLanguage(lang)}
                                        className={`flex-1 py-2 rounded-lg text-sm font-bold uppercase ${
                                            language === lang
                                                ? 'bg-cyan-500 text-white'
                                                : 'bg-slate-800 text-slate-400'
                                        }`}
                                    >
                                        {LANG_FLAGS[lang]}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
