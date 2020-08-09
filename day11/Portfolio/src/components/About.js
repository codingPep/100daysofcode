import React from 'react'
import Header1 from "./Header123";
import "../assets/about.css"
function About() {
    function github(e){
        e.preventDefault();
        window.location.href="https://github.com/jjayalakshmi16"
    }
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
                            <h2> <span>Full Stack Web Developer </span>who focuses on writing clean, elegant and efficient code.</h2>
                            <h3>Very passionate to work on FrontEnd as well as BackEnd technologies. Check out my latest works in Portfolio section. Also you can contact me via social media.
                           </h3>
                        </div>
                        <div className="abt-content-body">
                            <div className="birthday"><p>Birthday : <span>16th January, 1999</span></p></div>
                            <div className="age"><p>Email : <span>jjayalakshmi16@gmail.com</span></p></div>
                            <div className="Residence"><p>Age : <span>21</span></p></div>
                            <div className="Address"><p>Address : <span>Cuddalore</span></p></div>
                            <div className="email"><p>Experience : <span>2 years</span></p></div>
                            <div className="phone"><p>Phone : <span>5253741258</span></p></div>
                            <div className="linkedin"><p>Status : <span>Active</span></p></div>
                            <div className="freelance"><p>Freelance : <span>Available</span></p></div>
                        </div>
                        <div className="socio-abt">
                <div className="git"> <a href="https://github.com/jjayalakshmi16" id="git">
                 <i className="fa fa-github" aria-hidden="true"></i>
                 </a></div>
                <div className="link"><a href="https://www.linkedin.com/in/jayalakshmi-j-23b335145/" id="linki">
                 <i className="fa fa-linkedin" aria-hidden="true"></i>
                 </a></div>
                <div className="twit"><a href="https://github.com/jjayalakshmi16" id="twit">
                 <i className="fa fa-twitter" aria-hidden="true"></i>
                 </a></div>
            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
