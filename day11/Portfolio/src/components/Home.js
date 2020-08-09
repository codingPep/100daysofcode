import React from 'react'
import Header1 from "./header";
import "../assets/home.css"
import { Link } from 'react-router-dom';
function Home() {
return (
<>
<header>
<Header1/>
  <div className="about-block">
    <h1>
       Welcome to my page!
    </h1>
    <h2>I am Jayalakshmi J</h2>
    <p>Full Stack Web Developer with a passion for </p>
    <p>developing beautiful applications.</p>
    {/* <Link to="/about" style={{textDecoration:'none',color:'#e8d347'}}>About me</Link> */}
  </div>
</header>
</>
    )
}

export default Home
