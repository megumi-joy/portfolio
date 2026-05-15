import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { waLink } from '../../data/whatsapp';

/**
 * WhatsApp CTA button — sticky (fixed bottom-right) or inline variant.
 * Props:
 *   context  — string key from WA_PREFILLS ('hub', 'empresas', etc.)
 *   variant  — 'sticky' | 'inline' | 'hero'
 *   label    — text for inline/hero variants
 *   className — extra classes
 */
const WhatsAppButton = ({ context = 'hub', variant = 'sticky', label, position, className = '' }) => {
    const [visible, setVisible] = useState(variant !== 'sticky');

    // Constitution §6 — emit on every WA click (plug in Plausible/PostHog here later)
    const handleTrack = () => {
        console.log({
            event: 'whatsapp_click',
            trackingId: `${context}_${variant}_${Date.now()}`,
            lobby: context,
            position: position || variant,
            language: document.documentElement.lang || 'en',
        });
    };

    useEffect(() => {
        if (variant !== 'sticky') return;
        const isMobile = window.innerWidth < 768;
        if (isMobile) { setVisible(true); return; }

        const handleScroll = () => {
            const scrolled = window.scrollY / document.documentElement.scrollHeight;
            setVisible(scrolled > 0.3);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [variant]);

    const href = waLink(context);

    if (variant === 'sticky') {
        return (
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                onClick={handleTrack}
                aria-label="Contact via WhatsApp"
                className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-lg shadow-[#25D366]/30 flex items-center justify-center transition-all duration-300 hover:scale-110 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'} ${className}`}
            >
                <MessageCircle size={26} className="text-white" fill="currentColor" />
            </a>
        );
    }

    if (variant === 'hero') {
        return (
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                onClick={handleTrack}
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-[#25D366]/25 ${className}`}
            >
                <MessageCircle size={22} fill="currentColor" />
                {label || 'WhatsApp'}
            </a>
        );
    }

    // inline
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            onClick={handleTrack}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold transition-all hover:scale-105 shadow-md shadow-[#25D366]/20 ${className}`}
        >
            <MessageCircle size={18} fill="currentColor" />
            {label || 'WhatsApp'}
        </a>
    );
};

export default WhatsAppButton;
