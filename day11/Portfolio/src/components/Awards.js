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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSou0DSlXFF_1UHIQ4fcwidElleJaES6yijmA&usqp=CAU"/>
            <img src={require("../assets/images/skillrack.png")}/>
            <img src={require("../assets/images/intern.png")}/>
        
            </div>
            </div>
           
        </div>
        <div className="certificates">
            <div className="certif">
            <h1><img src="https://c7.uihere.com/files/723/635/766/cambridge-assessment-english-tkt-english-language-test-graphics-oxford-university-logo.jpg"/>Bussiness English Certificate</h1>
            <h1><img src="https://cdn1.iconfinder.com/data/icons/sport-fitness-vol-2/512/z5-champion-award-cup-winner-512.png"/>School First in SSLC - 2014</h1>
            <h1><img src="https://www.sastra.edu/EducationalOutreach/inspireweb/newbg.png"/>Internship at Annamalai University</h1>
            <h1><img src="https://cdn1.iconfinder.com/data/icons/sport-fitness-vol-2/512/z5-champion-award-cup-winner-512.png"/>School First in HSC - 2016</h1>
            <h1><img src="https://cdn1.iconfinder.com/data/icons/sport-fitness-vol-2/512/z5-champion-award-cup-winner-512.png"/>Academic Topper - UG</h1>
            <h1><img src="https://images-na.ssl-images-amazon.com/images/I/510deAAHQ4L._SY355_.png"/>Ranked No.1 in Programming Level 3 by Skillrack</h1>
            </div>
            </div>
        </div>
    )
}

export default Awards
