import React from 'react';
import '../styles/About.css';

const personalProjectsTech = [
    'React',
    'TypeScript',
    'JavaScript',
    'MongoDB',
    'Express.js',
    'Node.js',
    'NestJS',
    'GraphQL',
    'AWS'
];

const academicCourseworkTech = [
    'Python',
    'Java',
    'C'
];

interface TechStackGroupProps {
    title: string;
    items: string[];
}

const TechStackGroup: React.FC<TechStackGroupProps> = ({ title, items }) => (
    <div className="tech-stack-group">
        <h4>{title}</h4>
        <div className="tech-stack">
            {items.map(item => (
                <span key={item}>{item}</span>
            ))}
        </div>
    </div>
);

const About: React.FC = () => {
    return (
        <section id="about" className="section">
            <div className="content">
                <h2>About Me</h2>
                <div className="about-grid">
                    <div className="about-card">
                        <h3>Education</h3>
                        <p>
                            I'm a third-year <b>Computer Science</b> student at the <b>University of Victoria</b>, working toward a <b>Bachelor of Science</b>.
                        </p>
                        <p>
                            I love combining what I learn in the classroom with hands-on projects that challenge me to grow as a developer.
                        </p>
                    </div>
                    <div className="about-card">
                        <h3>Tech Stack</h3>
                        <TechStackGroup title="Personal Projects:" items={personalProjectsTech} />
                        <TechStackGroup title="Academic Coursework:" items={academicCourseworkTech} />
                    </div>
                    <div className="about-card">
                        <h3>Personal Interests</h3>
                        <p>
                            Outside of coding, you'll probably find me playing <b>video games</b>, at the <b>climbing wall</b>, or <b>lifting weights</b>.
                        </p>
                        <p>
                            I'm all about challenging myself. Whether that's learning a new framework or reaching a new personal best.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
