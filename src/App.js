import React from 'react';
import ReactDOM from 'react-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Project from "./pages/Project";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/services" component={Services}/>
					<Route path="/contact" component={Contact}/>
					<Route path="/project" component={Project}/>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
