import React from 'react'
import Details from "./Details"
import "../assets/works.css"
function Works() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="works">
            <h1>Latest works</h1>
            <div className="works-grid">
                <div className="w-grid" id="splitwise">
                <div className="initial">
                    <div className="project-title">
                        <h1>SPLITWISE CLONE</h1>
                    </div>
                    <div className="project-description">
                        <h3>Fullstack Application</h3>
                    </div>
                 </div>
                 <div className="secondary">
                    <h4>Splitwise is the easiest way to share your expenses with your friends and family members</h4>
                    <a onClick={() => setModalShow(true)}>Read more</a>
                </div>
                </div>
                <div className="w-grid" id="ola">
                  <div className="initial">
                    <div className="project-title">
                        <h1>OLA CLONE</h1>
                    </div>
                    <div className="project-description">
                        <h3>Fullstack Application</h3>
                    </div>
                 </div>
                 <div className="secondary">
                    <h4>Ola cabs provides you the easiest and the fastest way to book your ride.</h4>
                    <a onClick={() => setModalShow(true)}>Read more</a>

                </div>
                </div>
                <div className="w-grid" id="quora">

                <div className="initial">
                    <div className="project-title">
                        <h1>QUORA CLONE</h1>
                    </div>
                    <div className="project-description">
                        <h3>Fullstack Application</h3>
                    </div>
                 </div>
                 <div className="secondary">
                    <h4>Quora is a Q&A platform that allows people to share their knowledge with the world</h4>
                    <a onClick={() => setModalShow(true)}>Read more</a>

                </div>
                </div>
                <div className="w-grid" id="game">
                <div className="initial">
                    <div className="project-title">
                        <h1>TOURNAMENT APP</h1>
                    </div>
                    <div className="project-description">
                        <h3>Fullstack Application</h3>
                    </div>
                 </div>
                 <div className="secondary">
                    <h4>Create and manage your tournaments.</h4>
                    <a onClick={() => setModalShow(true)}>Read more</a>

                </div>
                </div>
                <div className="w-grid" id="whatsapp">
                <div className="initial">
                    <div className="project-title">
                        <h1>WHATSAPP CLONE</h1>
                    </div>
                    <div className="project-description">
                        <h3>Fullstack Application</h3>
                    </div>
                 </div>
                 <div className="secondary">
                    <h4>Free messaging app that allows you connect with your loved ones.</h4>
                    <a onClick={() => setModalShow(true)}>Read more</a>

                </div>
                </div>
                <div className="w-grid" id="acres">
                <div className="initial">
                    <div className="project-title">
                        <h1>99ACRES CLONE</h1>
                    </div>
                    <div className="project-description">
                        <h3>Fullstack Application</h3>
                    </div>
                 </div>
                 <div className="secondary">
                    <h4>Want to buy? sell? rent? your property, here is the smartest way 99acres.com</h4>
                    <a onClick={() => setModalShow(true)}>Read more</a>

                </div>

                </div>
            </div>
            <Details
             show={modalShow}
             onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default Works
