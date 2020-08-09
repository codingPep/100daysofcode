import React from 'react'
import Details from "./Details"
import "../assets/works.css"
function Works() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="works">
            <h1>Latest works</h1>
            <div className="works-grid">
                <div className="w-grid">
                    <button >click me</button>
                </div>
                <div className="w-grid">
                  <div className="initial">
                    <div className="project-title">
                        <h1>Title</h1>
                    </div>
                    <div className="project-description">
                        <h3>description</h3>
                    </div>
                 </div>
                 <div className="secondary">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, provident.</h4>
                    <button onClick={() => setModalShow(true)}>Read more</button>
                </div>
                </div>
                <div className="w-grid">

                    
                </div>
                <div className="w-grid"></div>
                <div className="w-grid"></div>
                <div className="w-grid"></div>
            </div>
            <Details
             show={modalShow}
             onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default Works
