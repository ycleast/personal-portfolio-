import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
                <li>
                    <DarkModeToggle />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;