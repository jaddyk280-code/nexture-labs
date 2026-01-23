'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Services() {
    const t = useTranslations('Services');

    return (
        <section id="services" className="py-12 lg:py-16 bg-[#F9FAFB]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-indigo-50 text-[#5D3FD3] text-sm font-medium rounded-full mb-4">
                        {t('badge')}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto whitespace-nowrap">
                        {t('description')}
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* AI Product Design - Large */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 group relative bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-500 overflow-hidden"
                    >
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-50 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />

                        <div className="relative">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#5D3FD3] to-[#6366F1] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/25">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {t('aiProductTitle')}
                            </h3>
                            <p className="text-gray-600 mb-6 max-w-xl">
                                {(() => {
                                    const desc = t('aiProductDescription');
                                    const parts = desc.split('복잡한 문제를');
                                    if (parts.length === 2) {
                                        return (
                                            <>
                                                {parts[0]}복잡한 문제를<br />
                                                {parts[1]}
                                            </>
                                        );
                                    }
                                    return desc;
                                })()}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {[t('aiProductTag1'), t('aiProductTag2'), t('aiProductTag3'), t('aiProductTag4'), t('aiProductTag5')].map((tag) => (
                                    <span key={tag} className="px-4 py-2 bg-gray-50 text-gray-600 text-sm rounded-full border border-gray-100">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Visual element */}
                        <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
                            <svg viewBox="0 0 200 200" fill="none">
                                <circle cx="100" cy="100" r="80" stroke="#5D3FD3" strokeWidth="2" strokeDasharray="8 8" />
                                <circle cx="100" cy="100" r="60" stroke="#5D3FD3" strokeWidth="2" />
                                <circle cx="100" cy="100" r="40" fill="#5D3FD3" fillOpacity="0.1" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* High-performance Mobile Apps */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-50 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />

                        <div className="relative">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {t('mobileTitle')}
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {t('mobileDescription')}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {[t('mobileTag1'), t('mobileTag2'), t('mobileTag3')].map((tag) => (
                                    <span key={tag} className="px-3 py-1.5 bg-gray-50 text-gray-600 text-sm rounded-full border border-gray-100">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Scalable Infrastructure */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-emerald-50 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />

                        <div className="relative">
                            <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/25">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {t('infraTitle')}
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {t('infraDescription')}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {[t('infraTag1'), t('infraTag2'), t('infraTag3')].map((tag) => (
                                    <span key={tag} className="px-3 py-1.5 bg-gray-50 text-gray-600 text-sm rounded-full border border-gray-100">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* AI Consulting - Full width on mobile, half on larger */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-2 group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-10 overflow-hidden"
                    >
                        {/* Grid background */}
                        <div
                            className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                                backgroundSize: '40px 40px'
                            }}
                        />

                        <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
                            <div className="flex-1">
                                <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {t('consultingTitle')}
                                </h3>
                                <p className="text-gray-400 mb-6 max-w-lg">
                                    {t('consultingDescription')}
                                </p>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 text-white font-medium group/link"
                                >
                                    {t('consultingCta')}
                                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>

                            <div className="flex-shrink-0">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                                        <p className="text-2xl font-bold text-white">50+</p>
                                        <p className="text-xs text-gray-400">{t('projects')}</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                                        <p className="text-2xl font-bold text-white">98%</p>
                                        <p className="text-xs text-gray-400">{t('successRate')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
