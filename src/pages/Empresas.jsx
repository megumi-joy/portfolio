import React from 'react';
import { Helmet } from 'react-helmet-async';
import SeoMeta from '../components/shared/SeoMeta';
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
import DiagnosticForm from '../components/shared/DiagnosticForm';
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
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seo.title} />
                <meta property="og:description" content={seo.description} />
                <meta property="og:image" content="/portfolio/og-empresas.png" />
                <meta property="og:url" content="https://megumi-joy.github.io/portfolio/#/empresas" />
                <meta property="og:site_name" content="Megumi Joy" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seo.title} />
                <meta name="twitter:description" content={seo.description} />
                <meta name="twitter:image" content="/portfolio/og-empresas.png" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Service",
                            "@id": "https://megumi-joy.github.io/portfolio/#service-automation",
                            "name": "Business Automation & AI Integration",
                            "provider": { "@id": "https://megumi-joy.github.io/portfolio/#org" },
                            "description": "Custom automation systems, AI integrations, and operational dashboards for SMEs.",
                            "areaServed": "Worldwide",
                            "serviceType": "Business Automation",
                        },
                        {
                            "@type": "Service",
                            "@id": "https://megumi-joy.github.io/portfolio/#service-audit",
                            "name": "Strategic Technology Audit",
                            "provider": { "@id": "https://megumi-joy.github.io/portfolio/#org" },
                            "description": "60-90 minute session to map your operation, detect real bottlenecks and build a clear roadmap.",
                            "offers": { "@type": "Offer", "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "price": "900" } },
                        },
                    ],
                })}</script>
            </Helmet>
            <div data-lobby="empresas">

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

            {/* 6.1b Credibility Block — Constitution §8 */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200/50 dark:bg-slate-700/30 rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-700/30">
                    {[
                        { num: '+10', labelKey: 'emp_cred1_label', storyKey: 'emp_cred1_story' },
                        { num: '2',   labelKey: 'emp_cred2_label', storyKey: 'emp_cred2_story' },
                        { num: '5',   labelKey: 'emp_cred3_label', storyKey: 'emp_cred3_story' },
                        { num: '0',   labelKey: 'emp_cred4_label', storyKey: 'emp_cred4_story' },
                    ].map(({ num, labelKey, storyKey }, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-8 md:p-10 flex flex-col gap-3"
                        >
                            <span
                                className="font-black leading-none text-[rgb(var(--accent-rgb,212,162,76))]"
                                style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)' }}
                            >
                                {num}
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
                                {t(labelKey)}
                            </span>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                {t(storyKey)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 6.2 Pain cards — §4 "Problemas que reconoces" */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-10">
                    <h3 className="section-title mb-3">{t('emp_pain_title')}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{t('emp_pain_sub')}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { key: 'emp_pain1', waCtx: 'empresas_pain1', prefill: 'Hola%20Anton%2C%20en%20mi%20negocio%20el%20equipo%20dedica%20horas%20a%20tareas%20repetitivas.%20%C2%BFC%C3%B3mo%20lo%20automatizamos%3F' },
                        { key: 'emp_pain2', waCtx: 'empresas_pain2', prefill: 'Hola%20Anton%2C%20mis%20datos%20est%C3%A1n%20en%20hojas.%20Quiero%20visibilidad%20financiera%20en%20tiempo%20real.' },
                        { key: 'emp_pain3', waCtx: 'empresas_pain3', prefill: 'Hola%20Anton%2C%20pierdo%20leads%20fuera%20de%20horario.%20%C2%BFPuede%20ayudarme%20una%20IA%3F' },
                        { key: 'emp_pain4', waCtx: 'empresas_pain4', prefill: 'Hola%20Anton%2C%20quiero%20integrar%20IA%20en%20mi%20negocio%20pero%20necesito%20alguien%20t%C3%A9cnico%20de%20confianza.' },
                    ].map(({ key, prefill }) => (
                        <motion.div key={key}
                            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 bg-white/30 dark:bg-slate-800/20 hover:border-[rgb(var(--accent-rgb,212,162,76)/0.4)] transition-all group"
                        >
                            <p className="text-slate-700 dark:text-slate-200 font-medium mb-4 leading-snug">{t(`${key}_title`)}</p>
                            <a href={`https://wa.me/34605748052?text=${prefill}`} target="_blank" rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[rgb(var(--accent-rgb,212,162,76))] hover:underline transition-all">
                                {t(`${key}_cta`)}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 6.3 Value Proposition */}

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
                            <p className="text-slate-400 dark:text-slate-500 text-xs mb-2">{t('emp_abaf_bullets')}</p>
                            <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-xs mb-4 p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800/50">{t('emp_abaf_pricing') || '€29/mo + €5/lead'}</p>
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

            {/* 6.5a Pricing — confirmed: 900€ / 3.500€ / 15.000€ */}
            <section id="precios" className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-12">
                    <h3 className="section-title mb-3">{t('emp_pricing_title')}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{t('emp_pricing_sub')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { nameKey: 'emp_pricing1_name', priceKey: 'emp_pricing1_price', descKey: 'emp_pricing1_desc', ctaKey: 'emp_pricing1_cta', waCtx: 'auditoria', highlight: false },
                        { nameKey: 'emp_pricing2_name', priceKey: 'emp_pricing2_price', descKey: 'emp_pricing2_desc', ctaKey: 'emp_pricing2_cta', waCtx: 'empresas', highlight: true },
                        { nameKey: 'emp_pricing3_name', priceKey: 'emp_pricing3_price', descKey: 'emp_pricing3_desc', ctaKey: 'emp_pricing3_cta', waCtx: 'empresas', highlight: false },
                    ].map(({ nameKey, priceKey, descKey, ctaKey, waCtx, highlight }) => (
                        <motion.div key={nameKey}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className={`flex flex-col p-8 rounded-2xl border transition-all ${highlight
                                ? 'bg-[rgb(var(--accent-rgb,212,162,76)/0.08)] border-[rgb(var(--accent-rgb,212,162,76)/0.4)] shadow-lg'
                                : 'bg-white/30 dark:bg-slate-800/20 border-slate-200/50 dark:border-slate-700/50'}`}>
                            <div className="mb-6">
                                <p className="text-xs font-bold uppercase tracking-widest text-[rgb(var(--accent-rgb,212,162,76))] mb-2">{t(nameKey)}</p>
                                {/* price confirmed */}
                                <p className="text-4xl font-black text-slate-900 dark:text-white mb-1">{t(priceKey)}</p>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-6">{t(descKey)}</p>
                            <a href={waLink(waCtx)} target="_blank" rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[rgb(var(--accent-rgb,212,162,76))] hover:opacity-90 text-white font-bold text-sm transition-all">
                                {t(ctaKey)}
                            </a>
                        </motion.div>
                    ))}
                </div>
                
                <p className="text-center text-xs text-slate-400 mt-6">{t('emp_pricing_note')}</p>
            </section>

            {/* 6.5b Diagnostic Form */}
            <DiagnosticForm />

            {/* 6.6 FAQ */}
            <FAQAccordion
                title={t('emp_faq_title')}
                items={t('emp_faq') || []}
            />

            {/* 6.6b Risk Reversal — §10 */}
            <section className="max-w-3xl mx-auto px-6 py-10">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center text-sm text-slate-500 dark:text-slate-400">
                    {[t('emp_risk_guarantee1'), t('emp_risk_guarantee2'), t('emp_risk_guarantee3')].map((g, i) => (
                        <div key={i} className="flex items-start gap-2">
                            <span className="text-emerald-500 font-black mt-0.5">✓</span>
                            <span>{g}</span>
                        </div>
                    ))}
                </div>
            </section>

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
            </div>
        </>
    );
};

export default Empresas;
