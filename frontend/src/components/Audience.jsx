import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Rocket, Briefcase, User } from 'lucide-react';

const Audience = () => {
    return (
        <section className="py-24 bg-dark relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-medium mb-6 text-charcoal">Who We Work With</h2>
                    <p className="text-muted max-w-2xl mx-auto text-lg">
                        We specialize in helping these specific partners succeed online.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { icon: Coffee, title: "Cafes & Restaurants" },
                        { icon: Rocket, title: "Early-stage Startups" },
                        { icon: Briefcase, title: "Small Businesses" },
                        { icon: User, title: "Personal Brands" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center gap-4 text-center group"
                        >
                            <div className="w-16 h-16 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal group-hover:bg-charcoal group-hover:text-white transition-all duration-300">
                                <item.icon size={28} />
                            </div>
                            <span className="font-medium text-lg text-charcoal">{item.title}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Audience;
