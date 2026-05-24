import React from 'react';
import { Helmet } from 'react-helmet-async';
import SeoMeta from '../components/shared/SeoMeta';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageContext';
import { waLink } from '../data/whatsapp';
import { MessageCircle, Code2, Cpu, Gamepad2, Brain, Globe } from 'lucide-react';
import Avatar from '../components/shared/Avatar';

const T = {
    en: {
        title: 'About Anton & Megumi Joy',
        meta: '10+ years building: hardware, simulation, full-stack, AI. The story behind the studio.',
        h1: 'Anton. 10+ years. From medical firmware to AI systems for business.',
        p1: 'Megumi Joy is the studio. Anton is who runs it — and who builds what you buy. No subcontractors, no filler agencies.',
        p2: 'It started with C++ and firmware for medical sensors. Then industrial simulation leading teams. Today: full-stack systems and AI products for businesses — and game dev when the project calls for it.',
        p3: 'When you hire Megumi Joy, you hire directly the engineer who will do the work. That\'s what changes the outcome.',
        timeline: 'Career',
        t1_period: '2013 – 2018',
        t1_title: 'Hardware & Systems Integration',
        t1_desc: 'Specialist in hardware/software integration at a microsystems firm. Low-level C/C++ firmware for medical and laboratory sensor equipment. High-performance Python scripts for real-time sensor data analysis. Integration of STM32/ESP32 sensor arrays into digital twins for industrial process automation.',
        t2_period: '2020 – 2022',
        t2_title: 'Lead Simulation Engineer',
        t2_desc: 'Lead engineer at an EdTech / Industrial Sim studio. Architected realistic training environments. Led development of a 60fps transport simulator with complex NPC behaviour for industrial certification. Created C# procedural environment generators that reduced development cycle by 70%. Hardware telemetry integration into 3D engines for real-time simulation.',
        t3_period: '2023 – present',
        t3_title: 'Own studio — Megumi Joy',
        t3_desc: 'Full-stack development, applied AI products and automation for businesses. Built private management and data systems, launched a B2B Logistics Simulator in Godot 4, developed LingoQuest (EdTech with adaptive AI and integrated payments), took Sea Hunter from 3D prototype to physical production, and designed the scalable operating system for Megumi Massage (services sector). Currently developing Voicey (AI assistant) and ABAF (B2B lead generation).',
        stack: 'Technical Stack',
        langs_title: 'Languages',
        langs: 'Spanish · English · Russian · Ukrainian · Catalan',
        cta_headline: 'Sound like the engineer you need?',
        cta_btn: 'Write to Anton on WhatsApp',
    },
    es: {
        title: 'Sobre Anton & Megumi Joy',
        meta: '10+ años construyendo: hardware, simulación, full-stack, IA. La historia detrás del estudio.',
        h1: 'Anton. 10+ años. De firmware médico a sistemas IA para negocios.',
        p1: 'Megumi Joy es el estudio. Anton es quien lo dirige — y quien construye lo que tú compras. Sin subcontratas, sin agencias de relleno.',
        p2: 'Empezó con C++ y firmware para sensores médicos. Pasó por simulación industrial liderando equipos. Hoy: sistemas full-stack y productos IA para empresas — y game dev cuando el proyecto lo pide.',
        p3: 'Cuando contratas a Megumi Joy, contratas directamente al ingeniero que hará el trabajo. Eso es lo que cambia el resultado.',
        timeline: 'Trayectoria',
        t1_period: '2013 – 2018',
        t1_title: 'Hardware & Integración de Sistemas',
        t1_desc: 'Especialista en integración hardware/software en una firma de microsistemas. Firmware C/C++ de bajo nivel para sensores médicos y de laboratorio. Scripts Python de alto rendimiento para análisis de datos en tiempo real. Integración de matrices STM32/ESP32 en gemelos digitales para automatización industrial.',
        t2_period: '2020 – 2022',
        t2_title: 'Lead Simulation Engineer',
        t2_desc: 'Lead engineer en un estudio EdTech / Industrial Sim. Arquitectura de entornos de entrenamiento realistas. Lideré un simulador de transporte (60fps) con NPC complejo para certificación industrial. Generadores procedurales en C# que redujeron el ciclo de desarrollo un 70%. Integración de telemetría hardware en motores 3D.',
        t3_period: '2023 – presente',
        t3_title: 'Estudio propio — Megumi Joy',
        t3_desc: 'Desarrollo full-stack, productos IA y automatización para empresas. Construí sistemas de gestión privados, lancé el Simulador Logístico B2B en Godot 4, desarrollé LingoQuest (EdTech con IA adaptativa y pagos), llevé Sea Hunter del prototipo 3D a producción física, y diseñé el sistema operativo de Megumi Massage. Actualmente: Voicey (asistente IA) y ABAF (generación de leads B2B).',
        stack: 'Stack Técnico',
        langs_title: 'Idiomas',
        langs: 'Español · Inglés · Ruso · Ucraniano · Catalán',
        cta_headline: '¿Suena como el ingeniero que necesitas?',
        cta_btn: 'Escribir a Anton por WhatsApp',
    },
    ca: {
        title: 'Sobre Anton & Megumi Joy',
        meta: '10+ anys construint: hardware, simulació, full-stack, IA. La història darrere de l\'estudi.',
        h1: 'Anton. 10+ anys. De firmware mèdic a sistemes IA per a negocis.',
        p1: 'Megumi Joy és l\'estudi. Anton és qui el dirigeix — i qui construeix el que compres. Sense subcontractació.',
        p2: 'Va començar amb C++ i firmware per a sensors mèdics. Va passar per simulació industrial liderant equips. Avui: sistemes full-stack i productes IA per a empreses.',
        p3: 'Quan contractes Megumi Joy, contractes directament l\'enginyer que farà el treball.',
        timeline: 'Trajectòria', t1_period: '2013 – 2018', t1_title: 'Hardware & Integració de Sistemes',
        t1_desc: 'Especialista en integració hardware/software. Firmware C/C++ per a sensors mèdics. Scripts Python per a anàlisi de dades en temps real. Integració STM32/ESP32 en bessons digitals.',
        t2_period: '2020 – 2022', t2_title: 'Lead Simulation Engineer',
        t2_desc: 'Lead engineer en un estudi EdTech / Industrial Sim. Simulador de transport (60fps) amb NPC complex. Generadors procedurals en C# que van reduir el cicle de desenvolupament un 70%.',
        t3_period: '2023 – present', t3_title: 'Estudi propi — Megumi Joy',
        t3_desc: 'Full-stack, IA i automatització per a empreses. Voicey (assistent IA) i ABAF (generació de leads B2B).',
        stack: 'Stack Tècnic', langs_title: 'Idiomes', langs: 'Espanyol · Anglès · Rus · Ucraïnès · Català',
        cta_headline: 'Sona com l\'enginyer que necessites?', cta_btn: 'Escriure a Anton per WhatsApp',
    },
    ru: {
        title: 'Об Антоне & Megumi Joy',
        meta: '10+ лет разработки: hardware, симуляция, full-stack, ИИ. История за студией.',
        h1: 'Антон. 10+ лет. От медицинского firmware до ИИ-систем для бизнеса.',
        p1: 'Megumi Joy — это студия. Антон её руководит — и строит то, что вы покупаете. Без субподрядчиков.',
        p2: 'Начал с C++ и firmware для медицинских сенсоров. Прошёл через промышленную симуляцию. Сегодня: full-stack системы и ИИ продукты для бизнеса.',
        p3: 'Когда вы нанимаете Megumi Joy — вы нанимаете инженера, который будет делать работу.',
        timeline: 'Карьера', t1_period: '2013 – 2018', t1_title: 'Hardware & Интеграция систем',
        t1_desc: 'Специалист по интеграции hardware/software. Firmware C/C++ для медицинских сенсоров. Python скрипты для анализа данных в реальном времени. Интеграция STM32/ESP32 в цифровые двойники.',
        t2_period: '2020 – 2022', t2_title: 'Lead Simulation Engineer',
        t2_desc: 'Lead engineer в EdTech / Industrial Sim студии. Симулятор транспорта (60fps) с NPC поведением. Процедурные генераторы на C# сократили цикл разработки на 70%.',
        t3_period: '2023 – наст.', t3_title: 'Собственная студия — Megumi Joy',
        t3_desc: 'Full-stack, ИИ и автоматизация для бизнеса. Voicey (ИИ ассистент) и ABAF (лидогенерация B2B).',
        stack: 'Технический стек', langs_title: 'Языки', langs: 'Испанский · Английский · Русский · Украинский · Каталанский',
        cta_headline: 'Похоже на инженера, который вам нужен?', cta_btn: 'Написать Антону в WhatsApp',
    },
    uk: {
        title: 'Про Антона & Megumi Joy',
        meta: '10+ років розробки: hardware, симуляція, full-stack, ШІ. Історія за студією.',
        h1: 'Антон. 10+ років. Від медичного firmware до ШІ-систем для бізнесу.',
        p1: 'Megumi Joy — це студія. Антон її керує — і будує те, що ви купуєте. Без субпідрядників.',
        p2: 'Почав з C++ і firmware для медичних сенсорів. Пройшов через промислову симуляцію. Сьогодні: full-stack системи і ШІ продукти для бізнесу.',
        p3: 'Коли ви наймаєте Megumi Joy — ви наймаєте інженера, який буде робити роботу.',
        timeline: 'Кар\'єра', t1_period: '2013 – 2018', t1_title: 'Hardware & Інтеграція систем',
        t1_desc: 'Спеціаліст з інтеграції hardware/software. Firmware C/C++ для медичних сенсорів. Python скрипти для аналізу даних в реальному часі.',
        t2_period: '2020 – 2022', t2_title: 'Lead Simulation Engineer',
        t2_desc: 'Lead engineer в EdTech / Industrial Sim студії. Симулятор транспорту (60fps) з NPC поведінкою. Процедурні генератори на C# скоротили цикл розробки на 70%.',
        t3_period: '2023 – тепер', t3_title: 'Власна студія — Megumi Joy',
        t3_desc: 'Full-stack, ШІ та автоматизація для бізнесу. Voicey (ШІ асистент) та ABAF (лідогенерація B2B).',
        stack: 'Технічний стек', langs_title: 'Мови', langs: 'Іспанська · Англійська · Російська · Українська · Каталанська',
        cta_headline: 'Схоже на інженера, який вам потрібен?', cta_btn: 'Написати Антону у WhatsApp',
    },
};

