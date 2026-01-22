'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

export default function DemoContent() {
    const t = useTranslations('Demo');
    const locale = useLocale();
    const imgPrefix = locale === 'ko' ? '/demo/img_ko' : '/demo/img_en';

    return (
        <section className="pt-32 pb-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                        {t('title')}
                    </h1>
                </motion.div>

                {/* Section 1: Why Speech Up */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        {t('whyTitle')}
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        {t('whyDescription')}
                    </p>
                    <div className="flex justify-center mb-8">
                        <div className="relative w-full max-w-[33.333%] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src={`${imgPrefix}/aman.png`}
                                alt="Speech Up"
                                width={1200}
                                height={600}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        {t('whyConclusion')}
                    </p>
                </motion.div>

                {/* Section 2: Key Features */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                        {t('featuresTitle')}
                    </h2>

                    {/* Feature 1: AI Analysis */}
                    <div className="mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4">
                            {t('feature1Title')}
                        </h3>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            {t('feature1Description')}
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-gray-50">
                                <Image
                                    src={`${imgPrefix}/scrip2.png`}
                                    alt="Feature 1"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-gray-50">
                                <Image
                                    src={`${imgPrefix}/scrip3${locale === 'ko' ? '.png' : '.jpg'}`}
                                    alt="Feature 2"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-gray-50">
                                <Image
                                    src={`${imgPrefix}/scrip4${locale === 'ko' ? '.png' : '.jpg'}`}
                                    alt="Feature 3"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                {t('feature1Point1')}
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                {t('feature1Point2')}
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                {t('feature1Point3')}
                            </li>
                        </ul>
                    </div>

                    {/* Feature 2: Roleplay */}
                    <div className="mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4">
                            {t('feature2Title')}
                        </h3>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            {t('feature2Description')}
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-gray-50">
                                <Image
                                    src={`${imgPrefix}/real1${locale === 'ko' ? '.png' : '.jpg'}`}
                                    alt="Roleplay 1"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-gray-50">
                                <Image
                                    src={`${imgPrefix}/real2${locale === 'ko' ? '.png' : '.jpg'}`}
                                    alt="Roleplay 2"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-gray-50">
                                <Image
                                    src={`${imgPrefix}/real3_video1.png`}
                                    alt="Roleplay 3"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                            {t('feature2Conclusion')}
                        </p>
                    </div>

                    {/* Feature 3: Report */}
                    <div className="mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4">
                            {t('feature3Title')}
                        </h3>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            {t('feature3Description')}
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-gray-50">
                                <Image
                                    src={`${imgPrefix}/report${locale === 'ko' ? '.png' : '.jpg'}`}
                                    alt="Report 1"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-gray-50">
                                <Image
                                    src={`${imgPrefix}/report1.png`}
                                    alt="Report 2"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-gray-50">
                                <Image
                                    src={`${imgPrefix}/report2.png`}
                                    alt="Report 3"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                {t('feature3Point1')}
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                {t('feature3Point2')}
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Section 3: How to Use */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                        {t('howToTitle')}
                    </h2>

                    {/* Step 1 */}
                    <div className="mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6">
                            {t('step1Title')}
                        </h3>
                        <div className="flex justify-center mb-6">
                            <div className="relative w-full max-w-[33.333%] rounded-2xl overflow-hidden shadow-lg bg-gray-50">
                                <Image
                                    src={`${imgPrefix}/today1${locale === 'ko' ? '.png' : '.jpg'}`}
                                    alt="Today's Mission"
                                    width={1200}
                                    height={600}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                            {t('step1Description')}
                        </p>
                        <div className="space-y-4 text-gray-700">
                            <div>
                                <h4 className="font-bold mb-2">{t('step1Sub1Title')}</h4>
                                <p>{t('step1Sub1Desc')}</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2">{t('step1Sub2Title')}</h4>
                                <p>{t('step1Sub2Desc')}</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2">{t('step1Sub3Title')}</h4>
                                <p>{t('step1Sub3Desc')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6">
                            {t('step2Title')}
                        </h3>
                        <div className="flex justify-center mb-6">
                            <div className="relative w-full max-w-[33.333%] rounded-2xl overflow-hidden shadow-lg bg-gray-50">
                                <Image
                                    src={`${imgPrefix}/impro1.png`}
                                    alt="Training"
                                    width={1200}
                                    height={600}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                        <div className="space-y-4 text-gray-700">
                            <div>
                                <h4 className="font-bold mb-2">{t('step2Sub1Title')}</h4>
                                <p>{t('step2Sub1Desc')}</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2">{t('step2Sub2Title')}</h4>
                                <p>{t('step2Sub2Desc')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6">
                            {t('step3Title')}
                        </h3>
                        <div className="flex justify-center mb-6">
                            <div className="relative w-full max-w-[33.333%] rounded-2xl overflow-hidden shadow-lg bg-gray-50">
                                <Image
                                    src={`${imgPrefix}/real2${locale === 'ko' ? '.png' : '.jpg'}`}
                                    alt="Personalized Script"
                                    width={1200}
                                    height={600}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                            {t('step3Description')}
                        </p>
                        <div className="space-y-4 text-gray-700 mb-4">
                            <div>
                                <h4 className="font-bold mb-2">{t('step3Sub1Title')}</h4>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>{t('step3Sub1Example1')}</li>
                                    <li>{t('step3Sub1Example2')}</li>
                                    <li>{t('step3Sub1Example3')}</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2">{t('step3Sub2Title')}</h4>
                                <p>{t('step3Sub2Desc')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6">
                            {t('step4Title')}
                        </h3>
                        <div className="flex justify-center mb-6">
                            <div className="relative w-full max-w-[33.333%] rounded-2xl overflow-hidden shadow-lg bg-gray-50">
                                <Image
                                    src={`${imgPrefix}/real4_simul2.png`}
                                    alt="Simulation"
                                    width={1200}
                                    height={600}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                            {t('step4Description')}
                        </p>
                        <div className="space-y-2 text-gray-700">
                            <p><span className="font-bold">{t('step4Usage')}</span> {t('step4UsageDesc')}</p>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6">
                            {t('step5Title')}
                        </h3>
                        <div className="flex justify-center mb-6">
                            <div className="relative w-full max-w-[33.333%] rounded-2xl overflow-hidden shadow-lg bg-gray-50">
                                <Image
                                    src={`${imgPrefix}/rip2.png`}
                                    alt="Feedback"
                                    width={1200}
                                    height={600}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                        <div className="space-y-4 text-gray-700">
                            <div>
                                <h4 className="font-bold mb-2">{t('step5Sub1Title')}</h4>
                                <p>{t('step5Sub1Desc')}</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2">{t('step5Sub2Title')}</h4>
                                <p>{t('step5Sub2Desc')}</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2">{t('step5Sub3Title')}</h4>
                                <p>{t('step5Sub3Desc')}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center bg-indigo-50 rounded-3xl p-12 md:p-16"
                >
                    <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed whitespace-pre-line">
                        {t('ctaText')}
                    </p>
                    <motion.a
                        href="https://play.google.com/store/apps/details?id=com.speechup.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center px-10 py-5 bg-indigo-600 text-white text-xl font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-all"
                    >
                        {t('ctaButton')}
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
