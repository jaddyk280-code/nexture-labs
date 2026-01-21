'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="relative h-screen flex items-center bg-white overflow-hidden">
            {/* Spline 3D Background - Full Screen */}
            <div className="absolute inset-0 w-full h-full z-0">
                {/* Scale slightly to ensure edges are covered, but keep positioning relatively central so cubes are on the right */}
                <div className="relative w-full h-full scale-[1.1]">
                    <iframe
                        src='https://my.spline.design/animatedclonecube-7LsHWv2BKyhduUaKnVSI4bf3/'
                        frameBorder='0'
                        width='100%'
                        height='100%'
                        className="w-full h-full pointer-events-none"
                        title="Spline 3D Background"
                    />
                </div>
            </div>

            {/* Split Layout Container */}
            <div className="relative z-10 w-full h-full max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 h-full">

                    {/* Left Column: Text Content with Solid Background to mask Spline Text */}
                    {/* bg-white covers the 'QuantumLeap' text from the Spline model */}
                    <div className="flex flex-col justify-center px-6 lg:px-12 bg-white/95 backdrop-blur-sm lg:bg-white lg:backdrop-blur-none h-full shadow-2xl lg:shadow-none">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.1] mb-8 break-keep">
                                {t('headline')}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-medium max-w-lg">
                                {t('subtext')}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <motion.a
                                    href="#work"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white text-lg font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-all"
                                >
                                    {t('ctaPrimary')}
                                </motion.a>
                                <motion.a
                                    href="#work"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center justify-center px-8 py-4 bg-gray-50 text-gray-900 text-lg font-bold rounded-xl border border-gray-200 hover:bg-gray-100 transition-all"
                                >
                                    {t('ctaSecondary')}
                                </motion.a>
                            </div>

                            {/* Trust Indicator */}
                            <div className="mt-12 flex items-center gap-4 text-sm text-gray-500 font-medium">
                                <div className="flex -space-x-3">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="w-10 h-10 rounded-full bg-gray-100 border-4 border-white flex items-center justify-center overflow-hidden shadow-sm">
                                            <span className="text-xs text-gray-400">👤</span>
                                        </div>
                                    ))}
                                </div>
                                <span className="text-gray-500">
                                    {t('trust')}
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Transparent to show 3D Cubes */}
                    <div className="hidden lg:block pointer-events-none">
                        {/* The Spline Cubes will be visible here through the transparent background */}
                    </div>
                </div>
            </div>

            {/* Mobile Gradient Overlay for better text readability if needed */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent lg:hidden z-[1]" />
        </section>
    );
}
