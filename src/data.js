import { Github, Linkedin, Mail, Cpu, Gamepad2, Globe, Server, Terminal, Layers, Cuboid } from 'lucide-react';

const COMMON_SKILLS = [
    { name: "Godot & Unity", icon: Gamepad2 },
    { name: "Python (High Perf)", icon: Server },
    { name: "Product MVP Architect", icon: Layers },
    { name: "AI & Logistics Sim", icon: Gamepad2 },
    { name: "C++ & Systems", icon: Cpu },
    { name: "Embedded Mastery", icon: Cuboid },
    { name: "Full-Stack EdTech", icon: Globe },
];

const COMMON_LANGUAGES = [
    { name: "English", level: "C1" },
    { name: "Spanish", level: "B2" },
    { name: "Russian", level: "Native" },
    { name: "Ukrainian", level: "Native" },
];

const SOCIALS = {
    github: "https://github.com/megumi-joy",
    linkedin: "https://www.linkedin.com/in/megumi-joy/",
    email: "megumi.joy@gmail.com",
    phone: "+34 600 000 000"
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
        summary: "Professional Summary"
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
        summary: "Resumen Profesional"
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
            python: "Python"
        },
        summary: "Профессиональное резюме"
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
        summary: "Професійне резюме"
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
        title: "B2B Logistics & AI Simulator MVP",
        description: "High-fidelity logistics simulation using real-world OSM geodata. Designed for B2B route optimization and AI agent training. Scale: Unlimited city districts.",
        featured: true,
        tags: ["B2B Logistics", "AI Simulation", "OSM"],
        link: "https://megumi-joy.github.io/portfolio/"
    },
    {
        title: "Sea Hunter: Physical MVP Proof",
        description: "证明物理执行周期的战略性卡牌游戏 MVP。从数字 3D 到纸板物理实施的‘终结者’循环。",
        featured: false,
        tags: ["Physical Design", "Finalized MVP", "Card Game"],
        link: "https://github.com/megumi-joy/sea-hunter"
    }
];

const PROJECTS_FRONTEND_EN = [
    {
        title: "Dynamic Telemetry Dashboard (React)",
        description: "High-performance React dashboard for real-time telemetry. Optimized for sub-second latency and smooth 60fps rendering of 10k+ data points.",
        featured: true,
        tags: ["React", "WebGL", "Performance", "WebSockets"],
        link: "https://megumi-joy.github.io/portfolio/"
    },
    {
        title: "Glassmorphic UI Engine (JS/CSS)",
        description: "A premium CSS-in-JS design system for mission-critical simulation interfaces. Focused on GPU-accelerated effects and modular components.",
        featured: true,
        tags: ["React", "Design Systems", "Architecture"],
        link: null
    }
];

const PROJECTS_PYTHON_EN = [
    {
        title: "LingoQuest: Social EdTech Ecosystem MVP",
        description: "A premium discovery-led learning platform built with Next.js and Django. Features gRPC-based linguistic assessment, secure 3DS2 payment simulation, and a Godot 4 quest engine. Designed for social impact and scalable EdTech acceleration.",
        featured: true,
        tags: ["Social EdTech", "Next.js", "Django", "gRPC"],
        link: "https://github.com/megumi-joy/LanguageLearningAdventure"
    },
    {
        title: "EduStableCoin: Conceptual Fintech Architecture",
        description: "A high-level design for a decentralized educational currency system. Explores secure financial flows, smart contract integration patterns, and automated audit trails for transparent educational funding.",
        featured: true,
        tags: ["Python", "Fintech", "Blockchain", "Conceptual"],
        link: "https://github.com/megumi-joy/EduStableCoin"
    }
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
        title: "MVP de Simulador de Logística B2B",
        description: "Simulación logística de alta fidelidad basada en geodatos reales de OSM. Diseñada para optimización de rutas B2B y entrenamiento de IA.",
        featured: true,
        tags: ["Logística B2B", "Simulación IA", "OSM"],
        link: "https://megumi-joy.github.io/portfolio/"
    },
    {
        title: "Sea Hunter: Prueba de MVP Físico",
        description: "Juego de cartas que demuestra el ciclo de implementación física total. Del prototipo digital a la producción en cartón.",
        featured: false,
        tags: ["Diseño Físico", "MVP Finalizado", "Juego de Cartas"],
        link: "https://github.com/megumi-joy/sea-hunter"
    }
];

