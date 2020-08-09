import React from 'react'
import "../assets/awards.css"
function Awards() {
    return (
        <div className="main-awards">
        <div className="awards-page">
            <div className="awards-heading">
                <h1>Awards & Certifications</h1>
            </div>
            <div className="slideshow">
            <div className="awards-slide done">
            <img src="http://placeimg.com/625/225/any"/>
            <img src="http://placeimg.com/625/225/animals"/>
            <img src="http://placeimg.com/625/225/arch"/>
            </div>
            </div>
           
        </div>
        <div className="certificates">
            <h1>School First in SSLC - 2014</h1>
            <h1>Internship at Annamalai University - 2015</h1>
            <h1>School First in HSC - 2016</h1>
            <h1>Academic Rank Holder - UG</h1>
            <h1>Bussiness English Certificate</h1>
            <h1>Ranked No.1 in Programming Level 3 by Skillrack</h1>
            </div>
        </div>
    )
}

export default Awards
