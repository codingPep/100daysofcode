import React,{useState} from 'react';
import './App.css';
import { createStore } from "redux";
import { Display } from './components/DisplayCard/Display';
import { UpButton } from './components/Buttons/UpButton';
import { DownButton } from './components/Buttons/DownButton';

interface Prop{
   reducer: (state: {
    count: number;
} | undefined, action: any) => number | undefined
}

const initialState = {
  count:0
}

const reducer = (state=initialState, action: any) => {
  const s = state.count;
  if (action.type == "add")
    return s + 1;
  else if (action.type == "sub")
    return s - 1;
}

const store = createStore(reducer);

const App = () => {
  const [count, SetCount] = useState<number>(0);

  const add = () => {
    const state = count;
    SetCount(state + 1);
}

  const sub = () => {
    const state = count;
    SetCount(state - 1);
  }
  
  
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Display text={count} />
      <UpButton click={add}/>
      <DownButton click={sub}/>
    </div>
  );
}

export default App;
