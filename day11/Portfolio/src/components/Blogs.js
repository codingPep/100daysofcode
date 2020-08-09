import React from 'react'
import "../assets/blog.css"
function Blogs() {
    return (
        <div className="blogs"> 
            <h1>Blogs</h1>
            <div className="blogs-grid">
                <div className="blog-page">
                   <a href="https://medium.com/@jjayalakshmi16/docker-for-beginners-911e9edfd911" id="bl"> <p className="title">Docker</p></a>
                    <p className="desc">Docker beginner tutorial which describes the key concepts.</p>
                    <p>12th May, 2020</p>
                </div>
                <div className="blog-page">
                    <p className="title">Js Array Operations</p>
                    <p className="desc">Various Javascript built in methods to operate on arrays.</p>
                    <p>12th March, 2019</p>
                </div>
                <div className="blog-page">
                    <p className="title">React from scratch</p>
                    <p className="desc">Describes a procedure to build the react app using Webpack.</p>
                    <p>12th March, 2019</p>
                </div>
                <div className="blog-page">
                    <p className="title">CSS grids</p>
                    <p className="desc">Brief description about how to use CSS grid in your project.</p>
                    <p>12th March, 2019</p>
                </div>

            </div>
        </div>
    )
}

export default Blogs
