import React from 'react'
import Modal from 'react-bootstrap/Modal'
import "../assets/details.css"
function Details(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Splitwise Clone - Fullstack Application
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1 id="de"><span>Splitwise :</span>Free tool for sharing and also for keep tracking your expenses with friends and families.
           I have developed using the following technologies. It is responsive for all the devices.Free tool for sharing and also for keep tracking your expenses with friends and families.
           I have developed using the following technologies. It is responsive for all the devices. </h1>
           <h1 id="ded">Github link: klajdfkwjeq;kwjdqwejd</h1>
         <div className="main-modal">
          <div className="modal-image" id="modal-img">
            <img src="https://tubblog.co.uk/wp-content/uploads/2018/05/splitwise.jpg"/>
            </div> 
          <div className="modal-details" id="identity">
            <h1>Technologies used</h1>
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
          <button onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    )
}

export default Details
