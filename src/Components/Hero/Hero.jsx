import React from 'react'
import './Hero.css'
import profile_img from '../../assets/avator.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img className="profile_img" src={profile_img} alt="profile image" />
        <h1><span>I'm Kalaya Grimshaw,</span> <br></br>frontend developer based in UK.</h1>
        <p>I am a passionate and innovative front-end web developer with a keen eye for creating seamless and engaging online experiences. Throughout my journey to become a web developer, I've created various projects that have showcased my skills in areas such as HTML, CSS, JavaScript, and various frameworks.
        </p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>

        </div>


    </div>
  )
}

export default Hero