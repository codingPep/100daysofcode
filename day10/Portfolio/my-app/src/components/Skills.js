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
                   <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat obcaecati quidem, odio deleniti sit.</h3>
                   <div className="skill-topic">
                       <h3 id={fhover} onClick={fhandle}>Frontend</h3>
                       <h3 id={bhover} onClick={bhandle}>Backend</h3>
                       <h3 id={shover} onClick={shandle}>Software</h3>
                   </div>
                   {fhover=='skill-progress-hover' && <>
                   <div className="skill-progress">
                   <div class="bar learning" data-skill="TDD"></div>
                   <div class="bar back basic" data-skill="Python"></div>
                   <div class="bar back intermediate" data-skill="C#"></div>
                   <div class="bar front advanced" data-skill="CSS3"></div>
                   <div class="bar front expert" data-skill="HTML5"></div>
                   </div>

                   </>}
                   {bhover=='skill-progress-hover' && <>
                   <div className="skill-progress">
                   <div class="bar learning" data-skill="TDD"></div>
                   <div class="bar back basic" data-skill="Python"></div>
                   <div class="bar back intermediate" data-skill="C#"></div>
                   <div class="bar front advanced" data-skill="CSS3"></div>
                   <div class="bar front expert" data-skill="HTML5"></div>
                   </div>

                   </>}
                   {shover=='skill-progress-hover' && <>
                   <div className="skill-progress">
                   <div class="bar learning" data-skill="TDD"></div>
                   <div class="bar back basic" data-skill="Python"></div>
                   <div class="bar back intermediate" data-skill="C#"></div>
                   <div class="bar front advanced" data-skill="CSS3"></div>
                   <div class="bar front expert" data-skill="HTML5"></div>
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
