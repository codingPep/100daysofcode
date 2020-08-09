import React from 'react'
import "../assets/banner.css"
import { Link } from 'react-router-dom'
function Banner() {
    return (
        <div className="banner-set">
          <div className="summary"><h1>Innovative Full Stack Developer looking forward to work on the projects that need to be responsive in all the devices and higly skilled with Javascript Modern libraries</h1>
          </div>
          <div className="contact-me-btn"><Link to="/contact"><button>Contact Me</button></Link></div>
        </div>
    )
}

export default Banner
