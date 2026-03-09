import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Maximize2, RefreshCw } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { GAMES_DATA } from '../data';

const GameLanding = ({ gameId, onBack }) => {
    const { lang } = useLanguage();
    const game = GAMES_DATA[gameId];
    const [isFullscreen, setIsFullscreen] = useState(false);

    if (!game) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <h2 className="text-2xl font-bold text-white mb-4">Game not found</h2>
                <button onClick={onBack} className="text-cyan-400 hover:underline">Back to Portfolio</button>
            </div>
        );
    }

    const t = game.translations[lang] || game.translations.en;

    return (
        <div className="space-y-12 pb-20">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
            >
                <button
                    onClick={onBack}
                    className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-700"
                >
                    <ArrowLeft size={24} />
                </button>
                <h2 className="text-3xl font-bold text-white">{t.title}</h2>
            </motion.div>

            {/* Game Frame */}
            <div className={`relative ${isFullscreen ? 'fixed inset-0 z-[100] bg-black' : 'aspect-video rounded-3xl overflow-hidden border border-slate-700 bg-black shadow-2xl shadow-purple-900/20'}`}>
                {game.path ? (
                    <iframe
                        src={game.path}
                        title={t.title}
                        className="w-full h-full border-0"
                        allow="autoplay; fullscreen; keyboard"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-500">
                        <p>Experimental physical product. Interactive prototype coming soon.</p>
                    </div>
                )}

                {/* Controls Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 z-[110]">
                    <button
                        onClick={() => setIsFullscreen(!isFullscreen)}
                        className="p-2 rounded-lg bg-black/50 text-white/70 hover:text-white backdrop-blur-md transition-all border border-white/10"
                    >
                        <Maximize2 size={20} />
                    </button>
                </div>
            </div>

            {/* Description Section */}
            <div className="grid lg:grid-cols-3 gap-12 mt-12">
                <div className="lg:col-span-2 space-y-8">
                    <section>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            Project Overview
                        </h3>
                        <p className="text-slate-300 leading-relaxed text-lg">
                            {t.description}
                        </p>
                        <div className="mt-4 p-4 bg-purple-900/10 border border-purple-500/20 rounded-xl">
                            <p className="text-slate-400 italic">
                                "{t.gdd?.overview}"
                            </p>
                        </div>
                    </section>

                    <section className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-bold text-purple-400 mb-4">Core Mechanics</h4>
                            <ul className="space-y-2">
                                {t.gdd?.mechanics?.map((m, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                        {m}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-cyan-400 mb-4">Key Features</h4>
                            <ul className="space-y-2">
                                {t.gdd?.features?.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>

                <div className="space-y-6">
                    <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50">
                        <h4 className="font-bold text-white mb-4">Implementation Quality</h4>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-slate-400">Architectural Progress</span>
                                    <span className="text-cyan-400">{game.progress || 0}%</span>
                                </div>
                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${game.progress || 0}%` }}
                                        className="h-full bg-gradient-to-r from-cyan-600 to-purple-600"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 pt-4">
                                {game.tags?.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={onBack}
                        className="w-full py-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold transition-all border border-slate-600"
                    >
                        Return to Portfolio
                    </button>

                    <p className="text-center text-xs text-slate-500">
                        Part of MegumiJoy MVP Ecosystem
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GameLanding;
