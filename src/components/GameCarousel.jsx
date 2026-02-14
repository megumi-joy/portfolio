import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, ChevronRight, ChevronLeft } from 'lucide-react';

const GameCarousel = ({ games, onSelectGame, activePath }) => {
    const containerRef = useRef(null);
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % games.length);
    const prev = () => setIndex((prev) => (prev - 1 + games.length) % games.length);

    return (
        <div className="w-full relative py-4 group">
            {/* Main Carousel Area */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-900">
                <motion.div
                    className="flex h-full w-full"
                    animate={{ x: `-${index * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {games.map((game, i) => (
                        <div key={i} className="min-w-full h-full relative p-4 flex flex-col">
                            {/* Thumbnail */}
                            <div className="h-1/2 rounded-xl overflow-hidden relative shadow-inner">
                                <img
                                    src={game.thumbnail}
                                    alt={game.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

                                {game.status === 'playable' && (
                                    <div className="absolute top-3 right-3 px-2 py-1 bg-green-500 text-white text-[10px] font-black rounded-lg shadow-lg flex items-center gap-1 animate-pulse">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white" /> PLAYABLE
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div className="flex-1 mt-4 flex flex-col">
                                <div className="flex gap-2 mb-2 flex-wrap">
                                    {game.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="text-[9px] uppercase font-bold tracking-tighter px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-black text-white leading-tight mb-2 truncate">
                                    {game.title}
                                </h3>

                                <p className="text-xs text-slate-400 line-clamp-2 mb-4 grow">
                                    {game.description}
                                </p>

                                {/* Buttons - Highly Distinct */}
                                <div className="mt-auto">
                                    {game.status === 'playable' ? (
                                        <button
                                            onClick={() => onSelectGame(game)}
                                            className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-95"
                                        >
                                            <Play size={16} fill="white" />
                                            PLAY NOW
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => onSelectGame(game)}
                                            className="w-full py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
                                        >
                                            <BookOpen size={16} className="text-purple-400" />
                                            SEE DETAILS
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Navigation Arrows - Visible on hover */}
                <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-cyan-500/50"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-cyan-500/50"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-1.5 mt-3">
                {games.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === i ? 'bg-cyan-400 w-4' : 'bg-slate-700 hover:bg-slate-600'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default GameCarousel;
