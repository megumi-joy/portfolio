/**
 * IdleWeatherBackground — Ambient weather-driven overlay.
 *
 * Behavior:
 *   - Invisible while user is active (mouse/key/scroll/touch).
 *   - After 30s idle → fades in from 0 to 1 opacity over 3s.
 *   - Renders CSS particle effects based on weather.mood:
 *     clear (day/night) | cloudy | rain | snow | storm | fog
 *   - Season affects particles: autumn→leaves, spring→flowers, winter→snowflakes.
 *   - Night → stars twinkle.
 */
import React, { useState, useEffect, useRef, useMemo } from 'react';

const IDLE_TIMEOUT = 30000; // 30s before ambient kicks in
const FADE_DURATION = 3000; // 3s fade

// Generate deterministic particles
function generateParticles(count, seed = 42) {
    const particles = [];
    let s = seed;
    const rand = () => { s = (s * 16807 + 0) % 2147483647; return s / 2147483647; };
    for (let i = 0; i < count; i++) {
        particles.push({
            id: i,
            x: rand() * 100,
            y: rand() * 100,
            size: 4 + rand() * 8,
            delay: rand() * 8,
            duration: 4 + rand() * 8,
            opacity: 0.3 + rand() * 0.5,
        });
    }
    return particles;
}

// Rain drops
const RainEffect = () => {
    const drops = useMemo(() => generateParticles(60), []);
    return (
        <div className="absolute inset-0 overflow-hidden">
            {drops.map(d => (
                <div
                    key={d.id}
                    className="absolute rounded-full bg-blue-400/40"
                    style={{
                        left: `${d.x}%`,
                        top: `-5%`,
                        width: '2px',
                        height: `${d.size + 8}px`,
                        animation: `weatherRainFall ${d.duration * 0.4}s linear ${d.delay * 0.3}s infinite`,
                        opacity: d.opacity * 0.6,
                    }}
                />
            ))}
        </div>
    );
};

// Snow / winter flakes
const SnowEffect = () => {
    const flakes = useMemo(() => generateParticles(40), []);
    return (
        <div className="absolute inset-0 overflow-hidden">
            {flakes.map(f => (
                <div
                    key={f.id}
                    className="absolute rounded-full bg-white/60"
                    style={{
                        left: `${f.x}%`,
                        top: `-3%`,
                        width: `${f.size}px`,
                        height: `${f.size}px`,
                        animation: `weatherSnowFall ${f.duration}s ease-in-out ${f.delay}s infinite`,
                        opacity: f.opacity * 0.7,
                    }}
                />
            ))}
        </div>
    );
};

// Night stars
const StarsEffect = () => {
    const stars = useMemo(() => generateParticles(50, 123), []);
    return (
        <div className="absolute inset-0 overflow-hidden">
            {stars.map(s => (
                <div
                    key={s.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${s.x}%`,
                        top: `${s.y}%`,
                        width: `${Math.max(2, s.size * 0.3)}px`,
                        height: `${Math.max(2, s.size * 0.3)}px`,
                        animation: `weatherTwinkle ${s.duration * 0.5 + 2}s ease-in-out ${s.delay * 0.5}s infinite`,
                        opacity: s.opacity * 0.8,
                    }}
                />
            ))}
        </div>
    );
};

// Autumn leaves
const LeavesEffect = () => {
    const leaves = useMemo(() => generateParticles(20, 77), []);
    const colors = ['text-amber-500', 'text-orange-500', 'text-red-400', 'text-yellow-600'];
    return (
        <div className="absolute inset-0 overflow-hidden">
            {leaves.map((l, i) => (
                <div
                    key={l.id}
                    className={`absolute ${colors[i % colors.length]}`}
                    style={{
                        left: `${l.x}%`,
                        top: `-5%`,
                        fontSize: `${l.size + 4}px`,
                        animation: `weatherLeafFall ${l.duration + 4}s ease-in-out ${l.delay}s infinite`,
                        opacity: l.opacity,
                    }}
                >
                    🍂
                </div>
            ))}
        </div>
    );
};

// Spring flowers
const FlowersEffect = () => {
    const petals = useMemo(() => generateParticles(18, 55), []);
    const flowers = ['🌸', '🌼', '🌺', '💮'];
    return (
        <div className="absolute inset-0 overflow-hidden">
            {petals.map((p, i) => (
                <div
                    key={p.id}
                    className="absolute"
                    style={{
                        left: `${p.x}%`,
                        top: `-5%`,
                        fontSize: `${p.size + 2}px`,
                        animation: `weatherLeafFall ${p.duration + 6}s ease-in-out ${p.delay}s infinite`,
                        opacity: p.opacity * 0.6,
                    }}
                >
                    {flowers[i % flowers.length]}
                </div>
            ))}
        </div>
    );
};

// Storm clouds
const StormEffect = () => (
    <div className="absolute inset-0 overflow-hidden">
        <RainEffect />
        <div
            className="absolute inset-0 bg-purple-900/10"
            style={{ animation: 'weatherLightning 6s ease-in-out infinite' }}
        />
    </div>
);

// Clear day: subtle sun rays
const ClearDayEffect = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
            className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-amber-300/8 blur-[80px]"
            style={{ animation: 'weatherPulse 8s ease-in-out infinite' }}
        />
    </div>
);

function getWeatherEffect(weather) {
    if (!weather) return null;

    const { mood, is_day, season } = weather;

    // Season-specific effects take priority in clear/cloudy weather
    if ((mood === 'clear' || mood === 'cloudy') && season === 'autumn') return <LeavesEffect />;
    if ((mood === 'clear' || mood === 'cloudy') && season === 'spring') return <FlowersEffect />;

    switch (mood) {
        case 'rain':  return <RainEffect />;
        case 'snow':  return <SnowEffect />;
        case 'storm': return <StormEffect />;
        case 'clear':
            return is_day ? <ClearDayEffect /> : <StarsEffect />;
        case 'cloudy':
            return is_day ? null : <StarsEffect />;
        default:
            return null;
    }
}

const IdleWeatherBackground = ({ weather }) => {
    const [idle, setIdle] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        const resetIdle = () => {
            setIdle(false);
            setOpacity(0);
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => setIdle(true), IDLE_TIMEOUT);
        };

        const events = ['mousemove', 'keydown', 'scroll', 'touchstart', 'click'];
        events.forEach(e => window.addEventListener(e, resetIdle, { passive: true }));

        // Start initial timer
        timerRef.current = setTimeout(() => setIdle(true), IDLE_TIMEOUT);

        return () => {
            events.forEach(e => window.removeEventListener(e, resetIdle));
            clearTimeout(timerRef.current);
        };
    }, []);

    // Fade in when idle
    useEffect(() => {
        if (idle) {
            const start = performance.now();
            let raf;
            const animate = (now) => {
                const elapsed = now - start;
                const progress = Math.min(elapsed / FADE_DURATION, 1);
                setOpacity(progress);
                if (progress < 1) raf = requestAnimationFrame(animate);
            };
            raf = requestAnimationFrame(animate);
            return () => cancelAnimationFrame(raf);
        }
    }, [idle]);

    const effect = getWeatherEffect(weather);
    if (!effect) return null;

    return (
        <div
            className="fixed inset-0 z-[1] pointer-events-none transition-opacity"
            style={{ opacity }}
        >
            {effect}
        </div>
    );
};

export default IdleWeatherBackground;
