import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import About from "./components/About";
import List from "./components/List";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";

import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import User from "./components/User";

function App(props) {
  return (
    <Router>
      <div className="App">
         <Navbar />
        

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/list" component={List} />
          <Route exact path="/adduser" component={AddUser} />
          <Route exact path="/EditUser/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
