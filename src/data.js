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
    github: "https://github.com/megumi-joy",
    linkedin: "https://www.linkedin.com/in/megumi-joy/",
    email: "megumi.joy@gmail.com"
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
        contactText: "I'm currently open to new opportunities in Game Development, Simulation Engineering, or Full Stack Web Development.",
        contactButton: "Say Hello",
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
        }
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
        }
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
        }
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
        }
    }
};

const PROJECTS_EN = [
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
];

const PROJECTS_FRONTEND_EN = [
    {
        title: "Dynamic Telemetry Dashboard",
        description: "A high-performance React dashboard visualizing live telemetry from hardware sensors with sub-second latency.",
        featured: true,
        tags: ["React", "D3.js", "WebSockets"],
        link: "https://megumi-joy.github.io/portfolio/"
    },
    {
        title: "Glassmorphic UI Engine",
        description: "A specialized CSS framework for creating premium, high-performance translucent interfaces for simulation tools.",
        featured: true,
        tags: ["React", "CSS", "Design Systems"],
        link: null
    }
];

const PROJECTS_PYTHON_EN = [
    {
        title: "Asynchronous Data Scraper",
        description: "A high-throughput web scraper built with Python/Asyncio capable of handling 500+ concurrent requests.",
        featured: true,
        tags: ["Python", "Asyncio", "PostgreSQL"],
        link: "https://github.com/megumi-joy"
    },
    {
        title: "Agentic AI Task Orchestrator",
        description: "An AI-driven task management system utilizing LLMs to automate complex multi-step developer workflows.",
        featured: true,
        tags: ["Python", "OpenAI", "Agentic AI"],
        link: null
    }
];

const PROJECTS_ES = [
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
        title: "Raspador de Datos Asíncrono",
        description: "Un raspador web de alto rendimiento construido con Python/Asyncio capaz de manejar más de 500 solicitudes simultáneas.",
        featured: true,
        tags: ["Python", "Asyncio", "PostgreSQL"],
        link: "https://github.com/megumi-joy"
    },
    {
        title: "Orquestador de Tareas de IA Agéntica",
        description: "Un sistema de gestión de tareas impulsado por IA que utiliza LLMs para automatizar flujos de trabajo de desarrolladores complejos.",
        featured: true,
        tags: ["Python", "OpenAI", "IA Agéntica"],
        link: null
    }
];

const PROJECTS_RU = [
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
        title: "Асинхронный Скрапер Данных",
        description: "Высокопроизводительный веб-скрапер, созданный на Python/Asyncio, способный обрабатывать более 500 одновременных запросов.",
        featured: true,
        tags: ["Python", "Asyncio", "PostgreSQL"],
        link: "https://github.com/megumi-joy"
    },
    {
        title: "Агентный ИИ-Оркестратор Задач",
        description: "Система управления задачами на базе ИИ, использующая LLM для автоматизации сложных многоэтапных рабочих процессов разработчиков.",
        featured: true,
        tags: ["Python", "OpenAI", "Agentic AI"],
        link: null
    }
];

const PROJECTS_UK = [
    {
        title: "Прототип Мережевого Фізичного Рушія",
        description: "Дослідницький прототип, що досліджує серверно-авторитетну синхронізацію фізики та алгоритми передбачення на сторіні клієнта.",
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
        title: "Асинхронний Скрапер Даних",
        description: "Високопродуктивний веб-скрапер, створений на Python/Asyncio, здатний обробляти понад 500 одночасних запитів.",
        featured: true,
        tags: ["Python", "Asyncio", "PostgreSQL"],
        link: "https://github.com/megumi-joy"
    },
    {
        title: "Агентний ІІ-Оркестратор Завдань",
        description: "Система управління завданнями на базі ІІ, що використовує LLM для автоматизації складних багатоетапних робочих процесів розробників.",
        featured: true,
        tags: ["Python", "OpenAI", "Agentic AI"],
        link: null
    }
];

