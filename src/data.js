import { Github, Linkedin, Mail, Cpu, Gamepad2, Globe, Server, Terminal, Layers, Cuboid } from 'lucide-react';

const COMMON_SKILLS = [
    { name: "C++ & Embedded", icon: Cpu, level: "Advanced" },
    { name: "Python (High Perf)", icon: Server, level: "Advanced" },
    { name: "Simulation (Unity/Godot)", icon: Gamepad2, level: "Expert" },
    { name: "React & Systems", icon: Globe, level: "Advanced" },
    { name: "DevOps & CI/CD", icon: Terminal, level: "Intermediate" },
    { name: "Architecture", icon: Layers, level: "Intermediate" },
];

const COMMON_LANGUAGES = [
    { name: "English", level: "C1" },
    { name: "Spanish", level: "B2" },
    { name: "Russian", level: "Native" },
    { name: "Ukrainian", level: "Native" },
];

const SOCIALS = {
    github: "https://github.com/aurorasunrisegames",
    linkedin: "https://linkedin.com/in/anton-developer",
    email: "aurorasunrisegames@gmail.com",
};

const BASE_PROFILE = {
    name: "Anton",
    title: "Creative Technologist & Simulation Engineer",
    about: "A multidisciplinary Engineer specializing in high-performance simulation, robotics tooling, and scalable software architecture. With a strong foundation in both C++ hardware interfacing and modern web systems, I bridge the gap between physical constraints and digital twins. Proven track record in optimizing rendering pipelines, designing agentic AI behaviors, and automating complex dev-ops workflows.",
    socials: SOCIALS,
    skills: COMMON_SKILLS,
    languages: COMMON_LANGUAGES,
    education: [
        {
            institution: "Odesa State Academy of Refrigeration",
            degree: "Master's in AI & Neural Networks",
            period: "2018 - 2020",
            location: "Odesa, Ukraine"
        },
        {
            institution: "Odesa State Academy of Refrigeration",
            degree: "Bachelor's in Control Systems & Electronics",
            period: "2014 - 2018",
            location: "Odesa, Ukraine"
        }
    ],
    experience: [
        {
            role: "R&D Simulation Engineer",
            company: "Freelance / Contract",
            period: "Present",
            description: "Designing high-fidelity simulation environments and networked systems.",
            achievements: [
                "Architected a custom P2P networking protocol over WebRTC/WebSocket for low-latency state synchronization in distributed simulations.",
                "Developing 'Agentic AI' utilizing hierarchical state machines and pathfinding algorithms for autonomous entity navigation.",
                "Implemented rigorous CI/CD pipelining for cross-platform builds, ensuring stability across Linux, Windows, and Web targets."
            ],
            technologies: ["C++", "Godot 4", "Networking", "AI Algorithms"]
        },
        {
            role: "Simulation Software Engineer",
            company: "EdTech / Sim Studio",
            period: "2020 - 2022",
            description: "Led engineering for a photorealistic Traffic Simulator used in driver training.",
            achievements: [
                "Engineered a photorealistic rendering pipeline (Unity HDRP) processing 500+ dynamic scenarios with strict frame-time budgets.",
                "Developed internal C# tooling for procedural environment generation, reducing scene assembly time by ~70%.",
                "Optimized physics calculations and asset streaming to maintain 60 FPS on mid-range hardware."
            ],
            technologies: ["C#", "Unity HDRP", "Procedural Generation", "Optimization"]
        },
        {
            role: "Full Stack Systems Engineer",
            company: "Various Clients",
            period: "Recent",
            description: "Delivered high-performance data processing tools and web architectures.",
            achievements: [
                "Built a real-time Data Dashboard visualizing 10k+ telemetry points with sub-second latency using React and optimized data structures.",
                "Wrote a custom asynchronous Python backend (asyncio) handling 200+ concurrent connections with minimal overhead.",
                "Containerized deployment workflows using Docker and AWS, achieving 99.9% uptime for critical services."
            ],
            technologies: ["Python (Asyncio)", "React", "Docker", "AWS", "Systems Design"]
        },
        {
            role: "Embedded Systems Engineer",
            company: "Microelectronics Firm",
            period: "Early Career",
            description: "Developed firmware and software for medical testing hardware.",
            achievements: [
                "Programmed STM32/Arduino microcontrollers for precise sensor data acquisition in medical devices.",
                "Bridged hardware inputs with a custom Unity visualizer for real-time operator feedback.",
                "Designed PCB layouts and managed manufacturing processes for prototype production runs."
            ],
            technologies: ["C++", "STM32", "Embedded C", "PCB Design"]
        }
    ],
    projects: [
        {
            title: "Networked Physics Engine Prototype",
            description: "A research prototype exploring server-authoritative physics synchronization and client-side prediction algorithms.",
            featured: true,
            tags: ["C++", "Networking", "Physics"],
            link: "https://megumi-joy.github.io/portfolio/"
        },
        {
            title: "Procedural Vegetation Tool",
            description: "A plugin for automating large-scale environment placement, utilizing spatial hashing and GPU instancing for performance.",
            featured: true,
            tags: ["C#", "Graphics", "Tooling"],
            link: null
        },
        {
            title: "Inventory Architecture",
            description: "A memory-efficient, data-oriented inventory system design supporting complex item composition and serialization.",
            featured: false,
            tags: ["Data Structures", "Architecture"],
            link: "https://github.com/aurorasunrisegames/InventorySystem"
        }
    ],
    games: [
        {
            title: "Low-Poly City Delivery",
            description: "A delivery simulation game set in a low-poly city environment.",
            thumbnail: "/games/Low-Poly City Delivery/index.png",
            path: "/portfolio/games/Low-Poly City Delivery/index.html",
            tags: ["Godot", "Simulation", "WebGL"],
            status: "playable",
            gdd: {
                overview: "Deliver packages in a vibrant low-poly city against the clock.",
                mechanics: ["Vehicle physics", "Pick up/Drop off system", "Timer system"],
                features: ["Open world city", "Traffic AI", "Destructible props"]
            }
        },
        {
            title: "Magic Balls Adventure",
            description: "A magical adventure game featuring physics-based puzzles.",
            thumbnail: "/games/magicballsadventure/index.png",
            path: "/portfolio/games/magicballsadventure/index.html",
            tags: ["Godot", "Adventure", "WebGL"],
            status: "playable",
            gdd: {
                overview: "Solve physics puzzles using magical balls with different properties.",
                mechanics: ["Physics interaction", "Ball transformation", "Platforming"],
                features: ["Different ball types", "Puzzle levels", "Magical atmosphere"]
            }
        },
        {
            title: "VoicyGodot",
            description: "real-time voice changer and audio processing tool built with Godot.",
            thumbnail: "/games/VoicyGodot/index.icon.png",
            path: "/portfolio/games/VoicyGodot/index.html",
            tags: ["Godot", "Audio", "Tool"],
            status: "playable",
            gdd: {
                overview: "Real-time voice modulation tool running entirely in the browser using Godot.",
                mechanics: ["Audio buffer processing", "Pitch shifting", "Formant correction"],
                features: ["Microphone input", "Real-time effects", "Visualizer"]
            }
        },
        {
            title: "Space Shooter",
            description: "Classic arcade space shooter with modern graphics.",
            thumbnail: "https://placehold.co/600x400/1e293b/3b82f6?text=Space+Shooter",
            path: null,
            tags: ["Godot", "Arcade", "Developing"],
            status: "developing",
            gdd: {
                overview: "Fast-paced space shooter where you defend against waves of alien invaders.",
                mechanics: ["Shooting", "Power-ups", "Enemy waves"],
                features: ["Boss fights", "Ship upgrades", "Score system"]
            }
        },
        {
            title: "Karting",
            description: "High-speed kart racing game with power-ups.",
            thumbnail: "https://placehold.co/600x400/1e293b/3b82f6?text=Karting",
            path: null,
            tags: ["Godot", "Racing", "Developing"],
            status: "developing",
            gdd: {
                overview: "Competitive kart racing game with drift mechanics and items.",
                mechanics: ["Drifting", "Item usage", "Lap system"],
                features: ["Multiple tracks", "Character selection", "Local multiplayer"]
            }
        },
        {
            title: "Farming",
            description: "Relaxing farming simulation and management game.",
            thumbnail: "https://placehold.co/600x400/1e293b/3b82f6?text=Farming",
            path: null,
            tags: ["Godot", "Simulation", "Developing"],
            status: "developing",
            gdd: {
                overview: "Manage your farm, grow crops, and raise animals in a cozy environment.",
                mechanics: ["Planting/Harvesting", "Inventory management", "Day/Night cycle"],
                features: ["Crop variety", "Animal husbandry", "Market system"]
            }
        }
    ],
    plans: {
        title: "Roadmap & Current Focus",
        description: "Here is what I am currently working on and planning for the near future.",
        items: [
            {
                status: "In Progress",
                title: "Advanced Agentic AI Research",
                description: "Exploring multi-agent systems and recursive self-improvement loops using Godot and LLMs.",
                subItems: ["Implementing memory context", "Designing tool use protocols", "Testing in 3D environments"],
                link: "https://github.com/aurorasunrisegames",
                date: "Q1 2026"
            },
            {
                status: "Planned",
                title: "Open Source Godot Toolset",
                description: "Releasing a collection of GDScript utilities for procedural generation and AI behaviors.",
                date: "Q2 2026"
            },
            {
                status: "Idea",
                title: "Interactive Portfolio V2",
                description: "Gamifying this portfolio where users can walk around a 3D environment to view projects.",
                date: "Future"
            }
        ]
    }
};

