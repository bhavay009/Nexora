import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { LetterReveal, RevealParagraph } from '../components/LetterReveal';


const Home = () => {
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

            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <section
                className="flex items-center py-16 md:py-40 px-6 md:px-12 lg:px-24"
                style={{ backgroundColor: 'var(--color-cream)' }}
            >
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <p
                            className="text-xs uppercase tracking-[0.25em] mb-10"
                            style={{ color: 'var(--color-stone)' }}
                        >
                            About
                        </p>
                        <LetterReveal
                            as="h2"
                            className="mb-12"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: 'var(--font-size-hero)',
                                lineHeight: 'var(--line-height-hero)',
                                color: 'var(--color-ink)'
                            }}
                            stagger={0.03}
                            duration={0.6}
                        >
                            We believe in the power of simplicity
                        </LetterReveal>
                        <RevealParagraph
                            as="p"
                            className="text-xl md:text-2xl leading-relaxed max-w-3xl"
                            style={{ color: 'var(--color-stone)' }}
                            stagger={0.015}
                            duration={0.5}
                        >
                            At Nexora, we strip away the unnecessary to focus on what truly matters. We build digital experiences that are both beautiful and functional, helping forward-thinking brands connect with their audience.
                        </RevealParagraph>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section
                className="flex items-center py-16 md:py-40 px-6 md:px-12 lg:px-24"
                style={{ backgroundColor: 'var(--color-warm)' }}
            >
                <div className="max-w-6xl mx-auto w-full">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <p
                            className="text-xs uppercase tracking-[0.25em] mb-10"
                            style={{ color: 'var(--color-stone)' }}
                        >
                            Services
                        </p>
                        <LetterReveal
                            as="h2"
                            className="mb-20"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: 'var(--font-size-hero)',
                                lineHeight: 'var(--line-height-hero)',
                                color: 'var(--color-ink)'
                            }}
                            stagger={0.04}
                            duration={0.6}
                        >
                            What we do
                        </LetterReveal>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
                        {[
                            { title: 'Web Development', desc: 'Blazing fast, secure, scalable websites built with modern technologies.' },
                            { title: 'Landing Pages', desc: 'High-converting pages designed to sell your product or service.' },
                            { title: 'UI Design', desc: 'Pixel-perfect interfaces that balance aesthetics with usability.' },
                            { title: 'Chatbot Integration', desc: 'AI-powered agents to engage customers and automate support.' },
                        ].map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.8, delay: i * 0.1 }
                                    }
                                }}
                                className="pt-8"
                                style={{ borderTop: '1px solid rgba(107, 107, 107, 0.2)' }}
                            >
                                <h3
                                    className="text-3xl md:text-3xl mb-4"
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                        color: 'var(--color-ink)'
                                    }}
                                >
                                    {service.title}
                                </h3>
                                <p style={{ color: 'var(--color-stone)' }}>
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="flex items-center justify-center py-16 md:py-40 px-6 md:px-12 lg:px-24"
                style={{ backgroundColor: 'var(--color-cream)' }}
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center max-w-4xl mx-auto"
                >
                    <LetterReveal
                        as="h2"
                        className="mb-10"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'var(--font-size-hero)',
                            lineHeight: 'var(--line-height-hero)',
                            color: 'var(--color-ink)'
                        }}
                        stagger={0.03}
                        duration={0.6}
                    >
                        Ready to start your project?
                    </LetterReveal>
                    <p
                        className="text-xl mb-16"
                        style={{ color: 'var(--color-stone)' }}
                    >
                        Let's create something remarkable together.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-12 py-5 text-sm uppercase tracking-[0.2em] transition-all duration-500"
                        style={{
                            backgroundColor: 'var(--color-ink)',
                            color: 'var(--color-cream)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'var(--color-stone)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'var(--color-ink)';
                        }}
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </section>

        </main>
    );
};

export default Home;
