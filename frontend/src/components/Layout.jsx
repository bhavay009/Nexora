import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
            smoothTouch: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div
            className='antialiased min-h-screen flex flex-col'
            style={{
                backgroundColor: 'var(--color-cream)',
                color: 'var(--color-ink)',
                cursor: 'default'
            }}
        >
            <Navbar />
            <main className='flex-grow'>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
