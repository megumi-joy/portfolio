import React from 'react';
import { motion } from 'framer-motion';

/**
 * ValuePropGrid — 3-column value proposition grid.
 * Props:
 *   title — section title
 *   items — array of { title, description, cta, onCta }
 */
const ValuePropGrid = ({ title, items = [] }) => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            {title && <h3 className="section-title mb-12">{title}</h3>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="p-8 bg-white/30 dark:bg-slate-800/20 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-[rgb(var(--accent-rgb,6,182,212)/0.3)] transition-all"
                    >
                        <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                            {item.title}
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                            {item.description}
                        </p>
                        {item.cta && (
                            <button
                                onClick={item.onCta}
                                className="text-sm font-bold text-[rgb(var(--accent-rgb,6,182,212))] hover:underline transition-all"
                            >
                                {item.cta}
                            </button>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ValuePropGrid;
