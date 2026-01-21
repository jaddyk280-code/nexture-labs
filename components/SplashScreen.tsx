'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500); // Wait for exit animation
        }, 3000); // Show splash for 3 seconds

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a] overflow-hidden"
            style={{ fontFamily: "'Outfit', sans-serif" }}
        >
            <div className="w-full h-full bg-gradient-to-br from-[#4c1d95] via-[#7c3aed] to-[#3b82f6] flex items-center justify-center relative overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute rounded-full blur-[80px] opacity-60 w-[800px] h-[800px] bg-[#6d28d9] -top-[200px] -left-[200px]" />
                <div className="absolute rounded-full blur-[80px] opacity-60 w-[600px] h-[600px] bg-[#3b82f6] -bottom-[100px] -right-[100px]" />
                <div className="absolute rounded-full blur-[80px] opacity-30 w-[400px] h-[400px] bg-[#f59e0b] top-[20%] right-[20%]" />

                <div className="z-10 text-center flex flex-col items-center relative">
                    {/* Sound Wave Decoration */}
                    <div className="flex gap-3 h-[120px] items-center mb-10 opacity-80">
                        {[1.2, 1.5, 1.1, 1.3, 1.6, 1.0, 1.4, 1.2, 1.5].map((duration, i) => (
                            <motion.div
                                key={i}
                                className="w-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                                animate={{
                                    height: ["20px", "100px", "20px"],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: duration,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </div>

                    <div className="relative">
                        <h1 className="text-[120px] md:text-[180px] font-bold tracking-[-4px] uppercase m-0 leading-none"
                            style={{
                                background: "linear-gradient(to right, #ffffff, #e0e7ff)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                textShadow: "0 4px 30px rgba(0,0,0,0.3)"
                            }}>
                            SPEECH UP
                        </h1>
                    </div>
                    <div className="relative mt-8 w-fit mx-auto">
                        <div className="text-3xl md:text-5xl font-medium tracking-[4px] text-white opacity-90 shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                            AI SPEECH COACH
                        </div>
                        <div className="absolute -bottom-40 left-[63%] text-white/80 font-medium text-[2.5rem] tracking-wider whitespace-nowrap"
                            style={{ opacity: 0.6 }}>
                            by Nexture Labs
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
