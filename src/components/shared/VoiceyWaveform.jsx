import React from 'react';
import { motion } from 'framer-motion';

const VoiceyWaveform = () => {
    // A simple CSS-based waveform placeholder
    const bars = Array.from({ length: 40 });

    return (
        <div className="flex items-center justify-center gap-1 h-32 w-full mt-10">
            {bars.map((_, i) => {
                // Create a pseudo-random looking wave shape using Math.sin
                const heightBase = Math.sin(i * 0.5) * 50 + 50; 
                return (
                    <motion.div
                        key={i}
                        animate={{
                            height: [`${heightBase}%`, `${heightBase * 0.2}%`, `${heightBase}%`],
                        }}
                        transition={{
                            duration: 1.5 + Math.random() * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.05,
                        }}
                        className="w-1.5 md:w-2 bg-[rgb(var(--accent-rgb,123,91,255))] rounded-full opacity-80"
                        style={{ minHeight: '10%' }}
                    />
                );
            })}
        </div>
    );
};

export default VoiceyWaveform;
