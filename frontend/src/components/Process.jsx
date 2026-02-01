import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { num: '01', title: 'Discover', desc: 'We dive deep into your brand, goals, and audience.' },
    { num: '02', title: 'Design', desc: 'Crafting stunning visuals and intuitive user interfaces.' },
    { num: '03', title: 'Develop', desc: 'Clean, efficient code that brings the design to life.' },
    { num: '04', title: 'Launch', desc: 'Testing, optimization, and a flawless go-live strategy.' },
    { num: '05', title: 'Support', desc: 'Ongoing maintenance and growth strategies.' },
];

const Process = () => {
    return (
        <section className="py-24 bg-dark text-white relative">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Our Process</h2>
                    <p className="text-muted max-w-xl text-lg">
                        A proven methodology to take your project from concept to reality.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative z-10 bg-dark md:bg-transparent pt-8 md:pt-0"
                            >
                                <div className="w-24 h-24 rounded-full bg-dark border border-white/10 flex items-center justify-center text-3xl font-bold font-heading mb-6 mx-auto md:mx-0 shadow-[0_0_30px_rgba(59,130,246,0.2)] group hover:border-accent-blue hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all duration-300">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{step.num}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
