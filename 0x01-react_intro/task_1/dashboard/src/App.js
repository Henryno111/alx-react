import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
// import fav_icon from './fav_icon.ico';
import holbert_logo from './holbert_logo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={holbert_logo} alt="Holberton Logo" />
        <h1> School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        {getFooterCopy(true)}
        <p>{getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
