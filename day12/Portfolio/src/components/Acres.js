import React from 'react'
import Modal from 'react-bootstrap/Modal'
import "../assets/details.css"
function Acres(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
              <Modal.Header closeButton style={{backgroundColor:'#ffebd1'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            99Acres Clone - Fullstack Application
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1 id="de"><span>99acres : </span>
          Want to buy? sell? rent? your property, here is the smartest way 99acres.com
         <br/> <span>Functionalities : </span>
         <div className="func">
         <li>It is a Property lisiting Application and have only user pannel.</li>
         <li>User need to signup for using this application.</li>
         <li>User can list all the property by providing details of the property.</li>
         <li>Basic property details like rentor sale, property location, property size, description, property facilities,property images etc.</li>
           <li>User can manage his listing (hide,delete,edit).</li>
           <li>An index page to display all the products listed by the users of that application.</li>
           <li>It have filter functionality based on the location.</li>
          </div></h1>
           <h1 id="ded">Github link: <a href="https://github.com/jjayalakshmi16/99acres" style={{color:'green',fontSize:'17px',fontStyle:'normal',padding:'0%'}}>https://github.com/jjayalakshmi16/Splitwise</a></h1>
         <div className="main-modal" style={{backgroundColor:'#f7dcb9e6'}}>
          <div className="modal-image" id="modal-img">
          <img src={require("../assets/images/acres.png")}/>
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
        <button onClick={props.onHide} style={{width:'15%',backgroundColor:'#f5d6ac',padding:'1%',border:'1px solid #9e9a9a',borderRadius:'6px'}}>Close</button>

        </Modal.Footer>
      </Modal>
    )
}

export default Acres
