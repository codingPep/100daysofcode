import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import Skills from './Skills';

function Header123() {
    return (
        <>
       
          <div className="nav-names" style={{width:'100%'}}>
          <nav style={{display:'flex',justifyContent:'space-around'}}>
            <h1 class="logo">  <Link to="/" style={{textDecoration:'none',color:'white'}}>
              Jayalakshmi J
              </Link></h1>
        <ul id="navigate" style={{display:'flex',justifyContent:'space-between',width:'26%',paddingTop:'1%'}}>
          <li>
              <Link to="/" style={{textDecoration:'none',color:'white'}}>
              Home
              </Link>
          </li>
          <li>
              <Link to="/about" style={{textDecoration:'none',color:'white'}}>
             About
              </Link>     
         </li>
          <li>
              <Link to="/skills" style={{textDecoration:'none',color:'white'}}>
              Portfolio
              </Link>
              </li>
          <li>
              <Link to="/contact" style={{textDecoration:'none',color:'white'}}>
              Contact
              </Link>
             </li>
    
        </ul>
      
      </nav>
          </div>
       
        </>
    )
}

export default Header123
