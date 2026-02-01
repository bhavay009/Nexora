import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';

const StarField = (props) => {
    const ref = useRef();
    const sphere = useMemo(() => random.inSphere(new Float32Array(8000), { radius: 1.2 }), []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 20;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#60A5FA"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={2}
                />
            </Points>
        </group>
    );
};

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <StarField />
                </Canvas>
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark/40 to-dark pointer-events-none" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="text-sm font-medium text-accent-blue tracking-wide uppercase">Next Gen Agency</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight">
                        We Build <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 animate-gradient-x">
                            High-Impact
                        </span>{" "}
                        <br />
                        Digital Experiences
                    </h1>
                    <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Elevating brands through premium design, cutting-edge technology, and futuristic interactions.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform duration-300">
                            Get a Website
                        </button>
                        <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 font-medium text-lg transition-colors duration-300 backdrop-blur-sm">
                            View Our Work
                        </button>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-white/50 rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
