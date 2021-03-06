import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Places } from "./components/Places";
import { Login } from "./components/authentication/Login";
import { WithAuth } from "./components/authentication/WithAuth";

function App() {
  return (
    <Router>
      <div className="lizy">
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/places" exact>
            <WithAuth>
              <Places />
            </WithAuth>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
