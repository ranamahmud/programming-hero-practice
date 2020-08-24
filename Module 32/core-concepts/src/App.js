import React from 'react';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alamgir', 'Salman']
  const products = [{ name: 'Photoshop', price: '$90.99' },
  { name: 'Illustrator', price: '$60.99' },
  { name: 'PDF Reader', price: '$6.99' }]
  return (
    <div className="App">
      <header className="App-header">

        <p>
          I'm a React Person
          </p>
        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product> */}
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person name="Munna" job="football"></Person>
        <Person name="Massum" job="Dorshok"></Person>
      </header>


    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  console.log(name, price);
  return (<div style={productStyle}>
    <h3>{props.product.name}</h3>
    <h5>{props.product.price}</h5>
    <button>Buy now</button>
  </div>)
}

function Person(props) {
  return (
    <div style={{ border: '2px solid gold', width: '400px' }}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
