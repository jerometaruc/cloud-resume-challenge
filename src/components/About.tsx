import React from 'react'
import '../styles/About.css'

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
                        <ul>
                            <li>Personal projects using <b>React</b>, <b>TypeScript</b>, and <b>JavaScript</b></li>
                            <li>Academic projects and coursework in <b>Python</b>, <b>Java</b>, and <b>C</b></li>
                            <li>Collaborative coding and problem-solving in team environments</li>
                        </ul>
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
