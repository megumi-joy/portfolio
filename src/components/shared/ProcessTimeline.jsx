import React from 'react';
import { motion } from 'framer-motion';

/**
 * ProcessTimeline — vertical 4-step process visualization.
 * Props:
 *   title — section title
 *   steps — array of { title, description }
 *   cta   — bottom CTA text
 *   onCta — CTA click handler
 */
const ProcessTimeline = ({ title, steps = [], cta, onCta }) => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            {title && <h3 className="section-title mb-16">{title}</h3>}
            <div className="relative border-l-2 border-[rgb(var(--accent-rgb,6,182,212)/0.3)] ml-4 md:ml-12 space-y-12">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.5 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Step number */}
                        <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[rgb(var(--accent-rgb,6,182,212))] flex items-center justify-center text-white text-sm font-bold ring-4 ring-slate-50 dark:ring-slate-900">
                            {i + 1}
                        </div>
                        <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                            {step.title}
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-lg">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>
            {cta && (
                <div className="mt-12 ml-4 md:ml-12">
                    <button
                        onClick={onCta}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[rgb(var(--accent-rgb,6,182,212))] hover:opacity-90 text-white font-bold transition-all hover:scale-105 shadow-lg"
                    >
                        {cta}
                    </button>
                </div>
            )}
        </section>
    );
};

export default ProcessTimeline;
