import React from 'react';
import ErrorBoundary from "../_components/ErrorBoundary";
import './App.css';
import AppRoute from './route';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <AppRoute/>
     </ErrorBoundary>
    </div>
  );
}

export default App;
