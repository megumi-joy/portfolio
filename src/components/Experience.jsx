import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data';
import { Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h3 className="section-title mb-16">Journey</h3>

                <div className="relative border-l border-slate-800 ml-4 md:ml-12 space-y-12">
                    {PROFILE.experience.map((role, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500 ring-4 ring-slate-900" />

                            <div className="flex flex-col md:flex-row gap-4 md:items-baseline justify-between mb-2">
                                <h4 className="text-2xl font-bold text-slate-100">{role.role}</h4>
                                <div className="flex items-center gap-2 text-sm text-cyan-400 font-mono">
                                    <Calendar size={14} />
                                    {role.period}
                                </div>
                            </div>

                            <div className="text-lg text-slate-400 mb-4 font-medium">{role.company}</div>

                            <p className="text-slate-400 text-sm mb-4 italic">
                                {role.description}
                            </p>

                            <ul className="mb-6 space-y-2">
                                {role.achievements && role.achievements.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm leading-relaxed">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {role.technologies.map(tech => (
                                    <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                                        {tech}
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

export default Experience;
