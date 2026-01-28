import React, { useEffect, useRef, useLayoutEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollLayoutProps {
    children: React.ReactNode;
}

const SmoothScrollLayout: React.FC<SmoothScrollLayoutProps> = ({ children }) => {
    const lenisRef = useRef<Lenis | null>(null);

    useLayoutEffect(() => {
        // 1. Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false, // Coreografia suave apenas em Desktop
            touchMultiplier: 2,
        } as any);

        lenisRef.current = lenis;

        // 2. Sync GSAP ScrollTrigger with Lenis
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // 3. Cleanup
        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
        };
    }, []);

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                {children}
            </div>
        </div>
    );
};

export default SmoothScrollLayout;
