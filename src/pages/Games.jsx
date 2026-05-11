import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../components/LanguageContext';
import { getLobbyT } from '../data/lobby-translations';
import { SEO } from '../data/seo';
import HeroSection from '../components/shared/HeroSection';
import CaseStudyCard from '../components/shared/CaseStudyCard';
import WhatsAppButton from '../components/layout/WhatsAppButton';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Games = () => {
    const { language } = useLanguage();
    const t = (key) => getLobbyT(language, key);
    const seo = SEO.games[language] || SEO.games.en;

    return (
        <>
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
            </Helmet>

            {/* 8.1 Hero */}
            <HeroSection
                headline={t('gam_hero_h1')}
                subhead={t('gam_hero_sub')}
            >
                <WhatsAppButton context="games_invest" variant="hero" label={t('gam_hero_cta1')} />
                <button
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-200/60 dark:bg-white/5 hover:bg-slate-300/60 dark:hover:bg-white/10 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-white font-medium transition-all hover:scale-105 backdrop-blur-md"
                >
                    {t('gam_hero_cta2')}
                </button>
            </HeroSection>

            {/* 8.2 Projects */}
            <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <CaseStudyCard eyebrow={t('gam_case1_eyebrow')} title={t('gam_case1_title')} bullets={[t('gam_case1_desc')]} tags={t('gam_case1_tags')} />
                    <CaseStudyCard eyebrow={t('gam_case2_eyebrow')} title={t('gam_case2_title')} bullets={[t('gam_case2_desc')]} tags={t('gam_case2_tags')} />
                    <CaseStudyCard eyebrow={t('gam_case3_eyebrow')} title={t('gam_case3_title')} bullets={[t('gam_case3_desc')]} tags={t('gam_case3_tags')} />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-white/30 dark:bg-slate-800/20 rounded-2xl border-2 border-dashed border-[rgb(var(--accent-rgb,16,185,129)/0.4)] flex flex-col items-center justify-center text-center"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[rgb(var(--accent-rgb,16,185,129))] mb-3">{t('gam_case4_eyebrow')}</span>
                        <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-4">{t('gam_case4_title')}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{t('gam_case4_desc')}</p>
                        <WhatsAppButton context="games_pitch" variant="inline" label={t('gam_case4_cta')} />
                    </motion.div>
                </div>
            </section>

            {/* 8.3 Tech Capabilities */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <h3 className="section-title mb-10">{t('gam_tech_title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(t('gam_tech_items') || []).map((item, i) => (
                        <div key={i} className="flex items-start gap-3 py-3">
                            <CheckCircle2 size={18} className="text-[rgb(var(--accent-rgb,16,185,129))] mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600 dark:text-slate-300">{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 8.4 Investment Block */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="rounded-3xl bg-gradient-to-br from-[rgb(var(--accent-rgb,16,185,129)/0.1)] to-slate-900/40 dark:to-slate-900/60 border border-[rgb(var(--accent-rgb,16,185,129)/0.3)] p-12 md:p-16 text-center">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4">{t('gam_invest_title')}</h3>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">{t('gam_invest_sub')}</p>
                    <WhatsAppButton context="games_pitch" variant="hero" label={t('gam_invest_cta')} className="mx-auto" />
                </div>
            </section>
        </>
    );
};

export default Games;