// Text Translations
const TRANSLATIONS = {
    en: {
        resume: "Resume",
        download: "Download PDF",
        preview: "Preview",
        source: "LaTeX Source",
        openNew: "Open in New Tab",
        builtWith: "Powered by React-PDF & LaTeX",
        stats: { roles: "Roles", projects: "Projects" },
        export: "Export",
        exportDesc: "ATS-friendly PDF generated on the fly.",
        contact: "Contact Me",
        viewProject: "View Project",
        featured: "Featured",
        skillsTitle: "Technical Arsenal",
        plansTitle: "Roadmap & Current Focus",
        contactTitle: "Let's Build Something Amazing",
        contactText: "I'm currently open to new opportunities in Game Development, Simulation Engineering, or Full Stack Web Development.",
        contactButton: "Say Hello",
        welcome: "Welcome to my portfolio",
        hello: "Hello, I'm",
        viewDetails: "View Details",
        openInNewTab: "Open in New Tab",
        prototypesTitle: "Godot Engine Prototypes"
    },
    es: {
        resume: "Currículum",
        download: "Descargar PDF",
        preview: "Vista Previa",
        source: "Código LaTeX",
        openNew: "Abrir en nueva pestaña",
        builtWith: "Desarrollado con React-PDF y LaTeX",
        stats: { roles: "Roles", projects: "Proyectos" },
        export: "Exportar",
        exportDesc: "PDF amigable para ATS generado al vuelo.",
        contact: "Contáctame",
        viewProject: "Ver Proyecto",
        featured: "Destacado",
        skillsTitle: "Arsenal Técnico",
        plansTitle: "Hoja de Ruta y Foco Actual",
        contactTitle: "Construyamos Algo Increíble",
        contactText: "Actualmente estoy abierto a nuevas oportunidades en Desarrollo de Juegos, Ingeniería de Simulación o Desarrollo Web Full Stack.",
        contactButton: "Di Hola",
        welcome: "Bienvenido a mi portafolio",
        hello: "Hola, soy",
        viewDetails: "Ver Detalles",
        openInNewTab: "Abrir en nueva pestaña",
        prototypesTitle: "Prototipos en Godot Engine"
    },
    ru: {
        resume: "Резюме",
        download: "Скачать PDF",
        preview: "Предпросмотр",
        source: "Исходный код LaTeX",
        openNew: "Открыть в новой вкладке",
        builtWith: "Создано на React-PDF и LaTeX",
        stats: { roles: "Роли", projects: "Проекты" },
        export: "Экспорт",
        exportDesc: "PDF для ATS, созданный на лету.",
        contact: "Связаться",
        viewProject: "Смотреть проект",
        featured: "Избранное",
        skillsTitle: "Технический Арсенал",
        plansTitle: "Планы и Текущий Фокус",
        contactTitle: "Давайте Создадим Что-то Удивительное",
        contactText: "Я открыт для новых возможностей в разработке игр, инженерии симуляций или Full Stack веб-разработке.",
        contactButton: "Поздороваться",
        welcome: "Добро пожаловать в мое портфолио",
        hello: "Привет, я",
        viewDetails: "Подробнее",
        openInNewTab: "Открыть в новой вкладке",
        prototypesTitle: "Прототипы на Godot Engine"
    },
    uk: {
        resume: "Резюме",
        download: "Завантажити PDF",
        preview: "Попередній перегляд",
        source: "Вихідний код LaTeX",
        openNew: "Відкрити у новій вкладці",
        builtWith: "Створено на React-PDF та LaTeX",
        stats: { roles: "Ролі", projects: "Проєкти" },
        export: "Експорт",
        exportDesc: "PDF для ATS, створений на льоту.",
        contact: "Зв'язатися",
        viewProject: "Дивитися проєкт",
        featured: "Вибране",
        skillsTitle: "Технічний Арсенал",
        plansTitle: "Плани та Поточний Фокус",
        contactTitle: "Створимо Щось Дивовижне",
        contactText: "Я відкритий для нових можливостей у розробці ігор, інженерії симуляцій або Full Stack веб-розробці.",
        contactText: "Я відкритий для нових можливостей у розробці ігор, інженерії симуляцій або Full Stack веб-розробці.",
        contactButton: "Привітатися",
        welcome: "Ласкаво просимо до мого портфоліо",
        hello: "Привіт, я",
        viewDetails: "Детальніше",
        openInNewTab: "Відкрити у новій вкладці",
        prototypesTitle: "Прототипи на Godot Engine"
    },
};

