import React from 'react';
import { motion } from 'framer-motion';
import Hero3D from './Hero3D';

const Hero = () => {
    // NEXORA letters - Aligned at bottom with drop animation
    const letters = [
        { char: 'N', size: '20vw', left: '2%', rotate: 0 },
        { char: 'E', size: '20vw', left: '18%', rotate: 0 },
        { char: 'X', size: '20vw', left: '34%', rotate: 0 },
        { char: 'O', size: '20vw', left: '50%', rotate: 0 },
        { char: 'R', size: '20vw', left: '66%', rotate: 0 },
        { char: 'A', size: '20vw', left: '82%', rotate: 0 },
    ];

    // Letter drop animation
    const letterVariants = {
        hidden: {
            y: '-100vh',
            opacity: 0
        },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 60,
                mass: 1.2,
                delay: 0.5 + (i * 0.1), // Staggered start after initial load
            }
        })
    };

    const headlineVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section
            className="relative h-[85vh] md:min-h-screen overflow-hidden"
            style={{
                backgroundColor: 'var(--color-cream)',
                cursor: 'default'
            }}
        >
            {/* 3D Digital Core Animation - Centered on Mobile, Top-Left on Desktop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                className="absolute left-1/2 -translate-x-1/2 md:left-[15%] md:translate-x-0"
                style={{
                    top: '20%', // Adjusted for mobile center
                    width: '60vw', // Larger on mobile
                    height: '60vw',
                    maxWidth: '400px',
                    maxHeight: '400px',
                    zIndex: 0
                }}
            >
                <div className="md:hidden w-full h-full">
                    <Hero3D />
                </div>
                <div className="hidden md:block w-full h-full" style={{ width: '30vw', height: '30vw', maxWidth: '400px', maxHeight: '400px' }}>
                    <Hero3D />
                </div>
            </motion.div>

            {/* NEXORA Letters with Drop Animation */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {letters.map((letter, i) => (
                    <motion.div
                        key={letter.char + i}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={letterVariants}
                        className="absolute bottom-[-1vw] md:bottom-[-0.5vw]" // Adjusted to sit flush
                        style={{
                            fontSize: letter.size,
                            left: letter.left,
                            fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                            fontWeight: 900,
                            color: 'var(--color-ink)',
                            lineHeight: 0.8, // Adjusted line height
                            userSelect: 'none',
                            transformOrigin: 'bottom center'
                        }}
                    >
                        {letter.char}
                    </motion.div>
                ))}
            </div>

            {/* Headline - Upper Right */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={headlineVariants}
                className="absolute top-28 md:top-40 right-6 md:right-16 lg:right-20 max-w-md z-10"
            >
                <p
                    className="text-xs uppercase tracking-[0.2em] mb-3"
                    style={{ color: 'var(--color-stone)' }}
                >
                    (We Are)
                </p>
                <h1
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                        color: 'var(--color-ink)',
                        lineHeight: 1.2,
                        fontWeight: 400,
                    }}
                >
                    The digital-first<br />
                    agency for modern<br />
                    brands.
                </h1>
            </motion.div>

            {/* Black underline at bottom */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 w-full origin-left"
                style={{
                    backgroundColor: 'var(--color-ink)',
                    height: '1px', // Thinner line
                }}
            />
        </section>
    );
};

export default Hero;
