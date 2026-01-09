'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/30" />

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#1E40AF 1px, transparent 1px), linear-gradient(90deg, #1E40AF 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-8"
                        >
                            <span className="w-2 h-2 bg-[#1E40AF] rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-[#1E40AF]">{t('badge')}</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6"
                        >
                            {t('headline1')}{' '}
                            <span className="text-[#1E40AF]">{t('headline2')}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0"
                        >
                            {t('description')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <motion.a
                                href="#work"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center px-8 py-4 bg-[#1E40AF] text-white font-semibold rounded-full hover:bg-[#1E3A8A] transition-colors duration-200 shadow-lg shadow-blue-500/25"
                            >
                                {t('viewWork')}
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full border-2 border-gray-200 hover:border-gray-300 transition-colors duration-200"
                            >
                                {t('bookCall')}
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* iPhone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Phone Frame */}
                            <div className="relative w-[280px] md:w-[320px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-gray-900/20">
                                {/* Screen */}
                                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                                    {/* Status Bar */}
                                    <div className="flex items-center justify-between px-6 py-3 bg-white">
                                        <span className="text-xs font-medium text-gray-900">9:41</span>
                                        <div className="w-20 h-6 bg-gray-900 rounded-full mx-auto" />
                                        <div className="flex items-center gap-1">
                                            <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* App Content - Speech Up Dashboard */}
                                    <div className="px-5 pb-6 bg-gradient-to-b from-white to-gray-50">
                                        <div className="text-center py-4">
                                            <h3 className="text-lg font-bold text-gray-900">{t('appName')}</h3>
                                            <p className="text-xs text-gray-500">{t('appTagline')}</p>
                                        </div>

                                        {/* Score Card */}
                                        <div className="bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-2xl p-5 mb-4 text-white">
                                            <p className="text-xs opacity-80 mb-1">{t('todayScore')}</p>
                                            <p className="text-4xl font-bold mb-2">87<span className="text-lg font-normal">/100</span></p>
                                            <div className="flex items-center gap-1 text-xs">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span>+12% {t('fromLastWeek')}</span>
                                            </div>
                                        </div>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                                                <p className="text-xs text-gray-500 mb-1">{t('clarity')}</p>
                                                <p className="text-xl font-bold text-gray-900">92%</p>
                                            </div>
                                            <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                                                <p className="text-xs text-gray-500 mb-1">{t('pace')}</p>
                                                <p className="text-xl font-bold text-gray-900">85%</p>
                                            </div>
                                            <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                                                <p className="text-xs text-gray-500 mb-1">{t('fillerWords')}</p>
                                                <p className="text-xl font-bold text-[#1E40AF]">{t('low')}</p>
                                            </div>
                                            <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                                                <p className="text-xs text-gray-500 mb-1">{t('sessions')}</p>
                                                <p className="text-xl font-bold text-gray-900">24</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-4 -right-8 bg-white rounded-2xl p-4 shadow-xl shadow-gray-200/50 border border-gray-100"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-gray-900">{t('greatProgress')}</p>
                                        <p className="text-xs text-gray-500">{t('keepItUp')}</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -bottom-4 -left-8 bg-white rounded-2xl p-4 shadow-xl shadow-gray-200/50 border border-gray-100"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-[#1E40AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-gray-900">{t('aiFeedback')}</p>
                                        <p className="text-xs text-gray-500">{t('realTimeAnalysis')}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
