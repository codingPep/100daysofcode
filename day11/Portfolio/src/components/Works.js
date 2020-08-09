import React from 'react'
import Details from "./Details"
import "../assets/works.css";
import Ola from "./Ola";
import Quora from "./Quora";
import Tournament from "./Tournament";
import Whatsapp from './Whatsapp';
import Acres from './Acres';
function Works() {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);
    const [modalShow5, setModalShow5] = React.useState(false);
    const [modalShow6, setModalShow6] = React.useState(false);


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
                    <a onClick={() => setModalShow2(true)}>Read more</a>

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
                    <a onClick={() => setModalShow3(true)}>Read more</a>

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
                    <a onClick={() => setModalShow4(true)}>Read more</a>

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
                    <a onClick={() => setModalShow5(true)}>Read more</a>

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
                    <a onClick={() => setModalShow6(true)}>Read more</a>

                </div>

                </div>
            </div>
            <Details
             show={modalShow}
             onHide={() => setModalShow(false)}
            />
             <Ola
             show={modalShow2}
             onHide={() => setModalShow2(false)}
            /> 
            <Quora
            show={modalShow3}
            onHide={() => setModalShow3(false)}
           />
            <Tournament
             show={modalShow4}
             onHide={() => setModalShow4(false)}
            />
             <Whatsapp
             show={modalShow5}
             onHide={() => setModalShow5(false)}
            />
             <Acres
             show={modalShow6}
             onHide={() => setModalShow6(false)}
            />
        </div>
    )
}

export default Works
