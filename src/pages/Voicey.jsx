import React from 'react';
import { Helmet } from 'react-helmet-async';
import SeoMeta from '../components/shared/SeoMeta';
import { useLanguage } from '../components/LanguageContext';
import { getLobbyT } from '../data/lobby-translations';
import { SEO } from '../data/seo';
import HeroSection from '../components/shared/HeroSection';
import WhatsAppButton from '../components/layout/WhatsAppButton';
import { motion } from 'framer-motion';
import { Mic, Brain, Layers, Zap, Users, User, Building2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import VoiceyWaveform from '../components/shared/VoiceyWaveform';

const Voicey = () => {
    const { language } = useLanguage();
    const t = (key) => getLobbyT(language, key);
    const seo = SEO.voicey[language] || SEO.voicey.en;
    const [activeTab, setActiveTab] = useState(0);
    const [livePrice, setLivePrice] = useState(null); // fetched from VPS

    useEffect(() => {
        // Fetch live pricing from VPS — fallback to static translations if unavailable
        fetch('https://api.voicydroid.com/api/voicey-pricing', { signal: AbortSignal.timeout(4000) })
            .then(r => r.ok ? r.json() : null)
            .then(data => { if (data?.tiers) setLivePrice(data); })
            .catch(() => {}); // silent fallback
    }, []);

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
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seo.title} />
                <meta property="og:description" content={seo.description} />
                <meta property="og:image" content="/og-voicey.png" />
                <meta property="og:url" content="https://portfolio.voicydroid.com/#/voicey" />
                <meta property="og:site_name" content="Megumi Joy" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seo.title} />
                <meta name="twitter:description" content={seo.description} />
                <meta name="twitter:image" content="/og-voicey.png" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "@id": "https://portfolio.voicydroid.com/#voicey",
                    "name": "Voicey",
                    "applicationCategory": "BusinessApplication",
                    "operatingSystem": "Web, iOS, Android",
                    "description": "AI assistant with voice and text, 24/7, long memory and real operational power. Pre-alpha — early access by invitation.",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", "availability": "https://schema.org/PreOrder" },
                    "author": { "@id": "https://portfolio.voicydroid.com/#org" },
                    "softwareVersion": "0.1-alpha",
                    "featureList": ["Voice recognition", "Long-term memory", "Multi-LLM routing", "Operational task execution", "Multi-language support"],
                })}</script>
            </Helmet>
            <div data-lobby="voicey">

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
                <VoiceyWaveform />
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

            {/* 7.4 Pricing — live from VPS with static fallback */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="mb-10">
                    <h3 className="section-title mb-2">{t('voi_pricing_title')}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        {livePrice
                            ? (language === 'es' || language === 'ca' ? livePrice.description_es : livePrice.description_en)
                            : t('voi_pricing_sub')}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {(livePrice?.tiers ?? [
                        { name_es: t('voi_tier1_title'), name_en: t('voi_tier1_title'), desc_es: t('voi_tier1_desc'), desc_en: t('voi_tier1_desc'), price_es: null },
                        { name_es: t('voi_tier2_title'), name_en: t('voi_tier2_title'), desc_es: t('voi_tier2_desc'), desc_en: t('voi_tier2_desc'), price_es: null },
                        { name_es: t('voi_tier3_title'), name_en: t('voi_tier3_title'), desc_es: t('voi_tier3_desc'), desc_en: t('voi_tier3_desc'), price_es: null },
                    ]).map((tier, i) => {
                        const isEs = language === 'es' || language === 'ca';
                        return (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="flex flex-col p-7 rounded-2xl bg-white/30 dark:bg-slate-800/20 border border-slate-200/50 dark:border-slate-700/50 hover:border-[rgb(var(--accent-rgb,123,91,255)/0.4)] transition-all">
                                <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
                                    {isEs ? tier.name_es : tier.name_en}
                                </h4>
                                {(isEs ? tier.price_es : tier.price_en) && (
                                    <p className="text-2xl font-black text-[rgb(var(--accent-rgb,123,91,255))] mb-3">
                                        {isEs ? tier.price_es : tier.price_en}
                                    </p>
                                )}
                                <p className="text-sm text-slate-500 dark:text-slate-400 flex-1">
                                    {isEs ? tier.desc_es : tier.desc_en}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
                    <WhatsAppButton context="voicey_pricing" variant="inline" label={t('voi_pricing_cta')} />
                    <a href="#/voicey" className="text-sm text-[rgb(var(--accent-rgb,123,91,255))] hover:underline font-medium">
                        {language === 'es' || language === 'ca' ? 'Ver página completa de Voicey →' : 'Full Voicey page →'}
                    </a>
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
            </div>
        </>
    );
};

export default Voicey;
