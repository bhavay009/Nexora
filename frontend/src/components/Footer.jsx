import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='border-t border-white/10 bg-dark pt-24 pb-12 relative overflow-hidden'>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>

            <div className='container mx-auto px-6'>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-12 mb-24'>
                    {/* Brand Column */}
                    <div className='md:col-span-5'>
                        <Link to="/" className='text-3xl font-heading font-bold tracking-tighter mb-6 block'>
                            Nexora<span className='text-accent-blue'>.</span>
                        </Link>
                        <p className='text-muted text-lg max-w-sm leading-relaxed mb-8'>
                            We build digital products that define the future. Blending art, code, and strategy to elevate forward-thinking brands.
                        </p>
                        <div className='flex items-center gap-4'>
                            <a href='#' className='w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group'>
                                <Twitter size={18} />
                            </a>
                            <a href='#' className='w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group'>
                                <Instagram size={18} />
                            </a>
                            <a href='#' className='w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group'>
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Sitemap Columns */}
                    <div className='md:col-span-2'>
                        <h4 className='font-bold mb-6 text-white'>Sitemap</h4>
                        <ul className='space-y-4'>
                            <li><Link to='/' className='text-muted hover:text-accent-blue transition-colors'>Home</Link></li>
                            <li><Link to='/services' className='text-muted hover:text-accent-blue transition-colors'>Services</Link></li>
                            <li><Link to='/work' className='text-muted hover:text-accent-blue transition-colors'>Work</Link></li>
                            <li><Link to='/about' className='text-muted hover:text-accent-blue transition-colors'>About</Link></li>
                        </ul>
                    </div>

                    <div className='md:col-span-2'>
                        <h4 className='font-bold mb-6 text-white'>Services</h4>
                        <ul className='space-y-4'>
                            <li className='text-muted hover:text-accent-blue transition-colors cursor-pointer'>Web Design</li>
                            <li className='text-muted hover:text-accent-blue transition-colors cursor-pointer'>Development</li>
                            <li className='text-muted hover:text-accent-blue transition-colors cursor-pointer'>E-Commerce</li>
                            <li className='text-muted hover:text-accent-blue transition-colors cursor-pointer'>SEO & Marketing</li>
                        </ul>
                    </div>

                    {/* CTA Column */}
                    <div className='md:col-span-3'>
                        <h4 className='font-bold mb-6 text-white'>Let's Work Together</h4>
                        <Link to='/contact' className='group flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-accent-blue/50 bg-white/5 transition-all'>
                            <div>
                                <span className='block text-xs text-muted mb-1'>Start a project</span>
                                <span className='text-lg font-medium group-hover:text-accent-blue transition-colors'>Get in touch</span>
                            </div>
                            <ArrowUpRight className='text-muted group-hover:text-accent-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-sm text-muted'>&copy; {new Date().getFullYear()} Nexora Agency. All rights reserved.</p>
                    <div className='flex gap-8 text-sm text-muted'>
                        <a href='#' className='hover:text-white transition-colors'>Privacy Policy</a>
                        <a href='#' className='hover:text-white transition-colors'>Terms of Service</a>
                    </div>
                </div>

                {/* Big Text Background */}
                <div className='absolute -bottom-20 left-0 w-full overflow-hidden pointer-events-none opacity-5'>
                    <h1 className='text-[15vw] font-bold font-heading text-center leading-none text-white whitespace-nowrap'>
                        NEXORA AGENCY
                    </h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
