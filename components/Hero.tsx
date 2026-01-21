'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="relative h-screen flex items-center bg-white overflow-hidden">
            {/* Content Container */}
            <div className="relative z-10 w-full h-full max-w-7xl mx-auto">
                <div className="flex flex-col justify-center items-center px-6 lg:px-12 h-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-gray-900 tracking-tight leading-[1.1] mb-8 break-keep">
                            Speech Up
                        </h2>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-[1.1] mb-8 break-keep">
                            {t('headline')}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-medium max-w-lg mx-auto">
                            {(() => {
                                const subtext = t('subtext');
                                const parts = subtext.split('스피치를');
                                if (parts.length === 2) {
                                    return (
                                        <>
                                            {parts[0]}
                                            <span className="whitespace-nowrap">스피치를</span>
                                            {parts[1]}
                                        </>
                                    );
                                }
                                return subtext;
                            })()}
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
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
                        <div className="mt-12 flex items-center justify-center gap-4 text-sm text-gray-500 font-medium">
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
            </div>
        </section>
    );
}
