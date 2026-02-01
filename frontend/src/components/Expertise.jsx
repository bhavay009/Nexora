import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Layout, Coffee, ShoppingBag, Smartphone, BarChart } from 'lucide-react';

const services = [
    { icon: Layout, title: 'Website Design', desc: 'Award-winning UI/UX that converts visitors into customers.' },
    { icon: Monitor, title: 'Website Development', desc: 'Blazing fast, SEO-optimized code built with modern stacks.' },
    { icon: Coffee, title: 'Café & Restaurant', desc: 'Digital menus and reservations systems for local businesses.' },
    { icon: ShoppingBag, title: 'E-Commerce', desc: 'Scalable online stores that drive sales and engagement.' },
    { icon: Smartphone, title: 'Web Apps', desc: 'Complex functionality wrapped in simple, intuitive interfaces.' },
    { icon: BarChart, title: 'Growth & SEO', desc: 'Data-driven strategies to boost your online visibility.' },
];

const Expertise = () => {
    return (
        <section className="py-24 bg-dark relative z-10">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold mb-6"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted max-w-2xl mx-auto text-lg"
                    >
                        We blend creativity with technology to deliver solutions that stand out.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-purple/50 transition-all duration-300 group cursor-default"
                        >
                            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent-blue/20 transition-colors duration-300">
                                <service.icon className="w-7 h-7 text-white group-hover:text-accent-blue transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-accent-blue transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-muted leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
