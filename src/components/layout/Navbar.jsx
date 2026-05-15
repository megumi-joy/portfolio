import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { Menu, X, Globe, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import ThemeToggle from '../ThemeToggle';
import { waLink } from '../../data/whatsapp';

const LANG_FLAGS = { en: 'EN', es: 'ES', ca: 'CA', ru: 'RU', uk: 'UK' };

const NAV_LINKS = [
    { path: '/empresas', label: { en: 'Business', es: 'Empresas', ca: 'Empreses', ru: 'Бизнес', uk: 'Бізнес' } },
    { path: '/voicey', label: { en: 'Voicey', es: 'Voicey', ca: 'Voicey', ru: 'Voicey', uk: 'Voicey' } },
    { path: '/games', label: { en: 'Games', es: 'Games', ca: 'Games', ru: 'Игры', uk: 'Ігри' } },
    { path: '/sobre', label: { en: 'About', es: 'Sobre', ca: 'Sobre', ru: 'О нас', uk: 'Про нас' } },
];

const Navbar = ({ themeMode, onThemeCycle, weather }) => {
    const { language, setLanguage } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => { setMobileOpen(false); }, [location.pathname]);

    const isActive = (path) => location.pathname === path || location.pathname === `/portfolio${path}`;

    // Determine WA context from current route
    const waContext = location.pathname.includes('empresas') ? 'empresas'
        : location.pathname.includes('voicey') ? 'voicey_access'
        : location.pathname.includes('games') ? 'games_invest'
        : 'hub';

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md py-3 shadow-lg shadow-black/10 dark:shadow-black/30' : 'bg-transparent py-5'
        }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-xl font-black tracking-tight flex-shrink-0"
                >
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                        Megumi Joy
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`outline-none px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                isActive(link.path)
                                    ? 'text-[rgb(var(--accent-rgb,6,182,212))]'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                            }`}
                        >
                            {link.label[language] || link.label.en}
                        </Link>
                    ))}
                </nav>

                {/* Right: Theme + Language + WA */}
                <div className="hidden md:flex items-center gap-3 flex-shrink-0">
                    <ThemeToggle mode={themeMode} onCycle={onThemeCycle} weather={weather} />

                    <Globe size={14} className="text-slate-400 dark:text-slate-500" />
                    <div className="flex items-center bg-slate-200/60 dark:bg-slate-800/60 p-0.5 rounded-full border border-slate-300/60 dark:border-slate-700/60">
                        {Object.keys(LANG_FLAGS).map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setLanguage(lang)}
                                title={lang.toUpperCase()}
                                aria-label={`Switch language to ${lang.toUpperCase()}`}
                                aria-pressed={language === lang}
                                className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase transition-all ${
                                    language === lang
                                        ? 'bg-[rgb(var(--accent-rgb,6,182,212))] text-white shadow-md'
                                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-slate-700/50'
                                }`}
                            >
                                {LANG_FLAGS[lang]}
                            </button>
                        ))}
                    </div>

                    <a
                        href={waLink(waContext)}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-1 p-2 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white transition-all hover:scale-110"
                        aria-label="WhatsApp"
                    >
                        <MessageCircle size={16} fill="currentColor" />
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-slate-700 dark:text-white p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-nav"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div id="mobile-nav" className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                    <div className="px-6 py-6 flex flex-col gap-2">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-lg font-medium py-2 px-3 rounded-lg transition-all ${
                                    isActive(link.path)
                                        ? 'text-[rgb(var(--accent-rgb,6,182,212))] bg-[rgb(var(--accent-rgb,6,182,212)/0.1)]'
                                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                                }`}
                            >
                                {link.label[language] || link.label.en}
                            </Link>
                        ))}
                        <hr className="border-slate-200 dark:border-slate-800 my-3" />
                        <div className="flex items-center gap-2 flex-wrap">
                            <ThemeToggle mode={themeMode} onCycle={onThemeCycle} weather={weather} />
                            {Object.keys(LANG_FLAGS).map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => setLanguage(lang)}
                                    aria-label={`Switch language to ${lang.toUpperCase()}`}
                                    aria-pressed={language === lang}
                                    className={`flex-1 py-2 rounded-lg text-sm font-bold uppercase ${
                                        language === lang
                                            ? 'bg-[rgb(var(--accent-rgb,6,182,212))] text-white'
                                            : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                                    }`}
                                >
                                    {LANG_FLAGS[lang]}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
