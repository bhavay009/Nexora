import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Web Design', 'Development', 'Mobile App', 'Branding'];

const projects = [
    { id: 1, title: 'Lumina', category: 'Web Design', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71', size: 'large' },
    { id: 2, title: 'Velos', category: 'Development', image: 'https://images.unsplash.com/photo-1620912189679-0d196f7c5147', size: 'small' },
    { id: 3, title: 'Aura', category: 'Mobile App', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe', size: 'small' },
    { id: 4, title: 'Pulse', category: 'Web Design', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d', size: 'large' },
    { id: 5, title: 'Nebula', category: 'Branding', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f', size: 'small' },
    { id: 6, title: 'Zenith', category: 'Development', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b', size: 'small' },
];

const Work = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

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

            {/* Hero Section */}
            <section className="min-h-[60vh] flex items-center justify-center px-6 md:px-12 lg:px-24 pt-32">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center max-w-4xl"
                >
                    <p
                        className="text-xs uppercase tracking-[0.25em] mb-10"
                        style={{ color: 'var(--color-stone)' }}
                    >
                        Portfolio
                    </p>
                    <h1
                        className="mb-10 uppercase"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'var(--font-size-display)',
                            lineHeight: '0.9',
                            color: 'var(--color-ink)',
                            fontWeight: 900,
                            letterSpacing: '-0.02em'
                        }}
                    >
                        Selected<br />
                        <span className="opacity-70">WORKS</span>
                    </h1>
                </motion.div>
            </section>

            {/* Filters */}
            <section className="px-6 md:px-12 lg:px-24 mb-16">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300 border ${activeCategory === cat
                                ? 'bg-ink text-cream border-ink'
                                : 'bg-transparent text-stone border-stone/30 hover:border-ink hover:text-ink'
                                }`}
                            style={{
                                color: activeCategory === cat ? 'var(--color-cream)' : 'var(--color-stone)',
                                backgroundColor: activeCategory === cat ? 'var(--color-ink)' : 'transparent',
                                borderColor: activeCategory === cat ? 'var(--color-ink)' : 'rgba(107, 107, 107, 0.3)',
                                fontFamily: 'var(--font-body)',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Grid */}
            <section className="px-6 md:px-12 lg:px-24 pb-32">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className={`group relative overflow-hidden ${project.size === 'large' ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square'}`}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${project.image}?q=80&w=1200&auto=format&fit=crop)` }}
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                                    <h3
                                        className="text-3xl md:text-5xl mb-2 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                        style={{ fontFamily: 'var(--font-heading)' }}
                                    >
                                        {project.title}
                                    </h3>
                                    <p
                                        className="text-white/80 uppercase tracking-widest text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75"
                                    >
                                        {project.category}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>
        </main>
    );
};

export default Work;
