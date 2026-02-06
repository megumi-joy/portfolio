import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, Copy, Check, Code, User, Eye, Terminal } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';
import { generateLatex } from './latexGenerator';
import { PROFILE } from '../../data';
import Prism from 'prismjs';
import 'prismjs/components/prism-latex';
import 'prismjs/themes/prism-tomorrow.css';

const ResumeModal = ({ isOpen, onClose }) => {
    const [copied, setCopied] = useState(false);
    const [viewMode, setViewMode] = useState('text'); // 'text' | 'latex'
    const latexSource = generateLatex(PROFILE);

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
                                        className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${viewMode === 'text' ? 'bg-slate-700 text-cyan-400 shadow-sm' : 'text-slate-400 hover:text-slate-300'}`}
                                    >
                                        <Eye size={14} /> Preview
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
                                ) : (
                                    <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-white text-slate-900 font-sans">
                                        <div className="max-w-2xl mx-auto space-y-6">
                                            {/* Header */}
                                            <div className="text-center space-y-1 pb-4 border-b-2 border-slate-900">
                                                <h1 className="text-3xl font-bold uppercase tracking-wide">{PROFILE.name}</h1>
                                                <div className="text-sm text-slate-600 flex flex-wrap justify-center gap-x-3">
                                                    <span>{PROFILE.title}</span>
                                                    <span>|</span>
                                                    <a href="mailto:aurorasunrisegames@gmail.com" className="hover:text-cyan-700">aurorasunrisegames@gmail.com</a>
                                                    <span>|</span>
                                                    <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="hover:text-cyan-700">github.com/aurorasunrisegames</a>
                                                </div>
                                            </div>

                                            {/* Education would go here if in data, skipping for now as per data structure */}

                                            {/* Experience */}
                                            <section>
                                                <h2 className="text-sm font-bold uppercase tracking-widest border-b border-slate-300 mb-3 pb-1">Experience</h2>
                                                <div className="space-y-4">
                                                    {PROFILE.experience.map((exp, idx) => (
                                                        <div key={idx}>
                                                            <div className="flex justify-between items-baseline mb-1">
                                                                <h3 className="font-bold text-base">{exp.role}</h3>
                                                                <span className="text-xs font-medium text-slate-500 italic">{exp.period}</span>
                                                            </div>
                                                            <div className="text-sm font-medium text-slate-700 mb-1">{exp.company}</div>
                                                            <ul className="list-disc list-outside ml-4 space-y-1">
                                                                {exp.achievements.map((ach, i) => (
                                                                    <li key={i} className="text-sm text-slate-600 leading-relaxed pl-1">{ach}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>

                                            {/* Projects */}
                                            <section>
                                                <h2 className="text-sm font-bold uppercase tracking-widest border-b border-slate-300 mb-3 pb-1">Projects</h2>
                                                <div className="space-y-3">
                                                    {PROFILE.projects.map((proj, idx) => (
                                                        <div key={idx}>
                                                            <div className="flex items-baseline gap-2 mb-1">
                                                                <h3 className="font-bold text-base">{proj.title}</h3>
                                                                <span className="text-sm text-slate-500 italic">| {proj.tags.join(', ')}</span>
                                                            </div>
                                                            <ul className="list-disc list-outside ml-4">
                                                                <li className="text-sm text-slate-600 leading-relaxed pl-1">{proj.description}</li>
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>

                                            {/* Skills */}
                                            <section>
                                                <h2 className="text-sm font-bold uppercase tracking-widest border-b border-slate-300 mb-3 pb-1">Technical Skills</h2>
                                                <div className="text-sm">
                                                    <span className="font-bold">Languages/Technologies: </span>
                                                    <span className="text-slate-600">{PROFILE.skills.map(s => s.name).join(', ')}</span>
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
                                            Get the ATS-friendly PDF version generated from this data.
                                        </p>
                                    </div>

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

                                    <div className="h-px bg-slate-800" />

                                    {/* Simple Stats or Info */}
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
