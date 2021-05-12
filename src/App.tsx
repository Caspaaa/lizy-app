import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Search } from "./components/Search";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="qover">
          <Switch>
            <Route path="/" exact>
              <Search />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
