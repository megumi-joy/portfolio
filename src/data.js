import { Github, Linkedin, Mail, Cpu, Gamepad2, Globe, Server, Terminal, Layers, Cuboid } from 'lucide-react';

const COMMON_SKILLS = [
    { name: "Godot & Unity", icon: Gamepad2 },
    { name: "Python (High Perf)", icon: Server },
    { name: "Product Architect", icon: Layers },
    { name: "AI & Logistics Sim", icon: Gamepad2 },
    { name: "C++ & Systems", icon: Cpu },
    { name: "Embedded Mastery", icon: Cuboid },
    { name: "Full-Stack EdTech", icon: Globe },
];

const COMMON_LANGUAGES = [
    { name: "English", level: "C1" },
    { name: "Spanish", level: "B2" },
    { name: "Catalan", level: "B2" },
    { name: "Russian", level: "Native" },
    { name: "Ukrainian", level: "Native" },
];

const SOCIALS = {
    github: "https://github.com/megumi-joy",
    linkedin: "https://www.linkedin.com/in/megumi-joy/",
    email: import.meta.env.VITE_CONTACT_EMAIL || "megumi.joy@gmail.com",
    phone: import.meta.env.VITE_CONTACT_PHONE || "+34 600 000 000"
};

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
        contactText: "Open to remote roles with US-based teams. Contract or full-time.",
        contactButton: "Let's Talk",
        welcome: "Welcome to my portfolio",
        hello: "Hello, I'm",
        viewDetails: "View Details",
        openInNewTab: "Open in New Tab",
        prototypesTitle: "Godot Engine Prototypes",
        profiles: {
            general: "General",
            gamedev: "Gamedev",
            frontend: "Frontend",
            python: "Python"
        },
        summary: "Professional Summary",
        techSkills: "Technical Skills",
        technologies: "Technologies",
        languagesLabel: "Languages",
        education: "Education",
        experience: "Experience",
        projects: "Projects"
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
        exportDesc: "PDF compatible con ATS generado sobre la marcha.",
        contact: "Contáctame",
        viewProject: "Ver Proyecto",
        featured: "Destacado",
        skillsTitle: "Arsenal Técnico",
        plansTitle: "Hoja de Ruta y Foco Actual",
        contactTitle: "Construyamos algo increíble",
        contactText: "Actualmente estoy abierto a nuevas oportunidades en Desarrollo de Juegos, Ingeniería de Simulación o Desarrollo Web Full Stack.",
        contactButton: "Di Hola",
        welcome: "Bienvenido a mi portafolio",
        hello: "Hola, soy",
        viewDetails: "Ver Detalles",
        openInNewTab: "Abrir en nueva pestaña",
        prototypesTitle: "Prototipos de Godot Engine",
        profiles: {
            general: "General",
            gamedev: "Juegos",
            frontend: "Frontend",
            python: "Python"
        },
        summary: "Resumen Profesional",
        techSkills: "Arsenal Técnico",
        technologies: "Tecnologías",
        languagesLabel: "Idiomas",
        education: "Educación",
        experience: "Experiencia",
        projects: "Proyectos"
    },
    ru: {
        resume: "Резюме",
        download: "Скачать PDF",
        preview: "Предпросмотр",
        source: "Исходник LaTeX",
        openNew: "Открыть в новой вкладке",
        builtWith: "Сделано с React-PDF и LaTeX",
        stats: { roles: "Роли", projects: "Проекты" },
        export: "Экспорт",
        exportDesc: "ATS-friendly PDF, созданный динамически.",
        contact: "Связаться со мной",
        viewProject: "Посмотреть проект",
        featured: "Избранное",
        skillsTitle: "Технический арсенал",
        plansTitle: "Планы и текущий фокус",
        contactTitle: "Давайте создадим что-то крутое",
        contactText: "Я открыт для новых предложений в сфере разработки игр, симуляции или Full Stack веб-разработки.",
        contactButton: "Сказать привет",
        welcome: "Добро пожаловать в мое портфолио",
        hello: "Привет, я",
        viewDetails: "Подробнее",
        openInNewTab: "Открыть в новой вкладке",
        prototypesTitle: "Прототипы на Godot Engine",
        profiles: {
            general: "Общий",
            gamedev: "Игры",
            frontend: "Фронтенд",
            backend: "Бэкенд",
            embedded: "Embedded"
        },
        summary: "Профессиональное резюме",
        techSkills: "Технические навыки",
        technologies: "Технологии",
        languagesLabel: "Языки",
        education: "Образование",
        experience: "Опыт работы",
        projects: "Проекты"
    },
    uk: {
        resume: "Резюме",
        download: "Завантажити PDF",
        preview: "Попередній перегляд",
        source: "Вихідний код LaTeX",
        openNew: "Відкрити в новій вкладці",
        builtWith: "Зроблено з React-PDF та LaTeX",
        stats: { roles: "Ролі", projects: "Проекти" },
        export: "Експорт",
        exportDesc: "ATS-friendly PDF, створений динамічно.",
        contact: "Зв'язатися зі мною",
        viewProject: "Переглянути проект",
        featured: "Вибране",
        skillsTitle: "Технічний арсенал",
        plansTitle: "Плани та поточний фокус",
        contactTitle: "Давайте створимо щось круте",
        contactText: "Я відкритий для нових пропозицій у сфері розробки ігор, симуляції або Full Stack веб-розробки.",
        contactButton: "Привітатися",
        welcome: "Ласкаво просимо до мого портфоліо",
        hello: "Привіт, я",
        viewDetails: "Докладніше",
        openInNewTab: "Відкрити в новій вкладці",
        prototypesTitle: "Прототипи на Godot Engine",
        profiles: {
            general: "Загальний",
            gamedev: "Ігри",
            frontend: "Фронтенд",
            python: "Python"
        },
        summary: "Професійне резюме",
        techSkills: "Технічні навички",
        technologies: "Технології",
        languagesLabel: "Мови",
        education: "Освіта",
        experience: "Досвід роботи",
        projects: "Проекти"
    },
    ca: {
        resume: "Currículum",
        download: "Descarregar PDF",
        preview: "Vista Prèvia",
        source: "Codi LaTeX",
        openNew: "Obrir en una nova pestanya",
        builtWith: "Desenvolupat amb React-PDF i LaTeX",
        stats: { roles: "Rols", projects: "Projectes" },
        export: "Exportar",
        exportDesc: "PDF compatible amb ATS generat al moment.",
        contact: "Contacta'm",
        viewProject: "Veure Projecte",
        featured: "Destacat",
        skillsTitle: "Arsenal Tècnic",
        plansTitle: "Full de Ruta i Foc Actual",
        contactTitle: "Construïm alguna cosa increïble",
        contactText: "Estic obert a rols remots. Contracte o jornada completa.",
        contactButton: "Parlem",
        welcome: "Benvingut al meu portafoli",
        hello: "Hola, sóc",
        viewDetails: "Veure Detalls",
        openInNewTab: "Obrir en una nova pestanya",
        prototypesTitle: "Prototypes de Godot Engine",
        profiles: {
            general: "General",
            gamedev: "Jocs",
            frontend: "Frontend",
            python: "Python"
        },
        summary: "Resum Professional",
        techSkills: "Arsenal Tècnic",
        technologies: "Tecnologies",
        languagesLabel: "Idiomes",
        education: "Educació",
        experience: "Experiència",
        projects: "Projectes"
    }
};

const PROJECTS_EN = [
    {
        title: "Language Quest (LingoQuest)",
        description: "A premium discovery-led learning platform. Features gRPC linguistic assessment and 3DS2 payment simulations. Built with Next.js, Django, and Godot 4.",
        featured: true,
        tags: ["Social EdTech", "Next.js", "Django", "gRPC"],
        link: "https://web-megumi.vercel.app/"
    },
    {
        title: "B2B Logistics & AI Simulator",
        description: "High-fidelity logistics simulation using real-world OSM geodata. Designed for B2B route optimization and AI agent training. Scale: Unlimited city districts.",
        featured: true,
        tags: ["B2B Logistics", "AI Simulation", "OSM"],
        link: "https://megumi-joy.github.io/"
    },
    {
        title: "Sea Hunter: Physical Proof",
        description: "Strategic card game proving the physical execution cycle. The Finalizer loop: from digital 3D prototypes to physical cardboard production.",
        featured: false,
        tags: ["Physical Design", "Finalized", "Card Game"],
        link: "https://github.com/megumi-joy/sea-hunter"
    }
];

// NOTE: Legacy frontend projects array — not rendered publicly.
// Dynamic Telemetry Dashboard and Glassmorphic UI Engine archived per Constitution §7.
const PROJECTS_FRONTEND_EN = [
    {
        title: "Dynamic Telemetry Dashboard (React)",
        description: "High-performance React dashboard for real-time telemetry. Optimized for sub-second latency and smooth 60fps rendering of 10k+ data points.",
        featured: false,
        tags: ["React", "WebGL", "Performance", "WebSockets"],
        link: null // archived — not public
    }
];

// NOTE: Legacy Python/backend projects array — not rendered publicly.
// EduStableCoin archived per Constitution §7 (conceptual, no real codebase).
const PROJECTS_PYTHON_EN = [
    {
        title: "LingoQuest: Social EdTech Ecosystem",
        description: "A premium discovery-led learning platform built with Next.js and Django. Features gRPC-based linguistic assessment, secure 3DS2 payment simulation, and a Godot 4 quest engine. Designed for social impact and scalable EdTech acceleration.",
        featured: true,
        tags: ["Social EdTech", "Next.js", "Django", "gRPC"],
        link: "https://github.com/megumi-joy/LanguageLearningAdventure"
    }
    // EduStableCoin removed — conceptual fintech, archived per Constitution §7
];

const PROJECTS_ES = [
    {
        title: "Language Quest (LingoQuest)",
        description: "Plataforma de aprendizaje premium. Implementa evaluación lingüística gRPC y flujos de pago 3DS2. Construida con Next.js, Django y Godot 4.",
        featured: true,
        tags: ["EdTech Social", "Next.js", "Django", "gRPC"],
        link: "https://web-megumi.vercel.app/"
    },
    {
        title: "de Simulador de Logística B2B",
        description: "Simulación logística de alta fidelidad basada en geodatos reales de OSM. Diseñada para optimización de rutas B2B y entrenamiento de IA.",
        featured: true,
        tags: ["Logística B2B", "Simulación IA", "OSM"],
        link: "https://megumi-joy.github.io/"
    },
    {
        title: "Sea Hunter: Prueba de Físico",
        description: "Juego de cartas que demuestra el ciclo de implementación física total. Del prototipo digital a la producción en cartón.",
        featured: false,
        tags: ["Diseño Físico", "Finalizado", "Juego de Cartas"],
        link: "https://github.com/megumi-joy/sea-hunter"
    }
];

