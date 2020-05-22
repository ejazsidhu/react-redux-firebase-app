import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import {Navbar,Dashboard  } from "./components";


function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1> Mario One</h1> */}
        <Navbar/>

        <Switch>
          <Route path="/" component={Dashboard}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
