import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
export default function App() {
	return (
		<div>
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</div>
	);
}