const PROJECTS_FRONTEND_ES = [
    {
        title: "Panel de Telemetría Dinámico",
        description: "Un panel de React de alto rendimiento que visualiza telemetría en vivo de sensores de hardware con latencia inferior al segundo.",
        featured: true,
        tags: ["React", "D3.js", "WebSockets"],
        link: "https://megumi-joy.github.io/"
    },
    {
        title: "Motor de UI Glassmorphic",
        description: "Un framework de CSS especializado para crear interfaces translúcidas premium de alto rendimiento para herramientas de simulación.",
        featured: true,
        tags: ["React", "CSS", "Sistemas de Diseño"],
        link: null
    }
];

const PROJECTS_PYTHON_ES = [
    {
        title: "LingoQuest: Ecosistema de Aprendizaje IA",
        description: "Plataforma de nivel Senior basada en microservicios con Django y FastAPI. Implementa orquestación de tareas asíncronas con RabbitMQ y comunicación gRPC de alto rendimiento.",
        featured: true,
        tags: ["Python 3.12", "FastAPI", "gRPC", "K8s"],
        link: "https://github.com/megumi-joy/LanguageLearningAdventure"
    },
    {
        title: "EduStableCoin: Arquitectura Fintech Conceptual",
        description: "Diseño de alto nivel para un sistema de moneda educativa descentralizada. Explora flujos financieros seguros y patrones de integración de contratos inteligentes para una financiación educativa transparente.",
        featured: true,
        tags: ["Python", "Fintech", "Blockchain", "Conceptual"],
        link: "https://github.com/megumi-joy/EduStableCoin"
    }
];

const PROJECTS_RU = [
    {
        title: "Language Quest (LingoQuest)",
        description: "Премиальная платформа обучения. Включает gRPC-оценку навыков и симуляцию 3DS2 платежей. Построена на Next.js, Django и Godot 4.",
        featured: true,
        tags: ["Social EdTech", "Next.js", "Django", "gRPC"],
        link: "https://web-megumi.vercel.app/"
    },
    {
        title: "B2B Логистический ИИ-симулятор",
        description: "Высокоточная симуляция логистики на базе реальных геоданных OSM. Предназначена для B2B оптимизации маршрутов и обучения ИИ.",
        featured: true,
        tags: ["B2B Логистика", "ИИ Симуляция", "OSM"],
        link: "https://megumi-joy.github.io/"
    },
    {
        title: "Sea Hunter: Физическое воплощение",
        description: "Доказательство умения доводить продукт до физической реализации. От 3D-прототипа до финальной печати в картоне.",
        featured: false,
        tags: ["Physical Design", "Finalized", "Card Game"],
        link: "https://github.com/megumi-joy/sea-hunter"
    }
];

const PROJECTS_FRONTEND_RU = [
    {
        title: "Динамическая Панель Телеметрии",
        description: "Высокопроизводительная панель на React, визуализирующая живую телеметрию с аппаратных датчиков с задержкой менее секунды.",
        featured: true,
        tags: ["React", "D3.js", "WebSockets"],
        link: "https://megumi-joy.github.io/"
    },
    {
        title: "Движок Glassmorphic UI",
        description: "Специализированный CSS-фреймворк для создания премиальных высокопроизводительных полупрозрачных интерфейсов для инструментов симуляции.",
        featured: true,
        tags: ["React", "CSS", "Design Systems"],
        link: null
    }
];

const PROJECTS_PYTHON_RU = [
    {
        title: "LingoQuest: ИИ-экосистема обучения",
        description: "Архитектура уровня Senior на базе микросервисов с Django и FastAPI. Реализует асинхронную оркестрацию задач через RabbitMQ и высокопроизводительный gRPC-мост.",
        featured: true,
        tags: ["Python 3.12", "FastAPI", "gRPC", "K8s"],
        link: "https://github.com/megumi-joy/LanguageLearningAdventure"
    },
    {
        title: "EduStableCoin: Концептуальная Финтех-архитектура",
        description: "Высокоуровневый дизайн децентрализованной образовательной валютной системы. Исследование защищенных финансовых потоков и паттернов интеграции смарт-контрактов.",
        featured: true,
        tags: ["Python", "Fintech", "Blockchain", "Концепт"],
        link: "https://github.com/megumi-joy/EduStableCoin"
    }
];

const PROJECTS_UK = [
    {
        title: "Language Quest (LingoQuest)",
        description: "Преміальна платформа навчання. Включає gRPC-оцінку навичок та симуляцію 3DS2 платежів. Побудовано на Next.js, Django та Godot 4.",
        featured: true,
        tags: ["Social EdTech", "Next.js", "Django", "gRPC"],
        link: "https://web-megumi.vercel.app/"
    },
    {
        title: "B2B Логістичний ІІ-симулятор",
        description: "Високоточна симуляція логістики на базі реальних геоданих OSM. Призначена для B2B оптимізації маршрутів та навчання ІІ.",
        featured: true,
        tags: ["B2B Логістика", "ІІ Симуляція", "OSM"],
        link: "https://megumi-joy.github.io/"
    },
    {
        title: "Sea Hunter: Фізичне втілення",
        description: "Доказ вміння доводити продукт до фізичної реалізації. Від 3D-прототипу до фінального друку в картоні.",
        featured: false,
        tags: ["Physical Design", "Finalized", "Card Game"],
        link: "https://github.com/megumi-joy/sea-hunter"
    }
];

const PROJECTS_FRONTEND_UK = [
    {
        title: "Динамічна Панель Телеметрії",
        description: "Високопродуктивна панель на React, що візуалізує живу телеметрію з апаратних датчиків із затримкою менше секунди.",
        featured: true,
        tags: ["React", "D3.js", "WebSockets"],
        link: "https://megumi-joy.github.io/"
    },
    {
        title: "Рушій Glassmorphic UI",
        description: "Спеціалізований CSS-фреймворк для створення преміальних високопродуктивних напівпрозорих інтерфейсів для інструментів симуляції.",
        featured: true,
        tags: ["React", "CSS", "Design Systems"],
        link: null
    }
];

const PROJECTS_PYTHON_UK = [
    {
        title: "LingoQuest: ІІ-екосистема навчання",
        description: "Архітектура рівня Senior на базі мікросервісів з Django та FastAPI. Реалізує асинхронну оркестрацію завдань через RabbitMQ та високопродуктивний gRPC-міст.",
        featured: true,
        tags: ["Python 3.12", "FastAPI", "gRPC", "K8s"],
        link: "https://github.com/megumi-joy/LanguageLearningAdventure"
    },
    {
        title: "EduStableCoin: Концептуальна Фінтех-архітектура",
        description: "Високорівневий дизайн децентралізованої освітньої валютної системи. Дослідження захищених фінансових потоків та патернів інтеграції смарт-контрактів.",
        featured: true,
        tags: ["Python", "Fintech", "Blockchain", "Концепт"],
        link: "https://github.com/megumi-joy/EduStableCoin"
    }
];

const PROJECTS_CA = [
    {
        title: "Language Quest (LingoQuest)",
        description: "Plataforma d'aprenentatge premium. Implementa avaluació lingüística gRPC i fluxos de pagament 3DS2. Construïda amb Next.js, Django i Godot 4.",
        featured: true,
        tags: ["EdTech Social", "Next.js", "Django", "gRPC"],
        link: "https://web-megumi.vercel.app/"
    },
    {
        title: "de Simulador de Logística B2B",
        description: "Simulació logística d'alta fidelitat basada en geodades reals d'OSM. Dissenyada per a l'optimització de rutes B2B i l'entrenament d'IA.",
        featured: true,
        tags: ["Logística B2B", "Simulació IA", "OSM"],
        link: "https://megumi-joy.github.io/"
    },
    {
        title: "Sea Hunter: Prova de Físic",
        description: "Joc de cartes que demostra el cicle d'implementació física total. Del prototip digital a la producció en cartró.",
        featured: false,
        tags: ["Disseny Físic", "Finalitzat", "Joc de Cartes"],
        link: "https://github.com/megumi-joy/sea-hunter"
    }
];

const PROJECTS_FRONTEND_CA = [
    {
        title: "Panell de Telemetria Dinàmic",
        description: "Un panell de React d'alt rendiment que visualitza telemetria en viu de sensors de maquinari amb latència inferior al segon.",
        featured: true,
        tags: ["React", "D3.js", "WebSockets"],
        link: "https://megumi-joy.github.io/"
    },
    {
        title: "Motor de UI Glassmorphic",
        description: "Un framework de CSS especialitzat per a crear interfícies translúcides premium d'alt rendiment per a eines de simulació.",
        featured: true,
        tags: ["React", "CSS", "Sistemes de Disseny"],
        link: null
    }
];

const PROJECTS_PYTHON_CA = [
    {
        title: "LingoQuest: Ecosistema d'Aprenentatge IA",
        description: "Arquitectura de nivell Sènior basada en microserveis amb Django i FastAPI. Implementa orquestració de tasques asíncrones amb RabbitMQ i comunicació gRPC d'alt rendiment.",
        featured: true,
        tags: ["Python 3.12", "FastAPI", "gRPC", "K8s"],
        link: "https://github.com/megumi-joy/LanguageLearningAdventure"
    },
    {
        title: "EduStableCoin: Arquitectura Fintech Conceptual",
        description: "Disseny d'alt nivell per a un sistema de moneda educativa descentralitzada. Explora fluxos financers segurs i patrons d'integració de contractes intel·ligents per a un finançament educatiu transparent.",
        featured: true,
        tags: ["Python", "Fintech", "Blockchain", "Conceptual"],
        link: "https://github.com/megumi-joy/EduStableCoin"
    }
];