const PROJECTS_FRONTEND_ES = [
    {
        title: "Panel de Telemetría Dinámico",
        description: "Un panel de React de alto rendimiento que visualiza telemetría en vivo de sensores de hardware con latencia inferior al segundo.",
        featured: true,
        tags: ["React", "D3.js", "WebSockets"],
        link: "https://megumi-joy.github.io/portfolio/"
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
        title: "B2B Логистический ИИ-симулятор MVP",
        description: "Высокоточная симуляция логистики на базе реальных геоданных OSM. Предназначена для B2B оптимизации маршрутов и обучения ИИ.",
        featured: true,
        tags: ["B2B Логистика", "ИИ Симуляция", "OSM"],
        link: "https://megumi-joy.github.io/portfolio/"
    },
    {
        title: "Sea Hunter: Физическое воплощение MVP",
        description: "Доказательство умения доводить продукт до физической реализации. От 3D-прототипа до финальной печати в картоне.",
        featured: false,
        tags: ["Physical Design", "Finalized MVP", "Card Game"],
        link: "https://github.com/megumi-joy/sea-hunter"
    }
];

const PROJECTS_FRONTEND_RU = [
    {
        title: "Динамическая Панель Телеметрии",
        description: "Высокопроизводительная панель на React, визуализирующая живую телеметрию с аппаратных датчиков с задержкой менее секунды.",
        featured: true,
        tags: ["React", "D3.js", "WebSockets"],
        link: "https://megumi-joy.github.io/portfolio/"
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
        title: "B2B Логістичний ІІ-симулятор MVP",
        description: "Високоточна симуляція логістики на базі реальних геоданих OSM. Призначена для B2B оптимізації маршрутів та навчання ІІ.",
        featured: true,
        tags: ["B2B Логістика", "ІІ Симуляція", "OSM"],
        link: "https://megumi-joy.github.io/portfolio/"
    },
    {
        title: "Sea Hunter: Фізичне втілення MVP",
        description: "Доказ вміння доводити продукт до фізичної реалізації. Від 3D-прототипу до фінального друку в картоні.",
        featured: false,
        tags: ["Physical Design", "Finalized MVP", "Card Game"],
        link: "https://github.com/megumi-joy/sea-hunter"
    }
];

