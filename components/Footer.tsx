'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');
    const locale = useLocale();
    const currentYear = 2025;

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
                    {[
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
                    ].map((service) => (
                        <a
                            key={service.name}
                            href={service.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={service.name}
                            className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center shadow-sm border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700 hover:border-gray-600 transition-all"
                        >
                            {service.name === 'ChatGPT' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21.281 2.5c-1.5-1.5-4-1.5-5.5 0L12 6.281 8.219 2.5c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5L6.5 12l-3.781 3.781c-1.5 1.5-1.5 4 0 5.5s4 1.5 5.5 0L12 17.5l3.781 3.781c1.5 1.5 4 1.5 5.5 0s1.5-4 0-5.5L17.5 12l3.781-3.781c1.5-1.5 1.5-4 0-5.5z"/>
                                </svg>
                            )}
                            {service.name === 'Gemini' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            )}
                            {service.name === 'Claude' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            )}
                            {service.name === 'Perplexity' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            )}
                            {service.name === 'Cursor' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 3l18 18M7 3l14 14M3 7l14 14"/>
                                </svg>
                            )}
                            {service.name === 'Antigravity' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            )}
                            {service.name === 'Claude Code' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 3L2 12l6 9M16 3l6 9-6 9M14 3l-4 18"/>
                                </svg>
                            )}
                            {service.name === 'OpenCode' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 3L2 12l6 9M16 3l6 9-6 9M14 3l-4 18"/>
                                </svg>
                            )}
                            {service.name === 'GitHub Copilot' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            )}
                            {service.name === 'Midjourney' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                </svg>
                            )}
                            {service.name === 'Luma Dream Machine' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            )}
                            {service.name === 'Suno' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 3v18M3 12h18"/>
                                </svg>
                            )}
                            {service.name === 'ElevenLabs' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            )}
                            {service.name === 'A.dot' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10"/>
                                </svg>
                            )}
                            {service.name === 'Wrtn' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            )}
                            {service.name === 'Zeta' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            )}
                            {service.name === 'Microsoft Copilot' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            )}
                            {service.name === 'Notion AI' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4.459 4.208c.746.606 1.026.56 2.547.56l13.988 0v1.365L7.006 6.133v13.702l13.988 0v1.365l-13.988 0L4.459 21.792v-17.584z"/>
                                </svg>
                            )}
                            {service.name === 'NotebookLM' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
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
                            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                                {t('terms')}
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
