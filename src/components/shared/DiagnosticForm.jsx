import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { CheckCircle, ArrowRight, ArrowLeft, Send, Building2, Target, Phone, RefreshCw, Mail } from 'lucide-react';
import { CONTACT_VPS_URL } from '../../data/formspree';

/** Format diagnostic data as a readable Telegram message */
function buildTgMessage(d) {
    const row = (e, l, v) => v ? `\n${e} *${l}:* ${v}` : '';
    return (
        `📋 *Nuevo diagnóstico — Portfolio Empresas*`
        + row('👤', 'Nombre',      d.name)
        + row('📞', 'Contacto',    d.contact)
        + row('🏢', 'Empresa',     d.company)
        + row('💼', 'Rol',         d.role)
        + row('💰', 'Facturación', d.revenue)
        + '\n'
        + row('🔥', 'Principal dolor',      d.pain)
        + row('🛠️', 'Herramientas',         d.tools?.join ? d.tools.join(', ') : d.tools)
        + row('⏱️', 'Horas perdidas/semana', d.hours)
        + '\n'
        + row('🎯', 'Objetivo 6 meses', d.goal)
        + row('📅', 'Urgencia',         d.urgency)
        + row('💬', 'Comentario',       d.extra)
        + '\n\n_vía portfolio fallback_'
    );
}

/** Try VPS with one automatic retry (different timeout), then give up gracefully */
async function submitContact(payload, timeoutMs = 6000) {
    const body = JSON.stringify({
        ...payload,
        tools: Array.isArray(payload.tools) ? payload.tools.join(', ') : payload.tools,
    });
    const attempt = async (ms) => {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), ms);
        try {
            const res = await fetch(CONTACT_VPS_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body,
                signal: ctrl.signal,
            });
            clearTimeout(timer);
            if (res.ok) return true;
        } catch (_) { clearTimeout(timer); }
        return false;
    };
    // Primary attempt
    if (await attempt(timeoutMs)) return { channel: 'vps' };
    // One automatic retry with shorter timeout
    if (await attempt(4000)) return { channel: 'vps-retry' };
    // Both failed — caller shows mailto fallback
    throw new Error('vps-offline');
}

