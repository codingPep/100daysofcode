import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import "../assets/header.css"
function header() {
    return (
        <nav>
        <h1 class="logo">  <Link to="/" style={{textDecoration:'none',color:'white'}}>
              Jayalakshmi J
              </Link></h1>
        <ul id="navigate">
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
    )
}

export default header
