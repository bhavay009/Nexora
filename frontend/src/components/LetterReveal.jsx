import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

/**
 * LetterReveal - Premium letter-by-letter scroll reveal animation
 * Uses SplitType to preserve existing HTML structure (like italics/spans)
 */
export const LetterReveal = ({
    children,
    as: Component = 'div',
    className = '',
    style = {},
    stagger = 0.03,
    duration = 0.8,
    ease = 'power3.out',
    start = 'top 85%',
    yOffset = 30,
    delay = 0,
}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Initialize SplitType
        // It automatically handles nested tags and preserves layout
        const text = new SplitType(container, {
            types: 'words,chars',
            tagName: 'span'
        });

        // Set initial state for valid chars (exclude spaces if needed, but GSAP handles it well)
        // We target .char class created by SplitType
        const chars = container.querySelectorAll('.char');

        if (chars.length === 0) return;

        gsap.set(chars, {
            y: yOffset,
            opacity: 0,
        });

        // Animate
        const anim = gsap.to(chars, {
            y: 0,
            opacity: 1,
            duration: duration,
            stagger: stagger,
            ease: ease,
            delay: delay,
            scrollTrigger: {
                trigger: container,
                start: start,
                once: true,
            }
        });

        // Cleanup
        return () => {
            anim.kill();
            ScrollTrigger.getAll().forEach(t => {
                if (t.trigger === container) t.kill();
            });
            // Revert SplitType to restore original DOM
            text.revert();
        };
    }, [children, stagger, duration, ease, start, yOffset, delay]);

    return (
        <Component
            ref={containerRef}
            className={className}
            style={{
                ...style,
                // Ensure kerning and font rendering remains consistent
                fontKerning: 'none',
            }}
        >
            {children}
        </Component>
    );
};

/**
 * RevealParagraph - Word-level reveal for body text
 */
export const RevealParagraph = ({
    children,
    as: Component = 'p',
    className = '',
    style = {},
    stagger = 0.01, // Faster stagger for paragraphs
    duration = 0.6,
    ease = 'power3.out',
    start = 'top 90%',
    yOffset = 20,
}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const text = new SplitType(container, {
            types: 'lines,words',
            tagName: 'span'
        });

        const words = container.querySelectorAll('.word');

        if (words.length === 0) return;

        gsap.set(words, {
            y: yOffset,
            opacity: 0,
        });

        const anim = gsap.to(words, {
            y: 0,
            opacity: 1,
            duration: duration,
            stagger: stagger,
            ease: ease,
            scrollTrigger: {
                trigger: container,
                start: start,
                once: true,
            }
        });

        return () => {
            anim.kill();
            ScrollTrigger.getAll().forEach(t => {
                if (t.trigger === container) t.kill();
            });
            text.revert();
        };
    }, [children, stagger, duration, ease, start, yOffset]);

    return (
        <Component
            ref={containerRef}
            style={style}
        >
            {children}
        </Component>
    );
};

export default LetterReveal;
