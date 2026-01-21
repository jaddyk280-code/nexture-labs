'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
            {/* Subtle gradient background with purple glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-indigo-50/30" />

            {/* Purple glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[100px]" />

            <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
                {/* Centered Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-8"
                    >
                        <span className="w-2 h-2 bg-[#5D3FD3] rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-[#5D3FD3]">{t('badge')}</span>
                    </motion.div>

                    {/* Main Title with Gradient */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
                    >
                        <span className="bg-gradient-to-r from-[#5D3FD3] via-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                            {t('headline1')}
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-[#5D3FD3] via-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                            {t('headline2')}
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
                    >
                        {t('description')}
                    </motion.p>

                    {/* Social Proof */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="flex items-center justify-center gap-4 mb-10"
                    >
                        {/* Avatar Group */}
                        <div className="flex -space-x-3">
                            {[
                                'bg-gradient-to-br from-pink-400 to-rose-500',
                                'bg-gradient-to-br from-blue-400 to-indigo-500',
                                'bg-gradient-to-br from-green-400 to-emerald-500',
                                'bg-gradient-to-br from-yellow-400 to-orange-500',
                                'bg-gradient-to-br from-purple-400 to-violet-500'
                            ].map((gradient, i) => (
                                <div
                                    key={i}
                                    className={`w-10 h-10 rounded-full ${gradient} border-2 border-white shadow-sm flex items-center justify-center text-white text-xs font-medium`}
                                >
                                    {['J', 'M', 'K', 'S', 'L'][i]}
                                </div>
                            ))}
                        </div>

                        {/* Rating */}
                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-sm text-gray-600">{t('socialProof')}</span>
                        </div>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.a
                            href="#work"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#5D3FD3] font-semibold rounded-full border-2 border-[#5D3FD3] hover:bg-indigo-50 transition-colors duration-200"
                        >
                            {t('viewDemo')}
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center px-8 py-4 bg-[#5D3FD3] text-white font-semibold rounded-full hover:bg-[#4C1D95] transition-colors duration-200 shadow-lg shadow-indigo-500/25"
                        >
                            {t('startTrial')}
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
