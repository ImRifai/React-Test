import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
	render() {
		return (
			
			<footer className="footer py-5 bg-dark">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-12">
						<Link className="footer-logo" to="/">CONTOH</Link>
						<p className="text-foot mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<ul className="list-unstyled social-icon social mb-0 mt-4">
							<li className="list-inline-item"><Link to="#"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
							<li className="list-inline-item"><Link to="#"><i className="mdi mdi-linkedin" title="Linkedin"></i></Link></li>
							<li className="list-inline-item"><Link to="#"><i className="mdi mdi-youtube" title="Youtube"></i></Link></li>
							<li className="list-inline-item"><Link to="#"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
							<li className="list-inline-item"><Link to="#"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
						</ul>
					</div>
	
					<div className="col-lg-3 col-md-5 mt-4 pt-2 mt-lg-0 pt-lg-0">
						<h4 className="text-light text-uppercase footer-head">Address</h4>
						<ul className="list-unstyled text-foot mt-4 mb-0">
							<li>Lorem ipsum dolor sit amet</li>
							<li className="mt-2">Lorem ipsum dolor sit amet</li>
							<li className="mt-2">Lorem ipsum dolor sit amet</li>
							<li className="mt-2">Telp: (021) 123456789</li>
						</ul>
					</div>
	
					<div className="col-lg-3 col-md-4 mt-4 pt-2 mt-lg-0 pt-lg-0">
						<h4 className="text-light text-uppercase footer-head">Business Hours</h4>
						<ul className="list-unstyled text-foot mt-4 mb-0">
							<li>Monday - Friday : 9:00 to 17:00</li>
							<li className="mt-2">Saturday : 10:00 to 15:00</li>
							<li className="mt-2">Sunday : Day Off (Holiday)</li>
						</ul>
					</div>
	
					<div className="col-lg-2 col-md-3 mt-4 pt-2 mt-lg-0 pt-lg-0">
						<h4 className="text-light text-uppercase footer-head">Links</h4>
						<ul className="list-unstyled footer-list mt-4 mb-0">
							<li className="mt-2"><Link to="/about" className="text-foot"><i className="mdi mdi-chevron-right mr-2"></i> About</Link></li>
							<li className="mt-2"><Link to="/services" className="text-foot"><i className="mdi mdi-chevron-right mr-2"></i> Services</Link></li>
							<li className="mt-2"><Link to="/project" className="text-foot"><i className="mdi mdi-chevron-right mr-2"></i> Project</Link></li>
							<li className="mt-2"><Link to="/contact" className="text-foot"><i className="mdi mdi-chevron-right mr-2"></i> Contact</Link></li>
						</ul>
					</div>
	
				</div>
			</div>
			<div className="footer-2">
				<div className="container text-foot text-center">
					<div className="row align-items-center">
						<div className="col-sm-8">
							<div className="text-sm-left">
								<p className="mb-0">2021 © Orayo. Design by Themesdesign</p>
							</div>
						</div>

						<div className="col-sm-4 mt-4 mt-sm-0 pt-2 pt-sm-2">
							<div className="text-sm-right">
								<Link to="#" className="back-to-top rounded d-inline-block text-center" id="back-to-top"> 
									<i className="mdi mdi-chevron-up d-block"> </i> 
								</Link>
							</div>                            
						</div>
					</div>
				</div>
			</div>
			</footer>

			
			
		);
	}
}

export default Footer;