const GAMES_DATA = {
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
        tags: ["Godot", "Simulation", "WebGL"],
        status: "playable",
        progress: 30,
        translations: {
            en: {
                title: "Low-Poly City Delivery",
                description: "A delivery simulation game set in a low-poly city environment.",
                gdd: {
                    overview: "Deliver packages in a vibrant low-poly city against the clock.",
                    mechanics: ["Vehicle physics", "Pick up/Drop off system", "Timer system"],
                    features: ["Open world city", "Traffic AI", "Destructible props"]
                }
            },
            es: {
                title: "Low-Poly City Delivery",
                description: "Un juego de simulación de entrega ambientado en una ciudad low-poly.",
                gdd: {
                    overview: "Entrega paquetes en una ciudad low-poly vibrante contra el reloj.",
                    mechanics: ["Física de vehículos", "Sistema de recogida/entrega", "Sistema de temporizador"],
                    features: ["Ciudad de mundo abierto", "IA de tráfico", "Accesorios destructibles"]
                }
            },
            ru: {
                title: "Low-Poly City Delivery",
                description: "Симулятор доставки в низкополигональном городе.",
                gdd: {
                    overview: "Доставляйте посылки в ярком низкополигональном городе на время.",
                    mechanics: ["Физика транспорта", "Система подбора/доставки", "Таймер"],
                    features: ["Открытый мир", "ИИ трафика", "Разрушаемые объекты"]
                }
            },
            uk: {
                title: "Low-Poly City Delivery",
                description: "Симулятор доставки у низькополігональному місті.",
                gdd: {
                    overview: "Доставляйте посилки у яскравому низькополігональному місті на час.",
                    mechanics: ["Фізика транспорту", "Система підбору/доставки", "Таймер"],
                    features: ["Відкритий світ", "ШІ трафіку", "Руйнівні об'єкти"]
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
    "spaceShooter": {
        thumbnail: "https://placehold.co/600x400/1e293b/3b82f6?text=Space+Shooter",
        path: null,
        tags: ["Godot", "Arcade", "Developing"],
        status: "developing",
        translations: {
            en: {
                title: "Space Shooter",
                description: "Classic arcade space shooter with modern graphics.",
                gdd: {
                    overview: "Fast-paced space shooter where you defend against waves of alien invaders.",
                    mechanics: ["Shooting", "Power-ups", "Enemy waves"],
                    features: ["Boss fights", "Ship upgrades", "Score system"]
                }
            },
            es: {
                title: "Space Shooter",
                description: "Clásico juego de disparos espacial arcade con gráficos modernos.",
                gdd: {
                    overview: "Juego de disparos espacial de ritmo rápido donde defiendes contra oleadas de invasores alienígenas.",
                    mechanics: ["Disparos", "Power-ups", "Oleadas de enemigos"],
                    features: ["Peleas contra jefes", "Mejoras de nave", "Sistema de puntuación"]
                }
            },
            ru: {
                title: "Space Shooter",
                description: "Классический аркадный космический шутер с современной графикой.",
                gdd: {
                    overview: "Динамичный космический шутер, где вы защищаетесь от волн инопланетных захватчиков.",
                    mechanics: ["Стрельба", "Усиления", "Волны врагов"],
                    features: ["Битвы с боссами", "Улучшения корабля", "Система очков"]
                }
            },
            uk: {
                title: "Space Shooter",
                description: "Класичний аркадний космічний шутер із сучасною графікою.",
                gdd: {
                    overview: "Динамічний космічний шутер, де ви захищаєтесь від хвиль інопланетних загарбників.",
                    mechanics: ["Стрільба", "Посилення", "Хвилі ворогів"],
                    features: ["Битви з босами", "Покращення корабля", "Система очків"]
                }
            }
        }
    },
    "karting": {
        thumbnail: "https://placehold.co/600x400/1e293b/3b82f6?text=Karting",
        path: null,
        tags: ["Godot", "Racing", "Developing"],
        status: "developing",
        translations: {
            en: {
                title: "Karting",
                description: "High-speed kart racing game with power-ups.",
                gdd: {
                    overview: "Competitive kart racing game with drift mechanics and items.",
                    mechanics: ["Drifting", "Item usage", "Lap system"],
                    features: ["Multiple tracks", "Character selection", "Local multiplayer"]
                }
            },
            es: {
                title: "Karting",
                description: "Juego de carreras de karts de alta velocidad con power-ups.",
                gdd: {
                    overview: "Juego de carreras de karts competitivo con mecánicas de derrape y objetos.",
                    mechanics: ["Derrape", "Uso de objetos", "Sistema de vueltas"],
                    features: ["Múltiples pistas", "Selección de personajes", "Multijugador local"]
                }
            },
            ru: {
                title: "Karting",
                description: "Высокоскоростные гонки на картингах с усилениями.",
                gdd: {
                    overview: "Соревновательные гонки на картингах с механикой дрифта и предметами.",
                    mechanics: ["Дрифт", "Использование предметов", "Система кругов"],
                    features: ["Множество трасс", "Выбор персонажа", "Локальный мультиплеер"]
                }
            },
            uk: {
                title: "Karting",
                description: "Високошвидкісні перегони на картингах з посиленнями.",
                gdd: {
                    overview: "Змагальні перегони на картингах з механікою дрифту та предметами.",
                    mechanics: ["Дрифт", "Використання предметів", "Система кіл"],
                    features: ["Багато трас", "Вибір персонажа", "Локальний мультиплеєр"]
                }
            }
        }
    },
    "farming": {
        thumbnail: "https://placehold.co/600x400/1e293b/3b82f6?text=Farming",
        path: null,
        tags: ["Godot", "Simulation", "Developing"],
        status: "developing",
        translations: {
            en: {
                title: "Farming",
                description: "Relaxing farming simulation and management game.",
                gdd: {
                    overview: "Manage your farm, grow crops, and raise animals in a cozy environment.",
                    mechanics: ["Planting/Harvesting", "Inventory management", "Day/Night cycle"],
                    features: ["Crop variety", "Animal husbandry", "Market system"]
                }
            },
            es: {
                title: "Farming",
                description: "Relajante juego de simulación y gestión de granjas.",
                gdd: {
                    overview: "Gestiona tu granja, cultiva cosechas y cría animales en un ambiente acogedor.",
                    mechanics: ["Plantación/Cosecha", "Gestión de inventario", "Ciclo día/noche"],
                    features: ["Variedad de cultivos", "Cría de animales", "Sistema de mercado"]
                }
            },
            ru: {
                title: "Farming",
                description: "Расслабляющий симулятор фермы и управления.",
                gdd: {
                    overview: "Управляйте своей фермой, выращивайте урожай и разводите животных в уютной обстановке.",
                    mechanics: ["Посадка/Сбор урожая", "Управление инвентарем", "Цикл день/ночь"],
                    features: ["Разнообразие культур", "Животноводство", "Рыночная система"]
                }
            },
            uk: {
                title: "Farming",
                description: "Розслаблюючий симулятор ферми та управління.",
                gdd: {
                    overview: "Керуйте своєю фермою, вирощуйте врожай та розводьте тварин у затишній обстановці.",
                    mechanics: ["Садіння/Збір врожаю", "Управління інвентарем", "Цикл день/ніч"],
                    features: ["Різноманітність культур", "Тваринництво", "Ринкова система"]
                }
            }
        }
    },
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
        experience: getExperienceForSpecialty(specialty, lang)
    };
};

const SPECIALIZED_TITLES = {
    general: {
        en: "Creative Technologist & Simulation Engineer",
        es: "Tecnólogo Creativo e Ingeniero de Simulación",
        ru: "Креативный технолог и инженер симуляций",
        uk: "Креативний технолог та інженер симуляцій"
    },
    gamedev: {
        en: "Senior Game Systems & Simulation Engineer",
        es: "Ingeniero Senior de Sistemas de Juego y Simulación",
        ru: "Старший инженер игровых систем и симуляций",
        uk: "Старший інженер ігрових систем та симуляцій"
    },
    frontend: {
        en: "Senior Frontend & Graphics Engineer",
        es: "Ingeniero Senior de Frontend y Gráficos",
        ru: "Старший инженер фронтенда и графики",
        uk: "Старший інженер фронтенду та графіки"
    },
    python: {
        en: "Senior Backend & Systems Engineer",
        es: "Ingeniero Senior de Backend y Sistemas",
        ru: "Старший инженер бэкенда и систем",
        uk: "Старший інженер бекенду та систем"
    }
};

const SPECIALIZED_ABOUT = {
    general: {
        en: "Multidisciplinary engineer specializing in high-performance simulations, robotics tooling, and scalable software architecture. I bridge physical constraints with digital twins.",
        es: "Ingeniero multidisciplinar especializado en simulaciones de alto rendimiento, herramientas de robótica y arquitectura de software escalable.",
        ru: "Мультидисциплинарный инженер, специализирующийся на высокопроизводительных симуляциях, инструментах для робототехники и масштабируемой архитектуре.",
        uk: "Мультидисциплінарний інженер, що спеціалізується на високопродуктивних симуляціях, інструментах для робототехніки та масштабованій архітектурі."
    },
    gamedev: {
        en: "Specialist in game engine architecture, real-time physics, and networked simulations. Expert in C++ and Godot/Unity for building complex interactive systems.",
        es: "Especialista en arquitectura de motores de juego, física en tiempo real y simulaciones en red. Experto en C++ y Godot/Unity.",
        ru: "Специалист по архитектуре игровых движков, физике в реальном времени и сетевым симуляциям. Эксперт по C++, Godot и Unity.",
        uk: "Спеціаліст з архітектури ігрових рушіїв, фізики в реальному часі та мережевих симуляцій. Експерт з C++, Godot та Unity."
    },
    frontend: {
        en: "Frontend expert focused on high-performance data visualization, 3D graphics in the web, and premium user experiences using React and modern CSS.",
        es: "Experto en frontend enfocado en visualización de datos de alto rendimiento, gráficos 3D en la web y experiencias de usuario premium.",
        ru: "Эксперт по фронтенду, сфокусированный на высокопроизводительной визуализации данных, 3D-графике в вебе и премиальном UX.",
        uk: "Експерт із фронтенду, сфокусований на високопродуктивній візуалізації даних, 3D-графіці у вебі та преміальному UX."
    },
    python: {
        en: "Backend engineer specializing in distributed systems, asynchronous Python, and agentic AI architectures. Expert in building stable, scalable automation workflows.",
        es: "Ingeniero de backend especializado en sistemas distribuidos, Python asíncrono y arquitecturas de IA agéntica.",
        ru: "Бэкенд-инженер, специализирующийся на распределенных системах, асинхронном Python и архитектурах агентного ИИ.",
        uk: "Бекенд-інженер, що спеціалізується на розподілених системах, асинхронному Python та архітектурах агентного ІІ."
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
            role: "R&D Simulation Engineer",
            company: "Freelance / Contract",
            period: "Present",
            description: "Designing high-fidelity simulation environments and networked systems.",
            achievements: [
                "Architected a custom P2P networking protocol over WebRTC/WebSocket for low-latency state synchronization in distributed simulations.",
                "Developed 'Agentic AI' behaviors using hierarchical state machines and pathfinding algorithms.",
                "Implemented rigorous CI/CD pipelines for cross-platform builds, ensuring stability across Linux, Windows, and Web."
            ],
            technologies: ["C++", "Godot 4", "Networking", "AI Algorithms"],
            tags: ["gamedev", "python"]
        },
        {
            role: "Simulation Software Engineer",
            company: "EdTech / Sim Studio",
            period: "2020 - 2022",
            description: "Lead engineer for a photorealistic Traffic Simulator used in driver training.",
            achievements: [
                "Engineered a photoreal rendering pipeline (Unity HDRP) processing 500+ dynamic scenarios under strict frame-time budgets.",
                "Developed internal C# tooling for procedural environment generation, reducing scene assembly time by ~70%.",
                "Optimized physics calculations and asset streaming to maintain 60 FPS on mid-range hardware."
            ],
            technologies: ["C#", "Unity HDRP", "Procedural Generation", "Optimization"],
            tags: ["gamedev"]
        },
        {
            role: "Full Stack Systems Engineer",
            company: "Various Clients",
            period: "Recent",
            description: "Delivering high-performance data processing tools and web architectures.",
            achievements: [
                "Built a real-time Data Dashboard visualizing 10k+ telemetry points with sub-second latency using React and optimized data structures.",
                "Wrote a custom asynchronous Python backend (asyncio) handling 200+ concurrent connections with minimal overhead.",
                "Containerized deployment workflows using Docker and AWS, achieving 99.9% uptime for critical services."
            ],
            technologies: ["Python (Asyncio)", "React", "Docker", "AWS", "Systems Design"],
            tags: ["frontend", "python"]
        },
        {
            role: "Embedded Systems Engineer",
            company: "Microelectronics Firm",
            period: "Early Career",
            description: "Developing firmware and software for medical testing hardware.",
            achievements: [
                "Programmed STM32/Arduino microcontrollers for precise sensor data acquisition in medical devices.",
                "Bridge hardware inputs to a custom Unity visualizer for real-time operator feedback.",
                "Designed PCB layouts and managed manufacturing processes for prototype runs."
            ],
            technologies: ["C++", "STM32", "Embedded C", "PCB Design"],
            tags: ["gamedev"]
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
                link: "https://github.com/aurorasunrisegames",
                date: "Q1 2026"
            },
            {
                status: "Planned",
                title: "Open Source Godot Tooling",
                description: "Releasing a suite of GDScript utilities for procedural generation and AI behaviors.",
                date: "Q2 2026"
            },
            {
                status: "Idea",
                title: "Interactive Portfolio V2",
                description: "Gamification of this portfolio where users can walk around in a 3D environment.",
                date: "Future"
            }
        ]
    }
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

// Default export if needed
export const PROFILE = BASE_PROFILE;

export const SHOP_DATA = [
    { id: 'magic-balls', title: 'Magic Balls - Full Build', price: '$10', desc: 'The complete adventure with bonus levels.' },
    { id: 'city-deliv', title: 'Low-Poly City Build', price: '$15', desc: 'Custom optimized build for your platform.' },
    { id: 'sea-hunter', title: 'Sea Hunter Early Access', price: '$5', desc: 'Pre-order the underwater exploration game.' },
];
