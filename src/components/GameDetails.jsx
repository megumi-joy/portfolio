import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, BookOpen, Layers, Zap, PenTool } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const GameDetails = ({ game, onClose, onPlay }) => {
    const { activeProfile } = useLanguage();

    if (!game) return null;

    const isPlayable = game.status === 'playable';
    const gdd = game.gdd || {};

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden relative shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header Image */}
                    <div className="relative h-64 md:h-80 w-full overflow-hidden">
                        <img
                            src={game.thumbnail}
                            alt={game.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors backdrop-blur-md"
                        >
                            <X size={24} />
                        </button>

                        <div className="absolute bottom-6 left-6 md:left-10 right-6">
                            <div className="flex flex-wrap gap-2 mb-3">
                                {game.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                                        {tag}
                                    </span>
                                ))}
                                {game.status !== 'playable' && (
                                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                                        In Development
                                    </span>
                                )}
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 shadow-sm">{game.title}</h2>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-8">

                            <section>
                                <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
                                    <BookOpen size={20} />
                                    Overview
                                </h3>
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    {gdd.overview || game.description}
                                </p>
                            </section>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <section className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50">
                                    <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
                                        <Zap size={18} />
                                        Core Mechanics
                                    </h3>
                                    <ul className="space-y-2">
                                        {gdd.mechanics && gdd.mechanics.map((mech, i) => (
                                            <li key={i} className="text-slate-300 flex items-start gap-2 text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                                                {mech}
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50">
                                    <h3 className="text-lg font-bold text-emerald-400 mb-3 flex items-center gap-2">
                                        <Layers size={18} />
                                        Key Features
                                    </h3>
                                    <ul className="space-y-2">
                                        {gdd.features && gdd.features.map((feat, i) => (
                                            <li key={i} className="text-slate-300 flex items-start gap-2 text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>
                        </div>

                        {/* Sidebar Actions */}
                        <div className="space-y-6">
                            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 sticky top-4">
                                <div className="mb-6">
                                    <h3 className="text-white font-bold mb-2">Project Status</h3>
                                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${isPlayable ? 'bg-green-500 w-full' : 'bg-yellow-500 w-1/3'}`}
                                        />
                                    </div>
                                    <p className="text-right text-xs text-slate-400 mt-1">
                                        {isPlayable ? '100% Complete' : 'Prototyping Phase'}
                                    </p>
                                </div>

                                {isPlayable ? (
                                    <button
                                        onClick={onPlay}
                                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group"
                                    >
                                        <Play fill="currentColor" className="group-hover:scale-110 transition-transform" />
                                        PLAY NOW
                                    </button>
                                ) : (
                                    <button
                                        disabled
                                        className="w-full py-4 bg-slate-700 text-slate-400 font-bold rounded-lg cursor-not-allowed flex items-center justify-center gap-2 border border-slate-600"
                                    >
                                        <PenTool size={18} />
                                        In Development
                                    </button>
                                )}

                                <p className="text-xs text-slate-500 text-center mt-4">
                                    {isPlayable
                                        ? "Runs directly in your browser via WebGL"
                                        : "Follow updates for release announcements"
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default GameDetails;
