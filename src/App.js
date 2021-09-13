import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
export default function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}
