/**
 * ThemeToggle — 3-position toggle: Dark ☾ / Light ☀ / Auto 🌤
 * Syncs across subdomains via cookie.
 */
import React from 'react';
import { Moon, Sun, CloudSun } from 'lucide-react';

const MODES = [
    { id: 'dark',  icon: Moon,     label: 'Dark',  color: 'from-indigo-500 to-purple-600' },
    { id: 'light', icon: Sun,      label: 'Light', color: 'from-amber-400 to-orange-500' },
    { id: 'auto',  icon: CloudSun, label: 'Auto',  color: 'from-cyan-400 to-teal-500' },
];

const ThemeToggle = ({ mode, onCycle, weather }) => {
    const current = MODES.find(m => m.id === mode) || MODES[0];
    const Icon = current.icon;

    return (
        <button
            onClick={onCycle}
            aria-label={`Theme: ${current.label}${mode === 'auto' && weather ? ` — ${weather.city} ${weather.temperature}°C` : ''}`}
            title={`Theme: ${current.label}${mode === 'auto' && weather ? ` (${weather.city} ${weather.temperature}°C)` : ''}`}
            className="relative group flex items-center gap-1.5 px-2.5 py-1.5 rounded-full
                       bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/60 dark:border-slate-700/60
                       hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300"
        >
            <span className={`flex items-center justify-center w-5 h-5 rounded-full
                bg-gradient-to-br ${current.color} shadow-sm`}>
                <Icon size={12} className="text-white" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                {current.label}
            </span>

        </button>
    );
};

export default ThemeToggle;
