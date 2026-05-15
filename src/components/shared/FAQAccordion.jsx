import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * FAQAccordion — expandable Q&A section.
 * Props:
 *   title — section title
 *   items — array of { q: string, a: string }
 */
const FAQAccordion = ({ title, items = [] }) => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="max-w-3xl mx-auto px-6 py-20">
            {title && <h3 className="section-title mb-12">{title}</h3>}
            <div className="space-y-3">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden bg-white/30 dark:bg-slate-800/20"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex items-center justify-between px-6 py-5 text-left"
                            aria-expanded={openIndex === i}
                            aria-controls={`faq-answer-${i}`}
                            id={`faq-question-${i}`}
                        >
                            <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 pr-4">
                                {item.q}
                            </span>
                            <ChevronDown
                                size={18}
                                aria-hidden="true"
                                className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                            />
                        </button>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    id={`faq-answer-${i}`}
                                    role="region"
                                    aria-labelledby={`faq-question-${i}`}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                        {item.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQAccordion;
