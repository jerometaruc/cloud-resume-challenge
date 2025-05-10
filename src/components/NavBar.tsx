import React from 'react';
import '../styles/NavBar.css';

const NavBar: React.FC = () => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
        e.preventDefault();
        const element = document.getElementById(section);
        const offset = 70;
    
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Jerome Taruc</h1>
            <div className="navbar-links">
                <a href="#home" onClick={(e) => handleClick(e, 'home')}>
                    Home
                </a>
                <a href="#about" onClick={(e) => handleClick(e, 'about')}>
                    About
                </a>
                <a href="#projects" onClick={(e) => handleClick(e, 'projects')}>
                    Projects
                </a>
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

export default NavBar;
