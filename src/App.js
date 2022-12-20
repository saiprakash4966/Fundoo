import logo from './logo.svg';
import './App.css';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signup/SignUp';
import { Component } from 'react';
import Header from './components/header/Header';
import TakeNote1 from './components/takeNote1/TakeNote1';
import TakeNote2 from './components/takeNote2/TakeNote2';
import TakeNote3 from './components/takeNote3/TakeNote3';
import Dashboard from './pages/Dashboard/Dashboard';



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
      {/* <Header/> */}
      {/* <SignIn/> */}
      {/* <SignUp/>  */}
      {/* <TakeNote1/>
      <TakeNote2/>
      <TakeNote3/> */}
      <Dashboard/>
      
    </div>
  );
}

export default App;
