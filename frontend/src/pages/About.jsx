import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <main style={{ backgroundColor: 'var(--color-cream)' }}>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center max-w-4xl"
                >
                    <p
                        className="text-xs uppercase tracking-[0.25em] mb-10"
                        style={{ color: 'var(--color-stone)' }}
                    >
                        About Us
                    </p>
                    <h1
                        className="mb-10 uppercase"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'var(--font-size-display)',
                            lineHeight: '0.9',
                            color: 'var(--color-ink)',
                            fontWeight: 900,
                            letterSpacing: '-0.02em'
                        }}
                    >
                        We build websites<br />
                        <span className="opacity-70">THAT WORK</span>
                    </h1>
                    <p
                        className="text-xl leading-relaxed max-w-2xl mx-auto"
                        style={{ color: 'var(--color-stone)' }}
                    >
                        Technology should be invisible. We focus on outcomes, not complexity.
                    </p>
                </motion.div>
            </section>

            {/* Philosophy */}
            <section
                className="py-40 px-6 md:px-12 lg:px-24"
                style={{ backgroundColor: 'var(--color-warm)' }}
            >
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <h2
                            className="mb-16 uppercase"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: 'var(--font-size-hero)',
                                lineHeight: 'var(--line-height-hero)',
                                color: 'var(--color-ink)',
                                fontWeight: 900
                            }}
                        >
                            Our philosophy
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                            {[
                                { title: 'Simplicity', desc: 'We strip away the unnecessary to focus on what matters.' },
                                { title: 'Transparency', desc: 'Clear communication from day one to launch.' },
                                { title: 'Results', desc: 'We build effective tools, not just pretty pictures.' }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.8 } }
                                    }}
                                    className="pt-8"
                                    style={{ borderTop: '1px solid rgba(107, 107, 107, 0.2)' }}
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
                    </motion.div>
                </div>
            </section>

            {/* Statement */}
            <section className="py-40 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <p
                            className="text-2xl md:text-3xl leading-relaxed"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--color-ink)'
                            }}
                        >
                            At Nexora, we believe technology should be silent. We don't just write code;
                            we solve problems. We treat your business like our own—no jargon, no hidden fees,
                            just solid engineering and clean design.
                        </p>
                    </motion.div>
                </div>
            </section>

        </main>
    );
};

export default About;
