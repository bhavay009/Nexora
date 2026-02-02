import React, { useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const Counter = ({ value, label }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const springValue = useSpring(0, { bounce: 0, duration: 2000 });
    const rounded = useTransform(springValue, (latest) => Math.floor(latest));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (inView) {
            springValue.set(value);
        }
    }, [inView, value, springValue]);

    useEffect(() => {
        return rounded.on("change", (latest) => {
            setDisplayValue(latest);
        })
    }, [rounded]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-5xl md:text-7xl font-heading font-medium text-charcoal mb-2">
                {displayValue}+
            </div>
            <p className="text-muted text-lg font-body">{label}</p>
        </div>
    );
};

const WhyNexora = () => {
    return (
        <section className="py-24 bg-dark-accent relative overflow-hidden">
            {/* Removed noise mostly, simple gradient if needed */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-medium mb-6 text-charcoal">Why Nexora?</h2>
                    <p className="text-muted max-w-2xl mx-auto text-lg">
                        We don't just build websites; we build digital assets that drive growth.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <Counter value={50} label="Projects Delivered" />
                    <Counter value={98} label="Client Satisfaction" />
                    <Counter value={5} label="Years Experience" />
                    <Counter value={24} label="Hours Support" />
                </div>
            </div>
        </section>
    );
};

export default WhyNexora;
