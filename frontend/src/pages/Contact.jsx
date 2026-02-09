import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { LetterReveal, RevealParagraph } from '../components/LetterReveal';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');
    const [errors, setErrors] = useState({});

    // Refs for focus management
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;
        let firstErrorField = null;

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Please enter your name.';
            isValid = false;
            if (!firstErrorField) firstErrorField = nameRef;
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Please enter your email address.';
            isValid = false;
            if (!firstErrorField) firstErrorField = emailRef;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
            isValid = false;
            if (!firstErrorField) firstErrorField = emailRef;
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Please enter a message.';
            isValid = false;
            if (!firstErrorField) firstErrorField = messageRef;
        }

        setErrors(newErrors);

        if (firstErrorField) {
            firstErrorField.current.focus();
        }

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setStatus('loading');

        // Use environment variable or fallback to localhost for development
        let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001';
        if (!apiUrl.startsWith('http')) {
            apiUrl = `https://${apiUrl}`;
        }

        try {
            const res = await fetch(`${apiUrl}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                // Auto-reset success state after 2.5 seconds
                setTimeout(() => setStatus('idle'), 2500);
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
                                    +91 7235040768

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
                        style={{ position: 'relative' }}
                    >
                        {/* Success Overlay - Calm Native Style */}
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        backgroundColor: 'var(--color-cream)',
                                        border: '1px solid rgba(107, 107, 107, 0.08)', // Lighter border
                                        borderRadius: '0',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 10,
                                        padding: '3rem'
                                    }}
                                >
                                    {/* Visual Anchor - Refined */}
                                    <motion.div
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: '20px' }} // Slightly shorter
                                        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                        style={{
                                            height: '1px',
                                            backgroundColor: 'var(--color-ink)',
                                            marginBottom: '1.25rem',
                                            opacity: 0.3 // More subtle
                                        }}
                                    />

                                    <motion.p
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                        style={{
                                            color: 'var(--color-ink)',
                                            fontSize: '1rem',
                                            lineHeight: '1.75', // Calmer rhythm
                                            textAlign: 'center',
                                            maxWidth: '280px',
                                            fontWeight: 400,
                                            letterSpacing: '0.01em'
                                        }}
                                    >
                                        We'll get back to you via mail<br />
                                        within 24 hours.
                                    </motion.p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form onSubmit={handleSubmit} noValidate className="space-y-10">
                            <div className="relative">
                                <label
                                    className="block text-xs uppercase tracking-[0.2em] mb-4"
                                    style={{ color: 'var(--color-stone)' }}
                                >
                                    Name
                                </label>
                                <input
                                    ref={nameRef}
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent py-4 text-lg focus:outline-none transition-colors"
                                    style={{
                                        borderBottom: `1px solid ${errors.name ? '#A1624E' : 'rgba(107, 107, 107, 0.3)'}`,
                                        color: 'var(--color-ink)'
                                    }}
                                    placeholder="Your name"
                                />
                                <AnimatePresence>
                                    {errors.name && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ color: '#A1624E', fontSize: '0.875rem', marginTop: '0.5rem' }}
                                        >
                                            {errors.name}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                            <div className="relative">
                                <label
                                    className="block text-xs uppercase tracking-[0.2em] mb-4"
                                    style={{ color: 'var(--color-stone)' }}
                                >
                                    Email
                                </label>
                                <input
                                    ref={emailRef}
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent py-4 text-lg focus:outline-none transition-colors"
                                    style={{
                                        borderBottom: `1px solid ${errors.email ? '#A1624E' : 'rgba(107, 107, 107, 0.3)'}`,
                                        color: 'var(--color-ink)'
                                    }}
                                    placeholder="your@email.com"
                                />
                                <AnimatePresence>
                                    {errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ color: '#A1624E', fontSize: '0.875rem', marginTop: '0.5rem' }}
                                        >
                                            {errors.email}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                            <div className="relative">
                                <label
                                    className="block text-xs uppercase tracking-[0.2em] mb-4"
                                    style={{ color: 'var(--color-stone)' }}
                                >
                                    Message
                                </label>
                                <textarea
                                    ref={messageRef}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-transparent py-4 text-lg focus:outline-none transition-colors resize-none"
                                    style={{
                                        borderBottom: `1px solid ${errors.message ? '#A1624E' : 'rgba(107, 107, 107, 0.3)'}`,
                                        color: 'var(--color-ink)'
                                    }}
                                    placeholder="Tell us about your project..."
                                />
                                <AnimatePresence>
                                    {errors.message && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ color: '#A1624E', fontSize: '0.875rem', marginTop: '0.5rem' }}
                                        >
                                            {errors.message}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className="inline-flex items-center gap-3 px-10 py-5 text-sm uppercase tracking-[0.2em] transition-all disabled:opacity-50"
                                style={{
                                    backgroundColor: 'var(--color-ink)',
                                    color: 'var(--color-cream)'
                                }}
                            >
                                {status === 'loading' ? 'Sending...' : <><Send size={18} /> Send Message</>}
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
