import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const Skills = () => {
    const { activeProfile, specialty, setSpecialty } = useLanguage();

    const specialtyOptions = [
        { key: 'general', label: 'General' },
        { key: 'gamedev', label: 'Game Dev' },
        { key: 'frontend', label: 'Frontend' },
        { key: 'python', label: 'Python / Backend' },
    ];

    return (
        <section id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                    <h3 className="section-title mb-0">
                        {activeProfile.ui.skillsTitle || "Technical Arsenal"}
                    </h3>

                    {/* Specialty Filter */}
                    <div className="flex items-center gap-1.5 bg-slate-800/40 p-1 rounded-xl border border-slate-700/50 self-start md:self-auto flex-wrap">
                        {specialtyOptions.map((opt) => (
                            <button
                                key={opt.key}
                                onClick={() => setSpecialty(opt.key)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide transition-all ${
                                    specialty === opt.key
                                        ? 'bg-cyan-500/20 text-cyan-300 shadow-sm border border-cyan-500/40'
                                        : 'text-slate-500 hover:text-slate-300 hover:bg-slate-700/40'
                                }`}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {activeProfile.skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="group relative p-5 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all hover:bg-slate-800/80 hover:-translate-y-0.5"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex flex-col items-center gap-3 text-center">
                                    <div className="p-2.5 rounded-xl bg-slate-900 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-transform">
                                        <Icon size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-200 text-sm">{skill.name}</h4>
                                        {skill.level && <span className="text-[10px] text-slate-500 uppercase tracking-wider">{skill.level}</span>}
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
