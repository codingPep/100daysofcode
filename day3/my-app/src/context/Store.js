import React,{useContext,useReducer, createContext} from 'react'
import AppReducer from "./AppReducer"

//initial state
const initialState={
    data:[]
}


//create context
export const GlobalStore=createContext(initialState);


//provider
export const GlobalProvider=({children})=> {
    const [state,dispatch]=useReducer(AppReducer,initialState);

   const AddData=(data)=>{
       dispatch({
           type:'ADD',
           payload:data
       })
   }

   const Assignee=(data)=>{
       dispatch({
           type:'ASSIGN',
           payload:data
       })
   }

    return (
       <GlobalStore.Provider value={{
           data:state.data,
           AddData,
           Assignee
       }}>
           {children}
       </GlobalStore.Provider>
    )
}
