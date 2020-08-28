import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import TopHeadline from './Components/TopHeadline/TopHeadline';
import Header from './Components/Header/Header';
function App() {
  return (
    <div>
      <h2>React Bootstrap</h2>
      <Header></Header>
      <Button variant="primary">Primary</Button>
      <TopHeadline></TopHeadline>


    </div>
  );
}

export default App;
