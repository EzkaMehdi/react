import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/catalog">
            <Catalog />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );


function Home() {
  return (
    <ul>
      <li>A Wrinkle in Time</li>
      <li>The Strangers: Prey at Night</li>
      <li>The Hurricane Heist</li>
      <li>Gringo</li>
    </ul>
  )
}

function Catalog() {
  return <h2>Catalog</h2>;
}

export default App 