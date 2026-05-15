import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * LobbySelector — Hub's 3-door card grid.
 * Props:
 *   cards — array of { eyebrow, title, description, cta, to, highlight? }
 */
const LobbySelector = ({ cards = [] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
            {cards.map((card, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                >
                    <Link
                        to={card.to}
                        className={`group block h-full p-8 md:p-10 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                            card.highlight
                                ? 'bg-[rgb(var(--accent-rgb,6,182,212)/0.05)] dark:bg-[rgb(var(--accent-rgb,6,182,212)/0.08)] border-[rgb(var(--accent-rgb,6,182,212)/0.3)] hover:border-[rgb(var(--accent-rgb,6,182,212)/0.6)] shadow-lg'
                                : 'bg-white/40 dark:bg-slate-800/30 border-slate-200/50 dark:border-slate-700/50 hover:border-[rgb(var(--accent-rgb,6,182,212)/0.4)]'
                        }`}
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[rgb(var(--accent-rgb,6,182,212))] mb-4 block">
                            {card.eyebrow}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                            {card.title}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                            {card.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-bold text-[rgb(var(--accent-rgb,6,182,212))] group-hover:gap-3 transition-all">
                            {card.cta}
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
};

export default LobbySelector;
