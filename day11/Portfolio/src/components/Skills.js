import React,{useState} from 'react'
import "../assets/skills.css"
import Works from './Works'
import Banner from './Banner'
import Awards from './Awards'
import Blogs from './Blogs'
import Footer from './Footer'
import Header123 from './Header123'
function Skills() {
    const [fhover,setFhover]=useState('skill-progress-hover');
    const [bhover,setBhover]=useState('skill-progress');
    const [shover,setShover]=useState('skill-progress');
    const fhandle=()=>{
        setBhover('skill-progress');
        setShover('skill-progress');
        setFhover('skill-progress-hover');
    }
    const bhandle=()=>{
        setShover('skill-progress');
        setFhover('skill-progress');
        setBhover('skill-progress-hover');
    }
    const shandle=()=>{
        setBhover('skill-progress');
        setFhover('skill-progress');
        setShover('skill-progress-hover');
    }
    return (
        <div className="skills">
           <div className="Navigation">
               <Header123/></div> 
           <div className="skill-wrapper">
               <div className="skill-wrapper-content">
                   <h1>Professional skills</h1>
                   <h3>As a Full Stack Web Developer, I worked on various real time projects. Fast load times and lag free interaction, my highest priority.</h3>
                   <div className="skill-topic">
                       <h3 id={fhover} onClick={fhandle}>Frontend</h3>
                       <h3 id={bhover} onClick={bhandle}>Backend</h3>
                       <h3 id={shover} onClick={shandle}>Tools & Software</h3>
                   </div>
                   {fhover=='skill-progress-hover' && <>
                   <div className="skill-progress">
                   <div class="bar front expert" data-skill="HTML"></div>
                   <div class="bar back advanced" data-skill="CSS/SASS"></div>
                   <div class="bar front expert" data-skill="ReactJs"></div>
                   <div class="bar back basic" data-skill="AngularJs"></div>
                   <div class="bar learning" data-skill="VueJs"></div>
                   </div>

                   </>}
                   {bhover=='skill-progress-hover' && <>
                   <div className="skill-progress">
                   <div class="bar front expert" data-skill="NodeJs"></div>
                   <div class="bar back basic" data-skill="Python"></div>
                   <div class="bar learning" data-skill="Django"></div>
                   <div class="bar front advanced" data-skill="Sequelize"></div>
                   <div class="bar Front advanced" data-skill="Authentication"></div>
                   </div>

                   </>}
                   {shover=='skill-progress-hover' && <>
                   <div className="skill-progress">
                   <div class="bar expert" data-skill="Grunt/Gulp/Webpack"></div>
                   <div class="bar back intermediate" data-skill="Jest"></div>
                   <div class="bar back advanced" data-skill="Heroku"></div>
                   <div class="bar front advanced" data-skill="Docker"></div>
                   <div class="bar front basic" data-skill="Vagrant"></div>
                   </div>

                   </>}
                   
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
