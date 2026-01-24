'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');
    const locale = useLocale();
    const currentYear = 2025;

    const aiServices = [
        { name: 'ChatGPT', url: 'https://chat.openai.com' },
        { name: 'Gemini', url: 'https://gemini.google.com' },
        { name: 'Claude', url: 'https://claude.ai' },
        { name: 'Perplexity', url: 'https://www.perplexity.ai' },
        { name: 'Cursor', url: 'https://cursor.sh' },
        { name: 'Antigravity', url: 'https://antigravity.ai' },
        { name: 'Claude Code', url: 'https://claude.ai' },
        { name: 'OpenCode', url: 'https://opencode.ai' },
        { name: 'GitHub Copilot', url: 'https://github.com/features/copilot' },
        { name: 'Midjourney', url: 'https://www.midjourney.com' },
        { name: 'Luma Dream Machine', url: 'https://lumalabs.ai' },
        { name: 'Suno', url: 'https://suno.ai' },
        { name: 'ElevenLabs', url: 'https://elevenlabs.io' },
        { name: 'A.dot', url: 'https://a.dot.ai' },
        { name: 'Wrtn', url: 'https://wrtn.ai' },
        { name: 'Zeta', url: 'https://zeta.ai' },
        { name: 'Microsoft Copilot', url: 'https://copilot.microsoft.com' },
        { name: 'Notion AI', url: 'https://www.notion.so/product/ai' },
        { name: 'NotebookLM', url: 'https://notebooklm.google.com' },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-6">
                                <Image
                                    src="/logo.png"
                                    alt="Nexture Labs"
                                    width={180}
                                    height={40}
                                    className="h-8 w-auto"
                                />
                            </div>
                            <p className="text-gray-400 max-w-sm mb-6">
                                {t('tagline')}
                            </p>
                        </motion.div>
                    </div>

                    {/* Company Info */}
                    <div className="lg:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h3 className="font-semibold text-white mb-4">Company Info</h3>
                            <div className="space-y-2 text-gray-400">
                                <p>VERDE : 255-17-02659</p>
                                <p>68, Yeonbuk-ro, Jeju-si, Jeju-do, Republic of Korea</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* AI Services */}
                <div className="mt-8 flex gap-4 flex-wrap justify-center">
                    {aiServices.map((service) => (
                        <a
                            key={service.name}
                            href={service.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={service.name}
                            className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center shadow-sm border border-gray-700 text-gray-400 hover:text-[#7C3AED] hover:bg-gray-700 hover:border-[#7C3AED] hover:scale-110 transition-all duration-300 group"
                        >
                            {service.name === 'ChatGPT' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21.281 2.5c-1.5-1.5-4-1.5-5.5 0L12 6.281 8.219 2.5c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5L6.5 12l-3.781 3.781c-1.5 1.5-1.5 4 0 5.5s4 1.5 5.5 0L12 17.5l3.781 3.781c1.5 1.5 4 1.5 5.5 0s1.5-4 0-5.5L17.5 12l3.781-3.781c1.5-1.5 1.5-4 0-5.5z" />
                                </svg>
                            )}
                            {service.name === 'Gemini' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2c0 5.523 4.477 10 10 10-5.523 0-10 4.477-10 10 0-5.523-4.477-10-10-10 5.523 0 10-4.477 10-10z" />
                                </svg>
                            )}
                            {service.name === 'Claude' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 4L4 20h3.5l1.5-4h6l1.5 4H20L12 4zm-2 10l2-5.5 2 5.5h-4z" />
                                </svg>
                            )}
                            {service.name === 'Perplexity' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zM11 7v6h2V7h-2zm0 8v2h2v-2h-2z" />
                                </svg>
                            )}
                            {service.name === 'Cursor' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7.5 3l0 18l4.5 -4.5l3 7.5l3 -1l-3 -7.5l6 -0.5l-13.5 -12z" />
                                </svg>
                            )}
                            {service.name === 'Antigravity' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 6h2v6h-2V6zm0 8h2v4h-2v-4z" />
                                </svg>
                            )}
                            {service.name === 'Claude Code' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4zM14.5 4.3l-2.9 15.3-1.9-.4 2.9-15.3 1.9.4z" />
                                </svg>
                            )}
                            {service.name === 'OpenCode' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5l-6 7 6 7M16 5l6 7-6 7M13 3l-2 18" />
                                </svg>
                            )}
                            {service.name === 'GitHub Copilot' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-14.5c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5-2.9-6.5-6.5-6.5zM10 10h1v2h-1zM13 10h1v2h-1zM11 14.5a1.5 1.5 0 0 1 2 0" />
                                </svg>
                            )}
                            {service.name === 'Midjourney' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4 14l3.5-3.5L11 14l3.5-3.5L18 14l2-2V4H4v10zm0 6h16v-2l-2-2-3.5 3.5L11 14l-3.5 3.5L4 14v6z" />
                                </svg>
                            )}
                            {service.name === 'Luma Dream Machine' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            )}
                            {service.name === 'Suno' && (
                                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM7 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0zm2 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" />
                                </svg>
                            )}
                            {service.name === 'ElevenLabs' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 4l-1 0c-3.31 0-6 2.69-6 6v4c0 3.31 2.69 6 6 6l1 0c3.31 0 6-2.69 6-6v-4c0-3.31-2.69-6-6-6zM9 10c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
                                </svg>
                            )}
                            {service.name === 'A.dot' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                                </svg>
                            )}
                            {service.name === 'Wrtn' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                                </svg>
                            )}
                            {service.name === 'Zeta' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM15 11l-4 4l-4-4h8z" />
                                </svg>
                            )}
                            {service.name === 'Microsoft Copilot' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 13H9v-2h6v2zm0-4H9V9h6v2z" />
                                </svg>
                            )}
                            {service.name === 'Notion AI' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2c0 5.523 4.477 10 10 10-5.523 0-10 4.477-10 10 0-5.523-4.477-10-10-10 5.523 0 10-4.477 10-10zM5 5l2 2m10 0l-2-2m-8 12l2-2m6 0l2 2" />
                                </svg>
                            )}
                            {service.name === 'NotebookLM' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 16H8v-2h8v2zm0-4H8v-2h8v2zm0-4H8V8h8v2z" />
                                </svg>
                            )}
                        </a>
                    ))}
                </div>

                {/* Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-8 pt-6 border-t border-gray-800"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-400">
                            © {currentYear} {t('copyright')}
                        </p>
                        <div className="flex gap-6">
                            <a
                                href={locale === 'ko' ? '/Privacypolicy_ko.html' : '/Privacypolicy_en.html'}
                                className="text-sm text-gray-400 hover:text-white transition-colors"
                            >
                                {t('privacy')}
                            </a>
                            <a
                                href={locale === 'ko' ? '/Terms_ko.html' : '/Terms_en.html'}
                                className="text-sm text-gray-400 hover:text-white transition-colors"
                            >
                                {t('terms')}
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
