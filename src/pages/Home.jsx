import React from 'react';
import { Helmet } from 'react-helmet-async';
import SeoMeta from '../components/shared/SeoMeta';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageContext';
import { getLobbyT } from '../data/lobby-translations';
import { SEO } from '../data/seo';
import avatarImg from '../assets/avatar.jpg';
import { Calendar, Layers, MapPin, Terminal, Cpu, Globe, Gamepad2, ArrowRight, Brain } from 'lucide-react';
import LobbySelector from '../components/shared/LobbySelector';

const GlowingBadge = ({ children }) => (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(var(--accent-rgb)/0.1)] border border-[rgb(var(--accent-rgb)/0.2)] text-[rgb(var(--accent-rgb))] text-xs font-bold tracking-wide uppercase shadow-[0_0_15px_rgba(var(--accent-rgb),0.2)]">
        {children}
    </span>
);

const Home = () => {
    const { language, activeProfile } = useLanguage();
    const t = (key) => getLobbyT(language, key);
    const seo = SEO.home[language] || SEO.home.en;

    const tH = (en, es, ca = es) => {
        if (language === 'es') return es;
        if (language === 'ca') return ca;
        return en;
    };

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
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seo.title} />
                <meta property="og:description" content={seo.description} />
                <meta property="og:image" content="/og-home.png" />
                <meta property="og:url" content="https://portfolio.voicydroid.com/" />
                <meta property="og:site_name" content="Megumi Joy" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seo.title} />
                <meta name="twitter:description" content={seo.description} />
                <meta name="twitter:image" content="/og-home.png" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Organization",
                            "@id": "https://portfolio.voicydroid.com/#org",
                            "name": "Megumi Joy",
                            "url": "https://portfolio.voicydroid.com/",
                            "founder": { "@type": "Person", "name": "Anton" },
                            "description": "Technical studio specialised in automation, applied AI and full-stack product development for businesses.",
                            "knowsAbout": ["Business automation", "AI integration", "Full-stack development", "Game development", "Industrial simulation"],
                        },
                        {
                            "@type": "WebSite",
                            "@id": "https://portfolio.voicydroid.com/#website",
                            "url": "https://portfolio.voicydroid.com/",
                            "name": "Megumi Joy Portfolio",
                            "publisher": { "@id": "https://portfolio.voicydroid.com/#org" },
                        },
                    ],
                })}</script>
            </Helmet>

            {/* 1. Premium Hero Profile */}
            <section className="min-h-[85vh] flex flex-col justify-center px-6 relative">
                {/* Decorative background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[rgb(var(--accent-rgb)/0.05)] rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Intro */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8 relative z-10"
                    >
                        <GlowingBadge>
                            <span className="w-2 h-2 rounded-full bg-[rgb(var(--accent-rgb))] animate-pulse" />
                            {tH('Available for new projects', 'Disponible para nuevos proyectos', 'Disponible per a nous projectes')}
                        </GlowingBadge>

                        <div className="space-y-4">
                            <div className="flex items-center gap-6">
                                <img src={avatarImg} alt="Anton" className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-2xl border-4 border-white/10" />
                                <div>
                                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-tight pb-2 pt-1">
                                        Anton
                                    </h1>
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-500 dark:text-slate-400">
                                        Senior Software Engineer <br className="hidden md:block" /> & Systems Architect
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                            {t('hub_subhead')}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="https://wa.me/34605748052"
                                target="_blank"
                                rel="noreferrer"
                                className="px-8 py-4 rounded-xl bg-[rgb(var(--accent-rgb))] text-white font-bold tracking-wide shadow-[0_0_30px_rgba(var(--accent-rgb),0.3)] hover:scale-105 hover:shadow-[0_0_40px_rgba(var(--accent-rgb),0.5)] transition-all"
                            >
                                {tH('Let\'s talk', 'Contactar', 'Contactar')}
                            </a>
                            <button
                                onClick={() => document.getElementById('expertise').scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 rounded-xl bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 text-slate-800 dark:text-white font-bold tracking-wide hover:bg-slate-300/50 dark:hover:bg-white/10 transition-all backdrop-blur-md"
                            >
                                {tH('View areas of expertise', 'Ver áreas de especialidad', 'Veure àrees d\'especialitat')}
                            </button>
                        </div>
                    </motion.div>

                    {/* Right: Abstract Profile / Data points */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-10"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 p-8 rounded-3xl bg-white/40 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md shadow-xl">
                                <Terminal className="text-[rgb(var(--accent-rgb))] mb-4" size={32} />
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{tH('10+ Years Engineering', '+10 Años de Ingeniería', '+10 Anys d\'Enginyeria')}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{tH('Full stack architecture, AI integrations, game development, and hardware systems.', 'Arquitectura full stack, IA, desarrollo de juegos y sistemas de hardware.', 'Arquitectura full stack, IA, desenvolupament de jocs i sistemes de maquinari.')}</p>
                            </div>
                            <div className="p-6 rounded-3xl bg-white/40 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md shadow-xl">
                                <Globe className="text-purple-500 mb-4" size={28} />
                                <h3 className="font-bold text-slate-800 dark:text-white mb-1">{tH('5 Languages', '5 Idiomas', '5 Idiomes')}</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400">EN, ES, CA, RU, UK</p>
                            </div>
                            <div className="p-6 rounded-3xl bg-white/40 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md shadow-xl">
                                <Layers className="text-[rgb(var(--accent-rgb))] mb-4" size={28} />
                                <h3 className="font-bold text-slate-800 dark:text-white mb-1">{tH('Systems First', 'Sistemas Primero', 'Sistemes Primer')}</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{tH('From code to production.', 'Del código a producción.', 'Del codi a la producció.')}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Partners strip */}
            <motion.section
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-10 border-y border-slate-200/40 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-900/30"
            >
                <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                    <p className="text-xs font-semibold tracking-[0.12em] uppercase text-slate-400 dark:text-slate-500 shrink-0">
                        {tH('Trusted partners', 'Socios de confianza', 'Socis de confiança')}
                    </p>
                    <div className="hidden sm:block w-px h-6 bg-slate-300/50 dark:bg-slate-700/50" />
                    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
                        {/* Finergia */}
                        <a
                            href="https://finergia.es"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
                            aria-label="Finergia — partner"
                        >
                            <span className="w-7 h-7 rounded-lg bg-slate-800 dark:bg-slate-200 flex items-center justify-center text-white dark:text-slate-900 text-xs font-black leading-none group-hover:bg-[rgb(var(--accent-rgb))] group-hover:text-white transition-colors">
                                F
                            </span>
                            <span className="text-sm font-bold text-slate-600 dark:text-slate-300 tracking-tight">
                                Finergia
                            </span>
                        </a>
                    </div>
                </div>
            </motion.section>

            {/* 2. Lobbies / Areas of Expertise */}

            <section id="expertise" className="py-24 relative">
                <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                    <h2 className="section-title">{tH('Areas of Expertise', 'Áreas de Especialidad', 'Àrees d\'Especialitat')}</h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        {tH('Select an area to explore specific projects, products, and services.', 'Selecciona un área para ver proyectos, productos y servicios específicos.', 'Selecciona una àrea per veure projectes, productes i serveis específics.')}
                    </p>
                </div>
                <LobbySelector cards={cards} />
            </section>

            {/* 2.5 Technical Trajectory */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/80 relative border-y border-slate-200/50 dark:border-slate-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="section-title">{tH('Technical Trajectory', 'Evolución Técnica', 'Evolució Tècnica')}</h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-3xl mx-auto text-lg mt-4">
                            {tH(
                                '10+ years building complex systems. From low-level embedded hardware up to modern AI-driven automation.',
                                'Más de 10 años construyendo sistemas complejos. Desde el hardware más profundo hasta la automatización con Inteligencia Artificial actual.',
                                'Més de 10 anys construint sistemes complexos. Des del maquinari més profund fins a l\'automatització amb Intel·ligència Artificial actual.'
                            )}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Brain,
                                title: tH('AI & Automation', 'IA y Automatización', 'IA i Automatització'),
                                period: '2022 - present',
                                desc: tH(
                                    'Designing autonomous agents, LLM orchestration platforms, and custom business automations that replace manual bottlenecks with reliable software.',
                                    'Diseño de agentes autónomos, orquestación de LLMs y automatizaciones de negocio. Foco en delegar el trabajo operativo real a sistemas fiables (ej. Voicey, ABAF).',
                                    'Disseny d\'agents autònoms, orquestració de LLMs i automatitzacions de negoci. Foc en delegar el treball operatiu real a sistemes fiables (ex. Voicey, ABAF).'
                                )
                            },
                            {
                                icon: Globe,
                                title: tH('Full-Stack Web', 'Web Full-Stack', 'Web Full-Stack'),
                                period: '2019 - 2022',
                                desc: tH(
                                    'Architected scalable B2B/B2C SaaS products, educational platforms, and complex operational dashboards. Mastery of React, Node.js, and cloud deployments.',
                                    'Arquitectura de productos SaaS B2B/B2C, plataformas educativas y paneles de control complejos. Dominio de React, Node.js y bases de datos relacionales.',
                                    'Arquitectura de productes SaaS B2B/B2C, plataformes educatives i taulers de control complexos. Domini de React, Node.js i bases de dades relacionals.'
                                )
                            },
                            {
                                icon: Gamepad2,
                                title: tH('Simulation & GameDev', 'Simulación y GameDev', 'Simulació i GameDev'),
                                period: '2016 - 2019',
                                desc: tH(
                                    'Built high-performance 3D simulations for industrial logistics. Optimized rendering pipelines, AI NPC behaviors, and procedural generation algorithms for 60fps experiences.',
                                    'Desarrollo de simuladores logísticos 3D e interactivos. Optimización de rendimiento a 60fps, comportamiento de NPCs y generación procedural (Unity, Godot).',
                                    'Desenvolupament de simuladors logístics 3D i interactius. Optimització de rendiment a 60fps, comportament de NPCs i generació procedural (Unity, Godot).'
                                )
                            },
                            {
                                icon: Cpu,
                                title: tH('Hardware & Embedded', 'Hardware y Embedded', 'Maquinari i Embedded'),
                                period: '2013 - 2016',
                                desc: tH(
                                    'Developed low-level C/C++ firmware and sensor telemetry systems. Working closely with hardware cultivated a deep understanding of memory management and system architecture.',
                                    'Desarrollo de firmware en C/C++ y telemetría de sensores. El trabajo a bajo nivel forjó un entendimiento profundo del manejo de memoria y arquitectura de sistemas.',
                                    'Desenvolupament de microprogramari en C/C++ i telemetria de sensors. El treball a baix nivell va forjar una comprensió profunda de la gestió de memòria i arquitectura de sistemes.'
                                )
                            }
                        ].map((phase, i) => {
                            const Icon = phase.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-3xl bg-white/60 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col h-full"
                                >
                                    <div className="mb-6 flex justify-between items-start">
                                        <div className="p-3 rounded-2xl bg-[rgb(var(--accent-rgb)/0.1)] text-[rgb(var(--accent-rgb))]">
                                            <Icon size={32} strokeWidth={1.5} />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-200/50 dark:bg-slate-800/50 px-2 py-1 rounded-md">
                                            {phase.period}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 leading-tight">{phase.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-grow">
                                        {phase.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 3. Professional Journey (Experience) */}
            <section className="py-24 bg-slate-100/50 dark:bg-slate-900/50 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <h2 className="section-title mb-16">{tH('Professional Journey', 'Trayectoria Profesional', 'Trajectòria Professional')}</h2>
                    
                    <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-12 space-y-16">
                        {activeProfile.experience?.map((role, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5 }}
                                className="relative pl-8 md:pl-12 group"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-300 dark:border-slate-700 group-hover:border-[rgb(var(--accent-rgb))] transition-colors shadow-sm" />

                                <div className="p-8 rounded-3xl bg-white/60 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:border-[rgb(var(--accent-rgb)/0.3)] transition-all backdrop-blur-sm">
                                    <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-1 group-hover:text-[rgb(var(--accent-rgb))] transition-colors">{role.role}</h3>
                                            <div className="text-lg font-medium text-slate-600 dark:text-slate-300">{role.company}</div>
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 text-sm font-mono text-slate-600 dark:text-slate-400 border border-slate-300/50 dark:border-slate-700/50 whitespace-nowrap">
                                            <Calendar size={14} className="text-[rgb(var(--accent-rgb))]" />
                                            {role.period}
                                        </div>
                                    </div>

                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 italic">
                                        {role.description}
                                    </p>

                                    <ul className="space-y-3 mb-8">
                                        {role.achievements?.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent-rgb))] flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {(role.technologies || []).map(tech => (
                                            <span key={tech} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-400">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Technical Arsenal */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="section-title">{activeProfile.ui?.skillsTitle || tH('Technical Arsenal', 'Arsenal Técnico', 'Arsenal Tècnic')}</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                        {activeProfile.skills?.map((skill, index) => {
                            const Icon = skill.icon || Cpu;
                            return (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (index % 6) * 0.05 }}
                                    className="group relative p-6 bg-white/40 dark:bg-slate-800/30 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 hover:border-[rgb(var(--accent-rgb)/0.5)] transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-white/80 dark:hover:bg-slate-800/80 backdrop-blur-sm"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent-rgb)/0.05)] to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="flex flex-col items-center gap-4 text-center relative z-10">
                                        <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/80 text-slate-400 dark:text-slate-500 group-hover:text-[rgb(var(--accent-rgb))] group-hover:scale-110 transition-all shadow-inner">
                                            <Icon size={32} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm group-hover:text-[rgb(var(--accent-rgb))] transition-colors">{skill.name}</h4>
                                            {skill.level && (
                                                <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase bg-slate-200 dark:bg-slate-800 text-slate-500">
                                                    {skill.level}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 5. Final CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgb(var(--accent-rgb)/0.03)]" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        {tH('Let\'s build something amazing.', 'Construyamos algo increíble.', 'Construïm una cosa increïble.')}
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
                        {tH(
                            'Currently open for new projects, consulting, or key remote roles.',
                            'Actualmente abierto a nuevos proyectos, consultoría o roles remotos clave.',
                            'Actualment obert a nous projectes, consultoria o rols remots clau.'
                        )}
                    </p>
                    <a
                        href="https://wa.me/34605748052"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[rgb(var(--accent-rgb))] text-white font-bold text-lg tracking-wide shadow-[0_0_40px_rgba(var(--accent-rgb),0.4)] hover:scale-105 hover:shadow-[0_0_60px_rgba(var(--accent-rgb),0.6)] transition-all"
                    >
                        {tH('Contact Anton', 'Contactar a Anton', 'Contactar a Anton')}
                        <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </>
    );
};

export default Home;