const STACK = [
    { label: 'Frontend & Web', icon: Code2, tags: ['React', 'Next.js', 'TypeScript', 'WebGL', 'Three.js'] },
    { label: 'Backend & APIs', icon: Brain, tags: ['Python 3.12', 'FastAPI', 'Django', 'gRPC', 'PostgreSQL'] },
    { label: 'Infra', icon: Globe, tags: ['Docker', 'Kubernetes', 'GitLab CI', 'Supabase', 'Caddy'] },
    { label: 'Game / Sim', icon: Gamepad2, tags: ['Godot 4', 'Unity HDRP', 'Blender', 'C#'] },
    { label: 'Hardware / Embedded', icon: Cpu, tags: ['C/C++', 'STM32', 'ESP32', 'Raspberry Pi'] },
    { label: 'AI / ML', icon: Brain, tags: ['Multi-LLM', 'Fine-tuning', 'Operative agents', 'RAG'] },
];

const TIMELINE = ['t1', 't2', 't3'];

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

export default function Sobre() {
    const { language } = useLanguage();
    const t = T[language] || T.es;

    return (
        <div data-lobby="default">
            <Helmet>
                <title>{t.title} · Megumi Joy</title>
                <meta name="description" content={t.meta} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={t.title + ' · Megumi Joy'} />
                <meta property="og:description" content={t.meta} />
                <meta property="og:image" content="/og-sobre.png" />
                <meta property="og:url" content="https://portfolio.voicydroid.com/#/sobre" />
                <meta property="og:site_name" content="Megumi Joy" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t.title + ' · Megumi Joy'} />
                <meta name="twitter:description" content={t.meta} />
                <meta name="twitter:image" content="/og-sobre.png" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Anton",
                    "jobTitle": "Software Engineer & Studio Founder",
                    "worksFor": { "@type": "Organization", "name": "Megumi Joy", "url": "https://portfolio.voicydroid.com/" },
                    "knowsAbout": ["AI systems", "Full-stack development", "Game development", "Industrial simulation", "Embedded systems"],
                    "knowsLanguage": ["Spanish", "English", "Russian", "Ukrainian", "Catalan"],
                })}</script>
            </Helmet>

            {/* Hero */}
            <section className="max-w-4xl mx-auto px-6 pt-24 pb-16">
                <motion.div {...fade}>
                    {/* TODO_ANTON_CONFIRM: replace Avatar with real photo — set src in Avatar.jsx or pass src prop */}
                    <div className="flex items-center gap-6 mb-8">
                        <Avatar size={80} />
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">{t.h1}</h1>
                    </div>
                    <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                        <p>{t.p1}</p>
                        <p>{t.p2}</p>
                        <p className="font-medium text-slate-700 dark:text-white">{t.p3}</p>
                    </div>
                </motion.div>
            </section>

            {/* Timeline */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <motion.h2 {...fade} className="section-title mb-12">{t.timeline}</motion.h2>
                <div className="space-y-8">
                    {TIMELINE.map((key, i) => (
                        <motion.div key={key} {...fade} transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="flex gap-6 group">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full bg-[rgb(var(--accent-rgb,6,182,212))] mt-1.5 flex-shrink-0" />
                                {i < 2 && <div className="w-px flex-1 bg-slate-200 dark:bg-slate-700 mt-2" />}
                            </div>
                            <div className="pb-8">
                                <span className="text-xs font-bold uppercase tracking-widest text-[rgb(var(--accent-rgb,6,182,212))] mb-1 block">{t[`${key}_period`]}</span>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t[`${key}_title`]}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{t[`${key}_desc`]}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Stack */}
            <section className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-200/50 dark:border-slate-700/30">
                <motion.h2 {...fade} className="section-title mb-10">{t.stack}</motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {STACK.map(({ label, icon: Icon, tags }) => (
                        <motion.div key={label} {...fade} className="space-y-3">
                            <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                                <Icon size={15} className="text-[rgb(var(--accent-rgb,6,182,212))]" />
                                {label}
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {tags.map(tag => (
                                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Languages */}
            <section className="max-w-4xl mx-auto px-6 py-10">
                <motion.div {...fade} className="flex items-center gap-3">
                    <Globe size={16} className="text-[rgb(var(--accent-rgb,6,182,212))] flex-shrink-0" />
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{t.langs_title}:</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{t.langs}</span>
                </motion.div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <motion.div {...fade} className="text-center space-y-6">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">{t.cta_headline}</h2>
                    <a href={waLink('hub')} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base transition-all hover:scale-105 shadow-lg">
                        <MessageCircle size={18} fill="currentColor" />
                        {t.cta_btn}
                    </a>
                </motion.div>
            </section>
        </div>
    );
}
