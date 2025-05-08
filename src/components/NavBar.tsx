import React from 'react'
import '../styles/NavBar.css'

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Jerome Taruc</h1>
            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
            </div>
            <div className="navbar-social">
                <a 
                    href="https://github.com/jerometaruc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a 
                    href="https://www.linkedin.com/in/jerometaruc/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </div>
        </nav>
    );
};

export default NavBar
