import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { Mail, CheckCircle, XCircle, Loader2 } from 'lucide-react';

const Contact = () => {
    const { activeProfile } = useLanguage();
    
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        
        try {
            const res = await fetch('https://portfolio.voicydroid.com/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (err) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="pb-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 p-12 text-center relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-cyan-500/5 blur-3xl" />

                <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                        {activeProfile.ui.contactTitle || "Let's Build Something Amazing"}
                    </h3>
                    <p className="text-slate-400 text-lg">
                        {activeProfile.ui.contactText || "I'm currently open to new opportunities in Game Development, Simulation Engineering, or Full Stack Web Development."}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-lg mx-auto bg-slate-900/40 p-8 rounded-2xl border border-cyan-500/10 backdrop-blur-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                placeholder="Name"
                                className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-white w-full"
                            />
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                placeholder="Email"
                                className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-white w-full"
                            />
                        </div>
                        <textarea
                            placeholder="Your Message"
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            rows="4"
                            className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-white w-full"
                        ></textarea>
                        
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className={`w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-bold transition-all shadow-lg ${
                                status === 'success' ? 'bg-green-500 hover:bg-green-400 shadow-green-500/20' :
                                status === 'error' ? 'bg-red-500 hover:bg-red-400 shadow-red-500/20' :
                                'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 shadow-cyan-500/20'
                            }`}
                        >
                            {status === 'loading' && <Loader2 size={20} className="animate-spin" />}
                            {status === 'success' && <CheckCircle size={20} />}
                            {status === 'error' && <XCircle size={20} />}
                            {status === 'idle' && <Mail size={20} />}
                            
                            {status === 'loading' ? 'Sending...' : 
                             status === 'success' ? 'Message Sent!' :
                             status === 'error' ? 'Error Sending' :
                             (activeProfile.ui.contactButton || "Say Hello")}
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