const PROJECTS_FRONTEND_UK = [
    {
        title: "Динамічна Панель Телеметрії",
        description: "Високопродуктивна панель на React, що візуалізує живу телеметрію з апаратних датчиків із затримкою менше секунди.",
        featured: true,
        tags: ["React", "D3.js", "WebSockets"],
        link: "https://megumi-joy.github.io/portfolio/"
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

export const GAMES_DATA = {
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
            }
        }
    },
    "magicBallsAdventure": {
        thumbnail: "/portfolio/games/magicballsadventure/index.png",
        path: "/portfolio/games/magicballsadventure/index.html",
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
            }
        }
    },
    "lowPolyCityDelivery": {
        thumbnail: "/portfolio/games/Low-Poly City Delivery/index.png",
        path: "/portfolio/games/Low-Poly City Delivery/index.html",
        tags: ["B2B Logistics", "AI Simulation", "WebGL"],
        status: "playable",
        progress: 80,
        translations: {
            en: {
                title: "B2B Logistics & AI Simulator MVP",
                description: "A high-fidelity logistics simulation using real-world OSM geodata. Designed for B2B route optimization and AI agent training in urban environments.",
                gdd: {
                    overview: "Simulate complex delivery logistics in real-world street layouts (OSM) for business optimization.",
                    mechanics: ["Real-world Geodata (OSM)", "B2B Logistics Flow", "AI Agent Navigation"],
                    features: ["Urban Simulation", "Traffic AI", "Scalable City Districts"]
                }
            },
            es: {
                title: "MVP de Simulador de Logística B2B e IA",
                description: "Simulación logística de alta fidelidad basada en geodes reales (OSM). Diseñada para optimización B2B y entrenamiento de IA.",
                gdd: {
                    overview: "Simula logística de entrega compleja en calles reales (OSM) para optimización de negocios.",
                    mechanics: ["Geodatos Reales (OSM)", "Flujo Logístico B2B", "Navegación de IA"],
                    features: ["Simulación Urbana", "IA de Tráfico", "Escalabilidad"]
                }
            },
            ru: {
                title: "B2B Логистический ИИ-симулятор MVP",
                description: "Высокоточная симуляция логистики на базе реальных геоданных OSM. Предназначена для B2B оптимизации маршрутов и обучения агентного ИИ.",
                gdd: {
                    overview: "Симуляция сложных логистических цепочек в реальной городской застройке (OSM) для бизнеса.",
                    mechanics: ["Реальные геоданные (OSM)", "B2B логистические потоки", "Навигация агентного ИИ"],
                    features: ["Городская симуляция", "ИИ-трафик", "Масштабируемые районы"]
                }
            },
            uk: {
                title: "B2B Логістичний ІІ-симулятор MVP",
                description: "Високоточна симуляція логістики на базі реальних геоданих OSM. Призначена для B2B оптимізації маршрутів та навчання агентного ІІ.",
                gdd: {
                    overview: "Симуляція складних логістичних ланцюжків у реальній міській забудові (OSM) для бізнесу.",
                    mechanics: ["Реальні геодані (OSM)", "B2B логістичні потоки", "Навігація агентного ІІ"],
                    features: ["Міська симуляція", "ІІ-трафік", "Масштабовані райони"]
                }
            }
        }
    },
    "voicyGodot": {
        thumbnail: "/portfolio/games/VoicyGodot/index.png",
        path: "/portfolio/games/VoicyGodot/index.html",
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
            }
        }
    },
    "seaHunter": {
        thumbnail: "/portfolio/games/seahunter/index.png",
        path: "/portfolio/games/seahunter/index.html",
        tags: ["Card Game", "Finalized MVP", "Physical Design"],
        status: "finalized",
        progress: 100,
        translations: {
            en: {
                title: "Sea Hunter: Physical MVP Finalization",
                description: "A strategic battleship-style card game MVP. Proof of the 'Finalizer' cycle: from digital 3D prototypes to physical cardboard production and rule documentation.",
                gdd: {
                    overview: "Strategic card game proving full production-to-physical implementation cycle.",
                    mechanics: ["Turn-based Battle", "Preparation Phase", "Island Powers"],
                    features: ["Released in Cardboard", "Headless AI Verification", "MCP Bot Support"]
                }
            },
            es: {
                title: "Sea Hunter: Finalización de MVP Físico",
                description: "Juego de cartas estratégico. Prueba del ciclo 'Finalizador': desde prototipos 3D hasta producción física y documentación.",
                gdd: {
                    overview: "Juego de estrategia que demuestra el ciclo completo de implementación física.",
                    mechanics: ["Batalla por turnos", "Fase de preparación", "Poderes de Islas"],
                    features: ["Lanzado en cartón", "Verificación por IA", "Soporte MCP"]
                }
            },
            ru: {
                title: "Sea Hunter: Финализация физического MVP",
                description: "Стратегическая карточная игра. Доказательство умения доводить продукт до физического воплощения: от 3D-прототипа до печати в картоне.",
                gdd: {
                    overview: "Стратегическая игра, демонстрирующая полный цикл от идеи до физического продукта.",
                    mechanics: ["Пошаговая битва", "Фаза подготовки", "Силы островов"],
                    features: ["Выпущено в картоне", "Headless ИИ-верификация", "Поддержка MCP-ботов"]
                }
            },
            uk: {
                title: "Sea Hunter: Фіналізація фізичного MVP",
                description: "Стратегічна карткова гра. Доказ вміння доводити продукт до фізичного втілення: від 3D-прототипу до друку в картоні.",
                gdd: {
                    overview: "Стратегічна гра, що демонструє повний цикл від ідеї до фізичного продукту.",
                    mechanics: ["Покрокова битва", "Фаза підготовки", "Сили островів"],
                    features: ["Випущено в картоні", "Headless ІІ-верифікація", "Підтримка MCP-ботів"]
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
                title: "Business Operations MVP: Megumi Massage",
                description: "A full-stack business operations engine for a wellness center. Features multilingual support, booking system integration, and Supabase backend.",
                gdd: {
                    overview: "Operational MVP for local service business automation.",
                    mechanics: ["Booking Flow", "Admin Dashboard", "Multilingual Content"],
                    features: ["React/Vite", "Supabase Auth", "Responsive UI"]
                }
            },
            es: {
                title: "MVP de Operaciones: Megumi Massage",
                description: "Motor de operaciones comerciales para un centro de bienestar. Incluye soporte multilingüe y sistema de reservas.",
                gdd: {
                    overview: "MVP operativo para la automatización de negocios de servicios.",
                    mechanics: ["Flujo de Reserva", "Panel Admin", "Contenido Multilingüe"],
                    features: ["React/Vite", "Supabase backend", "Diseño Responsivo"]
                }
            },
            ru: {
                title: "Бизнес-операционный MVP: Megumi Massage",
                description: "Полнофункциональный движок для управления велнес-центром. Мультиязычность, система бронирования и Supabase.",
                gdd: {
                    overview: "Операционный MVP для автоматизации локального сервисного бизнеса.",
                    mechanics: ["Процесс бронирования", "Панель администратора", "Мультиязычный контент"],
                    features: ["React/Vite", "Supabase бэкенд", "Адаптивный UI"]
                }
            },
            uk: {
                title: "Бізнес-операційний MVP: Megumi Massage",
                description: "Повнофункціональний рушій для управління велнес-центром. Мультімовність, система бронювання та Supabase.",
                gdd: {
                    overview: "Операційний MVP для автоматизації локального сервісного бізнесу.",
                    mechanics: ["Процес бронювання", "Панель адміністратора", "Мультімовний контент"],
                    features: ["React/Vite", "Supabase бекенд", "Адаптивний UI"]
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
    if (specialty === 'python') {
        return [
            { name: "Python 3.12 (High Perf)", icon: Server },
            { name: "FastAPI, Django & gRPC", icon: Layers },
            { name: "Asyncio & Distributed Sys", icon: Cpu },
            { name: "PostgreSQL & RabbitMQ/Kafka", icon: Server },
            { name: "K8s, Helm & GitLab CI", icon: Terminal },
            { name: "Microsrv Architecture", icon: Cuboid },
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
    if (specialty === 'gamedev') return lang === 'en' ? PROJECTS_EN : (lang === 'es' ? PROJECTS_ES : (lang === 'ru' ? PROJECTS_RU : PROJECTS_UK));
    if (specialty === 'frontend') return lang === 'en' ? PROJECTS_FRONTEND_EN : (lang === 'es' ? PROJECTS_FRONTEND_ES : (lang === 'ru' ? PROJECTS_FRONTEND_RU : PROJECTS_FRONTEND_UK));
    if (specialty === 'python') return lang === 'en' ? PROJECTS_PYTHON_EN : (lang === 'es' ? PROJECTS_PYTHON_ES : (lang === 'ru' ? PROJECTS_PYTHON_RU : PROJECTS_PYTHON_UK));

    // general: combine some or use base
    return lang === 'en' ? PROJECTS_EN : (lang === 'es' ? PROJECTS_ES : (lang === 'ru' ? PROJECTS_RU : PROJECTS_UK));
};

const generateProfile = (specialty, lang) => {
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

const SPECIALIZED_TITLES = {
    general: {
        en: "MVP Product Ecosystem Architect",
        es: "Arquitecto de Ecosistemas de Productos MVP",
        ru: "Архитектор продуктовых MVP-экосистем",
        uk: "Архітектор продуктових MVP-екосистем"
    },
    gamedev: {
        en: "Senior Simulation & Tools Engineer",
        es: "Ingeniero Senior de Simulación y Herramientas",
        ru: "Старший инженер симуляций и инструментов",
        uk: "Старший інженер симуляцій та інструментів"
    },
    frontend: {
        en: "Senior Frontend Engineer (React / WebGL)",
        es: "Ingeniero Senior de Frontend (React / WebGL)",
        ru: "Старший фронтенд-инженер (React / WebGL)",
        uk: "Старший фронтенд-інженер (React / WebGL)"
    },
    python: {
        en: "Senior Python Backend Engineer (FastAPI / Django)",
        es: "Ingeniero Senior de Backend Python (FastAPI / Django)",
        ru: "Старший бэкенд-инженер Python (FastAPI / Django)",
        uk: "Старший бекенд-інженер Python (FastAPI / Django)"
    }
};

const SPECIALIZED_ABOUT = {
    general: {
        en: "Multidisciplinary Engineer & Product Architect. Expert in high-performance simulations, distributed systems, and bridging the gap between hardware and software. I build deterministic architectures and scalable MVPs for B2B logistics and industrial EdTech.",
        es: "Ingeniero multidisciplinar y arquitecto de productos. Experto en simulaciones de alto rendimiento, sistemas distribuidos y en cerrar la brecha entre el hardware y el software. Construyo arquitecturas determinísticas y MVPs escalables.",
        ru: "Мультидисциплинарный инженер и архитектор продуктов. Эксперт по высокопроизводительным симуляциям, распределенным системам и интеграции железа с ПО. Создаю детерминированные архитектуры и масштабируемые MVP.",
        uk: "Мультидисциплінарний інженер та архітектор продуктів. Експерт із високопродуктивних симуляцій, розподілених систем та інтеграції заліза з ПЗ. Створюю детерміновані архітектури та масштабовані MVP."
    },
    gamedev: {
        en: "Product Architect specializing in real-time B2B logistics simulations and agentic AI behaviors. Proven track record in delivering ready-to-use MVP solutions for industrial and research sectors, including physical product finalization.",
        es: "Arquitecto de Productos especializado en simulaciones logísticas B2B y comportamientos de IA agéntica. Historial probado en entrega de soluciones MVP listas para usar.",
        ru: "Архитектор продуктов, специализирующийся на логистических B2B-симуляциях и агентном ИИ. Опыт доведения MVP до финального продукта, включая физическую реализацию.",
        uk: "Архітектор продуктів, що спеціалізується на логістичних B2B-симуляціях та агентному ІІ. Досвід доведення MVP до фінального продукту, включаючи фізичну реалізацію."
    },
    frontend: {
        en: "Senior Frontend Engineer delivering premium MVP dashboards and high-performance WebGL visualizations. Expert in creating fluid 60fps experiences for complex B2B operations and social EdTech ecosystems.",
        es: "Ingeniero Senior de Frontend que entrega dashboards MVP premium y visualizaciones WebGL de alto rendimiento.",
        ru: "Старший фронтенд-инженер, создающий премиальные MVP-панели и высокопроизводительную WebGL-визуализацию для B2B и социальных EdTech-проектов.",
        uk: "Старший фронтенд-інженер, що створює преміальні MVP-панелі та високопродуктивну WebGL-візуалізацію для B2B та соціальних EdTech-проектів."
    },
    python: {
        en: "Senior Backend Engineer with 5+ years of focus on high-performance Python, FastAPI, and gRPC microservices. Architect of scalable MVP ecosystems for Fintech and EdTech, featuring secure 3DS2 payment flows and real-time data pipelines.",
        es: "Ingeniero Senior de Backend con más de 5 años de enfoque en arquitecturas distribuidas con Python de alto rendimiento, FastAPI y gRPC.",
        ru: "Старший бэкенд-инженер с 5-летним стажем в создании высокопроизводительных Python-систем. Архитектор MVP-экосистем для Fintech и EdTech с использованием 3DS2 и gRPC.",
        uk: "Старший бекенд-інженер з 5-річним стажем у створенні високопродуктивних Python-систем. Архітектор MVP-екосистем для Fintech та EdTech з використанням 3DS2 та gRPC."
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
            role: "MVP Product Ecosystem Architect",
            company: "Autonomous Product Development",
            period: "2023 - Present",
            description: "Developing a diverse portfolio of ready-to-market software and physical products.",
            achievements: [
                "Launched a B2B Logistics Simulator MVP using Godot 4 and Real-World Geodata integration.",
                "Developed a Social EdTech Learning Ecosystem (LingoQuest) with AI-driven adaptive assessment.",
                "Completed the 'Finalizer' cycle for Sea Hunter: from digital 3D MVP to physical cardboard production.",
                "Architected a scalable business operations engine for service-based companies (Megumi Massage)."
            ],
            technologies: ["Node.js", "Godot 4", "Python", "MVP Strategy"],
            tags: ["gamedev", "python", "frontend"]
        },
        {
            role: "Lead Simulation Software Engineer",
            company: "EdTech & Industrial Sim Studio",
            period: "2020 - 2022",
            description: "Architected photorealistic training environments and procedural generation tools.",
            achievements: [
                "Led team in building a 60fps Traffic Simulator with complex NPC-agent behaviors for industrial certification.",
                "Engineered procedural environment generators in C#, cutting MVP development cycles by 70%.",
                "Managed the integration of hardware telemetry into real-time 3D simulation engines."
            ],
            technologies: ["C#", "Unity HDRP", "Simulation Design", "Team Lead"],
            tags: ["gamedev"]
        },
        {
            role: "Hardware & Systems Integration Specialist",
            company: "Micro-Systems Firm",
            period: "2013 - 2018",
            description: "Bridging the gap between physical hardware and high-performance software systems.",
            achievements: [
                "5 years of experience in low-level C/C++ firmware for medical and laboratory sensing hardware.",
                "Developed high-throughput Python scripts for real-time sensor data analysis and synchronization.",
                "Integrated STM32/ESP32 sensor arrays with custom-built digital twins for process automation."
            ],
            technologies: ["C++", "STM32", "Python", "Systems Engineering"],
            tags: ["python"]
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

const PROFILES_DATA = {
    en: BASE_PROFILE,
    es: { ...BASE_PROFILE, ui: TRANSLATIONS.es, projects: PROJECTS_ES, games: getGamesForLanguage('es') },
    ru: { ...BASE_PROFILE, ui: TRANSLATIONS.ru, projects: PROJECTS_RU, games: getGamesForLanguage('ru') },
    uk: { ...BASE_PROFILE, ui: TRANSLATIONS.uk, projects: PROJECTS_UK, games: getGamesForLanguage('uk') }
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
    }
};

export const PROFILES = {
    general: {
        en: generateProfile('general', 'en'),
        es: generateProfile('general', 'es'),
        ru: generateProfile('general', 'ru'),
        uk: generateProfile('general', 'uk')
    },
    gamedev: {
        en: generateProfile('gamedev', 'en'),
        es: generateProfile('gamedev', 'es'),
        ru: generateProfile('gamedev', 'ru'),
        uk: generateProfile('gamedev', 'uk')
    },
    frontend: {
        en: generateProfile('frontend', 'en'),
        es: generateProfile('frontend', 'es'),
        ru: generateProfile('frontend', 'ru'),
        uk: generateProfile('frontend', 'uk')
    },
    python: {
        en: generateProfile('python', 'en'),
        es: generateProfile('python', 'es'),
        ru: generateProfile('python', 'ru'),
        uk: generateProfile('python', 'uk')
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
