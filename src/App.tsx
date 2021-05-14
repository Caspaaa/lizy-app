import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Places } from "./components/Places";
import { Login } from "./components/Login";
import { WithAuth } from "./components/WithAuth";

function App() {
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;
