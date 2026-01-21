import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import FeaturedProject from '@/components/FeaturedProject';
import Services from '@/components/Services';
import Philosophy from '@/components/Philosophy';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
    const { locale } = await params;

    // Enable static rendering
    setRequestLocale(locale);

    return (
        <main className="min-h-screen">
            {/* Grid pattern background - applies to all sections except Footer */}
            <div className="relative">
                <div
                    className="absolute inset-0 opacity-[0.1] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#5D3FD3 1px, transparent 1px), linear-gradient(90deg, #5D3FD3 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
                <Header />
                <Hero />
                <SocialProof />
                <FeaturedProject />
                <Services />
                <Philosophy />
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
