import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Gamepad2, Play } from 'lucide-react';

const GameCarousel = ({ games, onSelectGame, activePath }) => {
    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);

    // Calculate drag constraints
    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
        }
    }, [games]);

    return (
        <div className="w-full relative py-8 overflow-hidden select-none touch-pan-y">
            <motion.div
                ref={containerRef}
                className="flex gap-6 px-4 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                whileTap={{ cursor: "grabbing" }}
            >
                {games.map((game, index) => {
                    const isSelected = activePath === game.path;

                    return (
                        <motion.div
                            key={index}
                            className={`
                                min-w-[280px] md:min-w-[320px] 
                                h-[400px] 
                                rounded-xl 
                                overflow-hidden 
                                relative 
                                border 
                                transition-all
                                group
                                ${isSelected
                                    ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] scale-105 z-10'
                                    : 'border-white/10 hover:border-white/30 bg-white/5 opacity-80 hover:opacity-100 hover:scale-102'}
                            `}
                            onClick={() => onSelectGame(game)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Thumbnail */}
                            <div className="h-1/2 overflow-hidden relative">
                                <img
                                    src={game.thumbnail}
                                    alt={game.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>

                                {isSelected && (
                                    <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 font-bold shadow-lg">
                                        <Play size={10} fill="currentColor" /> ACTIVE
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-4 flex flex-col h-1/2 bg-gray-900/90 backdrop-blur-sm">
                                <div className="flex gap-2 mb-2 flex-wrap">
                                    {game.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                    {game.title}
                                </h3>

                                <p className="text-sm text-gray-400 line-clamp-3 mb-4 flex-grow">
                                    {game.description}
                                </p>

                                <button
                                    className={`
                                        w-full py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors
                                        bg-white/10 hover:bg-white/20 text-white border border-white/5
                                    `}
                                >
                                    See Details
                                </button>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Scroll indicators */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none md:block hidden" />
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent pointer-events-none md:block hidden" />
        </div>
    );
};

export default GameCarousel;
