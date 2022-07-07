import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
	render() {
		return (
			<nav class="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky">
    		<div class="container">
			    <a class="navbar-brand" href="index.html">Contoh</a>
			    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
			        <span class="mdi mdi-menu"></span>
			    </button>

			    <div class="collapse navbar-collapse" id="navbarCollapse">
			        <ul class="navbar-nav ml-auto">
					<li className="nav-item" exact activeclassNameName="active">
                            <NavLink className="nav-link" to="/" >Home</NavLink>
                        </li>
                        <li className="nav-item" activeclassNameName="active">
                            <NavLink className="nav-link" to="/services" >Services</NavLink>
                        </li>
                        <li className="nav-item" activeclassNameName="active">
                            <NavLink className="nav-link" to="/project" >Project</NavLink>
                        </li>
                        <li className="nav-item" activeclassNameName="active">
                            <NavLink className="nav-link" to="/about" >About</NavLink>
                        </li>
                        <li className="nav-item" activeclassNameName="active">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
			    </div>
		    </div>
		</nav>
		);
	}
}

export default Header;
