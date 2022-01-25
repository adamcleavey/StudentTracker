import React from 'react';
import logo from './logo.svg';
import './App.css';
import useFirebase from "./hooks/useFirebase";

function App() {

  const firebase = useFirebase();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Student Tracker
        </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {firebase && 
        <>
          useFirebase hook is working!
        </>
      }
      </header>
    </div>
  );
}

export default App;
