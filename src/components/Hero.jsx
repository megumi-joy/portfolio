import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-start pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 max-w-3xl"
            >
                <span className="text-cyan-400 font-medium tracking-wider text-sm uppercase">
                    Welcome to my portfolio
                </span>

                <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-tight">
                    Hello, I'm <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        {PROFILE.name}
                    </span>.
                </h1>

                <h2 className="text-2xl md:text-3xl text-slate-400 font-light">
                    {PROFILE.title}
                </h2>

                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                    {PROFILE.about}
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="pt-8 flex gap-4"
                >
                    <a
                        href={PROFILE.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all hover:scale-105 backdrop-blur-sm"
                    >
                        GitHub Profile
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
            </motion.div>
        </section>
    );
};

export default Hero;
