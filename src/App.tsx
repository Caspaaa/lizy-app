import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Search } from "./components/Search";
import { Login } from "./components/Login";
import { WithAuth } from "./components/WithAuth";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="qover">
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/places" exact>
              <WithAuth>
                <Search />
              </WithAuth>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
