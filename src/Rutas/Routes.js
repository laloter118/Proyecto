import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import React from "react";
import Listar from '../components/Listareproduccion/Listar';


function Arutas() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
        
          <Route path="/Listar" exact component={Listar} />
        </Switch>
      </Router>
    </div>
  );
}

export default Arutas;