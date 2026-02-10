import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer
            className="py-16 md:py-24 px-6 md:px-12"
            style={{
                backgroundColor: 'var(--color-cream)',
                borderTop: '1px solid var(--color-warm)'
            }}
        >
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-16 md:mb-24">

                    {/* Brand */}
                    <div>
                        <h3
                            className="text-3xl mb-6"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--color-ink)'
                            }}
                        >
                            Nexora
                        </h3>
                        <p style={{ color: 'var(--color-stone)' }}>
                            Digital agency crafting experiences that matter.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4
                            className="text-xs uppercase tracking-[0.2em] mb-6"
                            style={{ color: 'var(--color-stone)' }}
                        >
                            Navigation
                        </h4>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Services', 'Contact'].map((item) => (
                                <li key={item}>
                                    <NavLink
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="transition-opacity hover:opacity-60"
                                        style={{ color: 'var(--color-ink)' }}
                                    >
                                        {item}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4
                            className="text-xs uppercase tracking-[0.2em] mb-6"
                            style={{ color: 'var(--color-stone)' }}
                        >
                            Contact
                        </h4>
                        <ul className="space-y-4" style={{ color: 'var(--color-ink)' }}>
                            <li>nexora.buildweb@gmail.com</li>
                            <li>Delhi NCR, India</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div
                    className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
                    style={{ borderTop: '1px solid var(--color-warm)' }}
                >
                    <p className="text-sm" style={{ color: 'var(--color-stone)' }}>
                        © {new Date().getFullYear()} Nexora. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm" style={{ color: 'var(--color-stone)' }}>
                        <a href="#" className="hover:opacity-70 transition-opacity">Privacy</a>
                        <a href="#" className="hover:opacity-70 transition-opacity">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
