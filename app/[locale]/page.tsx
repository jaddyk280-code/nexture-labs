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
            <Header />
            <Hero />
            <SocialProof />
            <FeaturedProject />
            <Services />
            <Philosophy />
            <Contact />
            <Footer />
        </main>
    );
}
