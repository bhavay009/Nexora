import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <main style={{ backgroundColor: 'var(--color-cream)', minHeight: '100vh' }}>
            <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <p
                            className="text-xs uppercase tracking-[0.25em] mb-8"
                            style={{ color: 'var(--color-stone)' }}
                        >
                            Legal
                        </p>
                        <h1
                            className="text-4xl md:text-5xl mb-16"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--color-ink)',
                                fontWeight: 900
                            }}
                        >
                            Privacy Policy
                        </h1>

                        <div className="space-y-12">
                            {/* 1. Information We Collect */}
                            <section>
                                <h2 className="text-xl mb-4 font-bold" style={{ color: 'var(--color-ink)' }}>
                                    1. Information We Collect
                                </h2>
                                <p className="leading-relaxed mb-4" style={{ color: 'var(--color-stone)' }}>
                                    We may collect:
                                </p>
                                <ul className="list-disc pl-5 space-y-2" style={{ color: 'var(--color-stone)' }}>
                                    <li>Name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Project-related information submitted via contact forms</li>
                                </ul>
                            </section>

                            {/* 2. How We Use Information */}
                            <section>
                                <h2 className="text-xl mb-4 font-bold" style={{ color: 'var(--color-ink)' }}>
                                    2. How We Use Information
                                </h2>
                                <p className="leading-relaxed mb-4" style={{ color: 'var(--color-stone)' }}>
                                    Information is used to:
                                </p>
                                <ul className="list-disc pl-5 space-y-2" style={{ color: 'var(--color-stone)' }}>
                                    <li>Respond to inquiries</li>
                                    <li>Deliver services</li>
                                    <li>Communicate project updates</li>
                                    <li>Improve website experience</li>
                                </ul>
                            </section>

                            {/* 3. Data Protection */}
                            <section>
                                <h2 className="text-xl mb-4 font-bold" style={{ color: 'var(--color-ink)' }}>
                                    3. Data Protection
                                </h2>
                                <p className="leading-relaxed" style={{ color: 'var(--color-stone)' }}>
                                    We do not sell or rent personal information to third parties. Reasonable measures are taken to protect submitted data.
                                </p>
                            </section>

                            {/* 4. Third-Party Tools */}
                            <section>
                                <h2 className="text-xl mb-4 font-bold" style={{ color: 'var(--color-ink)' }}>
                                    4. Third-Party Tools
                                </h2>
                                <p className="leading-relaxed mb-4" style={{ color: 'var(--color-stone)' }}>
                                    We may use third-party services such as hosting providers, analytics tools, and payment processors. These services operate under their own privacy policies.
                                </p>
                            </section>

                            {/* 5. Contact */}
                            <section>
                                <h2 className="text-xl mb-4 font-bold" style={{ color: 'var(--color-ink)' }}>
                                    5. Contact
                                </h2>
                                <p className="leading-relaxed" style={{ color: 'var(--color-stone)' }}>
                                    For privacy-related inquiries, users may contact: <a href="mailto:contact@nexora.in" className="underline hover:text-black transition-colors">contact@nexora.in</a>
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Privacy;
