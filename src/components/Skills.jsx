import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data';

const Skills = () => {
    return (
        <section id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="section-title mb-12">Technical Arsenal</h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {PROFILE.skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all hover:bg-slate-800/80"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex flex-col items-center gap-4 text-center">
                                    <div className="p-3 rounded-xl bg-slate-900 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-transform">
                                        <Icon size={32} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-200">{skill.name}</h4>
                                        <span className="text-xs text-slate-500 uppercase tracking-wider">{skill.level}</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
