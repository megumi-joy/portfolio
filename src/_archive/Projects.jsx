import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { Github, ExternalLink, Folder, Play } from 'lucide-react';
import GameEmbed from './GameEmbed';
import GameDetails from './GameDetails';
import { Info } from 'lucide-react';

const Projects = () => {
    const { activeProfile } = useLanguage();
    const [activeGame, setActiveGame] = useState(null);
    const [selectedDetailGame, setSelectedDetailGame] = useState(null);

    return (
        <section id="projects">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h3 className="section-title mb-12">Selected Works</h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {activeProfile.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group flex flex-col justify-between p-8 bg-white/30 dark:bg-slate-800/30 hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-cyan-500/30 transition-all hover:-translate-y-1"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 text-cyan-500 dark:text-cyan-400">
                                        <Folder size={24} />
                                    </div>
                                    <div className="flex gap-3 text-slate-400">
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {/* Add live link if available */}
                                    </div>
                                </div>

                                <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h4>

                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags?.map(tag => (
                                    <span key={tag} className="text-xs font-mono text-cyan-500/80">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Game Prototypes Section */}
                {activeProfile.games && activeProfile.games.length > 0 && (
                    <div className="mb-12">
                        <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center gap-3">
                            <Play className="text-purple-500" />
                            {activeProfile.ui.prototypesTitle || "Interactive Prototypes"}
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                            {activeProfile.games.map((game, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative group rounded-2xl overflow-hidden aspect-video bg-slate-800 border border-slate-700 hover:border-purple-500/50 transition-all"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />

                                    {/* Thumbnail Image */}
                                    <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                                        {game.thumbnail ? (
                                            <img
                                                src={game.thumbnail}
                                                alt={game.title}
                                                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                                            />
                                        ) : (
                                            <Play className="text-slate-700 w-20 h-20 group-hover:text-purple-500 transition-colors duration-500" />
                                        )}
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                        <h5 className="text-xl font-bold text-white mb-2">{game.title}</h5>
                                        <p className="text-slate-300 text-sm mb-4 line-clamp-2">{game.description}</p>
                                        <div className="flex gap-2">
                                            {game.tags.map(tag => (
                                                <span key={tag} className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 text-xs font-mono">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Interaction Overlay */}
                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity z-30 flex flex-col items-center justify-center gap-4">
                                        <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                            <a
                                                href={game.path}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all shadow-lg shadow-purple-900/40"
                                            >
                                                <Play size={18} fill="currentColor" />
                                                PLAY NOW
                                            </a>
                                            <button
                                                onClick={() => setSelectedDetailGame(game)}
                                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-700 hover:bg-slate-600 text-white font-bold transition-all border border-slate-600"
                                            >
                                                <Info size={18} />
                                                DETAILS
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {activeGame && (
                    <GameEmbed
                        gameUrl={activeGame.path}
                        title={activeGame.title}
                        onClose={() => setActiveGame(null)}
                    />
                )}

                {selectedDetailGame && (
                    <GameDetails
                        game={selectedDetailGame}
                        onClose={() => setSelectedDetailGame(null)}
                        onPlay={() => {
                            const game = selectedDetailGame;
                            setSelectedDetailGame(null);
                            if (game.path?.startsWith('http')) {
                                window.open(game.path, '_blank');
                            } else {
                                setActiveGame(game);
                            }
                        }}
                    />
                )}
            </motion.div>
        </section>
    );
};

export default Projects;
