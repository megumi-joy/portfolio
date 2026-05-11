import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../components/LanguageContext';
import { getLobbyT } from '../data/lobby-translations';
import { SEO } from '../data/seo';
import HeroSection from '../components/shared/HeroSection';
import WhatsAppButton from '../components/layout/WhatsAppButton';
import { motion } from 'framer-motion';
import { Mic, Brain, Layers, Zap, Users, User, Building2 } from 'lucide-react';
import { useState } from 'react';

const Voicey = () => {
    const { language } = useLanguage();
    const t = (key) => getLobbyT(language, key);
    const seo = SEO.voicey[language] || SEO.voicey.en;
    const [activeTab, setActiveTab] = useState(0);

    const diffs = [
        { icon: Mic, title: t('voi_diff1_title'), desc: t('voi_diff1_desc') },
        { icon: Brain, title: t('voi_diff2_title'), desc: t('voi_diff2_desc') },
        { icon: Layers, title: t('voi_diff3_title'), desc: t('voi_diff3_desc') },
        { icon: Zap, title: t('voi_diff4_title'), desc: t('voi_diff4_desc') },
    ];

    const useTabs = [
        { icon: Building2, label: t('voi_use_tab1'), desc: t('voi_use_tab1_desc') },
        { icon: User, label: t('voi_use_tab2'), desc: t('voi_use_tab2_desc') },
        { icon: Users, label: t('voi_use_tab3'), desc: t('voi_use_tab3_desc') },
        { icon: User, label: t('voi_use_tab4'), desc: t('voi_use_tab4_desc') },
    ];

    return (
        <>
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
            </Helmet>

            {/* 7.1 Hero */}
            <HeroSection
                badge={t('voi_badge')}
                headline={t('voi_hero_h1')}
                subhead={t('voi_hero_sub')}
            >
                <WhatsAppButton context="voicey_access" variant="hero" label={t('voi_hero_cta1')} />
                <button
                    onClick={() => document.getElementById('diff')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-200/60 dark:bg-white/5 hover:bg-slate-300/60 dark:hover:bg-white/10 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-white font-medium transition-all hover:scale-105 backdrop-blur-md"
                >
                    {t('voi_hero_cta2')}
                </button>
            </HeroSection>

            {/* 7.2 Differentiators */}
            <section id="diff" className="max-w-7xl mx-auto px-6 py-20">
                <h3 className="section-title mb-12">{t('voi_diff_title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {diffs.map((d, i) => {
                        const Icon = d.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-white/30 dark:bg-slate-800/20 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-[rgb(var(--accent-rgb,123,91,255)/0.4)] transition-all"
                            >
                                <Icon className="text-[rgb(var(--accent-rgb,123,91,255))] mb-4" size={28} />
                                <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{d.title}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{d.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* 7.3 Use Cases */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <h3 className="section-title mb-8">{t('voi_use_title')}</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                    {useTabs.map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                                activeTab === i
                                    ? 'bg-[rgb(var(--accent-rgb,123,91,255))] text-white shadow-lg'
                                    : 'bg-slate-200/40 dark:bg-slate-800/40 text-slate-500 hover:text-slate-700 dark:hover:text-white'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 rounded-2xl bg-white/30 dark:bg-slate-800/20 border border-slate-200/50 dark:border-slate-700/50"
                >
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{useTabs[activeTab]?.desc}</p>
                </motion.div>
            </section>

            {/* 7.4 Pricing placeholder */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{t('voi_pricing_title')}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-10">{t('voi_pricing_sub')}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[{ title: t('voi_tier1_title'), desc: t('voi_tier1_desc') }, { title: t('voi_tier2_title'), desc: t('voi_tier2_desc') }, { title: t('voi_tier3_title'), desc: t('voi_tier3_desc') }].map((tier, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white/30 dark:bg-slate-800/20 border border-slate-200/50 dark:border-slate-700/50">
                            <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{tier.title}</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{tier.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8">
                    <WhatsAppButton context="voicey_pricing" variant="inline" label={t('voi_pricing_cta')} />
                </div>
            </section>

            {/* 7.5 Status */}
            <section className="max-w-3xl mx-auto px-6 py-16">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">{t('voi_status_title')}</h3>
                <ul className="space-y-3 mb-6">
                    {(t('voi_status_bullets') || []).map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent-rgb,123,91,255))] flex-shrink-0" />
                            {b}
                        </li>
                    ))}
                </ul>
                <WhatsAppButton context="voicey_access" variant="inline" label={t('voi_status_cta')} />
            </section>

            {/* 7.6 Final CTA */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="rounded-3xl bg-gradient-to-br from-[rgb(var(--accent-rgb,123,91,255)/0.15)] to-slate-900/40 dark:to-slate-900/60 border border-[rgb(var(--accent-rgb,123,91,255)/0.3)] p-12 md:p-16 text-center">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6">{t('voi_final_headline')}</h3>
                    <WhatsAppButton context="voicey_access" variant="hero" label={t('voi_final_cta')} className="mx-auto" />
                </div>
            </section>
        </>
    );
};

export default Voicey;
