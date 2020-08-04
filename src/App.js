import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Google from "./components/Google";
import HTML from "./components/HTML";
import WebDevelopers from "./components/WebDevelopers";

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav>
              <ul>
                <li>
                  <Link to="/">Web Developers</Link>
                </li>
                <li>
                  <Link to="/html">HTML</Link>
                </li>
                <li>
                  <Link to="/google">Google</Link>
                </li>
              </ul>
          </nav>
          <Switch>
        
            <Route path="/google">
              <Google />
            </Route>
            <Route path="/html">
              <HTML />
            </Route>
            <Route path="/" exact>
              <WebDevelopers />
            </Route>
              <Route path="*">
              <div>404 Not found</div>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
