import React from 'react'
import Header1 from "./Header123";
import "../assets/about.css"
function About() {
    return (
        <div>
            <div className="Navigation">
               
                    <Header1/>
            </div>
            <div className="abt-main">
                <div className="abt-header">
                    <h1>About Me</h1>
                    <h3>Information about me</h3>
                </div>
                <div className="abt-wrapper">
                    <div className="abt-image">
                    
                    </div>
                    <div className="abt-content">
                        <div className="abt-content-header">
                            <h1>I am JAYALAKSHMI J</h1>
                            <h2>Lorem ipsum <span>UI developer </span>dolor sit amet <span>ghjksl </span> kjhku.</h2>
                            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, eaque.
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, eaque.</h3>
                        </div>
                        <div className="abt-content-body">
                            <div className="birthday"><p>Birthday : <span>16th January, 1999</span></p></div>
                            <div className="age"><p>Email : <span>jjayalakshmi16@gmail.com</span></p></div>
                            <div className="Residence"><p>Age : <span>21</span></p></div>
                            <div className="Address"><p>Address : <span>Cuddalore</span></p></div>
                            <div className="email"><p>Experience : <span>2 years</span></p></div>
                            <div className="phone"><p>Phone : <span>5253741258</span></p></div>
                            <div className="linkedin"><p>Linkedin : <span></span></p></div>
                            <div className="freelance"><p>Freelance : <span>Available</span></p></div>
                        </div>
                        <div className="abt-social-media">
                            <div className="facebook"> 
                            </div>
                            <div className="twitter"></div>
                            <div className="linkedin1"></div>
                     

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
