import React,{useState,useContext} from 'react'
import {GlobalStore} from "../context/Store"

function AddWeight() {

     const [weight,setWeight]=useState(0);
     const [date,setDate]=useState(0);
     const {AddData}=useContext(GlobalStore);

     const handleChange=(e)=>{
         setWeight(e.target.value);
     }

     const handleDate=(e)=>{
         setDate(e.target.value);
     }

     const handleSubmit=(e)=>{
         e.preventDefault();
        //  console.log("Going to submit the value=====>",weight,date)
        const data={
          date,
          weight
        }
         AddData(data);
     }

    return (
        <>
        <input type="text" value={weight} onChange={(e)=>handleChange(e)}/>
        <input type="text" value={date} onChange={(e)=>handleDate(e)}/>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default AddWeight
