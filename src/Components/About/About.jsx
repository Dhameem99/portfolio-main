import React from 'react';
import "./about.css";
import AboutImg from "../../assests/abc.png";
import CV from "../../assests/dhameem cv.pdf";

function About() {
  return (
    <section className= "about section" id= "about">
        <h2 className= "section__title">About Me</h2>
        <span className='section__subtitle'>My Introduction</span>
        <div className="about__container container grid">
         <img src={AboutImg} alt="" className= "about__img"/>
         <div className="about__data">

         
         <p className='about__description'>Hello! I'm Dhameemul Ansari I, a passionate Full Stack Developement. I develop web applications. My core skill is based on
JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I have graduated with a bachelor's degree in Computer Application from Nehru Arts And Science College at
Coimbatore, TamilNadu in 2022. I am available for any kind of job opportunity that suits my interests.</p>
         <a  href="https://drive.google.com/file/d/1Gp_ouy2NZMLMnX0ets7SMmQRYeQc723j/view?usp=share_link" 
         className="button button__cv button--flex" target="_blank">Download CV</a>
        </div>
        </div>
    </section>
    )
}

export default About
