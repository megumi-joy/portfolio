/**
 * Avatar — Anton's photo with graceful fallback to initials "A".
 *
 * HOW TO ADD REAL PHOTO (when ready):
 * 1. Public repo (GitHub Pages): leave VITE_ANTON_PHOTO_URL unset → shows "A" initials
 * 2. VPS / private build: set VITE_ANTON_PHOTO_URL=/images/avatar.jpg in .env.production
 *    OR set VITE_ANTON_PHOTO_URL=https://... for external URL
 * No code changes needed — just the env var.
 */

import React, { useState } from 'react';

// Reads from env — empty in public repo, real URL on VPS build
const PHOTO_URL = import.meta.env.VITE_ANTON_PHOTO_URL || null;

export default function Avatar({ size = 80, src = PHOTO_URL, className = '' }) {
    const [failed, setFailed] = useState(false);

    const base = {
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        flexShrink: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    if (src && !failed) {
        return (
            <div style={base} className={`border-2 border-white/20 ${className}`}>
                <img
                    src={src}
                    alt="Anton — Megumi Joy"
                    onError={() => setFailed(true)}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
        );
    }

    // Fallback: initials "A" with branded gradient
    const fontSize = Math.round(size * 0.38);
    return (
        <div
            style={{ ...base, background: 'linear-gradient(135deg, rgb(var(--accent-rgb,6,182,212)) 0%, rgba(var(--accent-rgb,6,182,212),0.5) 100%)' }}
            className={`border-2 border-white/10 select-none ${className}`}
            aria-label="Anton — Megumi Joy"
            role="img"
        >
            <span style={{ fontSize, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>A</span>
        </div>
    );
}
