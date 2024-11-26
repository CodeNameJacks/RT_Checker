//import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Add/Import Routes */
//import Home from './components/Home';
import HamburgerNav from './components/HamburgerNav';
import Home from './pages/home';

function App() {

  //**KEEP THIS BLOCK OF CODE FOR TESTING SERVER CONFIGURATION AND BACKEND CONNECTIVITY TO FRONTEND**
  /*const [response, setResponse] = useState("Waiting for response from Backend")

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
  );*/


  return (
    <div>
      <header>
        <HamburgerNav />
      </header>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />



          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
