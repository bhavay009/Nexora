import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Magnetic from './Magnetic';

const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled
                ? 'py-4 bg-dark/70 backdrop-blur-xl border-white/10 supports-[backdrop-filter]:bg-dark/60'
                : 'py-6 bg-transparent border-transparent'
                }`}
        >
            <div className='container mx-auto px-6 flex justify-between items-center'>
                <Link to='/' className='text-2xl font-bold font-heading tracking-tighter'>
                    Nexora<span className='text-accent-blue'>.</span>
                </Link>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center space-x-8'>
                    {navLinks.map((link) => (
                        <Magnetic key={link.name}>
                            <Link
                                to={link.path}
                                className='text-sm font-medium hover:text-accent-blue transition-colors px-4 py-2 block relative group'
                            >
                                {link.name}
                                <span className='absolute bottom-1 left-4 w-0 h-0.5 bg-accent-blue transition-all group-hover:w-[calc(100%-2rem)]'></span>
                            </Link>
                        </Magnetic>
                    ))}
                    <Magnetic>
                        <Link
                            to='/contact'
                            className='px-6 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium inline-block'
                        >
                            Let's Talk
                        </Link>
                    </Magnetic>
                </div>

                {/* Mobile Toggle */}
                <button
                    className='md:hidden text-white z-50'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className='fixed inset-0 bg-dark z-40 flex flex-col items-center justify-center space-y-8 md:hidden'
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className='text-3xl font-heading font-medium hover:text-accent-purple transition-colors'
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
