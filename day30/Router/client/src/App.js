import React, { Component } from 'react';
import  Header from './Components/Header';
import Router from './Route';
class App extends Component {
render() {
return (
<div className="App">
<Header/>
<Router/>
</div>
);
}
}
export default App;