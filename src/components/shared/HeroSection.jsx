import React from 'react';
import { motion } from 'framer-motion';

/**
 * HeroSection — parametric hero with variant-specific visuals.
 * Props:
 *   badge     — eyebrow badge text (optional)
 *   headline  — H1 text
 *   subhead   — paragraph under headline
 *   children  — CTA buttons / extra content
 *   align     — 'center' | 'left' (default: 'left')
 *   visual    — JSX for right-side visual (optional)
 */
const HeroSection = ({ badge, headline, subhead, children, align = 'left', visual }) => {
    const isCenter = align === 'center';

    return (
        <section className="min-h-[85vh] flex flex-col justify-center px-4 md:px-0 relative overflow-hidden">
            <div className={`flex ${isCenter ? 'flex-col items-center text-center' : 'flex-col md:flex-row items-center justify-between'} gap-12 w-full max-w-7xl mx-auto py-10`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`space-y-6 ${isCenter ? 'max-w-3xl' : 'flex-1 md:max-w-[55%]'}`}
                >
                    {badge && (
                        <span className="inline-block text-[rgb(var(--accent-rgb,6,182,212))] font-bold tracking-widest text-sm uppercase px-3 py-1 bg-[rgb(var(--accent-rgb,6,182,212)/0.1)] rounded-full border border-[rgb(var(--accent-rgb,6,182,212)/0.2)] mb-4">
                            {badge}
                        </span>
                    )}

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-tight pb-2 pt-1">
                        {headline}
                    </h1>

                    <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
                        {subhead}
                    </p>

                    {children && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="pt-4 flex flex-wrap gap-4"
                        >
                            {children}
                        </motion.div>
                    )}
                </motion.div>

                {visual && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="w-full md:w-[40%] max-w-lg"
                    >
                        {visual}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default HeroSection;
