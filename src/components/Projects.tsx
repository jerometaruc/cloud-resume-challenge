import React from 'react';
import '../styles/Projects.css';

interface Project {
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string;
}

const projectData: Project[] = [
    {
        title: "AWS Cloud Resume",
        description: "V3.0 of my personal website, as part of the AWS Cloud Resume Challenge.",
        techStack: ["React", "TypeScript", "AWS"],
        githubUrl: "https://github.com/jerometaruc/cloud-resume-challenge",
    },
    {
        title: "AI Recipe Generator",
        description: "A full-stack AI recipe generator built with React, TypeScript and deployed via AWS.",
        techStack: ["React", "TypeScript", "AWS"],
        githubUrl: "https://github.com/jerometaruc/cloud-resume-challenge",
    },
    {
        title: "Portfolio Website 2.0",
        description: "V2.0 of my personal website, built with React and deployed via Vercel.",
        techStack: ["React", "JavaScript", "Vercel"],
        githubUrl: "https://github.com/jerometaruc/jerome-taruc",
    },
    {
        title: "Portfolio Website 1.0",
        description: "V1.0 of my personal website, built with HTML/CSS and hosted via GitHub Pages.",
        techStack: ["HTML/CSS", "GitHub Pages"],
        githubUrl: "https://github.com/jerometaruc/jerometaruc.github.io",
    },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
            {project.techStack.map((tech) => (
                <span key={tech}>{tech}</span>
            ))}
        </div>
        <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
        >
            View on GitHub
        </a>
    </div>
);

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section">
            <div className="content">
                <h2>Technical Projects</h2>
                <div className="project-grid">
                    {projectData.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
