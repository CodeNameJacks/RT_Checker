import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'

function App() {

  const [response, setResponse] = useState("Waiting for response from Backend")

  useEffect(() => {
    fetch("api/test").then(res => res.json()).then(data => { setResponse(data.response) })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {response}
        </p>
      </header>
    </div>
  );
}

export default App;
