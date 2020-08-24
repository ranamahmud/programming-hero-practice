import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Jasim', 'Alamgir', 'Salman',
'Shuvo']
  const products = [{ name: 'Photoshop', price: '$90.99' },
  { name: 'Illustrator', price: '$60.99' },
  { name: 'PDF Reader', price: '$6.99' }]
  const  productNames = products.map(product => product.name)
  const nayokNames = nayoks.map(nayok => nayok)
  return (
    <div className="App">
      <header className="App-header">

        <p>
          I'm a React Person
          </p>
          <Counter></Counter>
          <Users></Users>
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

function Counter(){
  const [count, setCount] = useState(0)
  const handleIncrese = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect(() =>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
    <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </ul>
    </div>
  )
}
export default App;
