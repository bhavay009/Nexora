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

    return (
        <section className="min-h-screen bg-dark pt-32 pb-24 px-6">
            <div className="container mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-heading font-bold mb-12 text-center"
                >
                    Selected Work
                </motion.h1>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-white text-black border-white'
                                    : 'bg-transparent text-white border-white/20 hover:border-white/50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className={`group relative overflow-hidden rounded-2xl ${project.size === 'large' ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square'}`}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${project.image}?q=80&w=1200&auto=format&fit=crop)` }}
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <h3 className="text-3xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                                    <p className="text-white/80 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Work;
