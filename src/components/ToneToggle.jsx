import React from 'react';
import { Scroll, Briefcase } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

const ToneToggle = () => {
    const { tone, toggleTone } = useLanguage();
    const isMagical = tone === 'magical';

    return (
        <button
            onClick={toggleTone}
            className={`
                relative flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 border
                ${isMagical
                    ? 'bg-purple-900/40 text-purple-200 border-purple-500/50 hover:bg-purple-900/60 shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                    : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:bg-slate-700/80 hover:text-white'}
            `}
            title={isMagical ? "Switch to Professional Profile" : "Switch to Magical Profile"}
        >
            <motion.div
                initial={false}
                animate={{ rotate: isMagical ? 360 : 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                {isMagical ? <Scroll size={16} /> : <Briefcase size={16} />}
            </motion.div>
            <span className="text-xs font-semibold tracking-wide">
                {isMagical ? 'RPG Mode' : 'Pro Mode'}
            </span>
        </button>
    );
};

export default ToneToggle;
