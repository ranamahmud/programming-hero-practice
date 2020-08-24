import React from 'react';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alamgir', 'Salman']
  return (
    <div className="App">
      <header className="App-header">

        <p>
          I'm a React Person
          </p>

          <Person name="Munna" job="football"></Person>
      <Person name="Massum" job="Dorshok"></Person>
      </header>
     

    </div>
  );
}

function Person(props){
  return (
    <div style={{border:'2px solid gold', width:'400px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
