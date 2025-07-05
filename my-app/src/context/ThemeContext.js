// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check user's system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('portfolio-theme');

        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
        } else {
            setDarkMode(prefersDark);
        }
    }, []);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode: () => setDarkMode(!darkMode) }}>
            {children}
        </ThemeContext.Provider>
    );
};