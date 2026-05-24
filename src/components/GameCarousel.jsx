import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Play, BookOpen, ChevronRight, ChevronLeft,
    ExternalLink, Zap, Bot, BarChart3, Globe, Layers, Settings
} from 'lucide-react';

// Business automation / services slides
const AUTOMATION_SLIDES = [
    {
        id: 'lead-gen',
        type: 'service',
        icon: Bot,
        iconColor: 'text-cyan-400',
        gradientFrom: 'from-cyan-500/20',
        gradientTo: 'to-blue-600/10',
        borderColor: 'border-cyan-500/30',
        tag: 'AI Automation',
        tagColor: 'bg-cyan-500/20 text-cyan-300',
        title: 'AI Lead Generation',
        subtitle: 'Automated Pipeline',
        description: 'Capture, qualify, and nurture leads 24/7 with intelligent AI agents. Automated CRM sync, email sequences, and real-time lead scoring.',
        metrics: [
            { label: 'Response Time', value: '< 2min' },
            { label: 'Qualification Rate', value: '85%' },
            { label: 'Cost vs. Human', value: '-70%' },
        ],
        cta: 'See Live Demo',
        ctaLink: 'https://finergiaflow.com',
    },
    {
        id: 'b2b-logistics',
        type: 'service',
        icon: BarChart3,
        iconColor: 'text-purple-400',
        gradientFrom: 'from-purple-500/20',
        gradientTo: 'to-violet-600/10',
        borderColor: 'border-purple-500/30',
        tag: 'B2B SaaS',
        tagColor: 'bg-purple-500/20 text-purple-300',
        title: 'Business Intelligence',
        subtitle: 'Analytics & Reporting',
        description: 'Real-time dashboards, KPI tracking, and automated reporting systems. Turn raw data into actionable insights with interactive visualizations.',
        metrics: [
            { label: 'Data Sources', value: '∞' },
            { label: 'Update Freq.', value: 'Live' },
            { label: 'Setup Time', value: '1 week' },
        ],
        cta: 'View Project',
        ctaLink: 'https://portfolio.voicydroid.com/',
    },
    {
        id: 'process-auto',
        type: 'service',
        icon: Settings,
        iconColor: 'text-emerald-400',
        gradientFrom: 'from-emerald-500/20',
        gradientTo: 'to-green-600/10',
        borderColor: 'border-emerald-500/30',
        tag: 'Process Automation',
        tagColor: 'bg-emerald-500/20 text-emerald-300',
        title: 'Workflow Automation',
        subtitle: 'End-to-End Pipelines',
        description: 'Automate repetitive operations: invoicing, scheduling, data sync, and notifications. Built with Python + AI agents for maximum reliability.',
        metrics: [
            { label: 'Hours Saved/Mo', value: '200+' },
            { label: 'Error Rate', value: '~0%' },
            { label: 'ROI', value: '10x' },
        ],
        cta: 'Get a Quote',
        ctaLink: '#contact',
    },
    {
        id: 'custom-apps',
        type: 'service',
        icon: Layers,
        iconColor: 'text-orange-400',
        gradientFrom: 'from-orange-500/20',
        gradientTo: 'to-amber-600/10',
        borderColor: 'border-orange-500/30',
        tag: 'Custom Development',
        tagColor: 'bg-orange-500/20 text-orange-300',
        title: 'Custom Web Apps',
        subtitle: 'Full-Stack & Scalable',
        description: 'From idea to production in weeks. SaaS platforms, internal tools, client portals. React + Python backends with auth, payments & real-time features.',
        metrics: [
            { label: 'Avg. Time to MVP', value: '3 weeks' },
            { label: 'Tech Stack', value: 'Modern' },
            { label: 'Support', value: '24/7' },
        ],
        cta: 'Start a Project',
        ctaLink: '#contact',
    },
];

// Game slides
const GameSlide = ({ game, onSelect }) => (
    <div className="min-w-full h-full relative p-5 flex flex-col group">
        {/* Thumbnail */}
        <div className="h-[48%] rounded-xl overflow-hidden relative shadow-inner flex-shrink-0">
            {game.thumbnail ? (
                <img
                    src={game.thumbnail}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            ) : (
                <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                    <Globe className="text-slate-600" size={40} />
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

            {game.status === 'playable' && (
                <div className="absolute top-3 right-3 px-2 py-1 bg-green-500 text-white text-[10px] font-black rounded-lg shadow-lg flex items-center gap-1 animate-pulse">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" /> LIVE
                </div>
            )}
            {game.status === 'live' && (
                <div className="absolute top-3 right-3 px-2 py-1 bg-blue-500 text-white text-[10px] font-black rounded-lg shadow-lg flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LIVE SITE
                </div>
            )}
        </div>

        {/* Info */}
        <div className="flex-1 mt-4 flex flex-col min-h-0">
            <div className="flex gap-2 mb-2 flex-wrap">
                {game.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[9px] uppercase font-bold tracking-tighter px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5">
                        {tag}
                    </span>
                ))}
            </div>

            <h3 className="text-lg font-black text-white leading-tight mb-1 line-clamp-1">
                {game.title}
            </h3>

            <p className="text-xs text-slate-400 line-clamp-2 mb-3 flex-1">
                {game.description}
            </p>

            {/* Action Buttons */}
            <div className="mt-auto flex gap-2">
                {(game.status === 'playable' || game.status === 'live') ? (
                    <>
                        <button
                            onClick={() => {
                                if (game.path?.startsWith('http')) {
                                    window.open(game.path, '_blank');
                                } else {
                                    onSelect(game);
                                }
                            }}
                            className="flex-1 py-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white rounded-xl font-black text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-95"
                        >
                            <ExternalLink size={13} />
                            VISIT
                        </button>
                        <button
                            onClick={() => onSelect(game)}
                            className="py-2.5 px-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition-all hover:scale-[1.02]"
                        >
                            <BookOpen size={13} />
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => onSelect(game)}
                        className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02]"
                    >
                        <BookOpen size={13} className="text-purple-400" />
                        SEE DETAILS
                    </button>
                )}
            </div>
        </div>
    </div>
);

