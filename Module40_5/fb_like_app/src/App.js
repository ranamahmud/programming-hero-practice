import React from 'react';
import logo from './logo.svg';
import './App.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [likeColor, setLikeColor] = useState('');
  const [users, setUsers] = useState([])
  const [singleUser, setSingleUser] = useState({})
  const [randomUser, setRandomUser] = useState({})

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(data => setUsers(data))

      fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => setSingleUser(data))

      fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => setRandomUser(data.results[0]))
  },[])


  return (
    <div className="App">
      <ThumbUpAltIcon onClick={() => setLikeColor(likeColor ? '' : 'primary')} color={likeColor} />
      <h1>{singleUser.name}</h1>
      <h2>Random User Name: {randomUser.name?.first}</h2>
      <h2>Random Gender: {randomUser.gender}</h2>
      {
        users.map(user =>
          <li>{user.name}</li>
        )
      }
    </div>
  );
}

export default App;
