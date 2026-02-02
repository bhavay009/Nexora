import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { num: '01', title: 'Share Requirements', desc: 'Tell us about your goals, audience, and vision.' },
    { num: '02', title: 'Design & Develop', desc: 'We craft your site with precision and modern tech.' },
    { num: '03', title: 'Review & Launch', desc: 'We refine it together and push it live to the world.' },
];

const Process = () => {
    return (
        <section className="py-24 bg-dark text-charcoal relative">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-heading font-medium mb-6 text-charcoal">How It Works</h2>
                    <p className="text-muted max-w-xl text-lg font-body">
                        A proven methodology to take your project from concept to reality.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-charcoal/10 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative z-10 bg-dark md:bg-transparent pt-8 md:pt-0"
                            >
                                <div className="w-24 h-24 rounded-full bg-dark border border-charcoal/10 flex items-center justify-center text-3xl font-medium font-heading mb-6 mx-auto md:mx-0 group hover:border-accent-blue transition-all duration-300">
                                    <span className="text-charcoal group-hover:text-accent-blue transition-colors">{step.num}</span>
                                </div>
                                <h3 className="text-xl font-heading font-bold mb-3 text-charcoal">{step.title}</h3>
                                <p className="text-muted text-sm leading-relaxed font-body">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
