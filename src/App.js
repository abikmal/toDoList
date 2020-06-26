import React from 'react';
import Routes from './Routes';
import firebase from './firebase.js'

firebase.firestore().collection('times').add({
  title: 'Rubik\'s Cubs',
  time_seconds: 45
})

const App = () => (
 <div className="App">
     <Routes />
  </div>
);

export default App;
