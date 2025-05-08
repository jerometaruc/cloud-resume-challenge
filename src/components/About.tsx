import React from 'react'
import '../styles/About.css'

const About: React.FC = () => {
    return (
        <section id="about" className="section">
            <div className="content">
                <h2>About Me</h2>
                <div className="about-card">
                    <p>
                        I'm a third-year student at the <a href="https://www.uvic.ca/" target="_blank" rel="noopener noreferrer">University of Victoria</a>, 
                        pursuing a <b>Bachelor's of Science</b> in <b>Computer Science</b>.
                    </p>
                    <p>
                        I'm passionate about <b>Web/UI Development</b> and solving real-world problems through technology.
                    </p>
                    <p>
                        I have hands-on experience working with <b>React</b>, <b>TypeScript</b>, and <b>JavaScript</b>, as well as <b>Python</b>, <b>Java</b>, and <b>C</b>.
                    </p>
                    <p>
                        In my free time, I enjoy playing <b>video games</b>, <b>rock climbing</b>, and <b>weightlifting</b>.
                    </p>
                </div>  
            </div>
        </section>
    );
};

export default About;
