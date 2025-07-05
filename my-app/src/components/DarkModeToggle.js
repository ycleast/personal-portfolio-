// src/components/DarkModeToggle.js
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkModeToggle = () => {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <motion.button
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {darkMode ?
                <FiSun size={20} className="text-yellow-400" /> :
                <FiMoon size={20} className="text-gray-700" />
            }
        </motion.button>
    );
};

export default DarkModeToggle;