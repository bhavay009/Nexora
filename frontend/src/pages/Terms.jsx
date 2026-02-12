import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
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
                            Terms & Conditions
                        </h1>

                        <div className="space-y-12">
                            {/* 1. Services */}
                            <section>
                                <h2 className="text-xl mb-4 font-bold" style={{ color: 'var(--color-ink)' }}>
                                    1. Services
                                </h2>
                                <p className="leading-relaxed" style={{ color: 'var(--color-stone)' }}>
                                    Nexora provides website design, development, and digital solutions as outlined in written proposals or agreements. The scope of work must be finalized and approved before project initiation.
                                </p>
                            </section>

                            {/* 2. Payment Terms */}
                            <section>
                                <h2 className="text-xl mb-4 font-bold" style={{ color: 'var(--color-ink)' }}>
                                    2. Payment Terms
                                </h2>
                                <div className="space-y-4" style={{ color: 'var(--color-stone)' }}>
                                    <p className="leading-relaxed">
                                        50% of the total project fee is required upfront before work begins.
                                    </p>
                                    <p className="leading-relaxed">
                                        The remaining 50% is due upon project completion and prior to final delivery, deployment, or transfer of files.
                                    </p>
                                    <p className="leading-relaxed">
                                        Work will not commence until the initial payment has been received. Final source files, admin access, or deployment credentials will only be provided after full payment is completed.
                                    </p>
                                </div>
                            </section>

                            {/* 3. Revisions */}
                            <section>
                                <h2 className="text-xl mb-4 font-bold" style={{ color: 'var(--color-ink)' }}>
                                    3. Revisions
                                </h2>
                                <p className="leading-relaxed" style={{ color: 'var(--color-stone)' }}>
                                    Each project includes a defined number of revision rounds as agreed in the proposal. Additional revisions beyond scope may incur additional charges.
                                </p>
                            </section>

                            {/* 4. Project Timelines */}
                            <section>
                                <h2 className="text-xl mb-4 font-bold" style={{ color: 'var(--color-ink)' }}>
                                    4. Project Timelines
                                </h2>
                                <p className="leading-relaxed mb-4" style={{ color: 'var(--color-stone)' }}>
                                    Timelines depend on scope clarity, client responsiveness, and timely content/material submission. Delays in communication may affect delivery dates.
                                </p>
                            </section>

                            {/* 5. Intellectual Property */}
                            <section>
                                <h2 className="text-xl mb-4 font-bold" style={{ color: 'var(--color-ink)' }}>
                                    5. Intellectual Property
                                </h2>
                                <p className="leading-relaxed" style={{ color: 'var(--color-stone)' }}>
                                    Upon full payment, ownership of final approved deliverables transfers to the client. Nexora reserves the right to display completed work in its portfolio unless otherwise agreed in writing.
                                </p>
                            </section>

                            {/* 6. Refund Policy */}
                            <section>
                                <h2 className="text-xl mb-4 font-bold" style={{ color: 'var(--color-ink)' }}>
                                    6. Refund Policy
                                </h2>
                                <p className="leading-relaxed" style={{ color: 'var(--color-stone)' }}>
                                    The initial 50% advance payment is non-refundable once work has commenced. If a project is terminated mid-way, completed work will be billed proportionally.
                                </p>
                            </section>

                            {/* 7. Third-Party Services */}
                            <section>
                                <h2 className="text-xl mb-4 font-bold" style={{ color: 'var(--color-ink)' }}>
                                    7. Third-Party Services
                                </h2>
                                <p className="leading-relaxed" style={{ color: 'var(--color-stone)' }}>
                                    Clients are responsible for domain registration, hosting fees, and third-party software or API subscriptions unless explicitly included in the project agreement.
                                </p>
                            </section>

                            {/* 8. Limitation of Liability */}
                            <section>
                                <h2 className="text-xl mb-4 font-bold" style={{ color: 'var(--color-ink)' }}>
                                    8. Limitation of Liability
                                </h2>
                                <p className="leading-relaxed" style={{ color: 'var(--color-stone)' }}>
                                    Nexora is not liable for third-party service outages, hosting failures, API pricing changes, or indirect business losses.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Terms;
