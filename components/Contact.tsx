'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Contact() {
    const t = useTranslations('Contact');
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // 이메일 제목과 본문 생성
        const subject = encodeURIComponent(`프로젝트 문의: ${formState.name}`);
        const body = encodeURIComponent(
            `이름: ${formState.name}\n` +
            `이메일: ${formState.email}\n` +
            `회사: ${formState.company || '없음'}\n\n` +
            `메시지:\n${formState.message}`
        );
        
        // mailto 링크 생성
        const mailtoLink = `mailto:jaddyk280@gmail.com?subject=${subject}&body=${body}`;
        
        // 이메일 클라이언트 열기
        window.location.href = mailtoLink;
        
        // 성공 메시지 표시
        setShowSuccess(true);
        
        // 폼 초기화
        setFormState({
            name: '',
            email: '',
            company: '',
            message: '',
        });
        
        // 2초 후 메시지 숨기기
        setTimeout(() => {
            setShowSuccess(false);
        }, 2000);
    };

    return (
        <section id="contact" className="py-12 lg:py-16 bg-[#F9FAFB] relative">
            {/* Success Toast */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-[#5D3FD3] text-white px-6 py-4 rounded-xl shadow-lg"
                    >
                        <p className="text-center font-medium">
                            접수되었습니다. 빠른 시간내에 답변 드리겠습니다
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="max-w-[90rem] mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left side - Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-indigo-50 text-[#5D3FD3] text-sm font-medium rounded-full mb-6">
                            {t('badge')}
                        </span>
                        <h2 className="text-[1.781rem] md:text-[2.138rem] lg:text-[2.85rem] font-bold text-gray-900 mb-6 leading-relaxed">
                            {t('title1')}
                            <br />
                            <span className="text-[#5D3FD3]">{t('title2')}</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-10">
                            {t('description')}
                        </p>

                        {/* Contact info */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                                    <svg className="w-5 h-5 text-[#5D3FD3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">{t('emailLabel')}</p>
                                    <a href="mailto:jaddyk280@gmail.com" className="text-gray-900 font-medium hover:text-[#5D3FD3] transition-colors">
                                        jaddyk280@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* App Download */}
                        <div className="mt-10 pt-10 border-t border-gray-200">
                            <div className="flex flex-row gap-3 items-center justify-center">
                                {/* Google Play Button */}
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-3 bg-gray-900 border border-gray-700 rounded-xl hover:bg-gray-800 transition-all text-white"
                                >
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M14.54,11.15L6.05,2.66L16.81,8.88L14.54,11.15Z"/>
                                    </svg>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] leading-tight text-gray-300">Get it on</span>
                                        <span className="text-sm font-semibold leading-tight">Google Play</span>
                                    </div>
                                </a>

                                {/* App Store Button */}
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-3 bg-gray-900 border border-gray-700 rounded-xl hover:bg-gray-800 transition-all text-white"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.18 5.22 9.5 5.02c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01.01zm-2.87-15.2c.15-1.23 1.17-2.2 2.33-2.38.23 1.67-.64 3.08-1.85 3.94-.28-.38-.6-.75-.97-1.09-.25-.25-.51-.47-.51-.47z"/>
                                    </svg>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] leading-tight text-gray-300">Download on the</span>
                                        <span className="text-sm font-semibold leading-tight">App Store</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="mt-5 pt-10 border-t border-gray-200">
                            <div className="flex gap-4 flex-wrap">
                                {[
                                    { name: 'LinkedIn', url: 'https://www.linkedin.com' },
                                    { name: 'Twitter', url: 'https://twitter.com' },
                                    { name: 'GitHub', url: 'https://github.com' },
                                    { name: 'YouTube', url: 'https://www.youtube.com' },
                                    { name: 'Instagram', url: 'https://www.instagram.com' },
                                    { name: 'Threads', url: 'https://www.threads.net' },
                                    { name: 'TikTok', url: 'https://www.tiktok.com' },
                                    { name: 'Reddit', url: 'https://www.reddit.com' },
                                    { name: 'Telegram', url: 'https://telegram.org' },
                                    { name: 'Discord', url: 'https://discord.com' },
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={social.name}
                                        className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 text-gray-400 hover:text-[#5D3FD3] hover:border-indigo-100 transition-all cursor-pointer"
                                    >
                                        {social.name === 'LinkedIn' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        )}
                                        {social.name === 'Twitter' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        )}
                                        {social.name === 'GitHub' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        )}
                                        {social.name === 'YouTube' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                        )}
                                        {social.name === 'Instagram' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        )}
                                        {social.name === 'Threads' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12.186 0C7.91 0 4.5 3.416 4.5 7.702c0 2.28.978 4.335 2.547 5.747a.75.75 0 0 1-.186 1.2 9.4 9.4 0 0 0-2.36 1.8C2.4 17.963 1.5 20.178 1.5 22.575V24h21v-1.425c0-2.397-.9-4.612-2.5-6.126a9.4 9.4 0 0 0-2.36-1.8.75.75 0 0 1-.186-1.2c1.57-1.412 2.546-3.467 2.546-5.747C19.5 3.416 16.09 0 11.814 0zM12 6.43a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5zm-8.25 15.12v-.178c0-1.795.656-3.45 1.775-4.736a7.9 7.9 0 0 1 2.36-1.8 7.9 7.9 0 0 1 2.36 1.8c1.119 1.285 1.775 2.94 1.775 4.736v.178zm16.5 0v-.178c0-1.795-.656-3.45-1.775-4.736a7.9 7.9 0 0 0-2.36-1.8 7.9 7.9 0 0 0-2.36 1.8c-1.119 1.285-1.775 2.94-1.775 4.736v.178z" />
                                            </svg>
                                        )}
                                        {social.name === 'TikTok' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                            </svg>
                                        )}
                                        {social.name === 'Reddit' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 3.405.913 1.984 0 2.562-.913 3.405-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.842.842-2.484.913-3.405.913-1.984 0-2.562-.913-3.405-.913a.361.361 0 0 0-.029-.463.33.33 0 0 0-.464 0c-.842.842-2.484.913-3.405.913-1.984 0-2.562-.913-3.405-.913a.33.33 0 0 0-.464 0 .33.33 0 0 0 0 .463c.842.842 2.484.913 3.405.913 1.984 0 2.562-.913 3.405-.913z" />
                                            </svg>
                                        )}
                                        {social.name === 'Telegram' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                            </svg>
                                        )}
                                        {social.name === 'Discord' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928-1.793 6.4-2.78 6.4-2.78s.537.323 1.545.84a.076.076 0 0 1-.041.106c-.36.7-.772 1.363-1.225 1.993a.077.077 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                            </svg>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side - Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                                        {t('nameLabel')}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D3FD3] focus:border-transparent transition-all"
                                        placeholder={t('namePlaceholder')}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D3FD3] focus:border-transparent transition-all"
                                        placeholder={t('emailPlaceholder')}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                                        {t('companyLabel')} <span className="text-gray-400">{t('companyOptional')}</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        value={formState.company}
                                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                        className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D3FD3] focus:border-transparent transition-all"
                                        placeholder={t('companyPlaceholder')}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                                        {t('messageLabel')}
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all resize-none"
                                        placeholder={t('messagePlaceholder')}
                                        required
                                    />
                                </div>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className="w-full mt-8 px-8 py-4 bg-[#5D3FD3] text-white font-semibold rounded-xl hover:bg-[#4C1D95] transition-colors duration-200 shadow-lg shadow-indigo-500/25"
                            >
                                {t('submit')}
                            </motion.button>

                            <p className="text-center text-sm text-gray-500 mt-4">
                                {t('responseTime')}
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
