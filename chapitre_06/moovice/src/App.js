import React from "react";
import Bootstrap from '../src/bootstrap.min.css'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
  


export class App extends Component {
	render() {
  
		return (
			<Router>
			  <div>
				<nav>
				  <ul>
					<li>
					  <Link to="/favorites">favorites</Link>
					</li>
					<li>
					  <Link to="/home">Home</Link>
					</li>
					<li>
					  <Link to="/popular-battle">popular battle</Link>
					</li>
					<li>
					  <Link to="/popular">popular</Link>
					</li>
					<li>
					  <Link to="/weekly-battle">weekly battle</Link>
					</li>
					<li>
					  <Link to="/weekly">weekly</Link>
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
	}
  }
  
  export default App