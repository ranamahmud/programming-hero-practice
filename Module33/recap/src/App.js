import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = [{name:'Jasim',age:56},
  { name:'Deepjol',age:61},
  { name:'BappaRaz',age:15},
  {name:'Omar Sani',age:23},
  {name:'Alamgir',age:32}]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <MovieCounter></MovieCounter>
        {
          nayoks.map(nk=> <Nayok name={nk.name} age={nk.age}></Nayok>)
        }

      </header>
    </div>
  );
}

function MovieDisplay(props){
  return <h4>Movies I have acted: {props.movies}</h4>
}
function MovieCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of movies: {count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

function Nayok(props) {
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px'
  }
  return (
    <div style={nayokStyle}>
      <h1>Ami KholNayak {props.name}</h1>
      <h3>I have done 5 movies in {props.age} years</h3>
    </div>
  )
}
export default App;
