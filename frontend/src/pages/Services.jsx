import React from 'react';
import { motion } from 'framer-motion';

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
                        What we<br />
                        <span className="opacity-70">DO BEST</span>
                    </h1>
                    <p
                        className="text-xl leading-relaxed max-w-2xl mx-auto"
                        style={{ color: 'var(--color-stone)' }}
                    >
                        Comprehensive digital solutions tailored to elevate your business.
                    </p>
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

            {/* CTA */}
            <section className="py-40 px-6 md:px-12 lg:px-24">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2
                        className="mb-10"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'var(--font-size-hero)',
                            lineHeight: 'var(--line-height-hero)',
                            color: 'var(--color-ink)'
                        }}
                    >
                        Have a project in mind?
                    </h2>
                    <a
                        href="/contact"
                        className="inline-block px-12 py-5 text-sm uppercase tracking-[0.2em] transition-all"
                        style={{
                            backgroundColor: 'var(--color-ink)',
                            color: 'var(--color-cream)'
                        }}
                    >
                        Get Started
                    </a>
                </motion.div>
            </section>

        </main>
    );
};

export default Services;
