import logo from './logo.svg';
import './App.css';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signup/SignUp';
import { Component } from 'react';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <SignIn/> */}
      <SignUp/> 
      
    </div>
  );
}

export default App;