// Data Translations
export const PROFILES = {
    en: { ...BASE_PROFILE, ui: TRANSLATIONS.en },
    es: {
        name: "Anton",
        title: "Tecnólogo Creativo e Ingeniero de Simulación",
        about: "Ingeniero multidisciplinario especializado en simulaciones de alto rendimiento, herramientas de robótica y arquitectura de software escalable. Con una base sólida tanto en interfaces de hardware C++ como en sistemas web modernos, uno las limitaciones físicas con gemelos digitales. Historial comprobado en optimización de tuberías de renderizado, diseño de comportamientos de IA agéntica y automatización de flujos de trabajo dev-ops complejos.",
        socials: SOCIALS,
        skills: COMMON_SKILLS,
        languages: COMMON_LANGUAGES,
        education: [
            {
                institution: "Academia Estatal de Refrigeración de Odesa",
                degree: "Máster en IA y Redes Neuronales",
                period: "2018 - 2020",
                location: "Odesa, Ucrania"
            },
            {
                institution: "Academia Estatal de Refrigeración de Odesa",
                degree: "Licenciatura en Sistemas de Control y Electrónica",
                period: "2014 - 2018",
                location: "Odesa, Ucrania"
            }
        ],
        experience: [
            {
                role: "Ingeniero de Simulación I+D",
                company: "Freelance / Contrato",
                period: "Presente",
                description: "Diseño de entornos de simulación de alta fidelidad y sistemas en red.",
                achievements: [
                    "Arquitecto de un protocolo de red P2P personalizado sobre WebRTC/WebSocket para sincronización de estado de baja latencia en simulaciones distribuidas.",
                    "Desarrollo de comportamientos de 'IA Agéntica' utilizando máquinas de estado jerárquicas y algoritmos de búsqueda de caminos.",
                    "Implementación de tuberías CI/CD rigurosas para compilaciones multiplataforma, asegurando estabilidad en Linux, Windows y Web."
                ],
                technologies: ["C++", "Godot 4", "Networking", "Algoritmos de IA"]
            },
            {
                role: "Ingeniero de Software de Simulación",
                company: "EdTech / Sim Studio",
                period: "2020 - 2022",
                description: "Líder de ingeniería para un Simulador de Tráfico fotorrealista usado en entrenamiento de conductores.",
                achievements: [
                    "Ingeniería de una tubería de renderizado fotorrealista (Unity HDRP) procesando más de 500 escenarios dinámicos con estrictos presupuestos de tiempo de cuadro.",
                    "Desarrollo de herramientas internas en C# para generación procedimental de entornos, reduciendo el tiempo de ensamblaje de escenas en ~70%.",
                    "Optimización de cálculos físicos y transmisión de activos para mantener 60 FPS en hardware de gama media."
                ],
                technologies: ["C#", "Unity HDRP", "Generación Procedimental", "Optimización"]
            },
            {
                role: "Ingeniero de Sistemas Full Stack",
                company: "Varios Clientes",
                period: "Reciente",
                description: "Entrega de herramientas de procesamiento de datos de alto rendimiento y arquitecturas web.",
                achievements: [
                    "Construcción de un Panel de Datos en tiempo real visualizando más de 10k puntos de telemetría con latencia sub-segundo usando React y estructuras de datos optimizadas.",
                    "Escritura de un backend asíncrono personalizado en Python (asyncio) manejando 200+ conexiones concurrentes con sobrecarga mínima.",
                    "Contenerización de flujos de trabajo de implementación usando Docker y AWS, logrando 99.9% de tiempo de actividad para servicios críticos."
                ],
                technologies: ["Python (Asyncio)", "React", "Docker", "AWS", "Diseño de Sistemas"]
            },
            {
                role: "Ingeniero de Sistemas Embebidos",
                company: "Firma de Microelectrónica",
                period: "Inicio de Carrera",
                description: "Desarrollo de firmware y software para hardware de pruebas médicas.",
                achievements: [
                    "Programación de microcontroladores STM32/Arduino para adquisición precisa de datos de sensores en dispositivos médicos.",
                    "Puente entre entradas de hardware y un visualizador Unity personalizado para retroalimentación del operador en tiempo real.",
                    "Diseño de esquemas PCB y gestión de procesos de fabricación para corridas de prototipos."
                ],
                technologies: ["C++", "STM32", "C Embebido", "Diseño de PCB"]
            }
        ],
        projects: [
            {
                title: "Prototipo de Motor Físico en Red",
                description: "Un prototipo de investigación explorando sincronización física autoritativa del servidor y algoritmos de predicción del lado del cliente.",
                featured: true,
                tags: ["C++", "Networking", "Física"],
                link: "https://megumi-joy.github.io/portfolio/"
            },
            {
                title: "Herramienta de Vegetación Procedimental",
                description: "Un plugin para automatizar la colocación de entornos a gran escala, utilizando hash espacial e instanciación de GPU para rendimiento.",
                featured: true,
                tags: ["C#", "Gráficos", "Herramientas"],
                link: null
            },
            {
                title: "Arquitectura de Inventario",
                description: "Un diseño de sistema de inventario orientado a datos y eficiente en memoria que soporta composición compleja de ítems y serialización.",
                featured: false,
                tags: ["Estructuras de Datos", "Arquitectura"],
                link: "https://github.com/aurorasunrisegames/InventorySystem"
            }
        ],
        games: [
            {
                title: "Low-Poly City Delivery",
                description: "Un juego de simulación de entrega ambientado en una ciudad low-poly.",
                thumbnail: "/games/Low-Poly City Delivery/index.png",
                path: "/portfolio/games/Low-Poly City Delivery/index.html",
                tags: ["Godot", "Simulación", "WebGL"],
                status: "playable",
                gdd: {
                    overview: "Entrega paquetes en una ciudad low-poly vibrante contra el reloj.",
                    mechanics: ["Física de vehículos", "Sistema de recogida/entrega", "Sistema de temporizador"],
                    features: ["Ciudad de mundo abierto", "IA de tráfico", "Accesorios destructibles"]
                }
            },
            {
                title: "Magic Balls Adventure",
                description: "Una aventura mágica con rompecabezas basados en física.",
                thumbnail: "/games/magicballsadventure/index.png",
                path: "/portfolio/games/magicballsadventure/index.html",
                tags: ["Godot", "Aventura", "WebGL"],
                status: "playable",
                gdd: {
                    overview: "Resuelve acertijos físicos usando bolas mágicas con diferentes propiedades.",
                    mechanics: ["Interacción física", "Transformación de bola", "Plataformas"],
                    features: ["Diferentes tipos de bolas", "Niveles de rompecabezas", "Atmósfera mágica"]
                }
            },
            {
                title: "VoicyGodot",
                description: "Cambiador de voz en tiempo real y herramienta de procesamiento de audio construida con Godot.",
                thumbnail: "/games/VoicyGodot/index.icon.png",
                path: "/portfolio/games/VoicyGodot/index.html",
                tags: ["Godot", "Audio", "Herramienta"],
                status: "playable",
                gdd: {
                    overview: "Herramienta de modulación de voz en tiempo real que se ejecuta completamente en el navegador usando Godot.",
                    mechanics: ["Procesamiento de búfer de audio", "Cambio de tono", "Corrección de formantes"],
                    features: ["Entrada de micrófono", "Efectos en tiempo real", "Visualizador"]
                }
            },
            {
                title: "Space Shooter",
                description: "Clásico juego de disparos espacial arcade con gráficos modernos.",
                thumbnail: "https://placehold.co/600x400/1e293b/3b82f6?text=Space+Shooter",
                path: null,
                tags: ["Godot", "Arcade", "Desarrollando"],
                status: "developing",
                gdd: {
                    overview: "Juego de disparos espacial de ritmo rápido donde defiendes contra oleadas de invasores alienígenas.",
                    mechanics: ["Disparos", "Power-ups", "Oleadas de enemigos"],
                    features: ["Peleas contra jefes", "Mejoras de nave", "Sistema de puntuación"]
                }
            },
            {
                title: "Karting",
                description: "Juego de carreras de karts de alta velocidad con power-ups.",
                thumbnail: "https://placehold.co/600x400/1e293b/3b82f6?text=Karting",
                path: null,
                tags: ["Godot", "Carreras", "Desarrollando"],
                status: "developing",
                gdd: {
                    overview: "Juego de carreras de karts competitivo con mecánicas de derrape y objetos.",
                    mechanics: ["Derrape", "Uso de objetos", "Sistema de vueltas"],
                    features: ["Múltiples pistas", "Selección de personajes", "Multijugador local"]
                }
            },
            {
                title: "Farming",
                description: "Relajante juego de simulación y gestión de granjas.",
                thumbnail: "https://placehold.co/600x400/1e293b/3b82f6?text=Farming",
                path: null,
                tags: ["Godot", "Simulación", "Desarrollando"],
                status: "developing",
                gdd: {
                    overview: "Gestiona tu granja, cultiva cosechas y cría animales en un ambiente acogedor.",
                    mechanics: ["Plantación/Cosecha", "Gestión de inventario", "Ciclo día/noche"],
                    features: ["Variedad de cultivos", "Cría de animales", "Sistema de mercado"]
                }
            }
        ],
        ui: TRANSLATIONS.es,
        plans: {
            title: "Hoja de Ruta y Foco Actual",
            description: "En qué estoy trabajando actualmente y planeando para el futuro cercano.",
            items: [
                {
                    status: "En Progreso",
                    title: "Investigación Avanzada de IA Agéntica",
                    description: "Explorando sistemas multi-agente y bucles de auto-mejora recursiva usando Godot y LLMs.",
                    subItems: ["Implementando contexto de memoria", "Diseñando protocolos de uso de herramientas", "Pruebas en entornos 3D"],
                    link: "https://github.com/aurorasunrisegames",
                    date: "T1 2026"
                },
                {
                    status: "Planeado",
                    title: "Herramientas Godot Open Source",
                    description: "Lanzamiento de utilidades GDScript para generación procedimental y comportamientos de IA.",
                    date: "T2 2026"
                },
                {
                    status: "Idea",
                    title: "Portafolio Interactivo V2",
                    description: "Gamificación de este portafolio donde los usuarios pueden caminar en un entorno 3D.",
                    date: "Futuro"
                }
            ]
        }
    },
    ru: {
        name: "Антон",
        title: "Креативный Технолог и Инженер Симуляций",
        about: "Мультидисциплинарный инженер, специализирующийся на высокопроизводительных симуляциях, инструментах для робототехники и масштабируемой архитектуре ПО. Обладая прочным фундаментом как в интерфейсах C++, так и в современных веб-системах, я объединяю физические ограничения с цифровыми двойниками. Доказанный опыт в оптимизации конвейеров рендеринга, проектировании поведения агентного ИИ и автоматизации сложных dev-ops процессов.",
        socials: SOCIALS,
        skills: COMMON_SKILLS,
        languages: COMMON_LANGUAGES,
        education: [
            {
                institution: "Одесская государственная академия холода",
                degree: "Магистр в области ИИ и нейронных сетей",
                period: "2018 - 2020",
                location: "Одесса, Украина"
            },
            {
                institution: "Одесская государственная академия холода",
                degree: "Бакалавр в области систем управления и электроники",
                period: "2014 - 2018",
                location: "Одесса, Украина"
            }
        ],
        experience: [
            {
                role: "R&D Инженер Симуляций",
                company: "Фриланс / Контракт",
                period: "Настоящее время",
                description: "Проектирование высокоточных сред симуляции и сетевых систем.",
                achievements: [
                    "Архитектура кастомного P2P сетевого протокола через WebRTC/WebSocket для синхронизации состояния с низкой задержкой в распределенных симуляциях.",
                    "Разработка поведения 'Агентного ИИ' с использованием иерархических конечных автоматов и алгоритмов поиска пути.",
                    "Внедрение строгих CI/CD пайплайнов для кроссплатформенных сборок, обеспечение стабильности на Linux, Windows и Web."
                ],
                technologies: ["C++", "Godot 4", "Networking", "AI Algorithms"]
            },
            {
                role: "Инженер ПО для Симуляций",
                company: "EdTech / Sim Studio",
                period: "2020 - 2022",
                description: "Ведущий инженер фотореалистичного симулятора трафика для обучения водителей.",
                achievements: [
                    "Разработка конвейера фотореалистичного рендеринга (Unity HDRP), обрабатывающего 500+ динамических сценариев со строгим бюджетом времени кадра.",
                    "Создание внутренних инструментов на C# для процедурной генерации окружения, сократившее время сборки сцен на ~70%.",
                    "Оптимизация физических вычислений и стриминга ассетов для поддержки 60 FPS на среднем оборудовании."
                ],
                technologies: ["C#", "Unity HDRP", "Procedural Generation", "Optimization"]
            },
            {
                role: "Full Stack Системный Инженер",
                company: "Разные Клиенты",
                period: "Недавнее",
                description: "Разработка высокопроизводительных инструментов обработки данных и веб-архитектур.",
                achievements: [
                    "Создание Real-time дашборда данных, визуализирующего 10k+ точек телеметрии с задержкой менее секунды (React).",
                    "Написание кастомного асинхронного бэкенда на Python (asyncio), обрабатывающего 200+ одновременных подключений с минимальными накладными расходами.",
                    "Контейнеризация процессов развертывания с использованием Docker и AWS, достижение 99.9% аптайма для критических сервисов."
                ],
                technologies: ["Python (Asyncio)", "React", "Docker", "AWS", "Systems Design"]
            },
            {
                role: "Инженер Встроенных Систем",
                company: "Микроэлектроника",
                period: "Начало Карьеры",
                description: "Разработка прошивок и ПО для медицинского испытательного оборудования.",
                achievements: [
                    "Программирование микроконтроллеров STM32/Arduino для точного сбора данных с датчиков в медицинских устройствах.",
                    "Связывание аппаратных входов с кастомным Unity визуализатором для обратной связи оператора в реальном времени.",
                    "Проектирование печатных плат (PCB) и управление процессами производства прототипов."
                ],
                technologies: ["C++", "STM32", "Embedded C", "PCB Design"]
            }
        ],
        projects: [
            {
                title: "Прототип Сетевого Физического Движка",
                description: "Исследовательский прототип, исследующий серверно-авторитетную синхронизацию физики и алгоритмы предсказания на стороне клиента.",
                featured: true,
                tags: ["C++", "Networking", "Physics"],
                link: "https://megumi-joy.github.io/portfolio/"
            },
            {
                title: "Инструмент Процедурной Растительности",
                description: "Плагин для автоматизации размещения окружения большого масштаба, использующий пространственное хеширование и GPU инстансинг.",
                featured: true,
                tags: ["C#", "Graphics", "Tooling"],
                link: null
            },
            {
                title: "Архитектура Инвентаря",
                description: "Дизайн системы инвентаря, ориентированный на данные и эффективный по памяти, поддерживающий сложную композицию предметов и сериализацию.",
                featured: false,
                tags: ["Data Structures", "Architecture"],
                link: "https://github.com/aurorasunrisegames/InventorySystem"
            }
        ],
        games: [
            {
                title: "Low-Poly City Delivery",
                description: "Симулятор доставки в низкополигональном городе.",
                thumbnail: "/games/Low-Poly City Delivery/index.png",
                path: "/portfolio/games/Low-Poly City Delivery/index.html",
                tags: ["Godot", "Симулятор", "WebGL"],
                status: "playable",
                gdd: {
                    overview: "Доставляйте посылки в ярком низкополигональном городе на время.",
                    mechanics: ["Физика транспорта", "Система подбора/доставки", "Таймер"],
                    features: ["Открытый мир", "ИИ трафика", "Разрушаемые объекты"]
                }
            },
            {
                title: "Magic Balls Adventure",
                description: "Волшебное приключение с физическими головоломками.",
                thumbnail: "/games/magicballsadventure/index.png",
                path: "/portfolio/games/magicballsadventure/index.html",
                tags: ["Godot", "Приключения", "WebGL"],
                status: "playable",
                gdd: {
                    overview: "Решайте физические головоломки, используя волшебные шары с различными свойствами.",
                    mechanics: ["Физическое взаимодействие", "Трансформация шара", "Платформинг"],
                    features: ["Разные виды шаров", "Уровни-головоломки", "Волшебная атмосфера"]
                }
            },
            {
                title: "VoicyGodot",
                description: "Инструмент для изменения голоса и обработки аудио в реальном времени, созданный на Godot.",
                thumbnail: "/games/VoicyGodot/index.icon.png",
                path: "/portfolio/games/VoicyGodot/index.html",
                tags: ["Godot", "Аудио", "Инструмент"],
                status: "playable",
                gdd: {
                    overview: "Инструмент модуляции голоса в реальном времени, работающий полностью в браузере на Godot.",
                    mechanics: ["Обработка аудиобуфера", "Изменение высоты тона", "Коррекция формант"],
                    features: ["Вход с микрофона", "Эффекты в реальном времени", "Визуализатор"]
                }
            },
            {
                title: "Space Shooter",
                description: "Классический аркадный космический шутер с современной графикой.",
                thumbnail: "https://placehold.co/600x400/1e293b/3b82f6?text=Space+Shooter",
                path: null,
                tags: ["Godot", "Аркада", "В разработке"],
                status: "developing",
                gdd: {
                    overview: "Динамичный космический шутер, где вы защищаетесь от волн инопланетных захватчиков.",
                    mechanics: ["Стрельба", "Усиления", "Волны врагов"],
                    features: ["Битвы с боссами", "Улучшения корабля", "Система очков"]
                }
            },
            {
                title: "Karting",
                description: "Высокоскоростные гонки на картингах с усилениями.",
                thumbnail: "https://placehold.co/600x400/1e293b/3b82f6?text=Karting",
                path: null,
                tags: ["Godot", "Гонки", "В разработке"],
                status: "developing",
                gdd: {
                    overview: "Соревновательные гонки на картингах с механикой дрифта и предметами.",
                    mechanics: ["Дрифт", "Использование предметов", "Система кругов"],
                    features: ["Множество трасс", "Выбор персонажа", "Локальный мультиплеер"]
                }
            },
            {
                title: "Farming",
                description: "Расслабляющий симулятор фермы и управления.",
                thumbnail: "https://placehold.co/600x400/1e293b/3b82f6?text=Farming",
                path: null,
                tags: ["Godot", "Симулятор", "В разработке"],
                status: "developing",
                gdd: {
                    overview: "Управляйте своей фермой, выращивайте урожай и разводите животных в уютной обстановке.",
                    mechanics: ["Посадка/Сбор урожая", "Управление инвентарем", "Цикл день/ночь"],
                    features: ["Разнообразие культур", "Животноводство", "Рыночная система"]
                }
            }
        ],
        ui: TRANSLATIONS.ru,
        plans: {
            title: "Планы и Текущий Фокус",
            description: "Над чем я сейчас работаю и что планирую на ближайшее будущее.",
            items: [
                {
                    status: "В процессе",
                    title: "Исследования Агентного ИИ",
                    description: "Изучение мульти-агентных систем и циклов рекурсивного самосовершенствования с использованием Godot и LLM.",
                    subItems: ["Реализация контекста памяти", "Проектирование протоколов использования инструментов", "Тестирование в 3D средах"],
                    link: "https://github.com/aurorasunrisegames",
                    date: "1 кв. 2026"
                },
                {
                    status: "Запланировано",
                    title: "Open Source Инструменты Godot",
                    description: "Релиз набора утилит GDScript для процедурной генерации и поведения ИИ.",
                    date: "2 кв. 2026"
                },
                {
                    status: "Идея",
                    title: "Интерактивное Портфолио V2",
                    description: "Геймификация этого портфолио: прогулка по 3D окружению для просмотра проектов.",
                    date: "Будущее"
                }
            ]
        }
    },
    uk: {
        name: "Антон",
        title: "Креативний Технолог та Інженер Симуляцій",
        about: "Мультидисциплінарний інженер, що спеціалізується на високопродуктивних симуляціях, інструментах для робототехніки та масштабованій архітектурі ПЗ. Маючи міцний фундамент як у інтерфейсах C++, так і в сучасних веб-системах, я поєдную фізичні обмеження з цифровими двійниками. Доведений досвід у оптимізації конвеєрів рендерингу, проектуванні поведінки агентного ШІ та автоматизації складних dev-ops процесів.",
        socials: SOCIALS,
        skills: COMMON_SKILLS,
        languages: COMMON_LANGUAGES,
        education: [
            {
                institution: "Одеська державна академія холоду",
                degree: "Магістр у галузі ШІ та нейронних мереж",
                period: "2018 - 2020",
                location: "Одеса, Україна"
            },
            {
                institution: "Одеська державна академія холоду",
                degree: "Бакалавр у галузі систем управління та електроніки",
                period: "2014 - 2018",
                location: "Одеса, Україна"
            }
        ],
        experience: [
            {
                role: "R&D Інженер Симуляцій",
                company: "Фріланс / Контракт",
                period: "Теперішній час",
                description: "Проектування високоточних середовищ симуляції та мережевих систем.",
                achievements: [
                    "Архітектура кастомного P2P мережевого протоколу через WebRTC/WebSocket для синхронізації стану з низькою затримкою в розподілених симуляціях.",
                    "Розробка поведінки 'Агентного ШІ' з використанням ієрархічних скінченних автоматів та алгоритмів пошуку шляху.",
                    "Впровадження суворих CI/CD пайплайнів для кросплатформних збірок, забезпечення стабільності на Linux, Windows та Web."
                ],
                technologies: ["C++", "Godot 4", "Networking", "AI Algorithms"]
            },
            {
                role: "Інженер ПЗ для Симуляцій",
                company: "EdTech / Sim Studio",
                period: "2020 - 2022",
                description: "Провідний інженер фотореалістичного симулятора трафіку для навчання водіїв.",
                achievements: [
                    "Інженерія конвеєра фотореалістичного рендерингу (Unity HDRP), що обробляє 500+ динамічних сценаріїв із суворим бюджетом часу кадру.",
                    "Розробка внутрішніх інструментів на C# для процедурної генерації оточення, що скоротило час складання сцен на ~70%.",
                    "Оптимізація фізичних обчислень та стрімінгу асетів для підтримки 60 FPS на середньому обладнанні."
                ],
                technologies: ["C#", "Unity HDRP", "Procedural Generation", "Optimization"]
            },
            {
                role: "Full Stack Системний Інженер",
                company: "Різні Клієнти",
                period: "Нещодавнє",
                description: "Розробка високопродуктивних інструментів обробки даних та веб-архітектур.",
                achievements: [
                    "Створення Real-time дашборду даних, що візуалізує 10k+ точок телеметрії із затримкою менше секунди (React).",
                    "Написання кастомного асинхронного бекенду на Python (asyncio), що обробляє 200+ одночасних підключень з мінімальними накладними витратами.",
                    "Контейнеризація процесів розгортання з використанням Docker та AWS, досягнення 99.9% аптайму для критичних сервісів."
                ],
                technologies: ["Python (Asyncio)", "React", "Docker", "AWS", "Systems Design"]
            },
            {
                role: "Інженер Вбудованих Систем",
                company: "Мікроелектроніка",
                period: "Початок Кар'єри",
                description: "Розробка прошивок та ПЗ для медичного випробувального обладнання.",
                achievements: [
                    "Програмування мікроконтролерів STM32/Arduino для точного збору даних з датчиків у медичних пристроях.",
                    "Зв'язування апаратних входів з кастомним Unity візуалізатором для зворотного зв'язку оператора в реальному часі.",
                    "Проектування друкованих плат (PCB) та управління процесами виробництва прототипів."
                ],
                technologies: ["C++", "STM32", "Embedded C", "PCB Design"]
            }
        ],
        projects: [
            {
                title: "Прототип Мережевого Фізичного Рушія",
                description: "Дослідницький прототип, що досліджує серверно-авторитетну синхронізацію фізики та алгоритми передбачення на стороні клієнта.",
                featured: true,
                tags: ["C++", "Networking", "Physics"],
                link: "https://megumi-joy.github.io/portfolio/"
            },
            {
                title: "Інструмент Процедурної Рослинності",
                description: "Плагін для автоматизації розміщення оточення великого масштабу, що використовує просторове хешування та GPU інстансинг.",
                featured: true,
                tags: ["C#", "Graphics", "Tooling"],
                link: null
            },
            {
                title: "Архітектура Інвентарю",
                description: "Дизайн системи інвентарю, орієнтований на дані та ефективний по пам'яті, що підтримує складну композицію предметів та серіалізацію.",
                featured: false,
                tags: ["Data Structures", "Architecture"],
                link: "https://github.com/aurorasunrisegames/InventorySystem"
            }
        ],
        games: [
            {
                title: "Low-Poly City Delivery",
                description: "Симулятор доставки у низькополігональному місті.",
                thumbnail: "/games/Low-Poly City Delivery/index.png",
                path: "/portfolio/games/Low-Poly City Delivery/index.html",
                tags: ["Godot", "Симулятор", "WebGL"],
                status: "playable",
                gdd: {
                    overview: "Доставляйте посилки у яскравому низькополігональному місті на час.",
                    mechanics: ["Фізика транспорту", "Система підбору/доставки", "Таймер"],
                    features: ["Відкритий світ", "ШІ трафіку", "Руйнівні об'єкти"]
                }
            },
            {
                title: "Magic Balls Adventure",
                description: "Магічна пригода з фізичними головоломками.",
                thumbnail: "/games/magicballsadventure/index.png",
                path: "/portfolio/games/magicballsadventure/index.html",
                tags: ["Godot", "Пригоди", "WebGL"],
                status: "playable",
                gdd: {
                    overview: "Вирішуйте фізичні головоломки, використовуючи магічні кулі з різними властивостями.",
                    mechanics: ["Фізична взаємодія", "Трансформація кулі", "Платформінг"],
                    features: ["Різні види куль", "Рівні-головоломки", "Магічна атмосфера"]
                }
            },
            {
                title: "VoicyGodot",
                description: "Інструмент для зміни голосу та обробки аудіо в реальному часі, створений на Godot.",
                thumbnail: "/games/VoicyGodot/index.icon.png",
                path: "/portfolio/games/VoicyGodot/index.html",
                tags: ["Godot", "Аудіо", "Інструмент"],
                status: "playable",
                gdd: {
                    overview: "Інструмент модуляції голосу в реальному часі, що працює повністю в браузері на Godot.",
                    mechanics: ["Обробка аудіобуферу", "Зміна висоти тону", "Корекція формант"],
                    features: ["Вхід з мікрофона", "Ефекти в реальному часі", "Візуалізатор"]
                }
            },
            {
                title: "Space Shooter",
                description: "Класичний аркадний космічний шутер із сучасною графікою.",
                thumbnail: "https://placehold.co/600x400/1e293b/3b82f6?text=Space+Shooter",
                path: null,
                tags: ["Godot", "Аркада", "В розробці"],
                status: "developing",
                gdd: {
                    overview: "Динамічний космічний шутер, де ви захищаєтесь від хвиль інопланетних загарбників.",
                    mechanics: ["Стрільба", "Посилення", "Хвилі ворогів"],
                    features: ["Битви з босами", "Покращення корабля", "Система очків"]
                }
            },
            {
                title: "Karting",
                description: "Високошвидкісні перегони на картингах з посиленнями.",
                thumbnail: "https://placehold.co/600x400/1e293b/3b82f6?text=Karting",
                path: null,
                tags: ["Godot", "Перегони", "В розробці"],
                status: "developing",
                gdd: {
                    overview: "Змагальні перегони на картингах з механікою дрифту та предметами.",
                    mechanics: ["Дрифт", "Використання предметів", "Система кіл"],
                    features: ["Багато трас", "Вибір персонажа", "Локальний мультиплеєр"]
                }
            },
            {
                title: "Farming",
                description: "Розслаблюючий симулятор ферми та управління.",
                thumbnail: "https://placehold.co/600x400/1e293b/3b82f6?text=Farming",
                path: null,
                tags: ["Godot", "Симулятор", "В розробці"],
                status: "developing",
                gdd: {
                    overview: "Керуйте своєю фермою, вирощуйте врожай та розводьте тварин у затишній обстановці.",
                    mechanics: ["Садіння/Збір врожаю", "Управління інвентарем", "Цикл день/ніч"],
                    features: ["Різноманітність культур", "Тваринництво", "Ринкова система"]
                }
            }
        ],
        ui: TRANSLATIONS.uk,
        plans: {
            title: "Плани та Поточний Фокус",
            description: "Над чим я зараз працюю і що планую на найближче майбутнє.",
            items: [
                {
                    status: "В процесі",
                    title: "Дослідження Агентного ШІ",
                    description: "Вивчення мульти-агентних систем та циклів рекурсивного самовдосконалення з використанням Godot та LLM.",
                    subItems: ["Реалізація контексту пам'яті", "Проектування протоколів використання інструментів", "Тестування в 3D середовищах"],
                    link: "https://github.com/aurorasunrisegames",
                    date: "1 кв. 2026"
                },
                {
                    status: "Заплановано",
                    title: "Open Source Інструменти Godot",
                    description: "Реліз набору утиліт GDScript для процедурної генерації та поведінки ШІ.",
                    date: "2 кв. 2026"
                },
                {
                    status: "Ідея",
                    title: "Інтерактивне Портфоліо V2",
                    description: "Гейміфікація цього портфоліо: прогулянка 3D оточенням для перегляду проектів.",
                    date: "Майбутнє"
                }
            ]
        }
    }
};

// Default export if needed
export const PROFILE = BASE_PROFILE;
