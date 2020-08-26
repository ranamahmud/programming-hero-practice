import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Jasim', 'Deepjol', 'BappaRaz']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <MovieCounter></MovieCounter>
        <Nayok name={nayoks[0]} age="56"></Nayok>
        <Nayok name={nayoks[1]}></Nayok>
        <Nayok></Nayok>
        <Nayok></Nayok>

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
