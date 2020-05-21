import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import {Navbar  } from "./components";


function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1> Mario One</h1> */}
        <Navbar/>

      </div>
    </Router>
  );
}

export default App;
