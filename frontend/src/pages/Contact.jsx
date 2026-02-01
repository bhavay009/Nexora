import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'Website Design',
        budget: '$5k - $10k',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.errors ? data.errors[0].msg : 'Something went wrong');
            }

            setStatus('success');
            setFormData({ name: '', email: '', type: 'Website Design', budget: '$5k - $10k', message: '' });
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <section className="min-h-screen bg-dark pt-32 pb-24 px-6">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Side */}
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-heading font-bold mb-8"
                    >
                        Let's Start a <br /> Conversation.
                    </motion.h1>
                    <p className="text-xl text-muted mb-12 max-w-lg">
                        Ready to take your brand to the next level? Fill out the form and we'll get back to you within 24 hours.
                    </p>
                    <div className="space-y-4 text-lg">
                        <p><span className="text-accent-blue font-bold">Email:</span> hello@nexora.agency</p>
                        <p><span className="text-accent-purple font-bold">Phone:</span> +1 (555) 123-4567</p>
                        <p><span className="text-white/60 font-bold">Location:</span> San Francisco, CA</p>
                    </div>
                </div>

                {/* Form Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted">Project Type</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors text-white"
                                >
                                    <option>Website Design</option>
                                    <option>Development</option>
                                    <option>E-Commerce</option>
                                    <option>SEO & Marketing</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted">Budget</label>
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors text-white"
                                >
                                    <option>$5k - $10k</option>
                                    <option>$10k - $25k</option>
                                    <option>$25k - $50k</option>
                                    <option>$50k+</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted">Message</label>
                            <textarea
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors resize-none"
                                placeholder="Tell us about your project goals..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? (
                                <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            ) : status === 'success' ? (
                                <>Sent Successfully <CheckCircle size={20} /></>
                            ) : (
                                <>Send Message <Send size={20} /></>
                            )}
                        </button>
                        {status === 'error' && <p className="text-red-500 text-center text-sm mt-2 flex items-center justify-center gap-1"><AlertCircle size={16} /> Something went wrong. Try again.</p>}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
