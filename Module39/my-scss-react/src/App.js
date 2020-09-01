import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import { useState,createContext } from 'react';

export const CategoryContext = createContext();
function App() {
  const [count, setCount] = useState(0)

  return (
    <CategoryContext.Provider value={count}>
      <p>Count value: {count}</p>
      <Header count={count} setCount={setCount}></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
