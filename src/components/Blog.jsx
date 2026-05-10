import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { BLOG_DATA } from '../data';
import { Clock, Tag, Calendar, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

const Blog = () => {
    const { language } = useLanguage();
    const posts = BLOG_DATA[language] || BLOG_DATA.en;
    const [selectedPost, setSelectedPost] = useState(null);
    const [activeTag, setActiveTag] = useState(null);

    // Collect all unique tags
    const allTags = [...new Set(posts.flatMap(p => p.tags))];

    const filteredPosts = activeTag
        ? posts.filter(p => p.tags.includes(activeTag))
        : posts;

    return (
        <section id="blog">
            <AnimatePresence mode="wait">
                {!selectedPost ? (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-8"
                    >
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <h3 className="section-title mb-0">Insights & Updates</h3>

                            {/* Tag Filter */}
                            {allTags.length > 0 && (
                                <div className="flex items-center gap-2 flex-wrap">
                                    <button
                                        onClick={() => setActiveTag(null)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide transition-all ${
                                            activeTag === null
                                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                                                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 bg-slate-200/40 dark:bg-slate-800/40 border border-slate-300/50 dark:border-slate-700/50'
                                        }`}
                                    >
                                        All
                                    </button>
                                    {allTags.map(tag => (
                                        <button
                                            key={tag}
                                            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide transition-all ${
                                                activeTag === tag
                                                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                                                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 bg-slate-200/40 dark:bg-slate-800/40 border border-slate-300/50 dark:border-slate-700/50'
                                            }`}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredPosts.map((post) => (
                                <motion.div
                                    key={post.id}
                                    layoutId={post.id}
                                    onClick={() => setSelectedPost(post)}
                                    className="group cursor-pointer p-7 bg-white/30 dark:bg-slate-800/30 hover:bg-white/60 dark:hover:bg-slate-800/60 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-cyan-500/30 transition-all hover:-translate-y-1 flex flex-col"
                                >
                                    <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={13} />
                                            {post.date}
                                        </span>
                                        <span className="text-slate-600">•</span>
                                        <span className="flex items-center gap-1 text-slate-500">
                                            <Clock size={13} />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-3 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                                        {post.title}
                                    </h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-100/60 dark:bg-slate-900/60 text-slate-500 text-[10px] font-bold uppercase tracking-wider border border-slate-300/50 dark:border-slate-700/50">
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
                        className="max-w-3xl mx-auto bg-white/20 dark:bg-slate-800/20 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-slate-200/50 dark:border-slate-700/50"
                    >
                        <button
                            onClick={() => setSelectedPost(null)}
                            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-10 group"
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Insights
                        </button>

                        <div className="flex items-center gap-5 text-sm font-mono text-cyan-400 mb-6">
                            <span className="flex items-center gap-2">
                                <Calendar size={15} />
                                {selectedPost.date}
                            </span>
                            <span className="flex items-center gap-2 text-slate-500">
                                <Clock size={15} />
                                {selectedPost.readTime}
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
                            {selectedPost.title}
                        </h2>

                        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                            {selectedPost.content.split('\n').map((paragraph, i) => (
                                <p key={i} className="mb-5">{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-10 pt-10 border-t border-slate-700/50 flex flex-wrap gap-2 items-center">
                            <Tag size={16} className="text-cyan-400 mr-1" />
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