export const GAMES_DATA = {
    "poezda": {
        thumbnail: "/poezda.mp4",
        media: ["/poezda.mp4"],
        path: "",
        tags: ["Web", "Godot", "Trains"],
        status: "playable",
        progress: 100,
        translations: {
            en: {
                title: "Поезда (Trains)",
                description: "A fun train simulator.",
                gdd: { overview: "Drive trains.", mechanics: ["Driving"], features: ["Trains"] }
            },
            es: { title: "Поезда (Trenes)", description: "Simulador de trenes.", gdd: { overview: "Conduce trenes.", mechanics: [], features: [] } },
            ru: { title: "Поезда", description: "Симулятор поездов.", gdd: { overview: "Водите поезда.", mechanics: [], features: [] } },
            uk: { title: "Потяги", description: "Симулятор потягів.", gdd: { overview: "Керуйте потягами.", mechanics: [], features: [] } },
            ca: { title: "Поезда (Trens)", description: "Simulador de trens.", gdd: { overview: "Condueix trens.", mechanics: [], features: [] } }
        }
    },
    "spyfall": {
        thumbnail: "/spyfall.mp4",
        media: ["/spyfall.mp4"],
        path: "https://spyfall-playhouse.lovable.dev",
        tags: ["React", "Multiplayer", "Supabase"],
        status: "live",
        progress: 100,
        translations: {
            en: {
                title: "Spyfall Playhouse",
                description: "A real-time multiplayer social deduction game.",
                gdd: { overview: "Find the spy or guess the location.", mechanics: ["Social Deduction", "Real-time"], features: ["Supabase", "React"] }
            },
            es: { title: "Spyfall Playhouse", description: "Juego de deducción social multijugador.", gdd: { overview: "Encuentra al espía.", mechanics: [], features: [] } },
            ru: { title: "Spyfall Playhouse", description: "Многопользовательская социальная дедуктивная игра.", gdd: { overview: "Найди шпиона.", mechanics: [], features: [] } },
            uk: { title: "Spyfall Playhouse", description: "Багатокористувацька соціальна гра.", gdd: { overview: "Знайди шпигуна.", mechanics: [], features: [] } },
            ca: { title: "Spyfall Playhouse", description: "Joc de deducció social multijugador.", gdd: { overview: "Troba l'espia.", mechanics: [], features: [] } }
        }
    },

    "languageQuest": {
        thumbnail: "https://web-megumi.vercel.app/og-image.png",
        path: "https://web-megumi.vercel.app/",
        tags: ["EdTech", "RPG", "AI"],
        status: "live",
        progress: 100,
        translations: {
            en: {
                title: "Language Quest",
                description: "A premium discovery-led learning platform that turns academic mastery into an epic RPG quest.",
                gdd: {
                    overview: "Master languages and STEM subjects in an immersive RPG world.",
                    mechanics: ["Linguistic Assessment", "RPG Progression", "AI Mentorship"],
                    features: ["Next.js/Django", "Godot Quest Engine", "3DS2 Checkout"]
                }
            },
            es: {
                title: "Language Quest",
                description: "Una plataforma de aprendizaje premium que convierte la maestría académica en una épica misión RPG.",
                gdd: {
                    overview: "Domina idiomas y materias STEM en un mundo RPG inmersivo.",
                    mechanics: ["Evaluación Lingüística", "Progresión RPG", "Mentoría IA"],
                    features: ["Next.js/Django", "Motor de misiones Godot", "Pago 3DS2"]
                }
            },
            ru: {
                title: "Language Quest",
                description: "Премиальная платформа для обучения, превращающая академические знания в эпический RPG-квест.",
                gdd: {
                    overview: "Осваивайте языки и STEM-предметы в захватывающем RPG-мире.",
                    mechanics: ["Лингвистическая оценка", "RPG прогрессия", "ИИ-менторство"],
                    features: ["Next.js/Django", "Квестовый движок Godot", "3DS2 платежи"]
                }
            },
            uk: {
                title: "Language Quest",
                description: "Преміальна навчальна платформа, що перетворює академічні знання на епічний RPG-квест.",
                gdd: {
                    overview: "Опановуйте мови та STEM-предмети у захоплюючому RPG-світі.",
                    mechanics: ["Лінгвістична оцінка", "RPG прогресія", "ІІ-менторство"],
                    features: ["Next.js/Django", "Квестовий рушій Godot", "3DS2 платежі"]
                }
            },
            ca: {
                title: "Language Quest",
                description: "Una plataforma d'aprenentatge premium que converteix el domini acadèmic en una missió RPG èpica.",
                gdd: {
                    overview: "Domina idiomes i matèries STEM en un món RPG immersiu.",
                    mechanics: ["Avaluació Lingüística", "Progressió RPG", "Mentoria IA"],
                    features: ["Next.js/Django", "Motor de missions Godot", "Pagament 3DS2"]
                }
            }
        }
    },
    "magicBallsAdventure": {
        thumbnail: "/magicballs.mp4",
        media: [
            "/games/magicballs/01_menu.png",
            "/games/magicballs/02_level_select.png",
            "/games/magicballs/03_gameplay.png",
            "/games/magicballs/04_gameplay2.png",
            "/games/magicballs/05_gameplay3.png",
            "/games/magicballs/gameplay.gif",
        ],
        path: "",
        tags: ["Godot", "Adventure", "WebGL"],
        status: "playable",
        progress: 100,
        translations: {
            en: {
                title: "Magic Balls Adventure",
                description: "A magical adventure game featuring physics-based puzzles.",
                gdd: {
                    overview: "Solve physics puzzles using magical balls with different properties.",
                    mechanics: ["Physics interaction", "Ball transformation", "Platforming"],
                    features: ["Different ball types", "Puzzle levels", "Magical atmosphere"]
                }
            },
            es: {
                title: "Magic Balls Adventure",
                description: "Una aventura mágica con rompecabezas basados en física.",
                gdd: {
                    overview: "Resuelve acertijos físicos usando bolas mágicas con diferentes propiedades.",
                    mechanics: ["Interacción física", "Transformación de bola", "Plataformas"],
                    features: ["Diferentes tipos de bolas", "Niveles de rompecabezas", "Atmósfera mágica"]
                }
            },
            ru: {
                title: "Magic Balls Adventure",
                description: "Волшебное приключение с физическими головоломками.",
                gdd: {
                    overview: "Решайте физические головоломки, используя волшебные шары с различными свойствами.",
                    mechanics: ["Физическое взаимодействие", "Трансформация шара", "Платформинг"],
                    features: ["Разные виды шаров", "Уровни-головоломки", "Волшебная атмосфера"]
                }
            },
            uk: {
                title: "Magic Balls Adventure",
                description: "Магічна пригода з фізичними головоломками.",
                gdd: {
                    overview: "Вирішуйте фізичні головоломки, використовуючи магічні кулі з різними властивостями.",
                    mechanics: ["Фізична взаємодія", "Трансформація кулі", "Платформінг"],
                    features: ["Різні види куль", "Рівні-головоломки", "Магічна атмосфера"]
                }
            },
            ca: {
                title: "Magic Balls Adventure",
                description: "Una aventura màgica amb trencaclosques basats en la física.",
                gdd: {
                    overview: "Resol trencaclosques físics utilitzant boles màgiques amb diferents propietats.",
                    mechanics: ["Interacció física", "Transformació de bola", "Plataformes"],
                    features: ["Diferents tipus de boles", "Nivells de trencaclosques", "Atmosfera màgica"]
                }
            }
        }
    },
    "lowPolyCityDelivery": {
        thumbnail: "/lowpoly.mp4",
        media: [
            "/games/lowpoly/01_nissan_garage.png",
            "/games/lowpoly/02_city_center.png",
            "/games/lowpoly/02_city_gameplay.png",
            "/games/lowpoly/03_beach_district.png",
            "/games/lowpoly/04_race_circuit.png",
            "/games/lowpoly/05_garage_showcase.png",
            "/games/lowpoly/gameplay.gif",
        ],
        path: "",
        tags: ["B2B Logistics", "AI Simulation", "WebGL"],
        status: "playable",
        progress: 80,
        translations: {
            en: {
                title: "B2B Logistics & AI Simulator",
                description: "A high-fidelity logistics simulation using real-world OSM geodata. Designed for B2B route optimization and AI agent training in urban environments.",
                gdd: {
                    overview: "Simulate complex delivery logistics in real-world street layouts (OSM) for business optimization.",
                    mechanics: ["Real-world Geodata (OSM)", "B2B Logistics Flow", "AI Agent Navigation"],
                    features: ["Urban Simulation", "Traffic AI", "Scalable City Districts"]
                }
            },
            es: {
                title: "de Simulador de Logística B2B e IA",
                description: "Simulación logística de alta fidelidad basada en geodes reales (OSM). Diseñada para optimización B2B y entrenamiento de IA.",
                gdd: {
                    overview: "Simula logística de entrega compleja en calles reales (OSM) para optimización de negocios.",
                    mechanics: ["Geodatos Reales (OSM)", "Flujo Logístico B2B", "Navegación de IA"],
                    features: ["Simulación Urbana", "IA de Tráfico", "Escalabilidad"]
                }
            },
            ru: {
                title: "B2B Логистический ИИ-симулятор",
                description: "Высокоточная симуляция логистики на базе реальных геоданных OSM. Предназначена для B2B оптимизации маршрутов и обучения агентного ИИ.",
                gdd: {
                    overview: "Симуляция сложных логистических цепочек в реальной городской застройке (OSM) для бизнеса.",
                    mechanics: ["Реальные геоданные (OSM)", "B2B логистические потоки", "Навигация агентного ИИ"],
                    features: ["Городская симуляция", "ИИ-трафик", "Масштабируемые районы"]
                }
            },
            uk: {
                title: "B2B Логістичний ІІ-симулятор",
                description: "Високоточна симуляція логістики на базі реальних геоданих OSM. Призначена для B2B оптимізації маршрутов та навчання агентного ІІ.",
                gdd: {
                    overview: "Симуляція складних логістичних ланцюжків у реальній міській забудові (OSM) для бізнесу.",
                    mechanics: ["Реальні геодані (OSM)", "B2B логістичні потоки", "Навігація агентного ІІ"],
                    features: ["Міська симуляція", "ІІ-трафік", "Масштабовані райони"]
                }
            },
            ca: {
                title: "B2B Logística i Simulador d'IA",
                description: "Simulació logística d'alta fidelitat basada en geodades reals (OSM). Dissenyada per a l'optimització de rutes B2B i l'entrenament d'agents d'IA.",
                gdd: {
                    overview: "Simula logística de lliurament complexa en carrers reals (OSM) per a l'optimització del negoci.",
                    mechanics: ["Geodades Reals (OSM)", "Flux Logístic B2B", "Navegació d'Agents IA"],
                    features: ["Simulació Urbana", "IA de Trànsit", "Districtes de Ciutat Escalables"]
                }
            }
        }
    },
    "voicyGodot": {
        thumbnail: "/games/VoicyGodot/index.png",
        path: "/games/VoicyGodot/index.html",
        tags: ["Godot", "Audio", "Tool"],
        status: "playable",
        progress: 60,
        translations: {
            en: {
                title: "VoicyGodot",
                description: "Real-time voice changer and audio processing tool built with Godot.",
                gdd: {
                    overview: "Real-time voice modulation tool running entirely in the browser using Godot.",
                    mechanics: ["Audio buffer processing", "Pitch shifting", "Formant correction"],
                    features: ["Microphone input", "Real-time effects", "Visualizer"]
                }
            },
            es: {
                title: "VoicyGodot",
                description: "Cambiador de voz en tiempo real y herramienta de procesamiento de audio construida con Godot.",
                gdd: {
                    overview: "Herramienta de modulación de voz en tiempo real que se ejecuta completamente en el navegador usando Godot.",
                    mechanics: ["Procesamiento de búfer de audio", "Cambio de tono", "Corrección de formantes"],
                    features: ["Entrada de micrófono", "Efectos en tiempo real", "Visualizador"]
                }
            },
            ru: {
                title: "VoicyGodot",
                description: "Инструмент для изменения голоса и обработки аудио в реальном времени, созданный на Godot.",
                gdd: {
                    overview: "Инструмент модуляции голоса в реальном времени, работающий полностью в браузере на Godot.",
                    mechanics: ["Обработка аудиобуфера", "Изменение высоты тона", "Коррекция формант"],
                    features: ["Вход с микрофона", "Эффекты в реальном времени", "Visualзатор"]
                }
            },
            uk: {
                title: "VoicyGodot",
                description: "Інструмент для зміни голосу та обробки аудіо в реальному часі, створений на Godot.",
                gdd: {
                    overview: "Інструмент модуляції голосу в реальному часі, що працює повністю в браузері на Godot.",
                    mechanics: ["Обробка аудіобуферу", "Зміна висоти тону", "Корекція формант"],
                    features: ["Вхід з мікрофона", "Ефекти в реальному часі", "Візуалізатор"]
                }
            },
            ca: {
                title: "VoicyGodot",
                description: "Canviador de veu en temps real i eina de processament d'àudio construïda amb Godot.",
                gdd: {
                    overview: "Eina de modulació de veu en temps real que s'executa completament al navegador utilitzant Godot.",
                    mechanics: ["Processament de búfer d'àudio", "Canvi de to", "Correcció de formants"],
                    features: ["Entrada de micròfon", "Efectes en temps real", "Visualitzador"]
                }
            }
        }
    },
    "seaHunter": {
        thumbnail: "/games/seahunter/gameplay.gif",
        media: [
            "/games/seahunter/01_menu.png",
            "/games/seahunter/02_setup.png",
            "/games/seahunter/03_cards.png",
            "/games/seahunter/gameplay.gif",
        ],
        path: "/games/seahunter/index.html",
        tags: ["Card Game", "Finalized", "Physical Design"],
        status: "finalized",
        progress: 100,
        translations: {
            en: {
                title: "Sea Hunter: Physical Finalization",
                pitch: "The first card game designed to be 'finished'—a physical artifact born from digital logic.",
                description: "A strategic battleship-style card game. Proof of the 'Finalizer' cycle: from digital 3D prototypes to physical cardboard production and rule documentation.",
                gdd: {
                    overview: "Strategic card game proving full production-to-physical implementation cycle.",
                    mechanics: ["Turn-based Battle", "Preparation Phase", "Island Powers"],
                    features: ["Released in Cardboard", "Headless AI Verification", "MCP Bot Support"],
                    story: "In a world of rising tides, hunters vie for the last remaining islands. Every card represents a physical tool in the player's arsenal.",
                    world: "The Archipelago—a shifting maritime environment where territory is the only currency.",
                    characters: "The Sea Hunters, diverse maritime factions with unique tactical philosophies."
                }
            },
            es: {
                title: "Sea Hunter: Finalización de Físico",
                pitch: "El primer juego de cartas diseñado para ser 'finalizado': un artefacto físico nacido de la lógica digital.",
                description: "Juego de cartas estratégico. Prueba del ciclo 'Finalizador': desde prototipos 3D hasta producción física y documentación.",
                gdd: {
                    overview: "Juego de estrategia que demuestra el ciclo completo de implementación física.",
                    mechanics: ["Batalla por turnos", "Fase de preparación", "Poderes de Islas"],
                    features: ["Lanzado en cartón", "Verificación por IA", "Soporte MCP"],
                    story: "En un mundo de mareas crecientes, los cazadores compiten por las últimas islas restantes.",
                    world: "El Archipiélago: un entorno marítimo cambiante donde el territorio es la única moneda.",
                    characters: "Los Cazadores del Mar, diversas facciones marítimas con filosofías tácticas únicas."
                }
            },
            ru: {
                title: "Sea Hunter: Финализация физического",
                pitch: "Первая карточная игра, созданная чтобы быть 'доведенной до конца' — физический артефакт, рожденный из цифровой логики.",
                description: "Стратегическая карточная игра. Доказательство умения доводить продукт до физического воплощения: от 3D-прототипа до печати в картоне.",
                gdd: {
                    overview: "Стратегическая игра, демонстрирующая полный цикл от идеи до физического продукта.",
                    mechanics: ["Пошаговая битва", "Фаза подготовки", "Силы островов"],
                    features: ["Выпущено в картоне", "Headless ИИ-верификация", "Поддержка MCP-ботов"],
                    story: "В мире поднимающегося океана охотники сражаются за последние клочки суши.",
                    world: "Архипелаг — изменчивая морская среда, где территория является единственной валютой.",
                    characters: "Морские охотники — различные фракции со своими уникальными тактиками."
                }
            },
            uk: {
                title: "Sea Hunter: Фіналізація фізичного",
                pitch: "Перша карткова гра, створена щоб бути 'доведеною до кінця' — фізичний артефакт, народжений з цифрової логіки.",
                description: "Стратегічна карткова гра. Доказ вміння доводити продукт до фізичного втілення: від 3D-прототипу до друку в картоні.",
                gdd: {
                    overview: "Стратегічна гра, що демонструє повний цикл від ідеї до фізичного продукту.",
                    mechanics: ["Покрокова битва", "Фаза підготовки", "Сили островів"],
                    features: ["Випущено в картоні", "Headless ІІ-верифікація", "Підтримка MCP-ботів"],
                    story: "У світі океану, що піднімається, мисливці змагаються за останні острови.",
                    world: "Архіпелаг — мінливе морське середовище, де територія є єдиною валютою.",
                    characters: "Морські мисливці — різні фракції з унікальними тактичними філософіями."
                }
            },
            ca: {
                title: "Sea Hunter: Finalització de Físic",
                pitch: "El primer joc de cartes dissenyat per a ser 'finalitzat': un artefacte físic nascut de la lògica digital.",
                description: "Joc de cartes estratègic. Prova del cicle 'Finalitzador': des de prototips 3D fins a producció física i documentació.",
                gdd: {
                    overview: "Joc d'estratègia que demostra el cicle complet d'implementació física.",
                    mechanics: ["Batalla per torns", "Fase de preparació", "Poders d'Illes"],
                    features: ["Llançat en cartró", "Verificació per IA", "Suport MCP"],
                    story: "En un món de marees creixents, els caçadors competeixen per les últimes illes restants.",
                    world: "L'Arxipèlag: un entorn marítim canviant on el territori és l'única moneda.",
                    characters: "Els Caçadors del Mar, diverses faccions marítimes amb filosofies tàctiques úniques."
                }
            }
        }
    },
    "megumiMassage": {
        thumbnail: "https://placehold.co/600x400/1e293b/3b82f6?text=Megumi+Massage",
        path: "https://megumi-massage.com",
        tags: ["B2B Operations", "React", "Supabase"],
        status: "live",
        progress: 100,
        translations: {
            en: {
                title: "Business Operations: Megumi Massage",
                description: "A full-stack business operations engine for a wellness center. Features multilingual support, booking system integration, and Supabase backend.",
                gdd: {
                    overview: "Operational for local service business automation.",
                    mechanics: ["Booking Flow", "Admin Dashboard", "Multilingual Content"],
                    features: ["React/Vite", "Supabase Auth", "Responsive UI"]
                }
            },
            es: {
                title: "de Operaciones: Megumi Massage",
                description: "Motor de operaciones comerciales para un centro de bienestar. Incluye soporte multilingüe y sistema de reservas.",
                gdd: {
                    overview: "operativo para la automatización de negocios de servicios.",
                    mechanics: ["Flujo de Reserva", "Panel Admin", "Contenido Multilingüe"],
                    features: ["React/Vite", "Supabase backend", "Diseño Responsivo"]
                }
            },
            ru: {
                title: "Бизнес-операционный: Megumi Massage",
                description: "Полнофункциональный движок для управления велнес-центром. Мультиязычность, система бронирования и Supabase.",
                gdd: {
                    overview: "Операционный для автоматизации локального сервисного бизнеса.",
                    mechanics: ["Процесс бронирования", "Панель администратора", "Мультиязычный контент"],
                    features: ["React/Vite", "Supabase бэкенд", "Адаптивный UI"]
                }
            },
            uk: {
                title: "Бізнес-операційний: Megumi Massage",
                description: "Полнофункціональний рушій для управління велнес-центром. Мультімовність, система бронювання та Supabase.",
                gdd: {
                    overview: "Операційний для автоматизації локального сервісного бізнесу.",
                    mechanics: ["Процес бронювання", "Панель адміністратора", "Мультімовний контент"],
                    features: ["React/Vite", "Supabase бекенд", "Адаптивний UI"]
                }
            },
            ca: {
                title: "d'Operacions de Negoci: Megumi Massage",
                description: "Un motor d'operacions comercials per a un centre de benestar. Inclou suport multilingüe, integració de sistema de reserves i backend Supabase.",
                gdd: {
                    overview: "operatiu per a l'automatització de negocis de serveis locals.",
                    mechanics: ["Flux de Reserves", "Panell d'Administració", "Contingut Multilingüe"],
                    features: ["React/Vite", "Supabase Auth", "UI Responsiva"]
                }
            }
        }
    },
    "videoEditorGodot": {
        thumbnail: "/games/video-editor-godot/index.png",
        path: "/games/video-editor-godot/index.html",
        tags: ["Godot", "Video", "Tool"],
        status: "playable",
        progress: 90,
        translations: {
            en: {
                title: "VideoEditorGodot",
                pitch: "Precision frame-by-frame editing for the web age.",
                description: "A frame-by-frame video editing tool built with Godot Engine.",
                gdd: {
                    overview: "Browser-based video editing utility focusing on precise frame extraction and manipulation.",
                    mechanics: ["Frame Extraction", "Timeline Editing", "Effect Application"],
                    features: ["Godot 4 GL Compatibility", "WebGL Export", "Responsive UI"],
                    story: "In a world of rapid content consumption, precision matters. This tool empowers creators to control every single frame.",
                    world: "The Digital Cutting Room—a minimalist, focused environment for visual storytelling.",
                    characters: "The Editor—a technical artist seeking perfection in motion."
                }
            },
            es: {
                title: "VideoEditorGodot",
                pitch: "Edición precisa fotograma a fotograma para la era web.",
                description: "Herramienta de edición de video fotograma a fotograma construida con Godot Engine.",
                gdd: {
                    overview: "Utilidad de edición de video basada en el navegador centrada en la extracción y manipulación precisa de fotogramas.",
                    mechanics: ["Extracción de fotogramas", "Edición de línea de tiempo", "Aplicación de efectos"],
                    features: ["Godot 4 GL Compatibility", "Exportación WebGL", "Interfaz responsiva"],
                    story: "En un mundo de consumo rápido de contenido, la precisión importa.",
                    world: "La Sala de Corte Digital: un entorno minimalista y enfocado para la narración visual.",
                    characters: "El Editor: un artista técnico que busca la perfección en el movimiento."
                }
            },
            ru: {
                title: "VideoEditorGodot",
                pitch: "Прецизионный покадровый монтаж для эпохи веба.",
                description: "Инструмент для покадрового редактирования видео, созданный на Godot Engine.",
                gdd: {
                    overview: "Браузерная утилита для редактирования видео, ориентированная на точное извлечение кадров и манипуляцию ими.",
                    mechanics: ["Извлечение кадров", "Таймлайн-редактирование", "Применение эффектов"],
                    features: ["Godot 4 GL Compatibility", "WebGL экспорт", "Адаптивный интерфейс"],
                    story: "В мире быстрого потребления контента точность имеет значение.",
                    world: "Цифровая монтажная — минималистичная среда для визуального сторителлинга.",
                    characters: "Монтажер — технический художник, стремящийся к совершенству в движении."
                }
            },
            uk: {
                title: "VideoEditorGodot",
                pitch: "Прецизійний покадровий монтаж для епохи вебу.",
                description: "Інструмент для покадрового редагування відео, створений на Godot Engine.",
                gdd: {
                    overview: "Браузерна утиліта для редаguвання відео, орієнтована на точне вилучення кадрів та маніпуляцію ними.",
                    mechanics: ["Вилучення кадрів", "Таймлайн-редагування", "Застосування ефектів"],
                    features: ["Godot 4 GL Compatibility", "WebGL експорт", "Адаптивний інтерфейс"],
                    story: "У світі швидкого споживання контенту точність має значення.",
                    world: "Цифрова монтажна — мінімалістичне середовище для візуального сторітеллінгу.",
                    characters: "Монтажер — технічний художник, що прагне досконалості в русі."
                }
            }
        }
    }
};

