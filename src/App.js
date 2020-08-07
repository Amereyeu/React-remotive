import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Jobs from "./Jobs";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Jobs} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
