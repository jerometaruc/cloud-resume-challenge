import React from 'react'
import '../styles/Projects.css'

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section">
            <div className="content">
                <h2>Technical Projects</h2>
                <div className="project-grid">
                    <div className="project-card">
                        <h3>AI Recipe Generator</h3>
                        <p>
                            A full-stack AI recipe generator built with <b>React</b>, <b>TypeScript</b> and deployed via <b>AWS</b>.
                        </p>
                        <div className="tech-stack">
                            <span>React</span>
                            <span>TypeScript</span>
                            <span>AWS</span>
                        </div>
                        <a 
                            href="https://github.com/jerometaruc/cloud-resume-challenge" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="github-button"
                        >
                            View on GitHub
                        </a>
                    </div>

                    <div className="project-card">
                        <h3>Portfolio Website 2.0</h3>
                        <p>
                            V2.0 of my personal website, built with <b>React</b> and deployed via <b>Vercel</b>.
                        </p>
                        <div className="tech-stack">
                            <span>React</span>
                            <span>JavaScript</span>
                            <span>Vercel</span>
                        </div>
                        <a 
                            href="https://github.com/jerometaruc/jerome-taruc" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="github-button"
                        >
                            View on GitHub
                        </a>
                    </div>

                    <div className="project-card">
                        <h3>Portfolio Website 1.0</h3>
                        <p>
                            V1.0 of my personal website, built with <b>HTML</b>/<b>CSS</b> and hosted via <b>GitHub Pages</b>.
                        </p>
                        <div className="tech-stack">
                            <span>HTML/CSS</span>
                            <span>GitHub Pages</span>
                        </div>
                        <a 
                            href="https://github.com/jerometaruc/jerometaruc.github.io" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="github-button"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
