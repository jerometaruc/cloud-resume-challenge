import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    return (
        <div className="credits">
            <p>© {new Date().getFullYear()} Jerome Taruc. All rights reserved.</p>
        </div>
    );
};

export default Footer;
