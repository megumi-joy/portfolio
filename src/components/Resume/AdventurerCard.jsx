import React from 'react';
import { Shield, Sword, Scroll, User, Terminal, Box, ExternalLink } from 'lucide-react';

const AdventurerCard = ({ profile }) => {
    const stats = [
        { label: 'STR', value: profile.stats?.str, desc: 'Hardware' },
        { label: 'DEX', value: profile.stats?.dex, desc: 'Coding Speed' },
        { label: 'CON', value: profile.stats?.con, desc: 'Debugging' },
        { label: 'INT', value: profile.stats?.int, desc: 'Algorithms' },
        { label: 'WIS', value: profile.stats?.wis, desc: 'Architecture' },
        { label: 'CHA', value: profile.stats?.cha, desc: 'Communication' },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto bg-slate-900 border-4 border-purple-500 rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.5)] overflow-hidden relative font-serif text-purple-100">
            {/* Background Texture Overlay (CSS) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-slate-900/40 to-black/60"></div>

            {/* Header / Nameplate */}
            <header className="bg-purple-900 text-white p-6 border-b-4 border-purple-700 relative z-10 flex flex-col items-center text-center shadow-lg">
                <h1 className="text-4xl font-bold uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-cyan-200">
                    {profile.name}
                </h1>
                <p className="text-xl italic mt-2 opacity-90 text-purple-200">{profile.title}</p>
                <div className="absolute top-4 right-4 text-xs bg-purple-950 px-3 py-1.5 rounded border border-green-500 text-green-400 font-mono shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                    Lvl 20 Technomancer
                </div>
            </header>

            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {/* Left Column: Stats */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-purple-900/30 p-4 rounded border border-purple-500/30 backdrop-blur-sm">
                        <h3 className="text-xl font-bold border-b border-purple-500/50 pb-2 mb-4 text-center text-purple-200">Attributes</h3>
                        <div className="space-y-3">
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex items-center justify-between group">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-lg text-purple-300 group-hover:text-green-400 transition-colors">{stat.label}</span>
                                        <span className="text-[10px] uppercase tracking-tighter opacity-70 text-purple-400">{stat.desc}</span>
                                    </div>
                                    <div className="w-12 h-12 flex items-center justify-center bg-purple-950 border-2 border-green-500/50 rounded-full font-bold text-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] text-green-400">
                                        {stat.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-purple-900/30 p-4 rounded border border-purple-500/30 backdrop-blur-sm">
                        <h3 className="text-xl font-bold border-b border-purple-500/50 pb-2 mb-4 text-center text-purple-200">Inventory</h3>
                        <ul className="space-y-3">
                            {profile.inventory?.map((item, index) => (
                                <li key={index} className="bg-slate-900/80 p-3 rounded border border-purple-500/30 text-sm hover:border-green-500/50 transition-colors">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className={`font-bold ${item.rarity === 'Legendary' ? 'text-orange-400 drop-shadow-[0_0_3px_rgba(251,146,60,0.5)]' :
                                                item.rarity === 'Epic' ? 'text-purple-400 drop-shadow-[0_0_3px_rgba(192,132,252,0.5)]' :
                                                    item.rarity === 'Rare' ? 'text-blue-400' : 'text-green-400'
                                            }`}>{item.name}</span>
                                        <span className="text-[10px] bg-purple-800/80 text-purple-200 px-1.5 py-0.5 rounded border border-purple-600/50">{item.type}</span>
                                    </div>
                                    <p className="text-xs italic opacity-70 text-slate-400">{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Column: Lore & Quests */}
                <div className="md:col-span-2 space-y-6">
                    {/* About Section */}
                    <div className="bg-purple-900/30 p-6 rounded border border-purple-500/30 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <User size={64} />
                        </div>
                        <h3 className="text-xl font-bold border-b border-purple-500/50 pb-2 mb-4 flex items-center gap-2 text-purple-200">
                            <User size={20} className="text-green-400" /> Character Bio
                        </h3>
                        <p className="text-justify leading-relaxed text-sm md:text-base italic text-purple-100/90">
                            "{profile.about}"
                        </p>
                    </div>

                    {/* Quests / Experience */}
                    <div className="bg-purple-900/30 p-6 rounded border border-purple-500/30 backdrop-blur-sm">
                        <h3 className="text-xl font-bold border-b border-purple-500/50 pb-2 mb-4 flex items-center gap-2 text-purple-200">
                            <Sword size={20} className="text-green-400" /> Completed Quests
                        </h3>
                        <div className="space-y-6">
                            {profile.quests?.map((quest, index) => (
                                <div key={index} className="flex gap-4 items-start group p-2 hover:bg-purple-500/10 rounded transition-colors">
                                    <div className="mt-1 min-w-[24px] text-purple-400 group-hover:text-green-400 transition-colors">
                                        <Shield size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-lg text-purple-200 group-hover:text-white transition-colors">{quest.name}</h4>
                                        <p className="text-sm mb-2 text-purple-300/80">{quest.desc}</p>
                                        <div className="flex items-center gap-2 text-xs font-bold text-green-300 bg-green-900/30 inline-flex px-2 py-1 rounded border border-green-500/30">
                                            <span>Loot:</span>
                                            <span className="text-green-200">{quest.reward}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact / Footer Action */}
                    <div className="text-center pt-4">
                        <button
                            onClick={() => window.location.href = `mailto:${profile.socials?.email || 'aurorasunrisegames@gmail.com'}`}
                            className="bg-purple-700 text-white px-8 py-3 rounded-full font-bold text-lg border-2 border-purple-500 hover:bg-purple-600 hover:border-green-400 hover:text-green-100 transition-all shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transform hover:scale-105 uppercase tracking-wide"
                        >
                            {profile.ui?.contactButton || "Send Raven"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdventurerCard;
