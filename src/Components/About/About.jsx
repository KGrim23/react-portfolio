import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/person.webp';


export const About = () => {
  return (
    <div  id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="theme icon" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="profile image" />
            </div>

            <div className="about-right">
                <div className="about-para">
                    <p>I am a full-time freelance web designer and developer, West Yorkshire.
                        I create responsive websites tailored to meet your requirements. I am a flexible, dedicated, professional freelancer, who understands the importance of a well designed, functional website that makes an impact online and helps your business grow. In short, I design websites, I develop websites, I tweak websites and I work with CMS WordPress.
                        I work with an individuals, startups and small business. If you have a project you’d like to discuss, send me an email and I’ll get back to you.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>REACT JS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>BOOTSTRAP</p><hr style={{width:"60%"}}/></div>
 
                </div>
            </div>
        </div>

    <div className="about-achievements">
        <div className="about-achievement">
            <h1>1</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>3</h1>
            <p>HAPPY CLIENTS</p>
        </div>


    </div>
    </div>
  )
}

export default About