const getGamesForLanguage = (lang) => {
    return Object.entries(GAMES_DATA).map(([id, game]) => {
        const { translations, ...rest } = game;
        const translation = translations[lang] || translations.en;
        return {
            id,
            ...rest,
            ...translation
        };
    });
};


const getExperienceForSpecialty = (specialty, lang) => {
    // Start with the base experience for the language
    const baseExp = PROFILES_DATA[lang]?.experience || PROFILES_DATA.en.experience;

    if (specialty === 'general') return baseExp;

    // Filter experience by tags if applicable
    // Note: We need to map tags from BASE_PROFILE to the translated versions
    return baseExp.filter((exp, idx) => {
        const baseTags = BASE_PROFILE.experience[idx]?.tags || [];
        return baseTags.includes(specialty);
    });
};

const getSkillsForSpecialty = (specialty) => {
    if (specialty === 'backend') {
        return [
            { name: "Python 3.12 (High Perf)", icon: Server },
            { name: "FastAPI, Django & gRPC", icon: Layers },
            { name: "Asyncio & Distributed Sys", icon: Cpu },
            { name: "PostgreSQL & RabbitMQ/Kafka", icon: Server },
            { name: "K8s, Helm & GitLab CI", icon: Terminal },
            { name: "Microsrv Architecture", icon: Cuboid },
        ];
    }
    if (specialty === 'embedded') {
        return [
            { name: "C/C++ & Embedded", icon: Cpu },
            { name: "STM32, ESP32, RaspPi", icon: Cuboid },
            { name: "Hardware Integration", icon: Layers },
            { name: "Python", icon: Terminal }
        ];
    }
    if (specialty === 'frontend') {
        return [
            { name: "React", icon: Globe },
            { name: "JavaScript / TypeScript", icon: Terminal },
            { name: "WebGL & Three.js", icon: Gamepad2 },
            { name: "CSS3 & Design Systems", icon: Layers },
            { name: "Performance Optimization", icon: Cpu },
            { name: "Frontend Architecture", icon: Cuboid },
        ];
    }
    return COMMON_SKILLS;
};

