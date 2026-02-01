import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h3 className="section-title mb-12">Selected Works</h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROFILE.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col justify-between p-8 bg-slate-800/30 hover:bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all hover:-translate-y-1"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-xl bg-slate-900/50 text-cyan-400">
                                        <Folder size={24} />
                                    </div>
                                    <div className="flex gap-3 text-slate-400">
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {/* Add live link if available */}
                                    </div>
                                </div>

                                <h4 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h4>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono text-cyan-500/80">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
