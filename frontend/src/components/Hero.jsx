import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    // NEXORA letters - Centered cluster with letter drop animation
    const letters = [
        { char: 'N', size: 'clamp(10rem, 24vw, 20rem)', top: '15%', left: '12%', rotate: -5 },
        { char: 'E', size: 'clamp(7rem, 16vw, 12rem)', top: '10%', left: '32%', rotate: 10 },
        { char: 'X', size: 'clamp(9rem, 20vw, 16rem)', top: '32%', left: '22%', rotate: -12 },
        { char: 'O', size: 'clamp(12rem, 28vw, 24rem)', top: '50%', left: '8%', rotate: 0 },
        { char: 'R', size: 'clamp(7rem, 15vw, 11rem)', top: '45%', left: '38%', rotate: 18 },
        { char: 'A', size: 'clamp(9rem, 20vw, 16rem)', top: '72%', left: '26%', rotate: -10 },
    ];

    // Letter drop animation
    const letterVariants = {
        hidden: (i) => ({
            opacity: 0,
            y: -300,
            rotate: (i % 2 === 0 ? -30 : 30),
        }),
        visible: (i) => ({
            opacity: 1,
            y: 0,
            rotate: letters[i].rotate,
            transition: {
                type: 'spring',
                damping: 10,
                stiffness: 50,
                delay: i * 0.08,
            }
        })
    };

    const headlineVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section
            className="relative min-h-screen overflow-hidden"
            style={{
                backgroundColor: 'var(--color-cream)',
                cursor: 'default'
            }}
        >
            {/* NEXORA Letters with Drop Animation */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {letters.map((letter, i) => (
                    <motion.div
                        key={letter.char + i}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={letterVariants}
                        className="absolute"
                        style={{
                            fontSize: letter.size,
                            top: letter.top,
                            left: letter.left,
                            fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                            fontWeight: 900,
                            color: 'var(--color-ink)',
                            lineHeight: 0.8,
                            userSelect: 'none',
                        }}
                    >
                        {letter.char}
                    </motion.div>
                ))}

                {/* ® Symbol */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute"
                    style={{
                        bottom: '15%',
                        left: '45%',
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        fontWeight: 300,
                        color: 'var(--color-ink)',
                    }}
                >
                    ®
                </motion.div>
            </div>

            {/* Headline - Upper Right */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={headlineVariants}
                className="absolute top-32 md:top-40 right-8 md:right-16 lg:right-20 max-w-md z-10"
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
                    height: '3px',
                }}
            />
        </section>
    );
};

export default Hero;
