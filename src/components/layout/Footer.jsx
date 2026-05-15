import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { MessageCircle } from 'lucide-react';
import { waLink } from '../../data/whatsapp';

const Footer = () => {
    const { language } = useLanguage();

    const labels = {
        en: { studio: 'Custom automation, AI products & interactive experiences.', nav: 'Navigation', contact: 'Contact', rights: 'All rights reserved.' },
        es: { studio: 'Automatización a medida, productos IA y experiencias interactivas.', nav: 'Navegación', contact: 'Contacto', rights: 'Todos los derechos reservados.' },
        ca: { studio: "Automatització a mida, productes IA i experiències interactives.", nav: 'Navegació', contact: 'Contacte', rights: 'Tots els drets reservats.' },
        ru: { studio: 'Автоматизация, ИИ-продукты и интерактивные решения.', nav: 'Навигация', contact: 'Контакт', rights: 'Все права защищены.' },
        uk: { studio: 'Автоматизація, ІІ-продукти та інтерактивні рішення.', nav: 'Навігація', contact: 'Контакт', rights: 'Усі права захищені.' },
    };

    const t = labels[language] || labels.en;

    return (
        <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800 mt-32">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Col 1: Studio */}
                    <div>
                        <Link to="/" className="text-xl font-black">
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                                Megumi Joy
                            </span>
                        </Link>
                        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
                            {t.studio}
                        </p>
                    </div>

                    {/* Col 2: Nav */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">{t.nav}</h4>
                        <div className="flex flex-col gap-2">
                            <Link to="/empresas" className="text-sm text-slate-600 dark:text-slate-300 hover:text-[rgb(var(--accent-rgb,6,182,212))] transition-colors">
                                {language === 'es' ? 'Empresas' : language === 'ca' ? 'Empreses' : language === 'ru' ? 'Бизнес' : language === 'uk' ? 'Бізнес' : 'Business'}
                            </Link>
                            <Link to="/voicey" className="text-sm text-slate-600 dark:text-slate-300 hover:text-[rgb(var(--accent-rgb,6,182,212))] transition-colors">Voicey</Link>
                            <Link to="/games" className="text-sm text-slate-600 dark:text-slate-300 hover:text-[rgb(var(--accent-rgb,6,182,212))] transition-colors">
                                {language === 'ru' ? 'Игры' : language === 'uk' ? 'Ігри' : 'Games'}
                            </Link>

                        </div>
                    </div>

                    {/* Col 3: Contact */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">{t.contact}</h4>
                        <a
                            href={waLink('hub')}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:text-[#20BD5A] font-medium transition-colors"
                        >
                            <MessageCircle size={16} fill="currentColor" />
                            +34 605 74 80 52
                        </a>
                        <div className="mt-2">
                            <a
                                href="https://github.com/megumi-joy"
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                        &copy; {new Date().getFullYear()} Megumi Joy. {t.rights}
                    </p>
                    <p className="text-[10px] text-slate-400/60 dark:text-slate-500/60 font-mono">
                        Built with React & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
