import React, { useEffect, useState } from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    const [views, setViews] = useState<number | null>(null);

    useEffect(() => {
        const fetchViewCount = async () => {
            try {
                const response = await fetch("https://377nzi4ncwcfblkhrkebtokdmi0xvzoo.lambda-url.us-east-1.on.aws/");
                const result = await response.json();

                const views = typeof result === "number"
                    ? result
                    : typeof result.body === "string"
                        ? JSON.parse(result.body).views
                        : result.views;

                setViews(views);
            } catch (error) {
                console.error("Failed to fetch view count:", error);
            }
        };

        fetchViewCount();
    }, []);

    return (
        <footer className="footer">
            <p className="credits">© {new Date().getFullYear()} Jerome Taruc. All rights reserved.</p>
            <p className="counter-number">View Count: {views}</p>
        </footer>
    );
};

export default Footer;
