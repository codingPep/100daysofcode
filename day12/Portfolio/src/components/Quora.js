import React from 'react'
import Modal from 'react-bootstrap/Modal'
import "../assets/details.css"
function Quora(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
              <Modal.Header closeButton style={{backgroundColor:'rgb(243 181 181 / 51%)'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Quora Clone - Fullstack Application
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1 id="de"><span>Quora : </span>
          Quora is a Q&A platform that allows people to share their knowledge with the world.
         <br/> <span>Functionalities : </span>
         <div className="func">
         <li>This application is to post question and answers.</li>
         <li>It have only user pannel.</li>
         <li>User need to signup for using this application.</li>
         <li>Once the user is logged in he can post the question which he wants to ask.</li>
         <li>All the questions added by the users will be shown in the index page and user who knows the answer can answer it</li>
         <li>All the question and answers will have upvote and comment sections</li>
         <li>Answers with most upvotes will be shown in the top inside each question and likewise, questions with most upvotes will display in the top section of the index page</li>
         <li>All the question will be mapped to tags and that can be used to filter in the index page</li>
          </div></h1>
           <h1 id="ded">Github link: <a href="https://github.com/jjayalakshmi16/Quora" style={{color:'green',fontSize:'17px',fontStyle:'normal',padding:'0%'}}>https://github.com/jjayalakshmi16/Splitwise</a></h1>
         <div className="main-modal" style={{backgroundColor:'rgb(243 181 181 / 51%)'}}>
          <div className="modal-image" id="modal-img">
          <img src={require("../assets/images/quora.png")}/>
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
        <button onClick={props.onHide} style={{width:'15%',backgroundColor:'rgb(243 181 181 / 51%)',padding:'1%',border:'1px solid #9e9a9a',borderRadius:'6px'}}>Close</button>

        </Modal.Footer>
      </Modal>
    )
}

export default Quora