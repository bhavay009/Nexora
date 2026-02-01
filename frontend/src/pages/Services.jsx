import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
    {
        title: 'Website Design',
        description: 'We craft visually stunning and user-centric designs that tell your brand story. Our approach combines aesthetics with functionality to ensure a seamless user experience.',
        tags: ['UI/UX', 'Wireframing', 'Prototyping', 'Design Systems'],
        color: 'from-blue-500 to-cyan-400'
    },
    {
        title: 'Development',
        description: 'From static sites to complex web applications, we build robust, scalable, and secure digital solutions using the latest technologies.',
        tags: ['React', 'Node.js', 'Next.js', 'API Integration'],
        color: 'from-purple-500 to-pink-500'
    },
    {
        title: 'E-Commerce',
        description: 'Boost your sales with our custom e-commerce solutions. We assist with platform selection, store setup, payment gateway integration, and conversion rate optimization.',
        tags: ['Shopify', 'Woocommerce', 'Custom Solutions', 'Payment Gateways'],
        color: 'from-orange-500 to-red-500'
    },
    {
        title: 'SEO & Marketing',
        description: 'Increase your visibility and reach your target audience. We implement data-driven SEO strategies and digital marketing campaigns to drive organic traffic.',
        tags: ['SEO', 'Content Strategy', 'Analytics', 'Social Media'],
        color: 'from-green-500 to-emerald-500'
    }
];

const ServiceCard = ({ service, index }) => {
    return (
        <div className='sticky top-32 mb-24 last:mb-0'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6 }}
                className='bg-dark'
            >
                <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-16 h-[500px] flex flex-col justify-center'>
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.color} opacity-20 blur-[100px] rounded-full pointer-events-none`}></div>

                    <span className='text-6xl md:text-8xl font-heading font-bold text-white/5 absolute top-8 left-8 select-none'>
                        0{index + 1}
                    </span>

                    <div className='relative z-10'>
                        <h2 className={`text-4xl md:text-5xl font-heading font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                            {service.title}
                        </h2>
                        <p className='text-xl text-muted max-w-2xl mb-10 leading-relaxed'>
                            {service.description}
                        </p>
                        <div className='flex flex-wrap gap-3'>
                            {service.tags.map((tag, i) => (
                                <span key={i} className='px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm md:text-base'>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

const Services = () => {
    return (
        <section className='bg-dark min-h-screen pt-32 pb-24'>
            <div className='container mx-auto px-6'>
                <div className='mb-24 text-center'>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='text-5xl md:text-7xl font-heading font-bold mb-6'
                    >
                        Our Services
                    </motion.h1>
                    <p className='text-xl text-muted max-w-2xl mx-auto'>
                        Comprehensive digital solutions tailored to elevate your business.
                    </p>
                </div>

                <div className='max-w-5xl mx-auto'>
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
