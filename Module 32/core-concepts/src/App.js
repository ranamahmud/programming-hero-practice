import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done<code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
          I'm a React Person
          </p>
         
        </a>
        <Person></Person>
          <Person></Person>
          <Person></Person>
      </header>
    </div>
  );
}

function Person(){
  const personStyle = {
    border: '2px solid red',
    margin: '10px'
  }
  return (<div style={personStyle}>
    <h1>Name: Rana</h1>
  <h3>Hero of the year</h3>
  </div>)
}

export default App;
