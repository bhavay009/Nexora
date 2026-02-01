import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='py-20 border-t border-white/10 bg-dark-accent relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-radial from-accent-purple/5 to-transparent opacity-50 pointer-events-none'></div>
            <div className='container mx-auto px-6 relative z-10'>
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-12'>
                    <div>
                        <h2 className='text-4xl font-heading font-bold mb-4'>Nexora<span className='text-accent-blue'>.</span></h2>
                        <p className='text-muted max-w-sm'>
                            Crafting high-impact digital experiences for forward-thinking brands.
                        </p>
                    </div>
                    <div className='mt-8 md:mt-0 flex flex-col md:items-end'>
                        <span className='text-2xl font-bold mb-2 block'>Ready to start?</span>
                        <Link to='/contact' className='text-accent-blue hover:text-white transition-colors text-lg'>
                            hello@nexora.agency
                        </Link>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center text-sm text-muted pt-8 border-t border-white/5'>
                    <p>&copy; {new Date().getFullYear()} Nexora Agency. All rights reserved.</p>
                    <div className='flex space-x-6 mt-4 md:mt-0'>
                        <a href='#' className='hover:text-white transition-colors'>Twitter</a>
                        <a href='#' className='hover:text-white transition-colors'>Instagram</a>
                        <a href='#' className='hover:text-white transition-colors'>LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
