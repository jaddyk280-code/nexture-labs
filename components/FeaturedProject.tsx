'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function FeaturedProject() {
    const t = useTranslations('FeaturedProject');

    return (
        <section id="work" className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#1E40AF] text-sm font-medium rounded-full mb-4">
                        {t('badge')}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-3">
                        {t('title')}
                    </h2>
                    <p className="text-xl md:text-2xl font-semibold text-[#1E40AF] mb-4">
                        — {t('subtitle')}
                    </p>
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full border border-green-100">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {t('accuracyBadge')}
                        </span>
                    </div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </motion.div>

                {/* Problem - Solution - Impact */}
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Problem */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative bg-[#F9FAFB] rounded-3xl p-8 lg:p-10"
                    >
                        <div className="absolute -top-4 left-8 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                            <span className="text-red-600 font-bold text-sm">1</span>
                        </div>
                        <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">
                            {t('problemBadge')}
                        </h3>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                            {t('problemTitle')}
                        </h4>
                        <p className="text-gray-600 mb-6">
                            {t('problemDescription')}
                        </p>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">75%</p>
                                    <p className="text-sm text-gray-500">{t('fearStat')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-3xl p-8 lg:p-10 text-white"
                    >
                        <div className="absolute -top-4 left-8 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <span className="text-[#1E40AF] font-bold text-sm">2</span>
                        </div>
                        <h3 className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-3">
                            {t('solutionBadge')}
                        </h3>
                        <h4 className="text-xl font-bold mb-4">
                            {t('solutionTitle')}
                        </h4>
                        <p className="text-blue-100 mb-6">
                            {t('solutionDescription')}
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-sm">{t('feature1')}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-sm">{t('feature2')}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-sm">{t('feature3')}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Impact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative bg-[#F9FAFB] rounded-3xl p-8 lg:p-10"
                    >
                        <div className="absolute -top-4 left-8 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 font-bold text-sm">3</span>
                        </div>
                        <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-3">
                            {t('impactBadge')}
                        </h3>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                            {t('impactTitle')}
                        </h4>
                        <p className="text-gray-600 mb-6">
                            {t('impactDescription')}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                                <p className="text-2xl font-bold text-[#1E40AF]">87%</p>
                                <p className="text-xs text-gray-500">{t('avgImprovement')}</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                                <p className="text-2xl font-bold text-[#1E40AF]">{t('weeks')}</p>
                                <p className="text-xs text-gray-500">{t('toSeeResults')}</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                                <p className="text-2xl font-bold text-[#1E40AF]">10K+</p>
                                <p className="text-xs text-gray-500">{t('activeUsers')}</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                                <p className="text-2xl font-bold text-[#1E40AF]">4.8★</p>
                                <p className="text-xs text-gray-500">{t('appRating')}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* App Screenshots */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-20"
                >
                    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-16 overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8">
                            {/* Screen 1 */}
                            <div className="w-[200px] bg-gray-900 rounded-[2rem] p-2 shadow-2xl">
                                <div className="bg-white rounded-[1.5rem] overflow-hidden">
                                    <div className="bg-[#1E40AF] px-4 py-6 text-center">
                                        <p className="text-white text-xs font-medium">{t('dailyPractice')}</p>
                                        <p className="text-white text-3xl font-bold mt-1">24:35</p>
                                        <p className="text-blue-200 text-xs mt-1">{t('totalTimeToday')}</p>
                                    </div>
                                    <div className="p-4 space-y-3">
                                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full w-[85%] bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-full" />
                                        </div>
                                        <p className="text-xs text-gray-500 text-center">{t('dailyGoal')}: 85%</p>
                                    </div>
                                </div>
                            </div>

                            {/* Screen 2 - Main */}
                            <div className="w-[240px] bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl -mt-8 md:mt-0 z-10">
                                <div className="bg-white rounded-[2rem] overflow-hidden">
                                    <div className="px-5 py-6">
                                        <div className="flex items-center justify-between mb-6">
                                            <div>
                                                <p className="text-gray-500 text-xs">{t('welcomeBack')}</p>
                                                <p className="text-gray-900 font-semibold">John</p>
                                            </div>
                                            <div className="w-10 h-10 bg-gray-100 rounded-full" />
                                        </div>
                                        <div className="bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-2xl p-5 text-white mb-5">
                                            <p className="text-blue-200 text-xs mb-1">{t('overallScore')}</p>
                                            <p className="text-4xl font-bold">87<span className="text-lg">/100</span></p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-gray-50 rounded-xl p-3 text-center">
                                                <p className="text-lg font-bold text-gray-900">92%</p>
                                                <p className="text-xs text-gray-500">{t('clarity')}</p>
                                            </div>
                                            <div className="bg-gray-50 rounded-xl p-3 text-center">
                                                <p className="text-lg font-bold text-gray-900">85%</p>
                                                <p className="text-xs text-gray-500">{t('pace')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Screen 3 */}
                            <div className="w-[200px] bg-gray-900 rounded-[2rem] p-2 shadow-2xl">
                                <div className="bg-white rounded-[1.5rem] overflow-hidden">
                                    <div className="px-4 py-4">
                                        <p className="text-gray-900 font-semibold text-sm mb-3">{t('recentSessions')}</p>
                                        <div className="space-y-2">
                                            {[92, 87, 85, 88].map((score, i) => (
                                                <div key={i} className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2">
                                                    <span className="text-xs text-gray-500">{t('session')} {4 - i}</span>
                                                    <span className="text-sm font-semibold text-[#1E40AF]">{score}%</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