const T = {
    es: {
        title: 'Diagnóstico gratuito de tu operación',
        subtitle: 'Responde 3 bloques de preguntas (2 min) y te damos un diagnóstico real de dónde y cómo podemos ayudarte.',
        step1: 'Tu perfil', step2: 'Tu situación', step3: 'Objetivos y contacto',
        name: 'Nombre *', company: 'Empresa y sector *', contact: 'Email o WhatsApp *',
        role: 'Tu rol', role_opts: ['CEO / Fundador', 'CFO / Director Financiero', 'COO / Director de Operaciones', 'Gerente General', 'Otro'],
        revenue: 'Facturación anual', revenue_opts: ['< 100K€', '100K – 500K€', '500K – 2M€', '> 2M€', 'Prefiero no decirlo'],
        pain: 'Principal desafío ahora mismo',
        pain_opts: [
            'Procesos manuales que consumen horas de mi equipo',
            'No tengo visibilidad financiera en tiempo real',
            'Pierdo leads o clientes por falta de seguimiento automático',
            'Mis márgenes no mejoran aunque facture más',
            'Quiero integrar IA pero no sé por dónde empezar',
            'Necesito apoyo experto en gestión financiera (CFO externo)',
        ],
        tools: 'Herramientas que usáis ahora',
        tools_opts: ['Excel / Google Sheets', 'CRM (Salesforce, HubSpot…)', 'ERP (SAP, Odoo…)', 'Facturación digital', 'IA / Automatización', 'Ninguna herramienta digital'],
        hours: 'Horas semanales que el equipo pierde en tareas repetitivas',
        hours_opts: ['Menos de 5h', '5 – 15h', '15 – 30h', 'Más de 30h', 'No lo he medido'],
        goal: 'Objetivo principal en los próximos 6 meses',
        goal_opts: [
            'Automatizar un proceso concreto que me roba tiempo',
            'Tener visibilidad financiera real (dashboards, alertas)',
            'Generar más leads de forma automática',
            'Implantar un asistente IA operativo (Voicey)',
            'Mejorar márgenes con apoyo CFO externo',
            'Escalar sin aumentar el equipo',
        ],
        urgency: 'Cuándo necesitas resolver esto', urgency_opts: ['Urgente — este mes', 'En los próximos 3 meses', 'En los próximos 6 meses', 'Explorando posibilidades'],
        extra: '¿Algo más que quieras añadir? (opcional)',
        next: 'Siguiente', prev: 'Anterior', submit: 'Enviar diagnóstico',
        submitting: 'Enviando…',
        success_title: 'Diagnóstico recibido',
        success_body: 'Anton lo revisará y te contactará en menos de 24h con un análisis personalizado.',
        required: 'Campo obligatorio',
        offline_title: 'El servidor está temporalmente offline',
        offline_body: 'Puedes reintentar en unos segundos, o enviarnos el diagnóstico directamente por email.',
        retry: 'Reintentar',
        mailto_cta: 'Enviar por email →',
    },
    en: {
        title: 'Free operations diagnostic',
        subtitle: 'Answer 3 quick blocks (2 min) and get a real diagnosis of where and how we can help.',
        step1: 'Your profile', step2: 'Your situation', step3: 'Goals & contact',
        name: 'Name *', company: 'Company & industry *', contact: 'Email or WhatsApp *',
        role: 'Your role', role_opts: ['CEO / Founder', 'CFO / Finance Director', 'COO / Operations Director', 'General Manager', 'Other'],
        revenue: 'Annual revenue', revenue_opts: ['< €100K', '€100K – €500K', '€500K – €2M', '> €2M', 'Prefer not to say'],
        pain: 'Main challenge right now',
        pain_opts: ['Manual processes eating team hours', 'No real-time financial visibility', 'Losing leads due to lack of automated follow-up', 'Margins not improving despite revenue growth', 'Want to integrate AI but don\'t know where to start', 'Need expert financial management support (fractional CFO)'],
        tools: 'Tools you currently use',
        tools_opts: ['Excel / Google Sheets', 'CRM (Salesforce, HubSpot…)', 'ERP (SAP, Odoo…)', 'Digital invoicing', 'AI / Automation', 'No digital tools'],
        hours: 'Weekly hours your team wastes on repetitive tasks',
        hours_opts: ['Less than 5h', '5 – 15h', '15 – 30h', 'More than 30h', 'Haven\'t measured it'],
        goal: 'Main goal in the next 6 months',
        goal_opts: ['Automate a specific time-consuming process', 'Achieve real financial visibility (dashboards, alerts)', 'Generate more leads automatically', 'Deploy an AI operational assistant (Voicey)', 'Improve margins with fractional CFO support', 'Scale without growing headcount'],
        urgency: 'When do you need this resolved', urgency_opts: ['Urgent — this month', 'Within 3 months', 'Within 6 months', 'Just exploring'],
        extra: 'Anything else to add? (optional)',
        next: 'Next', prev: 'Back', submit: 'Send diagnosis',
        submitting: 'Sending…',
        success_title: 'Diagnosis received',
        success_body: 'Anton will review it and contact you within 24h with a personalised analysis.',
        required: 'Required field',
        offline_title: 'Server is temporarily offline',
        offline_body: 'You can retry in a few seconds, or send us the diagnosis directly by email.',
        retry: 'Retry',
        mailto_cta: 'Send by email →',
    },
};
T.ca = { ...T.es, title: 'Diagnòstic gratuït de la teva operació', subtitle: 'Respon 3 blocs de preguntes (2 min) i et donem un diagnòstic real de com podem ajudar-te.', step1: 'El teu perfil', step2: 'La teva situació', step3: 'Objectius i contacte', next: 'Següent', prev: 'Anterior', submit: 'Enviar diagnòstic', submitting: 'Enviant…', success_title: 'Diagnòstic rebut', success_body: "Anton ho revisarà i et contactarà en menys de 24h amb una anàlisi personalitzada." };
T.ru = { ...T.en, title: 'Бесплатная диагностика операций', subtitle: 'Ответьте на 3 блока вопросов (2 мин) — получите реальный диагноз и план действий.', step1: 'Ваш профиль', step2: 'Ваша ситуация', step3: 'Цели и контакт', next: 'Далее', prev: 'Назад', submit: 'Отправить диагностику', submitting: 'Отправка…', success_title: 'Диагностика получена', success_body: 'Антон свяжется с вами в течение 24 часов с персональным анализом.' };
T.uk = { ...T.en, title: 'Безкоштовна діагностика операцій', subtitle: 'Дайте відповідь на 3 блоки запитань (2 хв) — отримайте реальний діагноз і план дій.', step1: 'Ваш профіль', step2: 'Ваша ситуація', step3: 'Цілі та контакт', next: 'Далі', prev: 'Назад', submit: 'Надіслати діагностику', submitting: 'Надсилання…', success_title: 'Діагностику отримано', success_body: 'Антон зв\'яжеться з вами протягом 24 годин із персональним аналізом.' };

