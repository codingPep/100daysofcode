import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Header1 from "./components/header"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/skills" component={Skills}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
