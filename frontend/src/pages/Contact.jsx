import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { LetterReveal, RevealParagraph } from '../components/LetterReveal';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <main style={{ backgroundColor: 'var(--color-cream)' }}>
            <section className="min-h-screen flex items-center py-40 px-6 md:px-12 lg:px-24">
                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-24">

                    {/* Left - Info */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <p
                            className="text-xs uppercase tracking-[0.25em] mb-10"
                            style={{ color: 'var(--color-stone)' }}
                        >
                            Contact
                        </p>
                        <LetterReveal
                            as="h1"
                            className="mb-10 uppercase"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: 'var(--font-size-display)',
                                lineHeight: '0.9',
                                color: 'var(--color-ink)',
                                fontWeight: 900,
                                letterSpacing: '-0.02em'
                            }}
                            stagger={0.04}
                            duration={0.6}
                        >
                            Let's talk
                        </LetterReveal>
                        <RevealParagraph
                            as="p"
                            className="text-xl leading-relaxed mb-16"
                            style={{ color: 'var(--color-stone)' }}
                            stagger={0.015}
                        >
                            Ready to start your project? Send us a message and we'll get back to you within 24 hours.
                        </RevealParagraph>

                        <div className="space-y-8">
                            <div>
                                <p
                                    className="text-xs uppercase tracking-[0.2em] mb-2"
                                    style={{ color: 'var(--color-stone)' }}
                                >
                                    Email
                                </p>
                                <p className="text-lg" style={{ color: 'var(--color-ink)' }}>
                                    nexora.buildweb@gmail.com
                                </p>
                            </div>
                            <div>
                                <p
                                    className="text-xs uppercase tracking-[0.2em] mb-2"
                                    style={{ color: 'var(--color-stone)' }}
                                >
                                    Phone
                                </p>
                                <p className="text-lg" style={{ color: 'var(--color-ink)' }}>
                                    8827815687
                                </p>
                            </div>
                            <div>
                                <p
                                    className="text-xs uppercase tracking-[0.2em] mb-2"
                                    style={{ color: 'var(--color-stone)' }}
                                >
                                    Location
                                </p>
                                <p className="text-lg" style={{ color: 'var(--color-ink)' }}>
                                    Delhi NCR, India
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 1 } }
                        }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div>
                                <label
                                    className="block text-xs uppercase tracking-[0.2em] mb-4"
                                    style={{ color: 'var(--color-stone)' }}
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent py-4 text-lg focus:outline-none transition-colors"
                                    style={{
                                        borderBottom: '1px solid rgba(107, 107, 107, 0.3)',
                                        color: 'var(--color-ink)'
                                    }}
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label
                                    className="block text-xs uppercase tracking-[0.2em] mb-4"
                                    style={{ color: 'var(--color-stone)' }}
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent py-4 text-lg focus:outline-none transition-colors"
                                    style={{
                                        borderBottom: '1px solid rgba(107, 107, 107, 0.3)',
                                        color: 'var(--color-ink)'
                                    }}
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label
                                    className="block text-xs uppercase tracking-[0.2em] mb-4"
                                    style={{ color: 'var(--color-stone)' }}
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-transparent py-4 text-lg focus:outline-none transition-colors resize-none"
                                    style={{
                                        borderBottom: '1px solid rgba(107, 107, 107, 0.3)',
                                        color: 'var(--color-ink)'
                                    }}
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="inline-flex items-center gap-3 px-10 py-5 text-sm uppercase tracking-[0.2em] transition-all disabled:opacity-50"
                                style={{
                                    backgroundColor: 'var(--color-ink)',
                                    color: 'var(--color-cream)'
                                }}
                            >
                                {status === 'loading' ? 'Sending...' :
                                    status === 'success' ? <><CheckCircle size={18} /> Sent</> :
                                        <><Send size={18} /> Send Message</>}
                            </button>

                            {status === 'error' && (
                                <p
                                    className="flex items-center gap-2 text-sm"
                                    style={{ color: '#dc2626' }}
                                >
                                    <AlertCircle size={16} /> Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </motion.div>

                </div>
            </section>
        </main>
    );
};

export default Contact;
