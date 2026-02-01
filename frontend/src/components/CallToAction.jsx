import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <section className="py-32 bg-dark relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 w-full h-full bg-gradient-radial from-accent-purple/20 to-transparent opacity-40 pointer-events-none"></div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-5xl md:text-8xl font-heading font-bold mb-8 leading-tight">
                    Let's Build Something <br className="hidden md:block" />
                    <span className="relative inline-block text-white">
                        Extraordinary
                        <motion.svg
                            viewBox="0 0 300 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute -bottom-2 left-0 w-full"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        >
                            <motion.path
                                d="M3 9C55.5 3 189 -3 297 9"
                                stroke="#3B82F6"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </motion.svg>
                    </span>
                </h2>

                <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
                    Ready to transform your digital presence? We are currently accepting new projects.
                </p>

                <Link
                    to="/contact"
                    className="inline-block px-10 py-5 rounded-full bg-white text-black font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
                >
                    Start Your Project
                </Link>
            </div>
        </section>
    );
};

export default CallToAction;
