'use client'

import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./theme-context";

interface Props {
    children: React.ReactNode
}


export default function ThemeProvider({ children }: Props) {

    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

    const toggleTheme = useCallback(() => {
        setIsDarkTheme(!isDarkTheme);
    }, [isDarkTheme])

    const theme = useMemo(() => ({
        isDarkTheme,
        toggleTheme
    }), [isDarkTheme, toggleTheme])

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            setIsDarkTheme(true);
        }
    }, []);

    useEffect(() => {
        const html = document.querySelector('html');
        if (isDarkTheme) {
            html?.setAttribute('data-theme', 'dark');
        } else {
            html?.setAttribute('data-theme', 'light');
        }
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    }, [isDarkTheme]);


    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}