const getProjectsForSpecialty = (specialty, lang) => {
    const projectsMap = {
        en: { gamedev: PROJECTS_EN, frontend: PROJECTS_FRONTEND_EN, backend: PROJECTS_PYTHON_EN },
        es: { gamedev: PROJECTS_ES, frontend: PROJECTS_FRONTEND_ES, backend: PROJECTS_PYTHON_ES },
        ru: { gamedev: PROJECTS_RU, frontend: PROJECTS_FRONTEND_RU, backend: PROJECTS_PYTHON_RU },
        uk: { gamedev: PROJECTS_UK, frontend: PROJECTS_FRONTEND_UK, backend: PROJECTS_PYTHON_UK },
        ca: { gamedev: PROJECTS_CA, frontend: PROJECTS_FRONTEND_CA, backend: PROJECTS_PYTHON_CA }
    };

    const langProjects = projectsMap[lang] || projectsMap.en;

    if (specialty === 'gamedev') return langProjects.gamedev;
    if (specialty === 'frontend') return langProjects.frontend;
    if (specialty === 'backend') return langProjects.backend;
    if (specialty === 'embedded') return langProjects.gamedev;

    return langProjects.gamedev; // general
};

export const generateProfile = (specialty, lang) => {
    const baseData = PROFILES_DATA[lang] || PROFILES_DATA.en;
    return {
        ...baseData,
        title: SPECIALIZED_TITLES[specialty][lang] || SPECIALIZED_TITLES[specialty].en,
        about: SPECIALIZED_ABOUT[specialty][lang] || SPECIALIZED_ABOUT[specialty].en,
        projects: getProjectsForSpecialty(specialty, lang),
        experience: getExperienceForSpecialty(specialty, lang),
        skills: getSkillsForSpecialty(specialty)
    };
};

export const SPECIALIZED_TITLES = {
    general: {
        en: "Senior Software Engineer",
        es: "Ingeniero de Software Senior",
        ru: "Senior Software Engineer",
        uk: "Senior Software Engineer",
        ca: "Enginyer de Programari Sènior"
    },
    gamedev: {
        en: "GameDev / Simulation Engineer",
        es: "GameDev / Simulation Engineer",
        ru: "GameDev / Simulation Engineer",
        uk: "GameDev / Simulation Engineer",
        ca: "Enginyer de GameDev / Simulació"
    },
    frontend: {
        en: "Frontend / Web Developer",
        es: "Desarrollador Frontend / Web",
        ru: "Frontend / Web Developer",
        uk: "Frontend / Web Developer",
        ca: "Desenvolupador Frontend / Web"
    },
    backend: {
        en: "Backend / Full-Stack Developer",
        es: "Desarrollador Backend / Full-Stack",
        ru: "Backend / Full-Stack Developer",
        uk: "Backend / Full-Stack Developer",
        ca: "Desenvolupador Backend / Full-Stack"
    },
    embedded: {
        en: "Embedded / Hardware-Software Integration",
        es: "Integración de Hardware y Software / Embebidos",
        ru: "Embedded / Hardware-Software Integration",
        uk: "Імбедед / Інтеграція Апаратного та Програмного Забезпечення",
        ca: "Integració de Programari i Maquinari / Encastats"
    }
};

export const SPECIALIZED_ABOUT = {
    general: {
        en: "Senior Software Engineer with 10+ years of experience in developing simulation systems, interactive applications, and full-stack products. Experienced in creating custom data systems and hardware-software integration using React, Python, Godot, WebGL, and Supabase.",
        es: "Ingeniero de Software Senior con más de 10 años de experiencia en el desarrollo de sistemas de simulación, aplicaciones interactivas y productos full-stack. Experiencia en la creación de sistemas de datos personalizados e integración de hardware y software utilizando React, Python, Godot, WebGL y Supabase.",
        ru: "Senior Software Engineer с 10+ лет опыта в разработке симуляционных систем, интерактивных приложений и full-stack продуктов. Создаёт кастомные системы данных, используя React, Python, Godot, WebGL, Supabase и интеграцию аппаратного и программного обеспечения.",
        uk: "Senior Software Engineer з 10+ роками досвіду у розробці симуляційних систем, інтерактивних додатків та full-stack продуктів. Створює кастомні системи даних, використовуючи React, Python, Godot, WebGL, Supabase та інтеграцію апаратного і програмного забезпечення.",
        ca: "Enginyer de Programari Sènior amb més de 10 anys d'experiència en el desenvolupament de sistemes de simulació, aplicacions interactives i productes full-stack. Experiència en la creació de sistemes de dades personalitzats i integració de maquinari i programari utilitzant React, Python, Godot, WebGL i Supabase."
    },
    gamedev: {
        en: "GameDev and Simulation Engineer with experience in developing simulation systems and games using Godot 4, Unity HDRP, and Blender.",
        es: "Ingeniero de Simulaciones y Desarrollo de Juegos (GameDev) con experiencia en el desarrollo de sistemas de simulación y juegos utilizando Godot 4, Unity HDRP y Blender.",
        ru: "GameDev и Simulation Engineer с опытом разработки симуляционных систем и игр с использованием Godot 4, Unity HDRP и Blender.",
        uk: "GameDev та Simulation Engineer з досвідом розробки симуляційних систем та ігор з використанням Godot 4, Unity HDRP та Blender.",
        ca: "Enginyer de GameDev i Simulació amb experiència en el desenvolupament de sistemes de simulació i jocs utilitzant Godot 4, Unity HDRP i Blender."
    },
    frontend: {
        en: "Frontend Developer with experience in creating interactive applications, fast prototypes, and visualizations using React, Vue.js, Next.js, and WebGL.",
        es: "Desarrollador Frontend con experiencia en la creación de aplicaciones interactivas, prototipos rápidos y visualizaciones utilizando React, Vue.js, Next.js y WebGL.",
        ru: "Frontend Developer с опытом создания интерактивных приложений, быстрых прототипов и визуализаций с использованием React, Vue.js, Next.js и WebGL.",
        uk: "Frontend Developer з досвідом створення інтерактивних додатків, швидких прототипів та візуалізацій з використанням React, Vue.js, Next.js та WebGL.",
        ca: "Desenvolupador Frontend amb experiència en la creació d'aplicacions interactives, prototips ràpids i visualitzacions utilitzant React, Vue.js, Next.js i WebGL."
    },
    backend: {
        en: "Full-Stack Developer with experience in developing server logic, databases, and APIs for interactive applications and simulations.",
        es: "Desarrollador Full-Stack con experiencia en el desarrollo de lógica de servidor, bases de datos y APIs para aplicaciones interactivas y simulaciones.",
        ru: "Full-Stack Developer с опытом разработки серверной логики, баз данных и API для интерактивных приложений и симуляций.",
        uk: "Full-Stack Developer з досвідом розробки серверної логіки, баз даних та API для інтерактивних додатків та симуляцій.",
        ca: "Desenvolupador Full-Stack amb experiència en el desenvolupament de lògica de servidor, bases de dades i APIs per a aplicacions interactives i simulacions."
    },
    embedded: {
        en: "Hardware-Software Integration Engineer with experience working with microcontrollers, sensors, and telemetry systems.",
        es: "Ingeniero de Integración de Hardware y Software con experiencia trabajando con microcontroladores, sensores y sistemas de telemetría.",
        ru: "Инженер по интеграции аппаратного и программного обеспечения с опытом работы с микроконтроллерами, сенсорами и системами телеметрии.",
        uk: "Інженер з інтеграції апаратного та програмного забезпечення з досвідом роботи з мікроконтролерами, сенсорами та системами телеметрії.",
        ca: "Enginyer d'Integració de Maquinari i Programari amb experiència treballant amb microcontroladors, sensors i sistemes de telemetria."
    }
};

