import React from 'react';
import { motion } from 'framer-motion';

/**
 * CaseStudyCard — Proof-point card with metrics emphasis.
 * Props:
 *   eyebrow  — small top label
 *   title    — headline
 *   bullets  — array of strings
 *   tags     — tech stack string ("React · Python · Supabase")
 */
const CaseStudyCard = ({ eyebrow, title, bullets = [], tags }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group p-8 bg-white/40 dark:bg-slate-800/30 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-[rgb(var(--accent-rgb,6,182,212)/0.3)] transition-all hover:-translate-y-1"
        >
            {eyebrow && (
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[rgb(var(--accent-rgb,6,182,212))] mb-3 block">
                    {eyebrow}
                </span>
            )}
            <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-5 leading-tight">
                {title}
            </h4>
            <ul className="space-y-3 mb-6">
                {bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent-rgb,6,182,212))] flex-shrink-0" />
                        {bullet}
                    </li>
                ))}
            </ul>
            {tags && (
                <div className="flex flex-wrap gap-2">
                    {tags.split(' · ').map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-200/60 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 border border-slate-300/50 dark:border-slate-700/50">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default CaseStudyCard;
