import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import React, { useEffect, useState } from 'react';

const Providers = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return <>{children}</>;
    }
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
};

export default Providers;
