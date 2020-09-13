import React from 'react';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useState } from 'react';

firebase.initializeApp(firebaseConfig);
function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photoURL: '',
  })
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {

    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var { displayName, photoURL, email } = result.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
      }
      setUser(signedInUser);
      console.log(displayName, photoURL, email);
    }).catch(err => {
      console.log(err);
      console.log(err.message);
    })
  }

  const handleSignOut = () => {
    console.log("signOut");
    firebase.auth().signOut()
      .then(res => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          photoURL: '',
          email: ''
        }

        setUser(signedOutUser);
      })
      .catch(err => {

      });
  }
  return (
    <div className="App">
      {
        user.isSignedIn === true ? 
          <button onClick={handleSignOut}>Sign Out</button>:
          <button onClick={handleSignIn}>Sign in</button> 

      }
      {
        user.isSignedIn &&
        <div>
          <p>Welcome, {user.name}</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      }
    </div>
  );
}

export default App;
