import React from "react";
import { NavLink, Link } from "react-router-dom";

class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky">
    		<div className="container">
			    <Link className="navbar-brand" to="/">Contoh</Link>
			    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
			        <span className="mdi mdi-menu"></span>
			    </button>

			    <div className="collapse navbar-collapse" id="navbarCollapse">
			        <ul className="navbar-nav ml-auto">
						<li className="nav-item" activeclassName="active" >
                            <NavLink className="nav-link" to="/" >Home</NavLink>
                        </li>
                        <li className="nav-item" activeclassName="active">
                            <NavLink className="nav-link" to="/services" >Services</NavLink>
                        </li>
                        <li className="nav-item" activeclassName="active">
                            <NavLink className="nav-link" to="/project" >Project</NavLink>
                        </li>
                        <li className="nav-item" activeclassName="active">
                            <NavLink className="nav-link" to="/about" >About</NavLink>
                        </li>
                        <li className="nav-item" activeclassName="active">
                            <NavLink className="nav-link" to="/contact" >Contact</NavLink>
                        </li>

                    </ul>
			    </div>
		    </div>
		</nav>
		);
	}
}

export default Header;
