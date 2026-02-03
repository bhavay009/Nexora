
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const DigitalCore = () => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.5;
            meshRef.current.rotation.y += delta * 0.6;
        }
    });

    return (
        <Float speed={4} rotationIntensity={1.5} floatIntensity={1.5}>
            <mesh ref={meshRef} scale={2}>
                <icosahedronGeometry args={[1, 0]} />
                <meshBasicMaterial
                    color="black"
                    wireframe
                    transparent
                    opacity={0.4}
                />
            </mesh>
            {/* Inner solid core for depth */}
            <mesh scale={1}>
                <icosahedronGeometry args={[1, 0]} />
                <meshBasicMaterial color="#1a1614" transparent opacity={0.6} />
            </mesh>
        </Float>
    );
};

const Hero3D = () => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true }}>
                <DigitalCore />
            </Canvas>
        </div>
    );
};

export default Hero3D;
