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
        <section className="min-h-[80vh] flex flex-col pt-20 px-4 md:px-0">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 max-w-2xl"
                >
                    <span className="text-cyan-400 font-medium tracking-wider text-sm uppercase">
                        {activeProfile.ui.welcome || "Welcome to my portfolio"}
                    </span>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-tight">
                        {activeProfile.ui.hello || "Hello, I'm"} <br />
                        < span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            {activeProfile.name}
                        </span>.
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-slate-400 font-light">
                        {activeProfile.title}
                    </h2>

                    <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                        {activeProfile.about}
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="pt-8 flex flex-wrap gap-4"
                    >
                        <a
                            href={activeProfile.socials.github}
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all hover:scale-105 backdrop-blur-sm"
                        >
                            GitHub Profile
                        </a>
                        <button
                            onClick={onOpenResume}
                            className="px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white transition-all hover:scale-105 flex items-center gap-2"
                        >
                            <FileText size={18} className="text-cyan-400" />
                            {activeProfile.ui.resume || "Resume"}
                        </button>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105"
                        >
                            {activeProfile.ui.contact || "Contact Me"}
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Game Carousel Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="w-full"
            >
                <div className="flex justify-between items-end mb-6 px-4">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Gamepad2 className="text-cyan-400" />
                        {activeProfile.ui.prototypesTitle || "Godot Engine Prototypes"}
                    </h3>
                    <div className="text-slate-400 text-sm hidden md:block">
                        Swipe or drag to explore
                    </div>
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
