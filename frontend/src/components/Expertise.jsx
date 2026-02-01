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
                        <Card key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Card = ({ service, index }) => {
    const mouseX = React.useRef(0);
    const mouseY = React.useRef(0);
    const cardRef = React.useRef(null);

    const handleMouseMove = (e) => {
        const { left, top } = cardRef.current.getBoundingClientRect();
        mouseX.current = e.clientX - left;
        mouseY.current = e.clientY - top;
        cardRef.current.style.setProperty('--mouse-x', `${mouseX.current}px`);
        cardRef.current.style.setProperty('--mouse-y', `${mouseY.current}px`);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden group hover:border-white/20 transition-colors duration-500"
        >
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(59, 130, 246, 0.15), transparent 40%)`
                }}
            />

            <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent-blue/20 transition-colors duration-500">
                    <service.icon className="w-7 h-7 text-white group-hover:text-accent-blue transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-accent-blue transition-colors duration-500">
                    {service.title}
                </h3>
                <p className="text-muted leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                    {service.desc}
                </p>
            </div>
        </motion.div>
    );
};


export default Expertise;
