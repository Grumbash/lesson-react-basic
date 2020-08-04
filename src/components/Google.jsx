import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function HTML() {
  return (
    <div>
       <nav>
              <ul>
                <li>
                  <Link to="/google/glass">Google glass</Link>
                </li>
                <li>
                  <Link to="/phone">Google phone</Link>
                </li>
                <li>
                  <Link to="/chrome">Google chrome</Link>
                </li>
              </ul>
          </nav>
          <Switch>
        
            <Route path="/google/glass">
              <div>Glass</div>
            </Route>
            <Route path="/phone">
              <div>phone</div>
            </Route>
            <Route path="/chrome">
               <div>chrome</div>
            </Route>
              <Route>
              <div>google not found</div>
            </Route>
          </Switch>
    </div>
  )
}
