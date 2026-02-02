import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

// Create context for Lenis
const LenisContext = createContext(null);

// Hook to access Lenis instance
export const useLenis = () => useContext(LenisContext);

const SmoothScroll = ({ children }) => {
    const [lenis, setLenis] = useState(null);

    useEffect(() => {
        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
            smoothTouch: false,
        });

        setLenis(lenisInstance);

        function raf(time) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenisInstance.destroy();
        };
    }, []);

    return (
        <LenisContext.Provider value={lenis}>
            {children}
        </LenisContext.Provider>
    );
};

export default SmoothScroll;
