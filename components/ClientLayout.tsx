'use client';

import { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import { AnimatePresence } from 'framer-motion';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [showSplash, setShowSplash] = useState(true);

    const handleSplashComplete = () => {
        setShowSplash(false);
    };

    return (
        <>
            <AnimatePresence>
                {showSplash && <SplashScreen key="splash" onComplete={handleSplashComplete} />}
            </AnimatePresence>
            {!showSplash && children}
        </>
    );
}
