import React from 'react';
import { motion } from 'framer-motion';
import { LetterReveal, RevealParagraph } from '../components/LetterReveal';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

// Project data - real case studies
const projects = [
    {
        id: 1,
        title: 'Dr. Gupta – Shri Ram Dental Care',
        category: 'Healthcare Website',
        description: 'A professional healthcare website designed for a long-established dental clinic. Focused on patient trust, clear service communication, and seamless appointment booking with a clean, medical-grade UI.',
        highlights: ['Patient-first design', 'Clear service structure', 'Appointment-focused UX'],
        image: '/images/doc-gupta.png',
        link: 'https://docgupta.vercel.app/'
    },
    {
        id: 2,
        title: 'Solace',
        category: 'Mental Health Landing Page',
        description: 'A calm and empathetic landing page concept for a mental health support platform. Designed with soft visuals, thoughtful typography, and an emotionally sensitive user experience.',
        highlights: ['Emotion-led UI', 'Minimal, calming design language', 'Story-driven layout'],
        image: '/images/solace.png',
        link: 'https://solace-99aqi8fbz-priyansh-s-projects-eb60a61d.vercel.app/'
    },
    {
        id: 3,
        title: 'Room Radar',
        category: 'Full Stack Web Application',
        description: 'A room and accommodation discovery platform featuring authentication flows, structured listings, and scalable UI architecture designed for future expansion.',
        highlights: ['Login & auth flows', 'Modular listing system', 'Scalable frontend structure'],
        image: '/images/roomradar.png',
        link: 'https://room-radar-wheat.vercel.app/login'
    },
    {
        id: 4,
        title: 'Big Tree Café',
        category: 'Concept Website / Brand Experience',
        description: 'A visually rich café website designed to showcase ambience, menu highlights, and brand personality. Built with interactive elements and smooth animations to create an immersive browsing experience.',
        highlights: ['Strong visual storytelling', 'Animation-driven UI', 'Brand-focused design'],
        image: '/images/big-tree.png',
        link: 'https://big-tree-cafe.vercel.app/'
    }
];

const Work = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    return (
        <main style={{ backgroundColor: 'var(--color-cream)' }}>

            {/* Hero Section */}
            <section className="min-h-[50vh] flex items-center justify-center px-6 md:px-12 lg:px-24 pt-28 md:pt-40 pb-16 md:pb-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center max-w-4xl"
                >
                    <p
                        className="text-xs uppercase tracking-[0.25em] mb-8"
                        style={{ color: 'var(--color-stone)' }}
                    >
                        Portfolio
                    </p>
                    <h1
                        className="mb-8 uppercase"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                            lineHeight: '0.9',
                            color: 'var(--color-ink)',
                            fontWeight: 900,
                            letterSpacing: '-0.02em'
                        }}
                    >
                        Selected<br />
                        <span className="opacity-70">WORKS</span>
                    </h1>
                    <RevealParagraph
                        as="p"
                        className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
                        style={{
                            color: 'var(--color-stone)',
                            fontFamily: 'var(--font-heading)', // Changed font as requested
                            fontWeight: 300
                        }}
                        stagger={0.01}
                    >
                        A curated selection of digital experiences crafted with a focus on usability, performance, and visual clarity.
                    </RevealParagraph>
                </motion.div>
            </section>

            {/* Case Studies */}
            <section className="px-6 md:px-12 lg:px-24 pb-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="max-w-7xl mx-auto space-y-24 md:space-y-32"
                >
                    {projects.map((project, index) => (
                        <CaseStudyCard
                            key={project.id}
                            project={project}
                            isReversed={index % 2 === 1}
                            index={index}
                        />
                    ))}
                </motion.div>
            </section>

            {/* CTA Section */}
            <section
                className="py-20 md:py-32 px-6 md:px-12 lg:px-24"
                style={{ backgroundColor: 'var(--color-ink)' }}
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2
                        className="mb-6"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            lineHeight: '1.2',
                            color: 'var(--color-cream)',
                            fontWeight: 600,
                        }}
                    >
                        Have a project in mind?
                    </h2>
                    <p
                        className="text-lg mb-12 max-w-xl mx-auto"
                        style={{ color: 'rgba(245, 243, 240, 0.7)' }}
                    >
                        Let's build something thoughtful, functional, and beautifully designed.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:opacity-90"
                            style={{
                                backgroundColor: 'var(--color-cream)',
                                color: 'var(--color-ink)',
                            }}
                        >
                            Start a Project
                            <ArrowUpRight size={18} />
                        </a>
                        <a
                            href="/contact"
                            className="text-sm uppercase tracking-[0.15em] transition-opacity duration-300 hover:opacity-70"
                            style={{ color: 'var(--color-cream)' }}
                        >
                            Contact Nexora
                        </a>
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

// Case Study Card Component
const CaseStudyCard = ({ project, isReversed, index }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1
            }
        }
    };

    const handleImageError = (e) => {
        // Images now exist locally
    };

    return (
        <motion.div
            variants={cardVariants}
            className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}
            style={{ direction: 'ltr' }}
        >
            {/* Image */}
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative overflow-hidden aspect-[4/3] lg:aspect-[16/11] rounded-lg ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
                style={{
                    boxShadow: '0 4px 40px rgba(0, 0, 0, 0.08)',
                    transition: 'box-shadow 0.5s ease, transform 0.5s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
                    e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 40px rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                {/* External link indicator */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={20} style={{ color: 'var(--color-ink)' }} />
                </div>
            </a>

            {/* Content */}
            <div className={`${isReversed ? 'lg:order-1 lg:text-right' : 'lg:order-2'}`}>
                <p
                    className="text-xs uppercase tracking-[0.2em] mb-4"
                    style={{ color: 'var(--color-stone)' }}
                >
                    {project.category}
                </p>
                <h3
                    className="mb-6"
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                        lineHeight: '1.2',
                        color: 'var(--color-ink)',
                        fontWeight: 600,
                    }}
                >
                    {project.title}
                </h3>
                <p
                    className="text-lg leading-relaxed mb-8"
                    style={{
                        color: 'var(--color-stone)',
                        fontFamily: 'var(--font-heading)', // Consistent with hero description update
                        fontWeight: 300
                    }}
                >
                    {project.description}
                </p>

                {/* Highlights */}
                <ul className={`space-y-3 mb-8 ${isReversed ? 'lg:ml-auto' : ''}`}>
                    {project.highlights.map((highlight, i) => (
                        <li
                            key={i}
                            className={`flex items-center gap-3 text-base ${isReversed ? 'lg:justify-end' : ''}`}
                            style={{
                                color: 'var(--color-ink)',
                                fontFamily: 'var(--font-heading)',
                                fontStyle: 'italic',
                                fontWeight: 400
                            }}
                        >
                            <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: 'var(--color-stone)' }}
                            />
                            {highlight}
                        </li>
                    ))}
                </ul>

                {/* View Project Link */}
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] transition-opacity duration-300 hover:opacity-60 ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                    style={{ color: 'var(--color-ink)' }}
                >
                    View Live Project
                    <ArrowUpRight size={16} />
                </a>
            </div>
        </motion.div>
    );
};

export default Work;
