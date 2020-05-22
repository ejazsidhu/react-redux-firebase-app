import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import {Navbar,Dashboard ,ProjectDetails,SignIn } from "./components";


function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1> Mario One</h1> */}
        <Navbar/>

        <Switch>
          <Route path="/login" component={SignIn}/>
          <Route path="/project/:id" component={ProjectDetails}/>
          <Route exact path="/" component={Dashboard}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
