import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const removeEventListeners = () => {
            window.removeEventListener('mousemove', setCoords);
            document.querySelectorAll('a, button').forEach((el) => {
                el.removeEventListener('mouseenter', () => setHovered(true));
                el.removeEventListener('mouseleave', () => setHovered(false));
            });
        };

        const setCoords = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', setCoords);

        // Re-bind listeners on mutation (a bit hacky but works for SPA)
        // For now, let's just use CSS checks or efficient event delegation if possible, 
        // but a global hook on mouseover is better.

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setHovered(true);
            } else {
                setHovered(false);
            }
        };

        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', setCoords);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className='fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-50 mix-blend-difference'
            animate={{
                x: position.x - 16,
                y: position.y - 16,
                scale: hovered ? 1.5 : 1,
                backgroundColor: hovered ? 'white' : 'transparent',
            }}
            transition={{
                ease: 'linear',
                duration: 0.1, // Smooth lag
            }}
        />
    );
};

export default CustomCursor;
