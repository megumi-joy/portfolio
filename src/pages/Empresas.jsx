import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../components/LanguageContext';
import { getLobbyT } from '../data/lobby-translations';
import { SEO } from '../data/seo';
import { waLink } from '../data/whatsapp';
import HeroSection from '../components/shared/HeroSection';
import ValuePropGrid from '../components/shared/ValuePropGrid';
import CaseStudyCard from '../components/shared/CaseStudyCard';
import ProcessTimeline from '../components/shared/ProcessTimeline';
import FAQAccordion from '../components/shared/FAQAccordion';
import WhatsAppButton from '../components/layout/WhatsAppButton';
import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle, Sparkles, Zap } from 'lucide-react';

const Empresas = () => {
    const { language } = useLanguage();
    const t = (key) => getLobbyT(language, key);
    const seo = SEO.empresas[language] || SEO.empresas.en;

    const scrollToProcess = () => {
        document.getElementById('proceso')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
            </Helmet>

            {/* 6.1 Hero */}
            <HeroSection
                headline={t('emp_hero_h1')}
                subhead={t('emp_hero_sub')}
            >
                <WhatsAppButton context="empresas" variant="hero" label={t('emp_hero_cta1')} />
                <button
                    onClick={scrollToProcess}
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-200/60 dark:bg-white/5 hover:bg-slate-300/60 dark:hover:bg-white/10 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-white font-medium transition-all hover:scale-105 backdrop-blur-md"
                >
                    <ArrowDown size={18} />
                    {t('emp_hero_cta2')}
                </button>
            </HeroSection>

            {/* 6.2 Value Proposition */}
            <ValuePropGrid
                title={t('emp_value_title')}
                items={[
                    { title: t('emp_val1_title'), description: t('emp_val1_desc'), cta: t('emp_val1_cta'), onCta: () => window.open(waLink('empresas'), '_blank') },
                    { title: t('emp_val2_title'), description: t('emp_val2_desc'), cta: t('emp_val2_cta'), onCta: () => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' }) },
                    { title: t('emp_val3_title'), description: t('emp_val3_desc'), cta: t('emp_val3_cta'), onCta: () => window.open(waLink('auditoria'), '_blank') },
                ]}
            />

            {/* 6.3 Case Studies */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <h3 className="section-title mb-12">{t('emp_cases_title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <CaseStudyCard
                        eyebrow={t('emp_case1_eyebrow')}
                        title={t('emp_case1_title')}
                        bullets={t('emp_case1_bullets')}
                        tags={t('emp_case1_tags')}
                    />
                    <CaseStudyCard
                        eyebrow={t('emp_case2_eyebrow')}
                        title={t('emp_case2_title')}
                        bullets={t('emp_case2_bullets')}
                        tags={t('emp_case2_tags')}
                    />
                    <CaseStudyCard
                        eyebrow={t('emp_case3_eyebrow')}
                        title={t('emp_case3_title')}
                        bullets={t('emp_case3_bullets')}
                        tags={t('emp_case3_tags')}
                    />
                    <CaseStudyCard
                        eyebrow={t('emp_case4_eyebrow')}
                        title={t('emp_case4_title')}
                        bullets={t('emp_case4_bullets')}
                        tags={t('emp_case4_tags')}
                    />
                </div>
            </section>

            {/* 6.4 Process Timeline */}
            <div id="proceso">
                <ProcessTimeline
                    title={t('emp_process_title')}
                    steps={[
                        { title: t('emp_step1_title'), description: t('emp_step1_desc') },
                        { title: t('emp_step2_title'), description: t('emp_step2_desc') },
                        { title: t('emp_step3_title'), description: t('emp_step3_desc') },
                        { title: t('emp_step4_title'), description: t('emp_step4_desc') },
                    ]}
                    cta={t('emp_process_cta')}
                    onCta={() => window.open(waLink('empresas'), '_blank')}
                />
            </div>

            {/* 6.5 Products */}
            <section id="productos" className="max-w-7xl mx-auto px-6 py-20">
                <h3 className="section-title mb-12 flex items-center gap-3">
                    <Sparkles className="text-[rgb(var(--accent-rgb,212,162,76))]" size={24} />
                    {t('emp_products_title')}
                </h3>
                <div className="space-y-6">
                    {/* ABAF */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-8 p-8 rounded-2xl bg-white/30 dark:bg-slate-800/20 border border-slate-200/50 dark:border-slate-700/50"
                    >
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <Zap className="text-[rgb(var(--accent-rgb,212,162,76))]" size={20} />
                                <h4 className="text-xl font-bold text-slate-800 dark:text-white">ABAF</h4>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-2">Lead Intelligence</span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-2">{t('emp_abaf_desc')}</p>
                            <p className="text-slate-400 dark:text-slate-500 text-xs mb-4">{t('emp_abaf_bullets')}</p>
                            <WhatsAppButton context="abaf" variant="inline" label={t('emp_abaf_cta')} />
                        </div>
                    </motion.div>

                    {/* Voicey */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-8 p-8 rounded-2xl bg-white/30 dark:bg-slate-800/20 border border-slate-200/50 dark:border-slate-700/50"
                    >
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <MessageCircle className="text-purple-500" size={20} />
                                <h4 className="text-xl font-bold text-slate-800 dark:text-white">Voicey</h4>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-2">AI Assistant</span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{t('emp_voicey_desc')}</p>
                            <a
                                href="/voicey"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all hover:scale-105 shadow-lg shadow-purple-600/20"
                            >
                                {t('emp_voicey_cta')}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 6.6 FAQ */}
            <FAQAccordion
                title={t('emp_faq_title')}
                items={t('emp_faq') || []}
            />

            {/* 6.7 Final CTA */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="rounded-3xl bg-gradient-to-br from-[rgb(var(--accent-rgb,212,162,76)/0.15)] to-slate-900/40 dark:to-slate-900/60 border border-[rgb(var(--accent-rgb,212,162,76)/0.3)] p-12 md:p-16 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[rgb(var(--accent-rgb,212,162,76)/0.03)] blur-3xl" />
                    <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                            {t('emp_final_headline')}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-lg">
                            {t('emp_final_sub')}
                        </p>
                        <WhatsAppButton context="empresas" variant="hero" label={t('emp_final_cta')} className="mx-auto" />
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default Empresas;
