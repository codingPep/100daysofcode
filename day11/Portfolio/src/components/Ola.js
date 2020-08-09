import React from 'react'
import Modal from 'react-bootstrap/Modal'
import "../assets/details.css"
function Ola(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
              <Modal.Header closeButton style={{backgroundColor:'rgb(225 230 143)'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Ola Clone - Fullstack Application
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1 id="de"><span>Ola : </span>
         Online Taxi booking Application.
         <br/> <span>Functionalities : </span>
         <div className="func">
        <li>This application have both admin and the user pannel.</li>
        <li>Admin user added to the database via scripts can add cab details like cab type,driver name,fare and location.</li>
        <li>An index page to list all the added cabs.</li>
        <li>Once the user enters the home page will be shown the list of cabs available in 10km proximity.</li>
        <li>All the available cabs can be listed in the card view.</li>
        <li>User can select the drop location using autosuggestion (use google address API or similar to that)</li>
        <li>User can’t select individual cab and book, instead, if he selects the book option, the nearby cab will be booked automatically.</li>
        </div></h1>
           <h1 id="ded">Github link: <a href="https://github.com/jjayalakshmi16/Ola-Clone" style={{color:'green',fontSize:'17px',fontStyle:'normal',padding:'0%'}}>https://github.com/jjayalakshmi16/Splitwise</a></h1>
         <div className="main-modal" style={{backgroundColor:'rgb(225 230 143)'}}>
          <div className="modal-image" id="modal-img">
            <img src={require("../assets/images/ola.png")}/>
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
        <button onClick={props.onHide} style={{width:'15%',backgroundColor:'rgb(225 230 143)',padding:'1%',border:'1px solid #9e9a9a',borderRadius:'6px'}}>Close</button>

        </Modal.Footer>
      </Modal>
    )
}

export default Ola
