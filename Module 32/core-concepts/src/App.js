import React from 'react';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Jasim', 'Alamgir', 'Salman',
'Shuvo']
  const products = [{ name: 'Photoshop', price: '$90.99' },
  { name: 'Illustrator', price: '$60.99' },
  { name: 'PDF Reader', price: '$6.99' }]
  const  productNames = products.map(product => product.name)
  console.log(productNames);
  const nayokNames = nayoks.map(nayok => nayok)
  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">

        <p>
          I'm a React Person
          </p>
          <ul>
           {
             nayoks.map(nayok =>
              <li>{nayok}</li>
              )
           }
           {
             products.map(product =>
              <li>{product.name}</li>)
           }
          </ul>
          {
            products.map(product =>
              <Product product={product}></Product>)
          }
      
        <Person name="Munna" job="football"></Person>
        <Person name="Masum" job="Dorshok"></Person>
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
