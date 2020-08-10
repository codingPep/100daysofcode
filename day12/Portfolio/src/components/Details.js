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
        <Modal.Header closeButton style={{backgroundColor:'#ffebd1'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Splitwise Clone - Fullstack Application
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1 id="de"><span>Splitwise : </span>
          Free tool for sharing and also for keep tracking your expenses with friends and families.
         <br/> <span>Functionalities : </span>
         <div className="func">
         <li>This application have only the user pannel and user need to signup for using this application.</li>      
         <li> Here user can add his expenses by adding category and amount.</li>
         <li>He/She can invite other users of this application to his account and share his expenses. </li>
         <li>Once the bill is shared with his friends the amount spent by him will be based on the number of friends he added to that expenses.</li> 
         <li>A page will show all friends name and the amount balance between each other.</li> 
          </div></h1>
           <h1 id="ded">Github link: <a href="https://github.com/jjayalakshmi16/Splitwise" style={{color:'green',fontSize:'17px',fontStyle:'normal',padding:'0%'}}>https://github.com/jjayalakshmi16/Splitwise</a></h1>
         <div className="main-modal" style={{backgroundColor:'#f7dcb9e6'}}>
          <div className="modal-image" id="modal-img">
            <img src="https://tubblog.co.uk/wp-content/uploads/2018/05/splitwise.jpg"/>
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

export default Details