const BASE_PROFILE = {
    name: "Anton",
    location: "Barcelona, Spain",
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
            role: "Freelance Software Engineer",
            company: "Freelance",
            period: "2023 - Present",
            description: "Development of full-stack systems, specialized web applications, and interactive products.",
            achievements: [
                "Developed private data management and counting systems (not featured in public portfolio) using Ant Design JS and custom Python HTTP servers.",
                "Launched a B2B Logistics Simulator using Godot 4 and real-world geodata.",
                "Developed the LingoQuest platform (EdTech) with AI-based adaptive assessment.",
                "Successfully released Sea Hunter: from 3D prototype to physical card game production.",
                "Architected a scalable business operations system for the service industry (Megumi Massage)."
            ],
            technologies: ["React", "Ant Design", "Python", "Godot 4"],
            tags: ["backend", "frontend", "gamedev"]
        },
        {
            role: "Lead Simulation Software Engineer",
            company: "EdTech & Industrial Sim Studio",
            period: "2020 - 2022",
            description: "Architecture of realistic training environments and procedural generation tools.",
            achievements: [
                "Led the development of a transport simulator (60fps) with complex NPC agent behavior for industrial certification.",
                "Created procedural environment generators in C#, reducing development cycle by 70%.",
                "Ensured integration of hardware telemetry into 3D engines for real-time simulation."
            ],
            technologies: ["C#", "Unity HDRP", "Simulation Design", "Team Lead"],
            tags: ["gamedev", "embedded"]
        },
        {
            role: "Hardware & Systems Integration Specialist",
            company: "Micro-Systems Firm",
            period: "2013 - 2018",
            description: "Integration between hardware and high-performance software systems.",
            achievements: [
                "5 years of experience developing low-level C/C++ firmware for medical and laboratory sensor equipment.",
                "Developed high-performance Python scripts for real-time sensor data analysis.",
                "Integrated STM32/ESP32 sensor arrays into custom digital twins for process automation."
            ],
            technologies: ["C++", "STM32", "Python", "Systems Engineering"],
            tags: ["backend", "embedded"]
        }
    ],
    projects: PROJECTS_EN,
    games: getGamesForLanguage('en'),
    ui: TRANSLATIONS.en,
    plans: {
        title: "Roadmap & Current Focus",
        description: "What I'm currently working on and planning for the near future.",
        items: [
            {
                status: "In Progress",
                title: "Advanced Agentic AI Research",
                description: "Exploring multi-agent systems and recursive self-improvement loops using Godot and LLMs.",
                subItems: ["Implementing memory context", "Designing tool-use protocols", "Testing in 3D environments"],
                date: "Q1 2026"
            },
            {
                status: "In Progress",
                title: "VoxelWorldCraft Finalization",
                description: "Completing the core survival mechanics and world saving system for the voxel sandbox prototype.",
                date: "Q1 2026"
            },
            {
                status: "Planned",
                title: "Fintech & 3DS2 Security Flow",
                description: "Deep dive into 3DS2 security protocols for modern high-reliability financial systems.",
                date: "Q2 2026"
            },
            {
                status: "Planned",
                title: "Advanced Microservice Orchestration",
                description: "Implementing distributed tracing and service mesh patterns using Helm and Kubernetes.",
                date: "Q2 2026"
            }
        ]
    }
};

const EXPERIENCE_RU = [
    {
        role: "Freelance Software Engineer",
        company: "Freelance",
        period: "2023 - Настоящее время",
        description: "Разработка full-stack систем, специализированных веб-приложений и интерактивных продуктов.",
        achievements: [
            "Разработал приватные системы учета и управления данными (не представлены в портфолио) с использованием Ant Design JS и кастомных Python HTTP-серверов.",
            "Запустил B2B логистический симулятор, используя Godot 4 и реальные геоданные.",
            "Разработал платформу LingoQuest (EdTech) с адаптивной оценкой на базе ИИ.",
            "Успешно довел до релиза Sea Hunter: от 3D прототипа до производства физической карточной игры.",
            "Спроектировал масштабируемую систему бизнес-операций для сферы услуг (Megumi Massage)."
        ],
        technologies: ["React", "Ant Design", "Python", "Godot 4"],
        tags: ["backend", "frontend", "gamedev"]
    },
    {
        role: "Lead Simulation Software Engineer",
        company: "EdTech & Industrial Sim Studio",
        period: "2020 - 2022",
        description: "Архитектура реалистичных тренировочных сред и инструментов процедурной генерации.",
        achievements: [
            "Руководил разработкой транспортного симулятора (60fps) со сложным поведением NPC-агентов для промышленной сертификации.",
            "Создал генераторы процедурного окружения на C#, сократив цикл разработки на 70%.",
            "Обеспечил интеграцию аппаратной телеметрии в 3D движки для симуляции в реальном времени."
        ],
        technologies: ["C#", "Unity HDRP", "Simulation Design", "Team Lead"],
        tags: ["gamedev", "embedded"]
    },
    {
        role: "Hardware & Systems Integration Specialist",
        company: "Micro-Systems Firm",
        period: "2013 - 2018",
        description: "Интеграция между аппаратным обеспечением и высокопроизводительными системами.",
        achievements: [
            "5 лет опыта разработки низкоуровневых прошивок C/C++ для медицинского и лабораторного сенсорного оборудования.",
            "Разработал высокопроизводительные Python-скрипты для анализа показаний сенсоров в реальном времени.",
            "Интегрировал массивы сенсоров STM32/ESP32 в кастомные цифровые двойники для автоматизации процессов."
        ],
        technologies: ["C++", "STM32", "Python", "Systems Engineering"],
        tags: ["backend", "embedded"]
    }
];

const EXPERIENCE_ES = [
    {
        role: "Freelance Software Engineer",
        company: "Freelance",
        period: "2023 - Presente",
        description: "Desarrollo de sistemas full-stack, aplicaciones web especializadas y productos interactivos.",
        achievements: [
            "Desarrollé sistemas privados de gestión y conteo de datos (no incluidos en el portafolio) usando Ant Design JS y servidores HTTP en Python.",
            "Lancé un Simulador Logístico B2B usando Godot 4 y geodatos reales.",
            "Desarrollo de la plataforma LingoQuest (EdTech) con evaluación adaptativa basada en IA.",
            "Lanzamiento exitoso de Sea Hunter: del prototipo 3D a la producción física del juego de cartas.",
            "Arquitectura de un sistema escalable de operaciones comerciales para el sector servicios (Megumi Massage)."
        ],
        technologies: ["React", "Ant Design", "Python", "Godot 4"],
        tags: ["backend", "frontend", "gamedev"]
    },
    {
        role: "Lead Simulation Software Engineer",
        company: "EdTech & Industrial Sim Studio",
        period: "2020 - 2022",
        description: "Arquitectura de entornos de entrenamiento realistas y herramientas de generación procedimental.",
        achievements: [
            "Lideré el desarrollo de un simulador de transporte (60fps) con comportamiento complejo de agentes NPC para certificación industrial.",
            "Creé generadores procedurales de entorno en C#, reduciendo el ciclo de desarrollo del en un 70%.",
            "Aseguré la integración de telemetría de hardware en motores 3D para simulación en tiempo real."
        ],
        technologies: ["C#", "Unity HDRP", "Simulation Design", "Team Lead"],
        tags: ["gamedev", "embedded"]
    },
    {
        role: "Especialista de Integración de Sistemas y Hardware",
        company: "Micro-Systems Firm",
        period: "2013 - 2018",
        description: "Integración entre hardware y sistemas de software de alto rendimiento.",
        achievements: [
            "5 años de experiencia desarrollando firmware C/C++ de bajo nivel para equipos de sensores médicos y de laboratorio.",
            "Desarrollo de scripts de Python de alto rendimiento para el análisis de datos de sensores en tiempo real.",
            "Integración de matrices de sensores STM32/ESP32 en gemelos digitales personalizados para la automatización de procesos."
        ],
        technologies: ["C++", "STM32", "Python", "Systems Engineering"],
        tags: ["backend", "embedded"]
    }
];

const EXPERIENCE_UK = [
    {
        role: "Freelance Software Engineer",
        company: "Freelance",
        period: "2023 - Теперішній час",
        description: "Розробка full-stack систем, спеціалізованих веб-додатків та інтерактивних продуктів.",
        achievements: [
            "Розробив приватні системи обліку та управління даними (не представлені в портфоліо) з використанням Ant Design JS та кастомних Python HTTP-серверів.",
            "Запустил B2B логістичний симулятор, використовуючи Godot 4 та реальні геодані.",
            "Розробив платформу LingoQuest (EdTech) з адаптивною оцінкою на базі ШІ.",
            "Успішно довів до релізу Sea Hunter: від 3D-прототипу до виробництва фізичної карткової гри.",
            "Спроектував масштабовану систему бізнес-операцій для сфери послуг (Megumi Massage)."
        ],
        technologies: ["React", "Ant Design", "Python", "Godot 4"],
        tags: ["backend", "frontend", "gamedev"]
    },
    {
        role: "Lead Simulation Software Engineer",
        company: "EdTech & Industrial Sim Studio",
        period: "2020 - 2022",
        description: "Архітектура реалістичних тренувальних середовищ та інструментів процедурної генерації.",
        achievements: [
            "Керував розробкою транспортного симулятора (60fps) зі складною поведінкою NPC-агентів для промислової сертифікації.",
            "Створив генератори процедурного оточення на C#, скоротивши цикл розробки на 70%.",
            "Забезпечив інтеграцію апаратної телеметрії у 3D-рушії для симуляції в реальному часі."
        ],
        technologies: ["C#", "Unity HDRP", "Simulation Design", "Team Lead"],
        tags: ["gamedev", "embedded"]
    },
    {
        role: "Hardware & Systems Integration Specialist",
        company: "Micro-Systems Firm",
        period: "2013 - 2018",
        description: "Інтеграція між апаратним забезпеченням та високопродуктивними системами.",
        achievements: [
            "5 років досвіду розробки низькорівневих прошивок C/C++ для медичного та лабораторного сенсорного обладнання.",
            "Розробив високопродуктивні Python-скрипти для аналізу показань сенсорів у реальному часі.",
            "Інтегрував масиви сенсорів STM32/ESP32 у кастомні цифрові двійники для автоматизації процесів."
        ],
        technologies: ["C++", "STM32", "Python", "Systems Engineering"],
        tags: ["backend", "embedded"]
    }
];

