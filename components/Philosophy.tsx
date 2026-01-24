'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Philosophy() {
    const t = useTranslations('Philosophy');

    const values = [
        {
            title: t('transparencyTitle'),
            description: t('transparencyDescription'),
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
        },
        {
            title: t('qualityTitle'),
            description: t('qualityDescription'),
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
        },
        {
            title: t('partnershipTitle'),
            description: t('partnershipDescription'),
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="philosophy" className="py-12 lg:py-16 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[800px] h-[800px] bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-indigo-50 text-[#5D3FD3] text-sm font-medium rounded-full mb-8">
                            {t('badge')}
                        </span>
                    </motion.div>

                    <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="relative"
                    >
                        {/* Quote marks */}
                        <svg
                            className="absolute -top-12 -left-4 w-16 h-16 text-indigo-100"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                        >
                            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                        </svg>

                        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                            {t('quote1')}{' '}
                            <span className="text-[#5D3FD3]">{t('quote2').replace(/\.$/, '')}</span>
                            <svg
                                className="inline-block w-16 h-16 text-indigo-100 ml-2 -mb-2"
                                fill="currentColor"
                                viewBox="0 0 32 32"
                            >
                                <path d="M22 24c3.3 0 6-2.7 6-6V8h-10v10h8c0 2.2-1.8 4-4 4v2zm-14 0c3.3 0 6-2.7 6-6V8H4v10h8c0 2.2-1.8 4-4 4v2z" />
                            </svg>
                        </p>
                    </motion.blockquote>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
                    >
                        {(() => {
                            const description = t('description');
                            if (description.includes('집중합니다.')) {
                                const parts = description.split('집중합니다.');
                                return (
                                    <>
                                        {parts[0]}집중합니다.
                                        <br />
                                        {parts[1]}
                                    </>
                                );
                            }
                            return description;
                        })()}
                    </motion.p>

                    {/* Values */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                className="group bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-500"
                            >
                                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100 text-[#5D3FD3]">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-base">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
