import { useMemo, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

const LiquidCursor = () => {
    // Mouse position with Spring physics for "liquid" lag/inertia
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Primary spring for the main glow
    const springX = useSpring(mouseX, { stiffness: 60, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 60, damping: 30 });

    // Secondary spring with more "lag" for the trailing water effect
    const trailX = useSpring(mouseX, { stiffness: 30, damping: 40 });
    const trailY = useSpring(mouseY, { stiffness: 30, damping: 40 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Reduce bubble count for major performance boost (40 -> 15)
    const bubbles = useMemo(() => Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        size: Math.random() * 40 + 10,
        delay: Math.random() * 5,
        duration: Math.random() * 5 + 4,
        x: Math.random() * 180 - 90,
        y: Math.random() * 180 - 90,
        drift: Math.random() * 50 - 25
    })), []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
            {/* --- Optimized Single-Layer Liquid Glow --- */}
            <motion.div
                className="absolute inset-0 opacity-40 will-change-transform"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${springX}px ${springY}px,
                            rgba(6, 182, 212, 0.15) 0%,
                            rgba(8, 145, 178, 0.05) 40%,
                            transparent 80%
                        ),
                        radial-gradient(
                            800px circle at ${trailX}px ${trailY}px,
                            rgba(6, 182, 212, 0.1) 0%,
                            transparent 70%
                        )
                    `,
                }}
            />

            {/* --- Efficient Water Particles (Bubbles) --- */}
            <motion.div
                style={{
                    left: springX,
                    top: springY,
                    transform: "translate(-50%, -50%)"
                }}
                className="absolute w-[600px] h-[600px] will-change-transform"
            >
                {bubbles.map((bubble) => (
                    <motion.div
                        key={bubble.id}
                        className="absolute rounded-full border border-white/5 bg-white/5"
                        style={{
                            width: bubble.size,
                            height: bubble.size,
                            left: `calc(50% + ${bubble.x}px)`,
                            top: `calc(50% + ${bubble.y}px)`,
                        }}
                        animate={{
                            y: [0, bubble.drift, 0],
                            x: [0, bubble.drift * 0.4, 0],
                            opacity: [0.03, 0.15, 0.03],
                        }}
                        transition={{
                            duration: bubble.duration,
                            repeat: Infinity,
                            delay: bubble.delay,
                            ease: "linear" // Linear is cheaper than Ease
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default LiquidCursor;
