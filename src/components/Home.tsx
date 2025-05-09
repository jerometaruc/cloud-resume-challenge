import React from 'react'
import '../styles/Home.css'
import profile_photo from '../assets/profile_photo.jpg';

const Home: React.FC = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-container">
                <div className="home-photo">
                    <img src={profile_photo} alt="Jerome Taruc" />
                </div>
                <div className="home-text">
                    <h1>Jerome Taruc</h1>
                    <p>Computer Science student at UVic</p>
                </div>
            </div>
        </section>
    );
};

export default Home;
