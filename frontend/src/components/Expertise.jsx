import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Layout, Smartphone, ShieldCheck, Globe, Bot, TrendingUp, MousePointerClick } from 'lucide-react';

const services = [
    {
        icon: Globe,
        title: 'Search Architecture (GEO & AEO)',
        desc: 'Engineered for the AI era. We build digital ecosystems optimized for Generative Engines and Google to ensure you dominate search results.'
    },
    {
        icon: MousePointerClick,
        title: 'High-Conversion Design',
        desc: 'Aesthetics that perform. We craft psychology-driven interfaces designed to turn passive visitors into high-value clients.'
    },
    {
        icon: Bot,
        title: 'AI & Automation',
        desc: 'Growth on autopilot. We implement intelligent agents and CRM workflows to automate lead capture, retention, and support.'
    },
    {
        icon: TrendingUp,
        title: 'Scalable Infrastructure',
        desc: 'Built for speed and stability. Future-proof systems ensuring your digital presence expands effortlessly as your business grows.'
    },
];

const Expertise = () => {
    return (
        <section className="py-24 bg-dark px-6">
            <div className="container mx-auto max-w-5xl">
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-medium mb-6 text-charcoal"
                    >
                        What We Do
                    </motion.h2>
                    <p className="text-muted text-lg font-body max-w-xl mx-auto">
                        Future-proof digital ecosystems built for visibility and scale.
                    </p>
                </div>

                <div className="space-y-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group border-t border-charcoal/10 pt-12 flex flex-col md:flex-row md:items-start justify-between gap-6"
                        >
                            <div className="md:w-1/3">
                                <span className="text-sm font-body text-muted uppercase tracking-wider mb-2 block">0{index + 1}</span>
                                <h3 className="text-3xl font-heading text-charcoal group-hover:text-accent-blue transition-colors duration-300">
                                    {service.title}
                                </h3>
                            </div>
                            <div className="md:w-1/2">
                                <p className="text-lg text-muted font-body leading-relaxed group-hover:text-charcoal transition-colors duration-300">
                                    {service.desc}
                                </p>
                            </div>
                            <div className="md:w-auto flex justify-end">
                                <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                                    <service.icon className="w-5 h-5 text-accent-blue" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Expertise;
