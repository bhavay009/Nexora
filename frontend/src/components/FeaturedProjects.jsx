import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: 'Lumina',
        category: 'Fintech Web App',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        tech: ['React', 'Node.js', 'PostgreSQL'],
        year: '2025'
    },
    {
        title: 'Velos',
        category: 'E-Commerce Platform',
        image: 'https://images.unsplash.com/photo-1620912189679-0d196f7c5147?q=80&w=2070&auto=format&fit=crop',
        tech: ['Next.js', 'Shopify', 'GSAP'],
        year: '2024'
    },
    {
        title: 'Aura',
        category: 'AI Startup Landing',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop',
        tech: ['React', 'Three.js', 'Tailwind'],
        year: '2024'
    },
    {
        title: 'Pulse',
        category: 'Health Tech Dashboard',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
        tech: ['Vue', 'Firebase', 'D3.js'],
        year: '2025'
    }
];

const FeaturedProjects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="py-24 bg-dark text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Featured Work</h2>
                        <p className="text-muted max-w-md">
                            A selection of our most recent and impactful projects.
                        </p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 md:mt-0 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
                    >
                        View All Projects <ArrowUpRight size={18} />
                    </motion.button>
                </div>

                <div className="flex flex-col gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Image Background */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${project.image})` }}
                            >
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="px-4 py-1 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10 opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        {project.year}
                                    </span>
                                </div>

                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-4xl md:text-6xl font-heading font-bold mb-2">{project.title}</h3>
                                    <p className="text-xl text-white/80 mb-6">{project.category}</p>

                                    {/* Tech Stack Reveal */}
                                    <div className="flex flex-wrap gap-2 overflow-hidden h-0 group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-white text-black rounded-full text-xs font-bold">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
