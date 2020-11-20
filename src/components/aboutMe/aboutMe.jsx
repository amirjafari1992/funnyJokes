import React from 'react';
import image from '../../images/profiel.jpg'
import './styles/aboutMe.scss'

const AboutMe = () => {
    return (
        <React.Fragment>
            <div className="c-about">
                <img src={image} alt="" />
                <h3>Amir Jafari</h3>
                <span>Front-End Developer</span>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <a href="https://www.linkedin.com/in/amirjfry/" rel="noopener noreferrer" target="_blank" className="btn btn-info">LinkedIn</a>
                    <a href="https://github.com/amirjfry" rel="noopener noreferrer" target="_blank" className="btn btn-info">Github</a>
                    <a href="https://codepen.io/amirjfry" rel="noopener noreferrer" target="_blank" className="btn btn-info">Codepen</a>
                    <a href="https://dribbble.com/amirjafari" rel="noopener noreferrer" target="_blank" className="btn btn-info">Dribbble</a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AboutMe;