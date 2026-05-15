import React from 'react';
import { Helmet } from 'react-helmet-async';
import SeoMeta from '../components/shared/SeoMeta';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext';
import { getLobbyT } from '../data/lobby-translations';
import { SEO } from '../data/seo';
import { GAMES_DATA } from '../data';
import HeroSection from '../components/shared/HeroSection';
import CaseStudyCard from '../components/shared/CaseStudyCard';
import WhatsAppButton from '../components/layout/WhatsAppButton';
import { motion } from 'framer-motion';
import { CheckCircle2, Play, ExternalLink } from 'lucide-react';

const Games = () => {
    const { language } = useLanguage();
    const t = (key) => getLobbyT(language, key);
    const seo = SEO.games[language] || SEO.games.en;

    // Playable games from data.js
    const playableGames = Object.entries(GAMES_DATA)
        .filter(([, g]) => g.path)
        .map(([id, g]) => ({
            id,
            ...g,
            t: g.translations[language] || g.translations.en,
        }));

    return (
        <>
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seo.title} />
                <meta property="og:description" content={seo.description} />
                <meta property="og:image" content="/portfolio/og-games.png" />
                <meta property="og:url" content="https://megumi-joy.github.io/portfolio/#/games" />
                <meta property="og:site_name" content="Megumi Joy" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seo.title} />
                <meta name="twitter:description" content={seo.description} />
                <meta name="twitter:image" content="/portfolio/og-games.png" />
            </Helmet>
            <div data-lobby="games">

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

            {/* 8.2 Case Studies */}
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

            {/* 8.2b Playable Demos */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <h3 className="section-title mb-10">
                    <Play className="inline mr-2 -mt-1" size={24} />
                    {language === 'es' ? 'Juega ahora' : language === 'ru' ? 'Играть сейчас' : language === 'uk' ? 'Грати зараз' : language === 'ca' ? 'Juga ara' : 'Play now'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {playableGames.map((game, i) => (
                        <motion.div
                            key={game.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                        >
                            <Link
                                to={`/games/${game.id}`}
                                className="group block rounded-2xl overflow-hidden bg-white/30 dark:bg-slate-800/20 border border-slate-200/50 dark:border-slate-700/50 hover:border-[rgb(var(--accent-rgb)/0.5)] transition-all hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Thumbnail */}
                                <div className="aspect-video bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                                    {game.thumbnail ? (
                                        <img src={game.thumbnail} alt={game.t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                                            <Play size={40} />
                                        </div>
                                    )}
                                    {/* Play overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                        <div className="w-14 h-14 rounded-full bg-[rgb(var(--accent-rgb))] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all shadow-xl">
                                            <Play size={24} className="text-white ml-1" fill="currentColor" />
                                        </div>
                                    </div>
                                    {/* Status badge */}
                                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                                        {game.status}
                                    </span>
                                </div>
                                <div className="p-5">
                                    <h4 className="font-bold text-slate-800 dark:text-white mb-1 group-hover:text-[rgb(var(--accent-rgb))] transition-colors">{game.t.title}</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">{game.t.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {game.tags?.slice(0, 3).map(tag => (
                                            <span key={tag} className="px-2 py-0.5 rounded-full bg-slate-200/60 dark:bg-slate-800/60 text-[10px] text-slate-500 dark:text-slate-400 font-medium">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
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
            </div>
        </>
    );
};

export default Games;
