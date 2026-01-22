'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';

export default function FeaturedProject() {
    const t = useTranslations('Projects');
    const tHero = useTranslations('Hero');
    const router = useRouter();

    const benefits = [
        {
            key: 'benefit1',
            icon: (
                <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            )
        },
        {
            key: 'benefit2',
            icon: (
                <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            key: 'benefit3',
            icon: (
                <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        }
    ];

    return (
        <section id="work" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Hero Content (merged from Hero section) */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-gray-900 tracking-tight leading-[1.1] mb-8 break-keep relative inline-block">
                            Speech <span className="relative inline-block">
                                Up
                                <span className="absolute -top-4 -right-4 md:-top-6 md:-right-6 lg:-top-8 lg:-right-8 text-xs md:text-sm lg:text-base font-bold text-white bg-indigo-600 px-2 py-1 md:px-2.5 md:py-1.5 lg:px-3 lg:py-2 rounded-lg shadow-lg transform rotate-12 whitespace-nowrap tracking-wide">
                                    앱 출시
                                </span>
                            </span>
                        </h2>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-[1.1] mb-8 break-keep">
                            {tHero('headline')}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-medium max-w-lg mx-auto">
                            {(() => {
                                const subtext = tHero('subtext');
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

                        <div className="flex flex-wrap gap-4 justify-center mb-12">
                            <motion.a
                                href="/demo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push('/demo');
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center px-8 py-4 bg-gray-50 text-gray-900 text-lg font-bold rounded-xl border border-gray-200 hover:bg-gray-100 transition-all"
                            >
                                {tHero('ctaSecondary')}
                            </motion.a>
                            <motion.a
                                href="https://play.google.com/store/apps/details?id=com.speechup.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white text-lg font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-all"
                            >
                                {tHero('ctaPrimary')}
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
                    >
                        {t('title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>

                {/* Benefits Grid (Quora Card Style) */}
                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={item.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)" }}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-start h-full"
                        >
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {t(`${item.key}.title`)}
                            </h3>
                            <p className="text-gray-500 leading-relaxed">
                                {t(`${item.key}.desc`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