const EXPERIENCE_CA = [
    {
        role: "Freelance Software Engineer",
        company: "Freelance",
        period: "2023 - Present",
        description: "Desenvolupament de sistemes full-stack, aplicacions web especialitzades i productes interactius.",
        achievements: [
            "Vaig desenvolupar sistemes privats de gestió i recompte de dades (no inclosos al portafoli) utilitzant Ant Design JS i servidors HTTP en Python.",
            "Vaig llançar un Simulador Logístic B2B utilitzant Godot 4 i geodades reals.",
            "Desenvolupament de la plataforma LingoQuest (EdTech) amb avaluació adaptativa basada en IA.",
            "Llançament reeixit de Sea Hunter: del prototip 3D a la producció física del joc de cartes.",
            "Arquitectura d'un sistema escalable d'operacions comercials per al sector serveis (Megumi Massage)."
        ],
        technologies: ["React", "Ant Design", "Python", "Godot 4"],
        tags: ["backend", "frontend", "gamedev"]
    },
    {
        role: "Lead Simulation Software Engineer",
        company: "EdTech & Industrial Sim Studio",
        period: "2020 - 2022",
        description: "Arquitectura d'entorns d'entrenament realistes i eines de generació procedimental.",
        achievements: [
            "Vaig liderar el desenvolupament d'un simulador de transport (60fps) amb comportament complex d'agents NPC per a certificació industrial.",
            "Vaig crear generadors procedimentals d'entorns en C#, reduint el cicle de desenvolupament en un 70%.",
            "Vaig assegurar la integració de telemetria de maquinari en motors 3D per a simulació en temps real."
        ],
        technologies: ["C#", "Unity HDRP", "Simulation Design", "Team Lead"],
        tags: ["gamedev", "embedded"]
    },
    {
        role: "Especialista d'Integració de Sistemes i Maquinari",
        company: "Micro-Systems Firm",
        period: "2013 - 2018",
        description: "Integració entre maquinari i sistemes de programari d'alt rendiment.",
        achievements: [
            "5 anys d'experiència desenvolupant microprogramari C/C++ de baix nivell per a equips de sensors mèdics i de laboratori.",
            "Desenvolupament d'scripts de Python d'alt rendiment per a l'anàlisi de dades de sensors en temps real.",
            "Integració de matrius de sensors STM32/ESP32 en bessons digitals personalitzats per a l'automatització de processos."
        ],
        technologies: ["C++", "STM32", "Python", "Systems Engineering"],
        tags: ["backend", "embedded"]
    }
];

export const PROFILES_DATA = {
    en: BASE_PROFILE,
    es: { ...BASE_PROFILE, experience: EXPERIENCE_ES, ui: TRANSLATIONS.es, projects: PROJECTS_ES, games: getGamesForLanguage('es') },
    ru: { ...BASE_PROFILE, experience: EXPERIENCE_RU, ui: TRANSLATIONS.ru, projects: PROJECTS_RU, games: getGamesForLanguage('ru') },
    uk: { ...BASE_PROFILE, experience: EXPERIENCE_UK, ui: TRANSLATIONS.uk, projects: PROJECTS_UK, games: getGamesForLanguage('uk') },
    ca: { ...BASE_PROFILE, experience: EXPERIENCE_CA, ui: TRANSLATIONS.ca, projects: PROJECTS_CA, games: getGamesForLanguage('ca') }
};



// Magical / RPG Profile Data
const MAGICAL_PROFILES = {
    en: {
        ...TRANSLATIONS.en,
        name: "Anton (Megumin Edition)",
        title: "Arch-Wizard of Linux & Explosions",
        about: "I am Anton, wielder of the Staff of Lex and master of the dark arts of Systems Engineering! Since the dawn of my descent into the digital abyss, I have sought only one thing: the ultimate code that will leave the servers in ASHES! I specialize in Explosive Simulations and Spells of C++ High Performance! Do you dare witness my greatest achievement? EXPLO-SION!!",
        socials: SOCIALS,
        skills: COMMON_SKILLS,
        languages: COMMON_LANGUAGES,
        stats: { str: 18, dex: 16, con: 14, int: 20, wis: 12, cha: 15 },
        inventory: [
            { name: "Staff of Destruction", type: "Keyboard", rarity: "Legendary", desc: "Forged in the fires of a thousand mechanical switches. Increases WPM by 100% when fueled by coffee." },
            { name: "Robes of the Root User", type: "Armor", rarity: "Epic", desc: "Grants immunity to 'Permission Denied' spells and minor segmentation faults." },
            { name: "Pouch of Infinite Mana", type: "SSD", rarity: "Rare", desc: "A 2TB vessel containing dangerous amounts of unfinished prototypes." }
        ],
        quests: [
            { name: "Shatter the Monolith", desc: "Broke a massive legacy system into micro-explosions (services) using the power of Docker.", reward: "Badge of Architecture master" },
            { name: "The Latency Demon", desc: "Hunted down a 5ms delay in the networking protocol and banished it to the void.", reward: "Ring of Speed" },
            { name: "Summon the Horde", desc: "Scripted a thousand agentic behaviors to march in perfect sync within a Godot simulation.", reward: "Commander's Insight" }
        ],
        projects: PROJECTS_EN,
        games: getGamesForLanguage('en'),
        ui: TRANSLATIONS.en,
        experience: [
            {
                role: "Supreme Code Commander",
                company: "The Explosion Guild",
                period: "Eternity",
                achievements: [
                    "Summoned 'Docker Compose' to call forth an army of multi-services in mere seconds!",
                    "Brewed a C++ potion that accelerated pathfinding logic by 400%!",
                    "Survived a direct hit from a production outage with only 1 HP remaining (and fixed it)."
                ],
                technologies: ["Explosive C++", "Docker Magic", "Guild Management"]
            }
        ]
    },
    es: {
        ...TRANSLATIONS.es,
        name: "Anton (Edición Megumin)",
        title: "Archimago de Linux y Explosiones",
        about: "¡Soy Anton, el portador del Báculo de Lex y maestro de las artes oscuras de la Ingeniería de Sistemas! Desde el amanecer de mi descenso al abismo digital, ¡solo he buscado una cosa: el código definitivo que dejará los servidores en CENIZAS! ¡Me especializo en Simulaciones Explosivas y Hechizos de Alto Rendimiento en C++! ¿Te atreves a presenciar mi mayor logro? ¡¡EXPLO-SION!!",
        socials: SOCIALS,
        skills: COMMON_SKILLS,
        languages: COMMON_LANGUAGES,
        stats: { str: 18, dex: 16, con: 14, int: 20, wis: 12, cha: 15 },
        inventory: [
            { name: "Báculo de Destrucción", type: "Teclado", rarity: "Legendario", desc: "Forjado en los fuegos de mil interruptores mecánicos. Aumenta las PPM en un 100% cuando se alimenta con café." },
            { name: "Túnica del Usuario Root", type: "Armadura", rarity: "Épico", desc: "Otorga inmunidad a los hechizos de 'Permiso Denegado' y fallos de segmentación menores." },
            { name: "Bolsa de Maná Infinito", type: "SSD", rarity: "Raro", desc: "Un recipiente de 2TB que contiene cantidades peligrosas de prototipos sin terminar." }
        ],
        quests: [
            { name: "Destrozar el Monolito", desc: "Dividí un sistema legado masivo en micro-explosiones (servicios) usando el poder de Docker.", reward: "Insignia de Maestro de Arquitectura" },
            { name: "El Demonio de la Latencia", desc: "Cacé un retraso de 5ms en el protocolo de red y lo desterré al vacío.", reward: "Anillo de Velocidad" },
            { name: "Invocar a la Horda", desc: "Programé mil comportamientos agénticos para marchar en perfecta sincronía dentro de una simulación de Godot.", reward: "Visión del Comandante" }
        ],
        projects: PROJECTS_ES,
        games: getGamesForLanguage('es'),
        ui: TRANSLATIONS.es,
        experience: [
            {
                role: "Comandante Supremo del Código",
                company: "El Gremio de la Explosión",
                period: "Eternidad",
                achievements: [
                    "¡Invoqué 'Docker Compose' para llamar a un ejército de multiservicios en meros segundos!",
                    "¡Preparé una poción de C++ que aceleró la lógica de búsqueda de caminos en un 400%!",
                    "Sobreviví a un impacto directo de una caída de producción con solo 1 HP restante (y lo arreglé)."
                ],
                technologies: ["C++ Explosivo", "Magia Docker", "Gestión de Gremios"]
            }
        ]
    },
    ru: {
        ...TRANSLATIONS.ru,
        name: "Антон (Издание Мегумин)",
        title: "Архимаг Linux и Взрывов",
        about: "Я — Антон, владелец Посоха Лекса и мастер темных искусств системной инженерии! С самого начала моего погружения в цифровую бездну я искал лишь одно: идеальный код, который превратит серверы в ПЕПЕЛ! Я специализируюсь на взрывных симуляциях и заклинаниях C++ высокой производительности! Осмелитесь ли вы узреть мое величайшее достижение? ЭКСПЛОУ-ЖЕН!!",
        socials: SOCIALS,
        skills: COMMON_SKILLS,
        languages: COMMON_LANGUAGES,
        stats: { str: 18, dex: 16, con: 14, int: 20, wis: 12, cha: 15 },
        inventory: [
            { name: "Посох Разрушения", type: "Клавиатура", rarity: "Legendary", desc: "Выкован в пламени тысячи механических переключателей. Увеличивает количество слов в минуту на 100%, если заправлен кофе." },
            { name: "Мантия Рут-пользователя", type: "Броня", rarity: "Epic", desc: "Дает иммунитет к заклинаниям 'Permission Denied' и мелким ошибкам сегментации." },
            { name: "Сумка Бесконечной Маны", type: "SSD", rarity: "Rare", desc: "2-терабайтный сосуд, содержащий опасное количество незаконченных прототипов." }
        ],
        quests: [
            { name: "Разрушить Монолит", desc: "Разбил огромную унаследованную систему на микро-взрывы (сервисы), используя мощь Docker.", reward: "Знак Мастера Архитектуры" },
            { name: "Демон Задержки", desc: "Выследил 5-миллисекундную задержку в сетевом протоколе и изгнал ее в пустоту.", reward: "Кольцо Скорости" },
            { name: "Призвать Орду", desc: "Заскриптовал тысячу агентных поведений, марширующих в идеальном синхроне внутри симуляции Godot.", reward: "Прозрение Командира" }
        ],
        projects: PROJECTS_RU,
        games: getGamesForLanguage('ru'),
        ui: TRANSLATIONS.ru,
        experience: [
            {
                role: "Верховный Главнокомандующий Кода",
                company: "Гильдия Взрывов",
                period: "Вечность",
                achievements: [
                    "Призвал 'Docker Compose', чтобы вызвать армию мультисервисов за считанные секунды!",
                    "Сварил зелье на C++, которое ускорило логику поиска пути на 400%!",
                    "Пережил прямое попадание падения продакшена, оставшись с 1 HP (и все исправил)."
                ],
                technologies: ["Взрывной C++", "Магия Docker", "Управление Гильдией"]
            }
        ]
    },
    uk: {
        ...TRANSLATIONS.uk,
        name: "Антон (Видання Мегумін)",
        title: "Архімаг Linux та Вибухів",
        about: "Я — Антон, володар Посоха Лекса і майстер темних мистецтв системної інженерії! З самого початку мого занурення у цифровую безодню я шукав лише одне: ідеальний код, який перетворить сервери на ПОПІЛ! Я спеціалізуюся на вибухових симуляціях та заклинаннях C++ високої продуктивності! Чи наважитеся ви побачити моє найбільше досягнення? ЕКСПЛОУ-ЖЕН!!",
        socials: SOCIALS,
        skills: COMMON_SKILLS,
        languages: COMMON_LANGUAGES,
        stats: { str: 18, dex: 16, con: 14, int: 20, wis: 12, cha: 15 },
        inventory: [
            { name: "Посох Руйнування", type: "Клавіатура", rarity: "Legendary", desc: "Викований у полум'ї тисячі механічних перемикачів. Збільшує кількість слів за хвилину на 100%, якщо заправлений кавою." },
            { name: "Мантія Рут-користувача", type: "Броня", rarity: "Epic", desc: "Дає імунітет до заклинань 'Permission Denied' та дрібних помилок сегментації." },
            { name: "Сумка Нескінченної Мани", type: "SSD", rarity: "Rare", desc: "2-терабайтна судина, що містить небезпечну кількість незакінчених прототипів." }
        ],
        quests: [
            { name: "Зруйнувати Моноліт", desc: "Розбив величезну успадковану систему на мікро-вибухи (сервіси), використовуючи потужність Docker.", reward: "Знак Майстра Архітектури" },
            { name: "Демон Затримки", desc: "Вистежив 5-мілісекундну затримку в мережевому протоколі та вигнав її в порожнечу.", reward: "Кільце Швидкості" },
            { name: "Закликати Орду", desc: "Заскриптував тисячу агентних поведінок, що марширують в ідеальному синхроні всередині симуляції Godot.", reward: "Прозріння Командира" }
        ],
        projects: PROJECTS_UK,
        games: getGamesForLanguage('uk'),
        ui: TRANSLATIONS.uk,
        experience: [
            {
                role: "Верховний Головнокомандувач Коду",
                company: "Гільдія Вибухів",
                period: "Вічність",
                achievements: [
                    "Закликав 'Docker Compose', щоб викликати армію мультисервісів за лічені секунди!",
                    "Зварив зілля на C++, яке прискорило логіку пошуку шляху на 400%!",
                    "Пережив пряме попадання падіння продакшену, залишившись з 1 HP (і все виправив)."
                ],
                technologies: ["Вибуховий C++", "Магія Docker", "Управління Гільдією"]
            }
        ],
        projects: PROJECTS_UK,
        games: getGamesForLanguage('uk'),
        ui: TRANSLATIONS.uk,
    },
    ca: {
        ...TRANSLATIONS.ca,
        name: "Anton (Edició Megumin)",
        title: "Arximag de Linux i Explosions",
        about: "Sóc l'Anton, el portador del Bàcul de Lex i mestre de les arts fosques de l'Enginyeria de Sistemes! Des de l'alba del meu descens a l'abisme digital, només he buscat una cosa: el codi definitiu que deixarà els servidors en CENDRES! M'especialitzo en Simulacions Explosives i Conjurs d'Alt Rendiment en C++! T'atreveixes a presenciar la meva fita més gran? EXPLO-SIÓ!!",
        socials: SOCIALS,
        skills: COMMON_SKILLS,
        languages: COMMON_LANGUAGES,
        stats: { str: 18, dex: 16, con: 14, int: 20, wis: 12, cha: 15 },
        inventory: [
            { name: "Bàcul de Destrucció", type: "Teclat", rarity: "Legendary", desc: "Forjat en els focs de mil interruptores mecànics. Augmenta les PPM en un 100% quan s'alimenta amb cafè." },
            { name: "Túnica de l'Usuari Root", type: "Armadura", rarity: "Épico", desc: "Atorga immunitat als conjurs de 'Permís Denegat' i errors de segmentació menors." },
            { name: "Bossa de Manà Infinit", type: "SSD", rarity: "Raro", desc: "Un recipient de 2TB que conté quantitats perilloses de prototips sense acabar." }
        ],
        quests: [
            { name: "Destrossar el Monòlit", desc: "Vaig dividir un sistema llegat massiu en micro-explosions (serveis) utilitzant el poder de Docker.", reward: "Insignia de Mestre d'Arquitectura" },
            { name: "El Dimoni de la Latència", desc: "Vaig caçar un retard de 5ms en el protocol de xarxa i el vaig desterrar al buit.", reward: "Anell de Velocitat" },
            { name: "Invocar la Horda", desc: "Vaig programar mil comportaments agèntics per marxar en perfecta sincronía dins d'una simulació de Godot.", reward: "Visió del Comandant" }
        ],
        projects: PROJECTS_CA,
        games: getGamesForLanguage('ca'),
        ui: TRANSLATIONS.ca,
        experience: [
            {
                role: "Comandant Suprem del Codi",
                company: "El Gremi de l'Explosió",
                period: "Eternitat",
                achievements: [
                    "Vaig invocar 'Docker Compose' per cridar un exèrcit de multiserveis en pocs segons!",
                    "Vaig preparar una poció de C++ que va accelerar la lògica de cerca de camins en un 400%!",
                    "Vaig sobreviure a un impacte directe d'una caiguda de producció amb només 1 HP restant (i ho vaig arreglar)."
                ],
                technologies: ["C++ Explosiu", "Màgia Docker", "Gestió de Gremis"]
            }
        ]
    }
};

