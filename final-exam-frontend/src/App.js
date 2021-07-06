import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
              <Switch>
          <Route path="/">
            <Main />
          </Route>
          <Route path="/favorite">
            {/* <Favorite /> */}
          </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App
