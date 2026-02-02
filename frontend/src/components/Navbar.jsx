import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [time, setTime] = useState('');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        // Time update logic
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZone: 'Asia/Kolkata'
            }));
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(timer);
        };
    }, []);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Work', path: '/work' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-cream/95 backdrop-blur-sm' : 'py-8'
                    }`}
                style={{
                    color: 'var(--color-ink)'
                }}
            >
                <div className="max-w-full px-6 md:px-12 flex justify-between items-center relative">

                    {/* Left: Logo */}
                    <NavLink
                        to="/"
                        className="text-2xl z-20"
                        style={{
                            fontFamily: 'Reckless, "Reckless Fallback"',
                            fontStyle: 'normal',
                            lineHeight: 1.5,
                            fontWeight: 900,
                            color: 'rgb(34, 31, 32)'
                        }}
                    >
                        NEXORA
                    </NavLink>

                    {/* Center: Nav Links (Desktop) */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 lg:gap-12">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className="text-xs uppercase tracking-[0.15em] transition-opacity hover:opacity-60 font-medium"
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right: Time / Mobile Menu Toggle */}
                    <div className="flex items-center gap-4 z-20">
                        {/* Time Display */}
                        <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest font-medium">
                            <span>DEL</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span>{time}</span>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span className="text-sm uppercase tracking-widest font-bold">
                                {menuOpen ? 'Close' : 'Menu'}
                            </span>
                        </button>
                    </div>

                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10"
                        style={{ backgroundColor: 'var(--color-cream)' }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <NavLink
                                    to={link.path}
                                    className="text-4xl hover:opacity-60 transition-opacity"
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                    }}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
