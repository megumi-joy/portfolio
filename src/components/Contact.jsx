import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { Mail } from 'lucide-react';

const Contact = () => {
    const { activeProfile } = useLanguage();

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

                    <a
                        href={`mailto:${activeProfile.socials.email}`}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-cyan-50 transition-colors"
                    >
                        <Mail size={20} />
                        {activeProfile.ui.contactButton || "Say Hello"}
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
