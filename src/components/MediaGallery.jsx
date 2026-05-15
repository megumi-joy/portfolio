import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Film, Maximize2, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const MediaGallery = () => {
    const { activeProfile } = useLanguage();
    const [filter, setFilter] = useState('all');
    const [selectedMedia, setSelectedMedia] = useState(null);

    // Derive media from games and projects if no dedicated GALLERY_DATA exists
    const galleryItems = [
        ...(activeProfile.games?.map(g => ({
            id: g.id,
            type: 'gif',
            url: g.thumbnail, // Using thumbnails as media for now
            title: g.title,
            category: 'Games'
        })) || []),
        // Add manual highlights if needed
    ];

    const filteredItems = filter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.type === filter || item.category === filter);

    return (
        <section id="gallery" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            Studio <span className="text-cyan-400">Gallery</span>
                        </h2>
                        <p className="text-slate-400 max-w-xl">
                            A curated collection of photos, gameplay GIFs, and visual records from my latest prototypes and architectural cases.
                        </p>
                    </div>

                    <div className="flex gap-2 bg-slate-800/50 p-1 rounded-xl border border-slate-700/50 self-start md:self-auto">
                        {['all', 'Games'].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${filter === f
                                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                                        : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={index}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setSelectedMedia(item)}
                            className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/50 cursor-pointer hover:border-cyan-500/50 transition-all shadow-xl"
                        >
                            <img
                                src={item.url}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                            <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex items-center gap-2 mb-1">
                                    {item.type === 'gif' ? <Film size={12} className="text-cyan-400" /> : <ImageIcon size={12} className="text-purple-400" />}
                                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">{item.category}</span>
                                </div>
                                <h4 className="text-sm font-bold text-white truncate">{item.title}</h4>
                            </div>

                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white">
                                    <Maximize2 size={16} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-slate-950/95 backdrop-blur-xl"
                        onClick={() => setSelectedMedia(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedMedia(null)}
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative max-w-5xl w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedMedia.url}
                                alt={selectedMedia.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-2xl font-bold text-white mb-2">{selectedMedia.title}</h3>
                                <p className="text-slate-300">Captured from {selectedMedia.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default MediaGallery;
