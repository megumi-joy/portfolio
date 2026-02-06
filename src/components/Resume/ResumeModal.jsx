import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, Copy, Check } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';
import { generateLatex } from './latexGenerator';
import { PROFILE } from '../../data';

const ResumeModal = ({ isOpen, onClose }) => {
    const [copied, setCopied] = useState(false);
    const latexSource = generateLatex(PROFILE);

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
                        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/50">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <FileText className="text-cyan-400" size={20} />
                                Resume Configuration
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
                            {/* LaTeX Source View */}
                            <div className="flex-1 p-0 md:border-r border-slate-800 flex flex-col min-h-[300px]">
                                <div className="p-3 bg-slate-950 border-b border-slate-800 flex justify-between items-center">
                                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">LaTeX Source</span>
                                    <button
                                        onClick={handleCopy}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 transition-colors"
                                    >
                                        {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                                        {copied ? 'Copied' : 'Copy Code'}
                                    </button>
                                </div>
                                <div className="flex-1 relative overflow-hidden">
                                    <textarea
                                        readOnly
                                        value={latexSource}
                                        className="absolute inset-0 w-full h-full bg-slate-950 p-4 text-slate-300 font-mono text-xs resize-none focus:outline-none scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
                                        spellCheck="false"
                                    />
                                </div>
                            </div>

                            {/* Preview / Actions */}
                            <div className="w-full md:w-80 bg-slate-900 p-6 flex flex-col justify-center space-y-6">
                                <div className="text-center space-y-2">
                                    <h3 className="text-white font-medium">Ready to Export?</h3>
                                    <p className="text-sm text-slate-400">
                                        Render the resume using the current profile data formatted in LaTeX style.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <PDFDownloadLink
                                        document={<ResumePDF profile={PROFILE} />}
                                        fileName={`${PROFILE.name.replace(/\s+/g, '_')}_Resume.pdf`}
                                        className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors"
                                    >
                                        {({ blob, url, loading, error }) =>
                                            loading ? 'Generating PDF...' : (
                                                <>
                                                    <Download size={18} />
                                                    Download PDF
                                                </>
                                            )
                                        }
                                    </PDFDownloadLink>
                                </div>

                                <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-800">
                                    <p className="text-xs text-slate-500 leading-relaxed text-center">
                                        This PDF is generated client-side using React-PDF, ensuring your data never leaves your browser.
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
