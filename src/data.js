import { Github, Linkedin, Mail, Cpu, Gamepad2, Globe, Server, Terminal } from 'lucide-react';

export const PROFILE = {
    name: "Aurora Sunrise", // Placeholder
    title: "Senior Creative Technologist & Game Engineer",
    about: "A versatile Computer Engineer bridging the gap between hardware and software. My journey spans from designing PCBs and coding microcontrollers in C++ to building photorealistic 3D simulations in Unity HDRP and full-stack web solutions. Currently exploring the limits of Godot and Agentic AI.",
    socials: {
        github: "https://github.com/aurorasunrisegames",
        // linkedin: "#", 
        // email: "mailto:example@gmail.com", 
    },
    skills: [
        { name: "Unity & C#", icon: Gamepad2, level: "Expert" },
        { name: "Godot Engine", icon: Gamepad2, level: "Advanced" },
        { name: "Hardware & IoT", icon: Cpu, level: "Intermediate" },
        { name: "React & Web", icon: Globe, level: "Advanced" },
        { name: "Python & Backend", icon: Server, level: "Advanced" },
        { name: "DevOps & CI/CD", icon: Terminal, level: "Intermediate" },
    ],
    experience: [
        {
            role: "Godot Game Developer",
            company: "Current Role",
            period: "Present",
            description: "Active development in the Godot ecosystem, contributing to Antigravity and creating independent game titles.",
            technologies: ["Godot", "GDScript", "Agentic AI"]
        },
        {
            role: "Full Stack Developer",
            company: "Freelance",
            period: "Recent",
            description: "Architected internal tools and data visualization dashboards. Built a React frontend with Ant Design coupled with a custom high-performance Python HTTP backend. Implemented DevOps pipelines using AWS, Terraform, and GitHub Actions.",
            technologies: ["React", "Python", "AWS", "Terraform", "CI/CD"]
        },
        {
            role: "Hypercasual Game Developer",
            company: "Game Studio",
            period: "Past",
            description: "Developed engaging hypercasual titles including 'City Tycoon', logic puzzles, and a complex Match-3 game. Utilized Unity Addressables for content management and optimized performance for mobile devices.",
            technologies: ["Unity", "C#", "Addressables", "Mobile Optimization"]
        },
        {
            role: "Simulation Engineer (Remote)",
            company: "EdTech / Sim Studio",
            period: "Oct 2020 - Mar 2022",
            description: "Led the visual assembly of a photorealistic Road Traffic Simulator (HDRP). Assembled over 500 unique scenes based on reference photography. Developed custom tooling ('Scatter Tool') to automate environmental design.",
            technologies: ["Unity HDRP", "Tool Development", "3D Modeling", "Git"]
        },
        {
            role: "Embedded Systems & Unity Developer",
            company: "Microelectronics Firm",
            period: "Early Career",
            description: "Hybrid role combining hardware engineering (PCB design, STM32/Arduino, Medical Equipment) with software development. Creating educational Unity games for medical testing in schools and hospitals.",
            technologies: ["C++", "Arduino", "PCB Design", "Unity", "Electronics"]
        }
    ],
    projects: [
        {
            title: "Self-Made Traffic Simulator",
            description: "A driving school simulation featuring 500+ photorealistic scenes rendered in Unity HDRP. Built custom vegetation scatter tools to streamline environment creation.",
            tags: ["Unity HDRP", "Simulation", "Tooling"],
            link: null
        },
        {
            title: "Internal Data Portal",
            description: "A React-based dashboard with a custom raw Python backend. Handles complex data requests with a bespoke API architecture.",
            tags: ["React", "Python", "Full Stack"],
            link: null
        },
        {
            title: "Music-Addressables",
            description: "C# library for handling music addressables efficiently in Unity projects.",
            tags: ["C#", "Unity", "Open Source"],
            link: "https://github.com/aurorasunrisegames/Music-Addressables"
        },
        {
            title: "InventorySystem",
            description: "A robust, modular inventory system implementation for RPGs and survival games.",
            tags: ["C#", "Unity", "System Design"],
            link: "https://github.com/aurorasunrisegames/InventorySystem"
        },
        {
            title: "PythonTools",
            description: "Collection of utility scripts for automation and benchmarking AI performance.",
            tags: ["Python", "Automation"],
            link: "https://github.com/aurorasunrisegames/PythonTools"
        }
    ]
};
