/**
 * useWeatherTheme — Cross-subdomain weather-aware theme hook.
 *
 * Theme modes:
 *   "light"  — always light
 *   "dark"   — always dark
 *   "auto"   — follows Barcelona day/night cycle via /api/weather
 *
 * Cookie `theme_mode` is set on `.voicydroid.com` so all subdomains share it.
 * Weather data is cached in sessionStorage for 15 min.
 */
import { useState, useEffect, useCallback } from 'react';

const COOKIE_NAME = 'theme_mode';
const WEATHER_CACHE_KEY = 'voicy_weather';
const WEATHER_TTL_MS = 15 * 60 * 1000; // 15 min
const API_URL = 'https://api.voicydroid.com/api/weather';

function getCookie(name) {
    const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name, value, days = 365) {
    const d = new Date();
    d.setTime(d.getTime() + days * 86400000);
    // Set on .voicydroid.com for cross-subdomain sharing
    // On localhost, omit domain so it works during dev
    const isLocal = window.location.hostname === 'localhost';
    const domain = isLocal ? '' : '; domain=.voicydroid.com';
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${d.toUTCString()}; path=/${domain}; SameSite=Lax`;
}

function getCachedWeather() {
    try {
        const raw = sessionStorage.getItem(WEATHER_CACHE_KEY);
        if (!raw) return null;
        const { data, ts } = JSON.parse(raw);
        if (Date.now() - ts < WEATHER_TTL_MS) return data;
    } catch { /* ignore */ }
    return null;
}

function cacheWeather(data) {
    try {
        sessionStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify({ data, ts: Date.now() }));
    } catch { /* quota exceeded — ignore */ }
}

export function useWeatherTheme() {
    const [mode, setModeState] = useState(() => getCookie(COOKIE_NAME) || 'auto');
    const [weather, setWeather] = useState(() => getCachedWeather());
    const [resolvedTheme, setResolvedTheme] = useState('dark');

    // Fetch weather
    useEffect(() => {
        const cached = getCachedWeather();
        if (cached) {
            setWeather(cached);
            return;
        }

        let cancelled = false;
        fetch(API_URL)
            .then(r => r.ok ? r.json() : Promise.reject())
            .then(data => {
                if (!cancelled) {
                    setWeather(data);
                    cacheWeather(data);
                }
            })
            .catch(() => {
                // Fallback: use local time for day/night
                const hour = new Date().getHours();
                const fallback = {
                    temperature: 22, is_day: hour >= 7 && hour < 21,
                    mood: 'clear', season: 'summer', description: 'Clear sky',
                };
                if (!cancelled) {
                    setWeather(fallback);
                    cacheWeather(fallback);
                }
            });
        return () => { cancelled = true; };
    }, []);

    // Resolve theme based on mode + weather
    useEffect(() => {
        if (mode === 'light') {
            setResolvedTheme('light');
        } else if (mode === 'dark') {
            setResolvedTheme('dark');
        } else {
            // auto: follow Barcelona day/night
            setResolvedTheme(weather?.is_day ? 'light' : 'dark');
        }
    }, [mode, weather]);

    // Apply to <html> for Tailwind dark mode class
    useEffect(() => {
        document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
        document.documentElement.setAttribute('data-theme', resolvedTheme);
    }, [resolvedTheme]);

    const setMode = useCallback((newMode) => {
        setModeState(newMode);
        setCookie(COOKIE_NAME, newMode);
    }, []);

    const cycleMode = useCallback(() => {
        const order = ['dark', 'light', 'auto'];
        const next = order[(order.indexOf(mode) + 1) % order.length];
        setMode(next);
    }, [mode, setMode]);

    return {
        mode,           // 'light' | 'dark' | 'auto'
        setMode,        // setter
        cycleMode,      // toggle through 3 positions
        resolvedTheme,  // 'light' | 'dark' (the actual applied theme)
        weather,        // { temperature, is_day, mood, season, description, city }
    };
}
