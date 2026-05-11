import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../components/LanguageContext';
import { getLobbyT } from '../data/lobby-translations';
import { SEO } from '../data/seo';
import WhatsAppButton from '../components/layout/WhatsAppButton';
import { motion } from 'framer-motion';
import { Code, Cpu, Gamepad2, Globe, Brain, Layers } from 'lucide-react';

const TRAJECTORY = [
    { icon: Cpu, label: 'Hardware & Embedded', period: '2013-2016' },
    { icon: Gamepad2, label: 'Simulation & GameDev', period: '2016-2019' },
    { icon: Globe, label: 'Full-Stack Web', period: '2019-2022' },
    { icon: Brain, label: 'AI & Automation', period: '2022-present' },
];

const Sobre = () => {
    const { language } = useLanguage();
    const t = (key) => getLobbyT(language, key);
    const seo = SEO.sobre[language] || SEO.sobre.en;

    return (
        <>
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
            </Helmet>

            <section className="max-w-4xl mx-auto px-6 py-20 space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                        {t('sobre_title')}
                    </h1>
                    <p className="text-xl text-[rgb(var(--accent-rgb,6,182,212))] font-medium">
                        {t('sobre_studio')}
                    </p>
                </motion.div>

                {/* Trajectory */}
                <div>
                    <h3 className="section-title mb-10">{t('sobre_trajectory_title')}</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-12 max-w-2xl">
                        {t('sobre_trajectory')}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {TRAJECTORY.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/30 dark:bg-slate-800/20 border border-slate-200/50 dark:border-slate-700/50 text-center"
                                >
                                    <Icon className="mx-auto text-[rgb(var(--accent-rgb,6,182,212))] mb-3" size={28} />
                                    <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-1">{item.label}</h4>
                                    <span className="text-[10px] text-slate-500 font-mono">{item.period}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-8">
                    <WhatsAppButton context="hub" variant="hero" label={t('sobre_cta')} className="mx-auto" />
                </div>
            </section>
        </>
    );
};

export default Sobre;