const STEPS = [
    { icon: Building2, key: 'step1' },
    { icon: Target,    key: 'step2' },
    { icon: Phone,     key: 'step3' },
];

const SelectField = ({ label, value, onChange, options, name }) => {
    const id = `diag-${name}`;
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</label>
            <select
                id={id}
                name={name}
                value={value}
                onChange={e => onChange(e.target.value)}
                aria-label={label}
                className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent-rgb,212,162,76))] transition-all"
            >
                <option value="">—</option>
                {options.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
        </div>
    );
};

const TextField = ({ label, value, onChange, name, type = 'text', required }) => {
    const id = `diag-${name}`;
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</label>
            <input
                id={id}
                type={type} name={name} value={value}
                required={required} aria-required={required || undefined}
                onChange={e => onChange(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent-rgb,212,162,76))] transition-all"
            />
        </div>
    );
};

const CheckGroup = ({ label, options, selected, onChange, name }) => (
    <fieldset className="flex flex-col gap-2">
        <legend className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">{label}</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {options.map(opt => {
                const checked = selected.includes(opt);
                return (
                    <button key={opt} type="button"
                        aria-pressed={checked}
                        aria-label={`${checked ? 'Deselect' : 'Select'}: ${opt}`}
                        onClick={() => onChange(checked ? selected.filter(s => s !== opt) : [...selected, opt])}
                        className={`px-4 py-2.5 rounded-xl text-sm text-left transition-all border ${checked ? 'bg-[rgb(var(--accent-rgb,212,162,76)/0.15)] border-[rgb(var(--accent-rgb,212,162,76)/0.5)] text-slate-900 dark:text-white font-medium' : 'bg-white/40 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[rgb(var(--accent-rgb,212,162,76)/0.4)]'}`}>
                        {checked && <span className="mr-1.5" aria-hidden="true">✓</span>}{opt}
                    </button>
                );
            })}
        </div>
        <input type="hidden" name={name} value={selected.join(', ')} />
    </fieldset>
);

