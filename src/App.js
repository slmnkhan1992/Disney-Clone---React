import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Detail from './Components/Details';
import Login from './Components/Login';
import MyState from './Components/context/MyState';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,

} from "react-router-dom";

function App() {
  return (

    <MyState>
      <div className="App">

        <Router>
          <Header />

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/" element={<Home />} />
          </Routes>

        </Router>



      </div>
    </MyState>

  );
}

export default App;