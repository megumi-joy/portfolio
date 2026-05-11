import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Smart scroll-to-top on route change.
 * - Waits 80ms after navigation
 * - If user already interacted (touch/scroll), cancels auto-scroll
 * - If already at top, skips
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();
    const userInteracted = useRef(false);

    useEffect(() => {
        userInteracted.current = false;

        const onTouch = () => { userInteracted.current = true; };
        const onWheel = () => { userInteracted.current = true; };

        window.addEventListener('touchstart', onTouch, { passive: true, once: true });
        window.addEventListener('wheel', onWheel, { passive: true, once: true });

        const timer = setTimeout(() => {
            if (!userInteracted.current && window.scrollY > 10) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 80);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('touchstart', onTouch);
            window.removeEventListener('wheel', onWheel);
        };
    }, [pathname]);

    return null;
};

export default ScrollToTop;
