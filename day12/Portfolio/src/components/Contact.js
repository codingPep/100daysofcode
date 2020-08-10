import React from 'react'
import "../assets/contact.css"
import { Link } from 'react-router-dom'
function Contact() {
    return (
        <div className="contact-form">
           <div className="top-bar">
              <div className="write-msg">
                  <h1>contact me </h1>
                  <h3>If you'd like to chat about a new project please send me a message and I'll get back within 1-2 days.</h3>
                  <div className="msg">
                   <h4>How can I help you?</h4>
                   <textarea className="text-area"/>
                   <div className="addr">
                       <input type="text" placeholder="your email"/>
                       <button>send</button>
                   </div>
                  </div>
              </div>
               <div className="wrapper">
                   <div className="mail">
                       <div className="cover"></div>
                       <div className="letter">
                           <div className="body-mail">
                           From : <input type="text" placeholder="Your Email"></input>
                           <button>send</button>
                           </div>
                           </div> 
                   </div>
               </div>





           </div>
           <div className="bottom-bar">
           <div className="socio-contact">
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
               <h1>Jayalakshmi J</h1>
              <Link to='/'><a href="">home</a></Link> 
               </div>                
        </div>
    )
}

export default Contact
