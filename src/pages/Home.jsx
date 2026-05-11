import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../components/LanguageContext';
import { getLobbyT } from '../data/lobby-translations';
import { SEO } from '../data/seo';
import HeroSection from '../components/shared/HeroSection';
import LobbySelector from '../components/shared/LobbySelector';
import { motion } from 'framer-motion';

const Home = () => {
    const { language } = useLanguage();
    const t = (key) => getLobbyT(language, key);
    const seo = SEO.home[language] || SEO.home.en;

    const cards = [
        {
            eyebrow: t('hub_card1_eyebrow'),
            title: t('hub_card1_title'),
            description: t('hub_card1_desc'),
            cta: t('hub_card1_cta'),
            to: '/empresas',
            highlight: true,
        },
        {
            eyebrow: t('hub_card2_eyebrow'),
            title: t('hub_card2_title'),
            description: t('hub_card2_desc'),
            cta: t('hub_card2_cta'),
            to: '/voicey',
        },
        {
            eyebrow: t('hub_card3_eyebrow'),
            title: t('hub_card3_title'),
            description: t('hub_card3_desc'),
            cta: t('hub_card3_cta'),
            to: '/games',
        },
    ];

    return (
        <>
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
            </Helmet>

            <HeroSection
                headline={t('hub_headline')}
                subhead={t('hub_subhead')}
                align="center"
            />

            <div className="-mt-12 mb-20">
                <LobbySelector cards={cards} />
            </div>

            {/* Credibility strip */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto px-6 pb-20"
            >
                <div className="py-5 px-8 rounded-2xl bg-white/30 dark:bg-slate-800/20 border border-slate-200/50 dark:border-slate-700/50 text-center">
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                        {t('hub_credibility')}
                    </p>
                </div>
            </motion.div>
        </>
    );
};

export default Home;
