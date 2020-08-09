import React from 'react'
import "../assets/skills.css"
import Works from './Works'
import Banner from './Banner'
import Awards from './Awards'
import Blogs from './Blogs'
import Footer from './Footer'
function Skills() {
    return (
        <div className="skills">
           <div className="Navigation"></div> 
           <div className="skill-wrapper">
               <div className="skill-wrapper-content">
                   <h1>Professional skills</h1>
                   <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat obcaecati quidem, odio deleniti sit.</h3>
                   <div className="skill-topic">
                       <h3>Frontend</h3>
                       <h3>Backend</h3>
                       <h3>Software</h3>
                   </div>
                   <div className="skill-progress">
                   <div class="bar learning" data-skill="TDD"></div>
                   <div class="bar back basic" data-skill="Python"></div>
                   <div class="bar back intermediate" data-skill="C#"></div>
                   <div class="bar front advanced" data-skill="CSS3"></div>
                   <div class="bar front expert" data-skill="HTML5"></div>
                   </div>
               </div>
               <div className="skill-wrapper-image">
               </div>
           </div>
           <Works/>
           <Banner/>
           <Awards/>
           <Blogs/>
           <Footer/>
        </div>
    )
}

export default Skills
