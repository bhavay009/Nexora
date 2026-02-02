import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <section className="py-32 bg-charcoal text-white relative overflow-hidden flex items-center justify-center">

            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-5xl md:text-7xl font-heading font-medium mb-8 text-white">
                    Ready to build <br />
                    <span className="italic font-light text-white/80">your future?</span>
                </h2>

                <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-body">
                    Let's turn your vision into reality. We are ready when you are.
                </p>

                <Link
                    to="/contact"
                    className="inline-block px-10 py-5 rounded-full bg-white text-charcoal font-medium text-xl hover:scale-105 transition-transform duration-300"
                >
                    Start Your Project
                </Link>
            </div>
        </section>
    );
};

export default CallToAction;
