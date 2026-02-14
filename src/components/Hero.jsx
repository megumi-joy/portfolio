import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { ArrowDown, Play, ExternalLink, FileText, Gamepad2 } from 'lucide-react';
import GameEmbed from './GameEmbed';
import ResumeModal from './Resume/ResumeModal';
import GameCarousel from './GameCarousel';

import GameDetails from './GameDetails';

const Hero = ({ onOpenResume }) => {
    const { activeProfile } = useLanguage();
    const [activeGame, setActiveGame] = useState(null);
    const [showGame, setShowGame] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    // onOpenResume passed from App, or we can control it locally if we want, but App passes it.
    // Actually in step 464 App passes onOpenResume.

    return (
        <section className="min-h-[90vh] flex flex-col justify-center pt-20 px-4 md:px-0 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-7xl mx-auto py-10">
                {/* Intro Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 flex-1 md:max-w-[55%]"
                >
                    <span className="inline-block text-cyan-400 font-bold tracking-widest text-sm uppercase px-3 py-1 bg-cyan-400/10 rounded-full border border-cyan-400/20 mb-4">
                        {activeProfile.ui.welcome || "Welcome to my portfolio"}
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.1]">
                        {activeProfile.ui.hello || "Hello, I'm"} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            {activeProfile.name}
                        </span>.
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-slate-300 font-medium">
                        {activeProfile.title}
                    </h2>

                    <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                        {activeProfile.about}
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="pt-6 flex flex-wrap gap-4"
                    >
                        <a
                            href={activeProfile.socials.github}
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all hover:scale-105 backdrop-blur-md flex items-center gap-2 group"
                        >
                            <ExternalLink size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                            GitHub
                        </a>
                        <button
                            onClick={onOpenResume}
                            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-black/20"
                        >
                            <FileText size={18} className="text-cyan-400" />
                            {activeProfile.ui.resume || "Resume"}
                        </button>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105"
                        >
                            {activeProfile.ui.contact || "Contact Me"}
                        </a>
                    </motion.div>
                </motion.div>

                {/* Game Carousel Side Area */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="w-full md:w-[40%] max-w-md"
                >
                    <div className="flex items-center gap-2 mb-4 px-2">
                        <Gamepad2 className="text-cyan-400" size={20} />
                        <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                            {activeProfile.ui.prototypesTitle || "Prototypes"}
                        </h3>
                    </div>

                    <GameCarousel
                        games={activeProfile.games}
                        onSelectGame={(game) => {
                            setActiveGame(game);
                            setShowDetails(true);
                        }}
                        activePath={activeGame?.path}
                    />
                </motion.div>
            </div>

            {/* Game Details Modal */}
            {showDetails && activeGame && (
                <GameDetails
                    game={activeGame}
                    onClose={() => {
                        setShowDetails(false);
                        setActiveGame(null);
                    }}
                    onPlay={() => {
                        setShowDetails(false);
                        setShowGame(true);
                    }}
                />
            )}

            {/* Game Play Modal */}
            {showGame && activeGame && (
                <GameEmbed
                    gameUrl={activeGame.path}
                    title={activeGame.title}
                    onClose={() => {
                        setShowGame(false);
                        setShowDetails(true); // Re-open details when closing game? Or just close all?
                        // Let's just close the game and maybe keep activeGame but hide details.
                        // Actually, re-opening details seems nice for navigation.
                    }}
                />
            )}

            {/* Resume Modal moved to App.jsx */}
        </section >
    );
};

export default Hero;
