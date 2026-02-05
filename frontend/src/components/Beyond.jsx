import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LetterReveal, RevealParagraph } from './LetterReveal';
import { useLenis } from './SmoothScroll';

const Beyond = () => {
    const [animationPhase, setAnimationPhase] = useState('idle');
    const [hasPlayed, setHasPlayed] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const sectionRef = useRef(null);
    const contentRef = useRef(null); // Reference to actual content, not section padding
    const lenisRef = useRef(null);
    const scrollLockRef = useRef(false);
    const lenis = useLenis();

    useEffect(() => {
        lenisRef.current = lenis;
    }, [lenis]);

    // Delay observer start
    useEffect(() => {
        const timer = setTimeout(() => setIsReady(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    // Scroll lock
    useEffect(() => {
        const preventScroll = (e) => {
            if (scrollLockRef.current) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        };

        window.addEventListener('wheel', preventScroll, { passive: false, capture: true });
        window.addEventListener('touchmove', preventScroll, { passive: false, capture: true });

        return () => {
            window.removeEventListener('wheel', preventScroll, { capture: true });
            window.removeEventListener('touchmove', preventScroll, { capture: true });
        };
    }, []);

    // IntersectionObserver
    useEffect(() => {
        if (!isReady || hasPlayed) return;
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasPlayed) {
                    setHasPlayed(true);
                    startSequence();
                }
            },
            { threshold: 0.05 } // Trigger when section just starts entering viewport
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, [isReady, hasPlayed]);

    const scrollToSectionTop = useCallback(() => {
        // Scroll to position the BEYOND heading at the top of viewport (below navbar)
        if (contentRef.current) {
            const navbarHeight = 80; // Approximate navbar height
            const rect = contentRef.current.getBoundingClientRect();
            const targetY = window.scrollY + rect.top - navbarHeight;
            window.scrollTo({ top: targetY, behavior: 'instant' });
        }
    }, []);

    const startSequence = useCallback(() => {
        scrollLockRef.current = true;
        if (lenisRef.current) lenisRef.current.stop();
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        // Step 1: Drop overlay
        setAnimationPhase('dropping');

        setTimeout(() => {
            // Step 2: Show text
            setAnimationPhase('showing-text');

            setTimeout(() => {
                // Step 3: Anchor scroll WHILE covered (user won't see jump)
                scrollToSectionTop();

                // Step 4: Start lifting
                setAnimationPhase('lifting');

                setTimeout(() => {
                    // Step 5: Complete
                    setAnimationPhase('done');
                    document.body.style.overflow = '';
                    document.documentElement.style.overflow = '';
                    scrollLockRef.current = false;
                    if (lenisRef.current) lenisRef.current.start();
                }, 500);  // Lift duration (was 1000)
            }, 900);   // Text hold (was 1800)
        }, 400);       // Drop duration (was 800)
    }, [scrollToSectionTop]);

    const capabilities = [
        {
            title: "SEO & Discoverability",
            desc: "Search-first architectures, technical optimization, and long-term SEO strategies built for sustainable visibility and performance."
        },
        {
            title: "Growth & Automation",
            desc: "Automated marketing flows, CRM integrations, analytics pipelines, and internal systems designed to increase efficiency and conversion."
        },
        {
            title: "Startup & Product Consulting",
            desc: "Strategic guidance across product positioning, user engagement, and go-to-market clarity for early-stage and scaling startups."
        },
        {
            title: "Intelligent Engagement Systems",
            desc: "AI-powered personalization, behavior-driven interfaces, and adaptive experiences that respond in real time."
        },
        {
            title: "Scalable Infrastructure",
            desc: "High-performance backend and cloud architectures engineered for reliability, security, and growth."
        }
    ];

    const isOverlayActive = ['dropping', 'showing-text', 'lifting'].includes(animationPhase);
    const isTextVisible = animationPhase === 'showing-text';
    const isLifting = animationPhase === 'lifting';

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex items-center py-40 px-6 md:px-12 lg:px-24 relative"
            style={{ backgroundColor: 'var(--color-cream)' }}
        >
            {/* Overlay */}
            <AnimatePresence>
                {isOverlayActive && (
                    <motion.div
                        key="beyond-overlay"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: isLifting ? 0 : 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{
                            duration: isLifting ? 0.5 : 0.4,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="fixed inset-0 origin-top flex items-center justify-center"
                        style={{ backgroundColor: '#2C2A29', zIndex: 9999 }}
                    >
                        <AnimatePresence>
                            {isTextVisible && (
                                <motion.h2
                                    key="overlay-text"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                    style={{
                                        color: '#FFFFFF',
                                        fontFamily: 'var(--font-heading)',
                                        fontWeight: 700,
                                        fontSize: 'clamp(2rem, 6vw, 4rem)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.2em',
                                        textAlign: 'center',
                                        padding: '0 2rem'
                                    }}
                                >
                                    Features Coming Soon
                                </motion.h2>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Content - ref points here so scroll anchors to actual content */}
            <div
                ref={contentRef}
                className="max-w-7xl mx-auto w-full relative z-10"
                style={{
                    opacity: animationPhase === 'idle' || animationPhase === 'done' ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                }}
            >
                {/* Header */}
                <div className="mb-24 md:mb-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-8 mb-12">
                        <div>
                            <LetterReveal
                                as="h2"
                                className="uppercase"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: 'var(--font-size-hero)',
                                    lineHeight: 'var(--line-height-hero)',
                                    color: 'var(--color-ink)',
                                    fontWeight: 900
                                }}
                                stagger={0.05}
                                duration={0.8}
                            >
                                Beyond
                            </LetterReveal>
                        </div>
                        <p
                            className="text-sm uppercase tracking-[0.2em] mb-2 md:mb-4"
                            style={{ color: 'var(--color-stone)' }}
                        >
                            What we're continuously building toward.
                        </p>
                    </div>

                    <RevealParagraph
                        as="p"
                        className="text-xl md:text-2xl leading-relaxed max-w-4xl"
                        style={{ color: 'var(--color-stone)' }}
                        stagger={0.015}
                        duration={0.6}
                    >
                        Beyond what exists today, Nexora evolves as a living system—expanding its capabilities to support growth, automation, and meaningful engagement for modern startups.
                    </RevealParagraph>
                </div>

                {/* Capabilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {capabilities.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                        >
                            <h3
                                className="text-xl mb-4"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--color-ink)'
                                }}
                            >
                                {item.title}
                            </h3>
                            <p style={{ color: 'var(--color-stone)' }}>
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-32 pt-8 border-t border-black/10">
                    <p className="text-xs uppercase tracking-widest text-center md:text-left" style={{ color: 'var(--color-stone)' }}>
                        Capabilities are introduced selectively, aligned with partner needs and long-term vision.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Beyond;
