'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export default function Header() {
    const t = useTranslations('Header');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLanguageChange = () => {
        const newLocale = locale === 'ko' ? 'en' : 'ko';
        // 현재 경로를 유지하면서 언어만 변경
        const currentPath = window.location.pathname;
        let newPath = '';
        
        if (newLocale === 'ko') {
            // 한국어로 변경: /en/... -> / 또는 /en -> /
            newPath = currentPath.replace(/^\/en/, '') || '/';
        } else {
            // 영어로 변경: / -> /en 또는 /... -> /en/...
            if (currentPath === '/') {
                newPath = '/en';
            } else {
                newPath = `/en${currentPath}`;
            }
        }
        
        window.location.href = newPath;
    };

    const navItems = [
        { label: t('services'), href: '#services' },
        { label: t('work'), href: '#work' },
        { label: t('philosophy'), href: '#philosophy' },
        { label: t('contact'), href: '#contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <nav className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <Image
                            src="/logo.png"
                            alt="Nexture Labs"
                            width={180}
                            height={40}
                            className="h-8 w-auto"
                            priority
                        />
                    </button>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop: Language Switcher & CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        {/* Language Toggle Button */}
                        <button
                            onClick={handleLanguageChange}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 bg-white rounded-full border border-gray-300 hover:border-gray-400 transition-all duration-200 shadow-sm"
                            aria-label="Change language"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                                />
                            </svg>
                            <span>{locale === 'ko' ? 'EN' : '한국어'}</span>
                        </button>

                        {/* CTA Button */}
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center px-5 py-2.5 bg-[#5D3FD3] text-white text-sm font-medium rounded-full hover:bg-[#4C1D95] transition-colors duration-200"
                        >
                            {t('getInTouch')}
                        </motion.a>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden flex items-center gap-3">
                        {/* Mobile Language Toggle Button */}
                        <button
                            onClick={handleLanguageChange}
                            className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-700 bg-white/50 rounded-full border border-gray-200 transition-all duration-200"
                            aria-label="Change language"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                                />
                            </svg>
                            <span className="font-semibold text-xs">{locale === 'ko' ? 'EN' : '한국어'}</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button className="p-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
        </motion.header>
    );
}
