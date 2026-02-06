import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data';
import { ArrowDown, Play, ExternalLink, FileText } from 'lucide-react';
import GameEmbed from './GameEmbed';
import ResumeModal from './Resume/ResumeModal';

const Hero = () => {
    const [showGame, setShowGame] = useState(false);
    const [showResume, setShowResume] = useState(false);
    const featuredGame = PROFILE.games[0];

    return (
        <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between pt-20 px-4 md:px-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 max-w-2xl"
            >
                <span className="text-cyan-400 font-medium tracking-wider text-sm uppercase">
                    Welcome to my portfolio
                </span>

                <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-tight">
                    Hello, I'm <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        {PROFILE.name}
                    </span>.
                </h1>

                <h2 className="text-2xl md:text-3xl text-slate-400 font-light">
                    {PROFILE.title}
                </h2>

                <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                    {PROFILE.about}
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="pt-8 flex flex-wrap gap-4"
                >
                    <a
                        href={PROFILE.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all hover:scale-105 backdrop-blur-sm"
                    >
                        GitHub Profile
                    </a>
                    <button
                        onClick={() => setShowResume(true)}
                        className="px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white transition-all hover:scale-105 flex items-center gap-2"
                    >
                        <FileText size={18} className="text-cyan-400" />
                        Resume
                    </button>
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>

            {/* Game Preview Section */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-10 md:mt-0 w-full md:w-1/3 max-w-sm"
            >
                <div className="relative group rounded-xl overflow-hidden border-2 border-slate-700 hover:border-cyan-500 transition-colors bg-slate-800/50 backdrop-blur-sm">
                    {/* Thumbnail */}
                    <div className="aspect-video relative overflow-hidden">
                        <img
                            src={featuredGame.thumbnail}
                            alt={featuredGame.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <button
                                onClick={() => setShowGame(true)}
                                className="w-16 h-16 rounded-full bg-cyan-500/90 text-white flex items-center justify-center transform scale-90 group-hover:scale-105 transition-all shadow-lg hover:shadow-cyan-500/50"
                            >
                                <Play fill="currentColor" className="ml-1" />
                            </button>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="p-4 space-y-3">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-white font-bold text-lg">{featuredGame.title}</h3>
                                <p className="text-slate-400 text-xs mt-1">{featuredGame.description}</p>
                            </div>
                        </div>

                        <div className="flex gap-2 pt-2">
                            <a
                                href={featuredGame.path}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-sm transition-colors"
                            >
                                <ExternalLink size={14} />
                                Open in New Tab
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Game Modal */}
            {showGame && (
                <GameEmbed
                    gameUrl={featuredGame.path}
                    title={featuredGame.title}
                    onClose={() => setShowGame(false)}
                />
            )}

            {/* Resume Modal */}
            <ResumeModal
                isOpen={showResume}
                onClose={() => setShowResume(false)}
            />
        </section>
    );
};

export default Hero;
