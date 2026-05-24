import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Maximize2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';
import { GAMES_DATA } from '../data';

/**
 * Game player page — embeds a game in an iframe with fullscreen support.
 * Route: /games/:gameId
 */
const GamePlayer = () => {
    const { gameId } = useParams();
    const navigate = useNavigate();
    const { language } = useLanguage();
    const [isFullscreen, setIsFullscreen] = useState(false);

    const game = GAMES_DATA[gameId];

    if (!game) {
        return (
            <div className="flex flex-col items-center justify-center py-20 min-h-[60vh]">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Game not found</h2>
                <button onClick={() => navigate('/games')} className="text-[rgb(var(--accent-rgb))] hover:underline">
                    ← Back to Games
                </button>
            </div>
        );
    }

    const t = game.translations[language] || game.translations.en;

    return (
        <>
            <Helmet>
                <title>{t.title} · Megumi Joy</title>
                <meta name="description" content={t.description} />
            </Helmet>

            <div className="max-w-7xl mx-auto px-6 pb-20 space-y-8">
                {/* Back + Title */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4"
                >
                    <button
                        onClick={() => navigate('/games')}
                        className="p-2 rounded-full bg-slate-200/60 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-300/50 dark:border-slate-700"
                    >
                        <ArrowLeft size={22} />
                    </button>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">{t.title}</h1>
                    <div className="flex gap-2 ml-auto">
                        {game.tags?.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-slate-200/60 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium border border-slate-300/50 dark:border-slate-700/50">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Game Frame */}
                <div className={`relative ${
                    isFullscreen
                        ? 'fixed inset-0 z-[100] bg-black'
                        : 'aspect-video rounded-2xl overflow-hidden border border-slate-300/50 dark:border-slate-700 bg-black shadow-2xl'
                }`}>
                    {game.path ? (
                        <iframe
                            src={game.path}
                            title={t.title}
                            className="w-full h-full border-0"
                            allow="autoplay; fullscreen; keyboard"
                        />
                    ) : game.thumbnail && game.thumbnail.endsWith('.mp4') ? (
                        <video
                            src={game.thumbnail}
                            className="w-full h-full object-cover"
                            autoPlay controls loop
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-500 bg-slate-100 dark:bg-slate-900">
                            <p>Interactive prototype coming soon.</p>
                        </div>
                    )}

                    {/* Controls */}
                    <div className="absolute top-4 right-4 flex gap-2 z-[110]">
                        <button
                            onClick={() => setIsFullscreen(!isFullscreen)}
                            className="p-2 rounded-lg bg-black/60 text-white/70 hover:text-white backdrop-blur-md border border-white/10 transition-all"
                        >
                            <Maximize2 size={18} />
                        </button>
                        {game.path && (
                            <a
                                href={game.path}
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-lg bg-black/60 text-white/70 hover:text-white backdrop-blur-md border border-white/10 transition-all flex items-center gap-1.5 text-xs font-bold"
                            >
                                <ExternalLink size={16} />
                                <span className="hidden sm:inline">FULL PAGE</span>
                            </a>
                        )}
                    </div>
                </div>

                {/* Description */}
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">{t.description}</p>
                        {t.gdd?.overview && (
                            <div className="p-4 bg-[rgb(var(--accent-rgb)/0.05)] border border-[rgb(var(--accent-rgb)/0.2)] rounded-xl">
                                <p className="text-slate-500 dark:text-slate-400 italic">"{t.gdd.overview}"</p>
                            </div>
                        )}
                        <div className="grid md:grid-cols-2 gap-6">
                            {t.gdd?.mechanics && (
                                <div>
                                    <h4 className="text-sm font-bold text-[rgb(var(--accent-rgb))] mb-3 uppercase tracking-widest">Mechanics</h4>
                                    <ul className="space-y-2">
                                        {t.gdd.mechanics.map((m, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent-rgb))]" />
                                                {m}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {t.gdd?.features && (
                                <div>
                                    <h4 className="text-sm font-bold text-purple-400 mb-3 uppercase tracking-widest">Features</h4>
                                    <ul className="space-y-2">
                                        {t.gdd.features.map((f, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="p-6 bg-white/30 dark:bg-slate-800/30 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
                            <h4 className="font-bold text-slate-800 dark:text-white mb-4">Progress</h4>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-slate-500">Architecture</span>
                                <span className="text-[rgb(var(--accent-rgb))] font-bold">{game.progress || 0}%</span>
                            </div>
                            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${game.progress || 0}%` }}
                                    transition={{ duration: 1, ease: 'easeOut' }}
                                    className="h-full bg-gradient-to-r from-[rgb(var(--accent-rgb))] to-purple-500 rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GamePlayer;
