import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="min-h-screen bg-dark pt-32 pb-24 px-6">
            <div className="container mx-auto max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-heading font-bold mb-16"
                >
                    We Are Nexora.
                </motion.h1>

                <div className="space-y-24">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="prose prose-lg prose-invert text-xl md:text-2xl leading-relaxed text-muted"
                    >
                        <p className="mb-8">
                            <span className="text-white font-bold">It started with a simple idea:</span> the digital world is cluttered with noise. Too many templates, too little soul.
                        </p>
                        <p>
                            Founded in 2024, Nexora was born to break the mold. We believe that a website shouldn't just be an online brochure—it should be an experience. A journey. A statement.
                        </p>
                    </motion.div>

                    {/* Vision/Mission Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="p-8 border-l-2 border-accent-blue"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                            <p className="text-muted">To redefine the standard of digital presence, making high-end design accessible and scalable for forward-thinking brands.</p>
                        </motion.div>
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="p-8 border-l-2 border-accent-purple"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                            <p className="text-muted">To blend art and engineering, creating digital masterpieces that perform as beautifully as they look.</p>
                        </motion.div>
                    </div>

                    {/* Team/Values Section placeholder */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className='text-4xl font-heading font-bold mb-8'>Core Values</h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {['Innovation First', 'Pixel Perfection', 'User Obsessed'].map((val, i) => (
                                <div key={i} className='bg-white/5 p-6 rounded-xl border border-white/10'>
                                    <h4 className='font-bold text-lg mb-2'>{val}</h4>
                                    <p className='text-sm text-muted'>We never settle for "good enough". Excellence is our baseline.</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
