import React from 'react'
import Modal from 'react-bootstrap/Modal'
import "../assets/details.css"
function Whatsapp(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
              <Modal.Header closeButton style={{backgroundColor:'rgb(172 232 174 / 84%)'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Whatsapp Clone - Fullstack Application
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1 id="de"><span>Whatsapp : </span>
          Free Messaging tool that helps you to connect with your loved ones.
         <br/> <span>Functionalities : </span>
         <div className="func">
         <li>It is a Chat application using sockets.</li>      
         <li> It have only user panel and user need to sign up for using this application done by me.</li>
         <li>It have an option to chat with your friends and also let you create a group and add members to it. </li>
         <li>It is responsive for all the devices.</li> 
          </div></h1>
           <h1 id="ded">Github link: <a href="https://github.com/jjayalakshmi16/Whatsapp" style={{color:'green',fontSize:'17px',fontStyle:'normal',padding:'0%'}}>https://github.com/jjayalakshmi16/Splitwise</a></h1>
         <div className="main-modal" style={{backgroundColor:'rgb(172 232 174 / 84%)'}}>
          <div className="modal-image" id="modal-img">
          <img src={require("../assets/images/whatsapp.png")}/>
            </div> 
          <div className="modal-details" id="identity">
           <span><h1>Technologies used</h1></span> 
            <div className="tech-details">
            <h3>Front End:</h3>
            <h3>React Js</h3>
            <h3>Back End:</h3>
            <h3>Node Js</h3>
            <h3>Database:</h3>
            <h3>PostgreSQL</h3>
            <h3>Deployment:</h3>
            <h3>Heroku</h3>
            </div>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
        <button onClick={props.onHide} style={{width:'15%',backgroundColor:'rgb(172 232 174 / 84%)',padding:'1%',border:'1px solid #9e9a9a',borderRadius:'6px'}}>Close</button>

        </Modal.Footer>
      </Modal>
    )
}

export default Whatsapp