export const PROFILES = {
    general: {
        en: generateProfile('general', 'en'),
        es: generateProfile('general', 'es'),
        ru: generateProfile('general', 'ru'),
        uk: generateProfile('general', 'uk'),
        ca: generateProfile('general', 'ca')
    },
    gamedev: {
        en: generateProfile('gamedev', 'en'),
        es: generateProfile('gamedev', 'es'),
        ru: generateProfile('gamedev', 'ru'),
        uk: generateProfile('gamedev', 'uk'),
        ca: generateProfile('gamedev', 'ca')
    },
    frontend: {
        en: generateProfile('frontend', 'en'),
        es: generateProfile('frontend', 'es'),
        ru: generateProfile('frontend', 'ru'),
        uk: generateProfile('frontend', 'uk'),
        ca: generateProfile('frontend', 'ca')
    },
    backend: {
        en: generateProfile('backend', 'en'),
        es: generateProfile('backend', 'es'),
        ru: generateProfile('backend', 'ru'),
        uk: generateProfile('backend', 'uk'),
        ca: generateProfile('backend', 'ca')
    },
    embedded: {
        en: generateProfile('embedded', 'en'),
        es: generateProfile('embedded', 'es'),
        ru: generateProfile('embedded', 'ru'),
        uk: generateProfile('embedded', 'uk'),
        ca: generateProfile('embedded', 'ca')
    },
    magical: MAGICAL_PROFILES,
    serious: { en: BASE_PROFILE } // Fallback for old code
};

export const BLOG_DATA = {
    en: [
        {
            id: 'discovery-led-learning',
            title: "From Russian to Spanish: A Discovery-Led Journey",
            date: "March 10, 2026",
            readTime: "5 min read",
            excerpt: "How I built LingoQuest to bridge the gap between abstract academic concepts and immersive RPG mechanics.",
            content: "Full article coming soon. This post explores the architectural decisions behind LingoQuest, the gRPC scoring system, and how discovery-led learning improves retention.",
            tags: ["EdTech", "Architecture", "Learning"]
        }
    ],
    es: [
        {
            id: 'discovery-led-learning',
            title: "De Ruso a Español: Un Viaje de Descubrimiento",
            date: "10 de Marzo, 2026",
            readTime: "5 min de lectura",
            excerpt: "Cómo construí LingoQuest para cerrar la brecha entre conceptos académicos abstractos y mecánicas RPG inmersivas.",
            content: "Artículo completo próximamente. Este post explora las decisiones arquitectónicas detrás de LingoQuest.",
            tags: ["EdTech", "Arquitectura", "Aprendizaje"]
        }
    ],
    ru: [
        {
            id: 'discovery-led-learning',
            title: "От русского до испанского: Путь открытий",
            date: "10 марта 2026",
            readTime: "5 мин чтения",
            excerpt: "Как я создал LingoQuest, чтобы преодолеть разрыв между абстрактными знаниями и игровыми механиками.",
            content: "Полная статья скоро. Исследование архитектурных решений LingoQuest и gRPC скоринга.",
            tags: ["EdTech", "Архитектура", "Обучение"]
        }
    ],
    uk: [
        {
            id: 'discovery-led-learning',
            title: "Від російської до іспанської: Шлях відкриттів",
            date: "10 березня 2026",
            readTime: "5 хв читання",
            excerpt: "Як я створив LingoQuest, щоб подолати розрив між абстрактними знаннями та ігровими механіками.",
            content: "Повна стаття скоро. Дослідження архітектурних рішень LingoQuest та gRPC скорингу.",
            tags: ["EdTech", "Архітектура", "Навчання"]
        }
    ]
};

// Default export if needed
export const PROFILE = BASE_PROFILE;

export const SHOP_DATA = [
    { id: 'magic-balls', title: 'Magic Balls - Full Build', price: '$10', desc: 'The complete adventure with bonus levels.' },
    { id: 'city-deliv', title: 'Low-Poly City Build', price: '$15', desc: 'Custom optimized build for your platform.' },
    { id: 'sea-hunter', title: 'Sea Hunter Early Access', price: '$5', desc: 'Pre-order the underwater exploration game.' },
];
