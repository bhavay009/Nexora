import React from 'react';
import { motion } from 'framer-motion';
import { LetterReveal, RevealParagraph } from './LetterReveal';

const Beyond = () => {
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

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section
            className="min-h-screen flex items-center py-40 px-6 md:px-12 lg:px-24"
            style={{ backgroundColor: 'var(--color-cream)' }}
        >
            <div className="max-w-7xl mx-auto w-full">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-24 md:mb-32"
                >
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
                            What we’re continuously building toward.
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
                </motion.div>

                {/* Capabilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {capabilities.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.8, delay: i * 0.1 }
                                }
                            }}
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

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-32 pt-8 border-t border-black/10"
                >
                    <p className="text-xs uppercase tracking-widest text-center md:text-left" style={{ color: 'var(--color-stone)' }}>
                        Capabilities are introduced selectively, aligned with partner needs and long-term vision.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Beyond;
