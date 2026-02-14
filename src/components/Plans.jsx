import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { Map, Loader2, Lightbulb, CheckCircle2 } from 'lucide-react';

const Plans = () => {
    const { activeProfile } = useLanguage();
    const plansData = activeProfile.plans || { title: "Roadmap", description: "Loading...", items: [] }; // Fallback

    return (
        <section id="plans">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h3 className="section-title mb-12 flex items-center gap-3">
                    <Map className="text-cyan-500" />
                    {activeProfile.ui?.plansTitle || plansData.title}
                </h3>

                <p className="text-slate-400 text-lg mb-12 max-w-2xl">
                    {plansData.description}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plansData.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-slate-800/20 border border-slate-700 hover:border-cyan-500/30 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-mono border ${item.status.toLowerCase() === 'in progress' ? 'bg-cyan-900/30 text-cyan-300 border-cyan-800' :
                                    item.status.toLowerCase() === 'planned' ? 'bg-purple-900/30 text-purple-300 border-purple-800' :
                                        'bg-yellow-900/30 text-yellow-300 border-yellow-800'
                                    }`}>
                                    {item.status}
                                </span>
                                <span className="text-slate-500 text-xs font-mono">{item.date}</span>
                            </div>

                            <h4 className="text-xl font-bold text-slate-100 mb-3">{item.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                {item.description}
                            </p>

                            {item.subItems && (
                                <ul className="space-y-2 mb-4">
                                    {item.subItems.map((sub, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500/50" />
                                            {sub}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center text-xs font-bold text-cyan-500 hover:text-cyan-400 uppercase tracking-widest transition-colors"
                                >
                                    {activeProfile.ui.viewDetails || "View Details"}
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Plans;
