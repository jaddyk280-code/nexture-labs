import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoContent from '@/components/DemoContent';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function DemoPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <main className="min-h-screen">
            <div className="relative">
                <div
                    className="absolute inset-0 opacity-[0.1] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#5D3FD3 1px, transparent 1px), linear-gradient(90deg, #5D3FD3 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
                <Header />
                <DemoContent />
            </div>
            <Footer />
        </main>
    );
}
