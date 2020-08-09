import React from 'react'
import Modal from 'react-bootstrap/Modal'
import "../assets/details.css"
function Tournament(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
              <Modal.Header closeButton style={{backgroundColor:'rgb(234 222 247)'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Tournament Application - Fullstack Application
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1 id="de"><span>Tournament : </span>
          Online Game Tournament Application is for managing and booking the game through Online.
         <br/> <span>Functionalities : </span>
         <div className="func">
         <li>It is an application to conduct tournaments and it can be online or offline.</li>      
         <li>It have both admin and User pannel.</li>
         <li>Admin can create a tournament by giving it's details,entry fee and availability.</li>
         <li>Admin can view all the booking for each tournament.</li> 
         <li>User can view all the tournaments and can book if seats are available. The virtual amount for each user will be deduced based on the number of seats booked and he can manage all his bookings.</li> 
          </div></h1>
           <h1 id="ded">Github link: <a href="https://github.com/jjayalakshmi16/Online-Game" style={{color:'green',fontSize:'17px',fontStyle:'normal',padding:'0%'}}>https://github.com/jjayalakshmi16/Splitwise</a></h1>
         <div className="main-modal" style={{backgroundColor:'rgb(234 222 247)'}}>
          <div className="modal-image" id="modal-img">
          <img src={require("../assets/images/tournament.png")}/>
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
        <button onClick={props.onHide} style={{width:'15%',backgroundColor:'rgb(234 222 247)',padding:'1%',border:'1px solid #9e9a9a',borderRadius:'6px'}}>Close</button>

        </Modal.Footer>
      </Modal>
    )
}

export default Tournament