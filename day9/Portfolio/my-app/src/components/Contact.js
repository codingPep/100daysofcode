import React from 'react'
import "../assets/contact.css"
function Contact() {
    return (
        <div className="contact-form">
           <div className="top-bar">
               <div className="wrapper">
                   <div className="mail">
                       <div className="cover"></div>
                       <div className="letter">
                           <div className="body-mail">
                           From : <input type="text" defaultValue="hello"></input>
                           <button>send</button>
                           </div>
                           </div>
                           
                   </div>
               </div>

               <h1>Want to say Hi!</h1>




           </div>
           <div className="bottom-bar">
           <div className="abt-social-media2">
                            <div className="facebook"> 
                            </div>
                            <div className="twitter"></div>
                            <div className="linkedin1"></div>

                        </div>
               <h1>Jayalakshmi J</h1>
               <a href="">home</a>
               </div>                
        </div>
    )
}

export default Contact
