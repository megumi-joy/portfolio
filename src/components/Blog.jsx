import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { BLOG_DATA } from '../data';
import { Clock, Tag, Calendar, ArrowLeft } from 'lucide-react';

const Blog = () => {
    const { language } = useLanguage();
    const posts = BLOG_DATA[language] || BLOG_DATA.en;
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <section className="min-h-screen">
            <AnimatePresence mode="wait">
                {!selectedPost ? (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-12"
                    >
                        <h3 className="section-title">Insights & Updates</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <motion.div
                                    key={post.id}
                                    layoutId={post.id}
                                    onClick={() => setSelectedPost(post)}
                                    className="group cursor-pointer p-8 bg-slate-800/30 hover:bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all hover:-translate-y-1 flex flex-col"
                                >
                                    <div className="flex items-center gap-4 text-xs font-mono text-cyan-400 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1 text-slate-500">•</span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                        {post.title}
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="detail"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="max-w-3xl mx-auto bg-slate-800/20 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-slate-700/50"
                    >
                        <button
                            onClick={() => setSelectedPost(null)}
                            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Insights
                        </button>

                        <div className="flex items-center gap-6 text-sm font-mono text-cyan-400 mb-6">
                            <span className="flex items-center gap-2">
                                <Calendar size={16} />
                                {selectedPost.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={16} />
                                {selectedPost.readTime}
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                            {selectedPost.title}
                        </h2>

                        <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-lg">
                            {selectedPost.content.split('\n').map((paragraph, i) => (
                                <p key={i} className="mb-6">{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-12 pt-12 border-t border-slate-700/50 flex flex-wrap gap-3">
                            <Tag size={18} className="text-cyan-400 mr-2" />
                            {selectedPost.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-slate-900/50 text-slate-400 text-xs font-bold uppercase tracking-widest border border-slate-700">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Blog;
