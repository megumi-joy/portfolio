import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import ToneToggle from './ToneToggle';
import { Menu, X, ShoppingBag, LogOut, ShieldCheck, CalendarDays, Gamepad2, Play, ChevronDown, ExternalLink } from 'lucide-react';

const Header = ({ currentView, onViewChange, onSelectGame, user }) => {
    const { language, setLanguage, activeProfile, tone, specialty, setSpecialty } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [gamesMenuOpen, setGamesMenuOpen] = useState(false);

    // Scroll effect for header background
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: activeProfile.ui?.stats?.roles || 'Experience', href: '#experience', view: 'portfolio' },
        { name: 'Projects', href: '#projects', view: 'portfolio' },
        { name: 'Media', href: '#gallery', view: 'portfolio' },
        { name: 'Insights', href: '#blog', view: 'blog' },
        { name: 'Contact', href: '#contact', view: 'portfolio' },
    ];

    const toggleLanguage = (lang) => {
        setLanguage(lang);
        setMobileMenuOpen(false);
    };

    const isMagical = tone === 'magical';
    const topGames = activeProfile.games?.filter(g => g.status === 'playable' || g.status === 'live').slice(0, 2) || [];

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
                    <nav className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => {
                                    onViewChange(link.view);
                                    if (link.view === 'portfolio') window.location.hash = link.href;
                                    setGamesMenuOpen(false);
                                }}
                                className={`text-sm font-medium transition-colors ${currentView === link.view ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}
                            >
                                {link.name}
                            </button>
                        ))}

                        <div className="h-4 w-px bg-slate-700 mx-2" />

                        {/* Direct Game Links - plural as requested */}
                        {topGames.map(game => (
                            <a
                                key={game.id}
                                href={game.path}
                                target="_blank"
                                rel="noreferrer"
                                className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all text-[11px] font-bold uppercase tracking-wider group/btn"
                            >
                                <Play size={10} fill="currentColor" />
                                {game.title.split(':')[0]}
                                <ExternalLink size={10} className="opacity-0 group-hover/btn:opacity-100 transition-opacity ml-1" />
                            </a>
                        ))}

                        {/* Arcade / Games Dropdown */}
                        <div className="relative group" onMouseEnter={() => setGamesMenuOpen(true)} onMouseLeave={() => setGamesMenuOpen(false)}>
                            <button
                                className={`flex items-center gap-2 px-4 py-1.5 rounded-full border transition-all text-xs font-bold uppercase tracking-wider
                                    ${gamesMenuOpen || currentView === 'game'
                                        ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50'
                                        : 'bg-slate-800/40 text-slate-400 border-slate-700/50 hover:bg-slate-700/50 hover:text-slate-200'}`}
                            >
                                <Gamepad2 size={14} />
                                Games Studio
                                <ChevronDown size={14} className={`transition-transform duration-300 ${gamesMenuOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {gamesMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute top-full right-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-2 overflow-hidden z-[60]"
                                    >
                                        <div className="text-[10px] font-bold text-slate-500 uppercase px-3 py-2 border-b border-slate-800 mb-1">
                                            Playable Prototypes
                                        </div>
                                        {activeProfile.games?.filter(g => g.status === 'playable' || g.status === 'live').map((game) => (
                                            <a
                                                key={game.id}
                                                href={game.path}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 group/game transition-all text-left"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-slate-800 overflow-hidden flex-shrink-0 border border-white/5">
                                                    <img src={game.thumbnail} alt="" className="w-full h-full object-cover group-hover/game:scale-110 transition-transform" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-sm font-bold text-slate-200 truncate group-hover/game:text-cyan-400 transition-colors">
                                                        {game.title}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-[9px] uppercase font-bold text-slate-500">{game.tags[0]}</span>
                                                        <span className="w-1 h-1 rounded-full bg-slate-700" />
                                                        <span className="text-[9px] font-bold text-green-500 italic flex items-center gap-0.5">
                                                            <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                                                            Ready
                                                        </span>
                                                    </div>
                                                </div>
                                                <Play size={12} className="text-slate-600 group-hover/game:text-cyan-400 group-hover/game:translate-x-1 transition-all" />
                                            </a>
                                        ))}
                                        <a
                                            href="#projects"
                                            onClick={() => setGamesMenuOpen(false)}
                                            className="block mt-1 p-2 text-center text-[10px] font-bold text-slate-500 hover:text-slate-300 transition-colors border-t border-slate-800 pt-3"
                                        >
                                            View Architectural Cases
                                        </a>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </nav>

                    {/* Profile Specialty Selector - Only show if not in magical tone */}
                    {tone !== 'magical' && (
                        <div className="flex items-center gap-1 bg-slate-800/40 p-1 rounded-lg border border-slate-700/50">
                            {['general', 'gamedev', 'frontend', 'python'].map((spec) => (
                                <button
                                    key={spec}
                                    onClick={() => setSpecialty(spec)}
                                    className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase transition-all ${specialty === spec
                                        ? 'bg-purple-500/20 text-purple-300 shadow-sm border border-purple-500/30'
                                        : 'text-slate-500 hover:text-slate-300 hover:bg-slate-700/30'
                                        }`}
                                >
                                    {activeProfile.ui?.profiles?.[spec] || spec}
                                </button>
                            ))}
                        </div>
                    )}

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
                            </div>
                        )}

                        {/* Language Switcher */}
                        <div className="flex items-center gap-2 bg-slate-800/50 p-1 rounded-full border border-slate-700">
                            {['en', 'es', 'ca', 'ru', 'uk'].map((lang) => (
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
                                {['en', 'es', 'ca', 'ru', 'uk'].map((lang) => (
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

                            <div className="flex flex-col gap-3 mt-4 border-t border-slate-800/50 pt-4">
                                <button
                                    onClick={() => {
                                        window.location.hash = '#games';
                                        setMobileMenuOpen(false);
                                    }}
                                    className={`text-lg font-medium text-left flex items-center justify-between transition-colors ${currentView === 'games' ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}
                                >
                                    {isMagical ? 'Arcade' : 'Games Studio'}
                                    <Gamepad2 size={20} className="text-slate-500" />
                                </button>
                            </div>

                            {tone !== 'magical' && (
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] font-bold uppercase text-slate-500 px-1">Specialization</span>
                                    <div className="grid grid-cols-2 gap-2">
                                        {['general', 'gamedev', 'frontend', 'python'].map((spec) => (
                                            <button
                                                key={spec}
                                                onClick={() => {
                                                    setSpecialty(spec);
                                                    setMobileMenuOpen(false);
                                                }}
                                                className={`px-3 py-2 rounded-lg text-xs font-bold uppercase transition-all ${specialty === spec
                                                    ? 'bg-purple-600 text-white'
                                                    : 'bg-slate-800 text-slate-400'
                                                    }`}
                                            >
                                                {activeProfile.ui?.profiles?.[spec] || spec}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

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
