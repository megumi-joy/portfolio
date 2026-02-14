import React from 'react';
import { motion } from 'framer-motion';
import { X, Play } from 'lucide-react';

const GameEmbed = ({ gameUrl, title, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
        >
            <div className="relative w-full h-full max-w-7xl max-h-[90vh] bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-slate-800 bg-slate-900">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Play className="text-cyan-500 fill-cyan-500" size={18} />
                        {title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-red-500/20 hover:text-red-500 rounded-lg transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Iframe Container */}
                <div className="flex-1 relative bg-black">
                    <iframe
                        src={gameUrl}
                        title={title}
                        className="absolute inset-0 w-full h-full border-0"
                        allowFullScreen
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default GameEmbed;