// Automation/Service slide
const ServiceSlide = ({ slide }) => {
    const Icon = slide.icon;
    const isHashLink = slide.ctaLink?.startsWith('#');
    return (
        <div className="min-w-full h-full relative p-5 flex flex-col">
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradientFrom} ${slide.gradientTo} rounded-2xl opacity-40`} />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                    <div className={`p-2.5 rounded-xl bg-slate-900/80 ${slide.iconColor}`}>
                        <Icon size={22} />
                    </div>
                    <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${slide.tagColor} border ${slide.borderColor}`}>
                        {slide.tag}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-white leading-tight">{slide.title}</h3>
                <p className="text-xs font-semibold text-slate-400 mb-3">{slide.subtitle}</p>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed flex-1 line-clamp-3">
                    {slide.description}
                </p>

                {/* Metrics */}
                <div className={`grid grid-cols-3 gap-2 my-3 p-3 rounded-xl bg-slate-900/60 border ${slide.borderColor}`}>
                    {slide.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                            <div className={`text-sm font-black ${slide.iconColor}`}>{m.value}</div>
                            <div className="text-[9px] text-slate-500 font-medium leading-tight mt-0.5">{m.label}</div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                {isHashLink ? (
                    <a
                        href={slide.ctaLink}
                        className={`w-full py-2.5 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-95 bg-gradient-to-r ${slide.gradientFrom.replace('/20', '/40')} hover:${slide.gradientFrom.replace('/20', '/60')} text-white border ${slide.borderColor}`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector(slide.ctaLink)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <Zap size={13} />
                        {slide.cta}
                    </a>
                ) : (
                    <a
                        href={slide.ctaLink}
                        target="_blank"
                        rel="noreferrer"
                        className={`w-full py-2.5 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-95 bg-gradient-to-r ${slide.gradientFrom.replace('/20', '/40')} text-white border ${slide.borderColor}`}
                    >
                        <ExternalLink size={13} />
                        {slide.cta}
                    </a>
                )}
            </div>
        </div>
    );
};

const GameCarousel = ({ games, onSelectGame, activePath }) => {
    const [index, setIndex] = useState(0);

    // Combine: automation slides first, then games
    const allSlides = [
        ...AUTOMATION_SLIDES.map(s => ({ ...s, _type: 'service' })),
        ...(games || []).map(g => ({ ...g, _type: 'game' }))
    ];

    const total = allSlides.length;
    const next = () => setIndex((prev) => (prev + 1) % total);
    const prev = () => setIndex((prev) => (prev - 1 + total) % total);

    // Auto-advance every 5s
    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [total]);

    const current = allSlides[index];

    return (
        <div className="w-full relative py-2 group">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-900/80 backdrop-blur-sm" style={{ minHeight: '360px' }}>
                <motion.div
                    className="flex h-full w-full"
                    animate={{ x: `-${index * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ display: 'flex' }}
                >
                    {allSlides.map((slide, i) => (
                        <div key={i} className="min-w-full" style={{ minHeight: '360px' }}>
                            {slide._type === 'service' ? (
                                <ServiceSlide slide={slide} />
                            ) : (
                                <GameSlide game={slide} onSelect={onSelectGame} />
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* Nav Arrows */}
                <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-cyan-500/50 z-10"
                >
                    <ChevronLeft size={18} />
                </button>
                <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-cyan-500/50 z-10"
                >
                    <ChevronRight size={18} />
                </button>
            </div>

            {/* Pagination — services get colored dots, games get grey */}
            <div className="flex justify-center gap-1.5 mt-3 flex-wrap">
                {allSlides.map((slide, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            index === i
                                ? slide._type === 'service'
                                    ? 'bg-cyan-400 w-5'
                                    : 'bg-purple-400 w-5'
                                : 'bg-slate-700 hover:bg-slate-600 w-1.5'
                        }`}
                        title={slide.title}
                    />
                ))}
            </div>

            {/* Slide type label */}
            <div className="text-center mt-1.5">
                <span className="text-[10px] text-slate-600 uppercase tracking-wider">
                    {current?._type === 'service' ? '⚡ Services & Capabilities' : '🎮 Interactive Projects'}
                </span>
            </div>
        </div>
    );
};

export default GameCarousel;
