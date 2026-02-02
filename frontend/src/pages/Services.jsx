import React from 'react';
import { motion } from 'framer-motion';
import { LetterReveal, RevealParagraph } from '../components/LetterReveal';

const Services = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const services = [
        {
            title: 'Web Development',
            description: 'Blazing fast, secure, and scalable websites built with modern technologies. We prioritize performance and accessibility.',
            tags: ['React', 'Node.js', 'Performance']
        },
        {
            title: 'Landing Pages',
            description: 'High-converting single pages designed to sell your product or service. Clear messaging, strong CTAs.',
            tags: ['Conversion', 'Copywriting', 'Design']
        },
        {
            title: 'UI Implementation',
            description: 'Pixel-perfect implementation of your designs. We take your Figma files and turn them into responsive, interactive code.',
            tags: ['Figma to Code', 'Responsive', 'Animations']
        },
        {
            title: 'Maintenance & Support',
            description: 'We keep your site running smoothly. Updates, backups, bug fixes, and content changes—we handle it all.',
            tags: ['Updates', 'Security', 'Support']
        }
    ];

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
                        Services
                    </p>
                    <LetterReveal
                        as="h1"
                        className="mb-10 uppercase"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'var(--font-size-display)',
                            lineHeight: '0.9',
                            color: 'var(--color-ink)',
                            fontWeight: 900,
                            letterSpacing: '-0.02em'
                        }}
                        stagger={0.03}
                        duration={0.6}
                    >
                        What we DO BEST
                    </LetterReveal>
                    <RevealParagraph
                        as="p"
                        className="text-xl leading-relaxed max-w-2xl mx-auto"
                        style={{ color: 'var(--color-stone)' }}
                        stagger={0.015}
                    >
                        Comprehensive digital solutions tailored to elevate your business.
                    </RevealParagraph>
                </motion.div>
            </section>

            {/* Services List */}
            <section
                className="py-40 px-6 md:px-12 lg:px-24"
                style={{ backgroundColor: 'var(--color-warm)' }}
            >
                <div className="max-w-5xl mx-auto">
                    <div className="space-y-0">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.1 } }
                                }}
                                className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16"
                                style={{ borderTop: '1px solid rgba(107, 107, 107, 0.2)' }}
                            >
                                <div className="md:col-span-1">
                                    <span style={{ color: 'var(--color-stone)' }}>
                                        0{i + 1}
                                    </span>
                                </div>
                                <div className="md:col-span-4">
                                    <h2
                                        className="text-2xl md:text-3xl"
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            color: 'var(--color-ink)'
                                        }}
                                    >
                                        {service.title}
                                    </h2>
                                </div>
                                <div className="md:col-span-7">
                                    <p
                                        className="mb-6 leading-relaxed"
                                        style={{ color: 'var(--color-stone)' }}
                                    >
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {service.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-4 py-2 text-sm"
                                                style={{
                                                    border: '1px solid rgba(107, 107, 107, 0.2)',
                                                    color: 'var(--color-stone)'
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section className="py-40 px-6 md:px-12 lg:px-24">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="mb-24"
                    >
                        <p
                            className="text-xs uppercase tracking-[0.25em] mb-6"
                            style={{ color: 'var(--color-stone)' }}
                        >
                            Process
                        </p>
                        <h2
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                lineHeight: '1.1',
                                color: 'var(--color-ink)'
                            }}
                        >
                            How we work
                        </h2>
                    </motion.div>

                    <div className="space-y-0">
                        {[
                            {
                                step: '01',
                                title: 'Discovery',
                                description: "Understanding your goals, audience, and the problem we're solving together."
                            },
                            {
                                step: '02',
                                title: 'Design',
                                description: 'Creating clear, usable systems that communicate with purpose and precision.'
                            },
                            {
                                step: '03',
                                title: 'Build',
                                description: 'Developing fast, scalable solutions with clean, maintainable code.'
                            },
                            {
                                step: '04',
                                title: 'Refine',
                                description: 'Testing, optimizing, and iterating until everything works seamlessly.'
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={item.step}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }
                                }}
                                className="grid grid-cols-1 md:grid-cols-12 gap-6 py-12"
                                style={{ borderTop: '1px solid rgba(107, 107, 107, 0.2)' }}
                            >
                                <div className="md:col-span-1">
                                    <span style={{ color: 'var(--color-stone)' }}>
                                        {item.step}
                                    </span>
                                </div>
                                <div className="md:col-span-3">
                                    <h3
                                        className="text-xl md:text-2xl"
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            color: 'var(--color-ink)'
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="md:col-span-8">
                                    <p
                                        className="leading-relaxed"
                                        style={{ color: 'var(--color-stone)' }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Best Fit For */}
            <section
                className="py-40 px-6 md:px-12 lg:px-24"
                style={{ backgroundColor: 'var(--color-warm)' }}
            >
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                        >
                            <p
                                className="text-xs uppercase tracking-[0.25em] mb-6"
                                style={{ color: 'var(--color-stone)' }}
                            >
                                Ideal Clients
                            </p>
                            <h2
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                                    lineHeight: '1.1',
                                    color: 'var(--color-ink)'
                                }}
                            >
                                Best fit for
                            </h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                            }}
                            className="space-y-6"
                        >
                            {[
                                'Early-stage startups building their first product',
                                'Founders launching new digital ventures',
                                'Teams who value design and performance equally',
                                'Businesses seeking long-term creative partners'
                            ].map((item, i) => (
                                <p
                                    key={i}
                                    className="text-lg leading-relaxed"
                                    style={{
                                        color: 'var(--color-ink)',
                                        paddingBottom: '1.5rem',
                                        borderBottom: i < 3 ? '1px solid rgba(107, 107, 107, 0.15)' : 'none'
                                    }}
                                >
                                    {item}
                                </p>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What You Get */}
            <section className="py-40 px-6 md:px-12 lg:px-24">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                        >
                            <p
                                className="text-xs uppercase tracking-[0.25em] mb-6"
                                style={{ color: 'var(--color-stone)' }}
                            >
                                Outcomes
                            </p>
                            <h2
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                                    lineHeight: '1.1',
                                    color: 'var(--color-ink)'
                                }}
                            >
                                What you get
                            </h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                            }}
                            className="space-y-6"
                        >
                            {[
                                'Clean, maintainable code you can build on',
                                'Fast-loading, accessible websites',
                                'Clear communication throughout the project',
                                'Scalable foundations for future growth'
                            ].map((item, i) => (
                                <p
                                    key={i}
                                    className="text-lg leading-relaxed"
                                    style={{
                                        color: 'var(--color-ink)',
                                        paddingBottom: '1.5rem',
                                        borderBottom: i < 3 ? '1px solid rgba(107, 107, 107, 0.15)' : 'none'
                                    }}
                                >
                                    {item}
                                </p>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Soft CTA */}
            <section
                className="py-48 px-6 md:px-12 lg:px-24"
                style={{ backgroundColor: 'var(--color-warm)' }}
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2
                        className="mb-8"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            lineHeight: '1.1',
                            color: 'var(--color-ink)'
                        }}
                    >
                        Have a project in mind?
                    </h2>
                    <p
                        className="text-lg mb-12 leading-relaxed"
                        style={{ color: 'var(--color-stone)' }}
                    >
                        We'd love to hear about it. Let's talk about how we can help.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-12 py-5 text-sm uppercase tracking-[0.2em] transition-all hover:opacity-80"
                        style={{
                            backgroundColor: 'var(--color-ink)',
                            color: 'var(--color-cream)'
                        }}
                    >
                        Start a Conversation
                    </a>
                </motion.div>
            </section>

        </main>
    );
};

export default Services;
