import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import {saveAs} from "file-saver";
import './App.css';

function App() {
const [state,setState]=useState({
  name:'',
  receiptId:0,
  price1:0,
  price2:0
});


const handleChange = e =>{
  const {name,value}=e.target;
  setState(prevState => ({
    ...prevState,
    [name]:value
  }));
}



const createPdf = () =>{
  axios.post('/create-pdf',state)
    .then(()=>axios.get('/fetch-pdf',{responseType:'blob'}))
    .then((res)=>{
      const pdfBlob =new Blob([res.data],{type:'application/pdf'});

      saveAs(pdfBlob,'newPdf.pdf');
    })
}


  return (
    <div className="App">
    <input type="text" name="name" onChange={handleChange}/>
    <input type="number" name="Receipient ID" onChange={handleChange}/>
    <input type="number" name="price 1" onChange={handleChange}/>
    <input type="number" name="price 2" onChange={handleChange}/>
    <button onClick={createPdf}>Download PDF</button>
    </div>
  );
}

export default App;
