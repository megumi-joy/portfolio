import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, Copy, Check, Code, User, Eye, Terminal, ExternalLink, Printer, FileType } from 'lucide-react';
import { PDFDownloadLink, BlobProvider, PDFViewer } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';
import { generateLatex } from './latexGenerator';
import { PROFILE } from '../../data';
import Prism from 'prismjs';
import 'prismjs/components/prism-latex';
import 'prismjs/themes/prism-tomorrow.css';

const ResumeModal = ({ isOpen, onClose }) => {
    const [copied, setCopied] = useState(false);
    const [viewMode, setViewMode] = useState('text'); // 'text' | 'latex' | 'pdf'
    const [isMobileWebView, setIsMobileWebView] = useState(false);
    const latexSource = generateLatex(PROFILE);

    useEffect(() => {
        // Simple User Agent check for common in-app browsers (Telegram, Instagram, FB, etc.)
        const ua = navigator.userAgent || navigator.vendor || window.opera;
        const inApp = /Telegram|Instagram|FBAN|FBAV|Line|Whale|Snapchat/i.test(ua);
        setIsMobileWebView(inApp);
    }, []);

    useEffect(() => {
        if (isOpen && viewMode === 'latex') {
            Prism.highlightAll();
        }
    }, [isOpen, viewMode]);

    const handleCopy = () => {
        navigator.clipboard.writeText(latexSource);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/50">
                            <div className="flex items-center gap-4">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <FileText className="text-cyan-400" size={20} />
                                    Resume
                                </h2>

                                {/* View Toggle */}
                                <div className="bg-slate-800 p-1 rounded-lg flex gap-1">
                                    <button
                                        onClick={() => setViewMode('text')}
                                        className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${viewMode === 'text' ? 'bg-slate-700 text-cyan-400 shadow-sm' : 'text-slate-400 hover:text-slate-300'}`}
                                    >
                                        <Eye size={14} /> Preview
                                    </button>
                                    <button
                                        onClick={() => setViewMode('pdf')}
                                        className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${viewMode === 'pdf' ? 'bg-slate-700 text-cyan-400 shadow-sm' : 'text-slate-400 hover:text-slate-300'}`}
                                    >
                                        <FileType size={14} /> PDF Viewer
                                    </button>
                                    <button
                                        onClick={() => setViewMode('latex')}
                                        className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${viewMode === 'latex' ? 'bg-slate-700 text-cyan-400 shadow-sm' : 'text-slate-400 hover:text-slate-300'}`}
                                    >
                                        <Terminal size={14} /> LaTeX
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
                            {/* Main Content Area */}
                            <div className="flex-1 p-0 md:border-r border-slate-800 flex flex-col min-h-[300px] overflow-hidden bg-slate-950">

                                {isMobileWebView && (
                                    <div className="bg-yellow-900/30 border-b border-yellow-700/50 p-2 text-center text-[10px] text-yellow-200">
                                        ⚠️ In-app browser detected. For best results (downloading PDF), please open in <b>Chrome</b>, <b>Safari</b>, or your system browser.
                                    </div>
                                )}

                                {viewMode === 'latex' ? (
                                    <div className="flex-1 flex flex-col h-full overflow-hidden">
                                        <div className="p-3 bg-slate-900/50 border-b border-slate-800 flex justify-between items-center shrink-0">
                                            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">LaTeX Source</span>
                                            <button
                                                onClick={handleCopy}
                                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 transition-colors"
                                            >
                                                {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                                                {copied ? 'Copied' : 'Copy Code'}
                                            </button>
                                        </div>
                                        <div className="flex-1 overflow-auto custom-scrollbar">
                                            <pre className="language-latex !m-0 !bg-transparent !p-6" style={{ fontSize: '0.85rem' }}>
                                                <code>{latexSource}</code>
                                            </pre>
                                        </div>
                                    </div>
                                ) : viewMode === 'pdf' ? (
                                    <div className="flex-1 flex flex-col h-full bg-slate-800">
                                        <PDFViewer className="w-full h-full border-none" showToolbar={true}>
                                            <ResumePDF profile={PROFILE} />
                                        </PDFViewer>
                                    </div>
                                ) : (
                                    <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-white text-slate-900 font-sans">
                                        <div className="max-w-3xl mx-auto space-y-8">
                                            {/* Header */}
                                            <div className="text-center space-y-2 pb-6 border-b-2 border-slate-900">
                                                <h1 className="text-4xl font-extrabold uppercase tracking-tight text-slate-900">{PROFILE.name}</h1>
                                                <div className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-4">
                                                    <span>{PROFILE.title}</span>
                                                    <span className="text-slate-300">|</span>
                                                    <a href={`mailto:${PROFILE.socials.email}`} className="hover:text-cyan-700 transition-colors">{PROFILE.socials.email}</a>
                                                    <span className="text-slate-300">|</span>
                                                    <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="hover:text-cyan-700 transition-colors">github.com/aurorasunrisegames</a>
                                                </div>
                                            </div>

                                            {/* Education */}
                                            <section>
                                                <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-200 mb-4 pb-1">Education</h2>
                                                <div className="space-y-4">
                                                    {PROFILE.education.map((edu, idx) => (
                                                        <div key={idx} className="group">
                                                            <div className="flex justify-between items-baseline mb-1">
                                                                <h3 className="font-bold text-lg text-slate-800">{edu.institution}</h3>
                                                                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{edu.period}</span>
                                                            </div>
                                                            <div className="text-sm font-semibold text-cyan-700">{edu.degree}</div>
                                                            <div className="text-xs text-slate-500">{edu.location}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>

                                            {/* Experience */}
                                            <section>
                                                <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-200 mb-4 pb-1">Experience</h2>
                                                <div className="space-y-6">
                                                    {PROFILE.experience.map((exp, idx) => (
                                                        <div key={idx} className="group">
                                                            <div className="flex justify-between items-baseline mb-1">
                                                                <h3 className="font-bold text-lg text-slate-800">{exp.role}</h3>
                                                                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{exp.period}</span>
                                                            </div>
                                                            <div className="text-sm font-semibold text-cyan-700 mb-2">{exp.company}</div>
                                                            <ul className="space-y-1.5">
                                                                {exp.achievements.map((ach, i) => (
                                                                    <li key={i} className="text-sm text-slate-600 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-slate-400">
                                                                        {ach}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>

                                            {/* Projects */}
                                            <section>
                                                <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-200 mb-4 pb-1">Projects</h2>
                                                <div className="grid gap-6">
                                                    {PROFILE.projects.map((proj, idx) => (
                                                        <div key={idx}>
                                                            <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                                                <h3 className="font-bold text-base text-slate-800">{proj.title}</h3>
                                                                <div className="flex gap-1">
                                                                    {proj.tags.map(tag => (
                                                                        <span key={tag} className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded border border-slate-200">
                                                                            {tag}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <p className="text-sm text-slate-600 leading-relaxed">
                                                                {proj.description}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>

                                            {/* Skills */}
                                            <section>
                                                <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-200 mb-4 pb-1">Technical Skills</h2>
                                                <div className="flex flex-wrap gap-2">
                                                    {PROFILE.skills.map(s => (
                                                        <div key={s.name} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg border border-slate-200 shadow-sm text-sm font-medium">
                                                            {s.icon && <s.icon size={14} className="text-cyan-600" />}
                                                            {s.name}
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar / Actions */}
                            <div className="w-full md:w-72 bg-slate-900 p-6 flex flex-col border-t md:border-t-0 md:border-l border-slate-800">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-white font-medium flex items-center gap-2">
                                            <Download size={16} className="text-cyan-500" /> Export
                                        </h3>
                                        <p className="text-xs text-slate-400">
                                            ATS-friendly PDF generated on the fly.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        {/* Helper alert for Download */}
                                        {isMobileWebView && (
                                            <p className="text-[10px] text-yellow-500 bg-yellow-900/20 p-2 rounded border border-yellow-700/30">
                                                Note: Direct downloads may fail in {navigator.userAgent.match(/Telegram|Instagram/i) || "this app"}.
                                                <br />Try the <b>Open in New Tab</b> button below.
                                            </p>
                                        )}

                                        {/* Primary Download Button */}
                                        <PDFDownloadLink
                                            document={<ResumePDF profile={PROFILE} />}
                                            fileName={`${PROFILE.name.replace(/\s+/g, '_')}_Resume.pdf`}
                                            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-bold text-sm transition-all hover:shadow-lg hover:shadow-cyan-500/20"
                                        >
                                            {({ blob, url, loading, error }) =>
                                                loading ? 'Generating...' : (
                                                    <>
                                                        <Download size={16} />
                                                        Download PDF
                                                    </>
                                                )
                                            }
                                        </PDFDownloadLink>

                                        {/* Fallback for In-App Browsers */}
                                        <BlobProvider document={<ResumePDF profile={PROFILE} />}>
                                            {({ blob, url, loading, error }) => {
                                                if (loading) return <div className="text-xs text-center text-slate-500">Loading URL...</div>;
                                                return (
                                                    <a
                                                        href={url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-medium text-xs transition-colors"
                                                    >
                                                        <ExternalLink size={14} />
                                                        Open in New Tab
                                                    </a>
                                                );
                                            }}
                                        </BlobProvider>
                                    </div>

                                    <div className="h-px bg-slate-800" />

                                    {/* Simple Stats */}
                                    <div className="space-y-3">
                                        <h3 className="text-white font-medium text-sm">Resume Stats</h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="bg-slate-800 p-2 rounded-lg text-center">
                                                <div className="text-lg font-bold text-cyan-400">{PROFILE.experience.length}</div>
                                                <div className="text-[10px] uppercase text-slate-500 tracking-wider">Roles</div>
                                            </div>
                                            <div className="bg-slate-800 p-2 rounded-lg text-center">
                                                <div className="text-lg font-bold text-purple-400">{PROFILE.projects.length}</div>
                                                <div className="text-[10px] uppercase text-slate-500 tracking-wider">Projects</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto pt-6">
                                    <p className="text-[10px] text-slate-600 text-center">
                                        Powered by React-PDF & LaTeX
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
