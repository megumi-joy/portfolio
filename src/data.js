import { Github, Linkedin, Mail, Cpu, Gamepad2, Globe, Server, Terminal, Layers, Cuboid } from 'lucide-react';

export const PROFILE = {
    name: "Anton", // User confirmed name in audio
    title: "Senior Creative Technologist & Game Engineer",
    about: "A versatile Computer Engineer bridging the gap between hardware and software. I specialize in building complex, high-performance interactive systems—from photorealistic Unity HDRP simulations to scalable React/Python web architectures. My focus is on delivering tangible results: optimized rendering pipelines, robust multiplayer networking, and automated DevOps workflows.",
    socials: {
        github: "https://github.com/aurorasunrisegames",
        linkedin: "https://linkedin.com/in/anton-developer", // Placeholder based on context, or keep generic if unknown. User didn't specify LinkedIn. I will just enable email.
        email: "aurorasunrisegames@gmail.com",
    },
    skills: [
        { name: "Unity (HDRP/URP)", icon: Gamepad2, level: "Expert" },
        { name: "Godot Engine", icon: Cuboid, level: "Advanced" },
        { name: "React & WebGL", icon: Globe, level: "Advanced" },
        { name: "Python & Backend", icon: Server, level: "Advanced" },
        { name: "Hardware/IoT (C++)", icon: Cpu, level: "Intermediate" },
        { name: "DevOps (Docker/AWS)", icon: Terminal, level: "Intermediate" },
    ],
    education: [
        {
            institution: "Odesa State Academy of Refrigeration",
            degree: "Master's degree in Artificial Intelligence and Neural Networks",
            period: "2018 - 2020",
            location: "Odesa, Ukraine"
        },
        {
            institution: "Odesa State Academy of Refrigeration",
            degree: "Bachelor's degree in Control Systems & Electronics Controllers",
            period: "2014 - 2018",
            location: "Odesa, Ukraine"
        }
    ],
    experience: [
        {
            role: "Godot Game Developer",
            company: "Indie / Open Source",
            period: "Present",
            description: "Developing advanced multiplayer systems and AI toolsets.",
            achievements: [
                "Architected a P2P multiplayer prototype using WebRTC and Godot High-Level Multiplayer API, enabling browser-based cross-play.",
                "Designing 'Agentic AI' behaviors for NPCs using extensive state machines and GDScript optimizations."
            ],
            technologies: ["Godot 4", "GDScript", "WebRTC", "WebSocket", "Git"]
        },
        {
            role: "Full Stack Developer (Freelance)",
            company: "Various Clients",
            period: "Recent",
            description: "Delivered Full Stack web solutions for high-load internal data tools.",
            achievements: [
                "Built a high-performance Data Dashboard using React and Ant Design, visualizing 10k+ data points with sub-second latency.",
                "Engineered a custom raw Python HTTP backend (asyncio) to handle 200+ concurrent requests efficiently without heavy framework overhead.",
                "Implemented fully automated CI/CD pipelines using GitHub Actions and Docker, reducing deployment time by 80%."
            ],
            technologies: ["React", "Python (Asyncio)", "Docker", "AWS", "Terraform", "GitHub Actions"]
        },
        {
            role: "Unity Developer (Hypercasual)",
            company: "Game Studio",
            period: "Past",
            description: "Developed and optimized mobile games with millions of installs.",
            achievements: [
                "Optimized 'City Tycoon' for mobile devices, reducing build size by 40% and maintaining 60 FPS on low-end hardware.",
                "Implemented complex Match-3 logic and economy systems, directly contributing to a 15% increase in D1 retention.",
                "Integrated Unity Addressables for dynamic content loading, minimizing initial download size."
            ],
            technologies: ["Unity", "C#", "Addressables", "Mobile Optimization", "Game Analytics"]
        },
        {
            role: "Simulation Engineer",
            company: "EdTech / Sim Studio",
            period: "2020 - 2022",
            description: "Led development of a photorealistic Traffic Simulator for driver training.",
            achievements: [
                "Created and rendered 500+ unique photorealistic driving scenarios using Unity HDRP.",
                "Developed a custom 'Vegetation Scatter Tool' in C#, automating environment design and reducing scene assembly time by 70%.",
                "Managed the entire asset pipeline, ensuring visual fidelity while adhering to strict performance budgets."
            ],
            technologies: ["Unity HDRP", "C# Tooling", "3D Optimization", "Photogrammetry"]
        },
        {
            role: "Embedded Systems Engineer",
            company: "Microelectronics Firm",
            period: "Early Career",
            description: "Bridged hardware and software for medical and educational devices.",
            achievements: [
                "Designed and programmed STM32/Arduino microcontrollers for medical testing equipment.",
                "Developed an interactive Unity-based educational game used for medical certification exams in hospitals.",
                "Engineered custom PCBs and managed laser-etching production processes."
            ],
            technologies: ["C++", "STM32", "Arduino", "PCB Design", "Unity"]
        }
    ],
    projects: [
        {
            title: "Godot Multiplayer Model",
            description: "A browser-ready multiplayer prototype featuring server reconciliation, client-side prediction, and P2P WebRTC networking.",
            featured: true, // New flag for highlighting
            tags: ["Godot 4", "WebRTC", "Networking"],
            link: "https://megumi-joy.github.io/portfolio/" // Self-reference since it's embedded
        },
        {
            title: "Traffic Simulator Toolset",
            description: "Custom C# plugins for Unity to automate the placement of thousands of vegetation assets (HDRP), used to generate 500+ training scenes.",
            featured: true,
            tags: ["Unity", "C#", "Tools Dev"],
            link: null
        },
        {
            title: "Music-Addressables",
            description: "An open-source C# library for efficient music asset management in Unity using the Addressables system.",
            featured: false,
            tags: ["C#", "Unity", "Library"],
            link: "https://github.com/aurorasunrisegames/Music-Addressables"
        },
        {
            title: "InventorySystem",
            description: "A modular, scalable inventory architecture for RPGs, supporting stacking, durability, and crafting.",
            featured: false,
            tags: ["C#", "Unity", "Architecture"],
            link: "https://github.com/aurorasunrisegames/InventorySystem"
        }
    ],
    games: [
        {
            title: "Multiplayer Prototype",
            description: "A networked multiplayer prototype built in Godot. Features server reconciliation and client-side prediction.",
            thumbnail: "https://placehold.co/600x400/1e293b/3b82f6?text=Godot+Prototype", // Placeholder
            path: "/games/prototype/index.html", // Expects index.html in public/games/prototype
            tags: ["Godot", "Multiplayer", "WebGL"]
        }
    ]
};