export default function DiagnosticForm() {
    const { language } = useLanguage();
    const t = T[language] || T.es;
    const [step, setStep] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [offline, setOffline] = useState(false); // VPS unreachable — show mailto
    const [error, setError] = useState('');
    const [data, setData] = useState({
        name: '', company: '', contact: '', role: '', revenue: '',
        pain: '', tools: [], hours: '', goal: '', urgency: '', extra: '',
    });

    const set = (key) => (val) => setData(d => ({ ...d, [key]: val }));

    const canProceed = [
        data.name && data.company,
        data.pain,
        data.contact,
    ][step];

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!data.contact) return;
        setSubmitting(true);
        setError('');
        setOffline(false);
        try {
            await submitContact({
                _subject: `[Portfolio] Diagnóstico de ${data.company} — ${data.role}`,
                ...data,
                _language: language,
            });
            setSubmitted(true);
        } catch {
            setOffline(true); // VPS offline — show retry + mailto
        }
        setSubmitting(false);
    };

    /** Build mailto: URL pre-filled with form data */
    const buildMailto = () => {
        const CONTACT_EMAIL = 'maximusdemates@gmail.com';
        const subject = encodeURIComponent(`Diagnóstico — ${data.company || 'Portfolio'}`);
        const body = encodeURIComponent(
            `Nombre: ${data.name}\nEmpresa: ${data.company}\nRol: ${data.role}\nContacto: ${data.contact}\n\nDesafío: ${data.pain}\nObjetivo: ${data.goal}\nUrgencia: ${data.urgency}\n\n${data.extra || ''}`
        );
        return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    };


    if (submitted) return (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 px-8 max-w-lg mx-auto">
            <CheckCircle size={56} className="mx-auto mb-4 text-[rgb(var(--accent-rgb,212,162,76))]" />
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">{t.success_title}</h3>
            <p className="text-slate-500 dark:text-slate-400">{t.success_body}</p>
        </motion.div>
    );

    if (offline) return (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 px-8 max-w-lg mx-auto">
            <div className="w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-4">
                <RefreshCw size={28} className="text-amber-500" />
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">{t.offline_title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">{t.offline_body}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={() => { setOffline(false); }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[rgb(var(--accent-rgb,212,162,76))] hover:opacity-90 text-white font-bold text-sm transition-all">
                    <RefreshCw size={15} /> {t.retry}
                </button>
                <a href={buildMailto()}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                    <Mail size={15} /> {t.mailto_cta}
                </a>
            </div>
        </motion.div>
    );

    return (
        <section id="diagnostico" className="max-w-3xl mx-auto px-6 py-20">
            <div className="mb-10 text-center">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3">{t.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">{t.subtitle}</p>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-2 mb-8">
                {STEPS.map((s, i) => {
                    const Icon = s.icon;
                    return (
                        <React.Fragment key={i}>
                            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${i === step ? 'bg-[rgb(var(--accent-rgb,212,162,76)/0.15)] text-[rgb(var(--accent-rgb,212,162,76))] border border-[rgb(var(--accent-rgb,212,162,76)/0.4)]' : i < step ? 'text-emerald-500' : 'text-slate-400'}`}>
                                {i < step ? <CheckCircle size={14} /> : <Icon size={14} />}
                                <span className="hidden sm:inline">{t[s.key]}</span>
                                <span className="sm:hidden">{i + 1}</span>
                            </div>
                            {i < STEPS.length - 1 && <div className={`flex-1 h-px ${i < step ? 'bg-emerald-400' : 'bg-slate-200 dark:bg-slate-700'} transition-all`} />}
                        </React.Fragment>
                    );
                })}
            </div>

            <form onSubmit={handleSubmit}>
                <div className="bg-white/40 dark:bg-slate-800/30 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-8 md:p-10 space-y-6">
                    <AnimatePresence mode="wait">
                        {step === 0 && (
                            <motion.div key="s0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                                <TextField label={t.name} name="name" value={data.name} onChange={set('name')} required />
                                <TextField label={t.company} name="company" value={data.company} onChange={set('company')} required />
                                <SelectField label={t.role} name="role" value={data.role} onChange={set('role')} options={t.role_opts} />
                                <SelectField label={t.revenue} name="revenue" value={data.revenue} onChange={set('revenue')} options={t.revenue_opts} />
                            </motion.div>
                        )}
                        {step === 1 && (
                            <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                                <SelectField label={t.pain} name="pain" value={data.pain} onChange={set('pain')} options={t.pain_opts} />
                                <CheckGroup label={t.tools} name="tools" options={t.tools_opts} selected={data.tools} onChange={set('tools')} />
                                <SelectField label={t.hours} name="hours" value={data.hours} onChange={set('hours')} options={t.hours_opts} />
                            </motion.div>
                        )}
                        {step === 2 && (
                            <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                                <SelectField label={t.goal} name="goal" value={data.goal} onChange={set('goal')} options={t.goal_opts} />
                                <SelectField label={t.urgency} name="urgency" value={data.urgency} onChange={set('urgency')} options={t.urgency_opts} />
                                <TextField label={t.contact} name="contact" value={data.contact} onChange={set('contact')} required />
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="diag-extra" className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{t.extra}</label>
                                    <textarea id="diag-extra" name="extra" value={data.extra} onChange={e => set('extra')(e.target.value)} rows={3}
                                        aria-label={t.extra}
                                        className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent-rgb,212,162,76))] transition-all resize-none" />
                                </div>
                                {error && <p className="text-red-500 text-sm">{error}</p>}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Nav buttons */}
                <div className="flex justify-between mt-6 gap-4">
                    {step > 0 ? (
                        <button type="button" onClick={() => setStep(s => s - 1)}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                            <ArrowLeft size={16} /> {t.prev}
                        </button>
                    ) : <div />}

                    {step < 2 ? (
                        <button type="button" onClick={() => setStep(s => s + 1)} disabled={!canProceed}
                            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-[rgb(var(--accent-rgb,212,162,76))] hover:opacity-90 text-white font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed ml-auto">
                            {t.next} <ArrowRight size={16} />
                        </button>
                    ) : (
                        <button type="submit" disabled={!canProceed || submitting}
                            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-[rgb(var(--accent-rgb,212,162,76))] hover:opacity-90 text-white font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed ml-auto">
                            <Send size={16} /> {submitting ? t.submitting : t.submit}
                        </button>
                    )}
                </div>
            </form>
        </section>
    );
}
