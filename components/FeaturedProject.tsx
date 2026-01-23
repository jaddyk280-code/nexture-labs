'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import Image from 'next/image';

export default function FeaturedProject() {
    const t = useTranslations('Projects');
    const tHero = useTranslations('Hero');
    const router = useRouter();

    const benefits = [
        {
            key: 'benefit1',
            title: "1:1 맞춤형 AI 정밀 분석",
            subtitle: "단순히 녹음만 하는 게 아닙니다. 내 목소리를 AI가 분석해서 '실시간' 피드백을 줍니다.",
            features: [
                "발음 정확도: 뭉개지는 발음을 콕 집어줍니다",
                "속도 & 톤: 말이 너무 빠른지, 목소리가 너무 단조로운지(로봇처럼 말하는지) 알려줍니다",
                "습관 분석: '어...', '음...' 같은 불필요한 추임새를 얼마나 쓰는지 잡아냅니다"
            ],
            image: "/demo/demo1.png",
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            )
        },
        {
            key: 'benefit2',
            title: "상황별 실전 트레이닝",
            subtitle: "혼자 벽 보고 연습하는 건 지루하죠? Speech Up은 다양한 상황 속에 나를 던져줍니다. 또한 녹음과 영상 촬영을 활용하여 나의 현재 모습을 셀프 체크할 수 있습니다.",
            features: [
                "면접관이 된 AI: '우리 회사에 지원한 동기가 뭔가요?' (압박 면접 대비)",
                "소개팅 상대가 된 AI: '취미가 뭐예요?' (스몰토크 연습)",
                "화난 고객이 된 AI: '이거 환불해 주세요!' (대처 능력 향상)"
            ],
            image: "/demo/demo2.png",
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            key: 'benefit3',
            title: "눈에 보이는 성장 (Report)",
            subtitle: "'내가 늘긴 한 걸까?' 궁금해할 필요 없습니다. 매일의 연습 기록과 점수 변화를 그래프로 확인하고, 첫날과 오늘의 목소리를 직접 비교해보세요.",
            features: [
                "Before & After: 첫날 녹음한 내 목소리와 지금 내 목소리를 비교해서 들어볼 수 있습니다",
                "데이터 리포트: 점수 변화, 연습량 등을 그래프로 보여주어 성취감을 줍니다"
            ],
            image: "/demo/demo3.png",
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        }
    ];

    return (
        <section id="work" className="py-12 bg-gray-50">
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
                                className="inline-flex items-center justify-center px-8 py-4 bg-gray-50 text-gray-900 text-lg font-bold rounded-xl border-2 border-indigo-600 hover:bg-gray-100 transition-all"
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

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={item.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(99, 102, 241, 0.2)" }}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col h-full overflow-hidden relative"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                                <div className="text-white">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight h-16 flex items-center justify-center text-center">
                                {item.title}
                            </h3>

                            {/* Subtitle */}
                            <p className="text-gray-600 leading-relaxed mb-12 text-base h-20 flex items-start">
                                {item.subtitle}
                            </p>

                            {/* Image */}
                            <div className="mb-6 -mx-8 rounded-xl overflow-hidden shadow-md h-64 border-2 border-indigo-600">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Features List */}
                            <div className="mt-auto pt-6 border-t border-gray-100">
                                <ul className="space-y-2">
                                    {item.features?.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                            <span className="text-indigo-600 font-bold mt-0.5">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
