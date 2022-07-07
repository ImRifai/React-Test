import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Config from "../Config.json";
import CTA from "../components/feature/CTA";

const TITLE = "Home | " + Config.SITE_TITLE;
const DESC = "Create a React App from an HTML Website.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Home extends React.Component {
	render() {
		return (	
            <>
            <section className="bg-home" id="home">
                    <Helmet>
                        <title>{TITLE}</title>
                        <link rel="canonical" href={CANONICAL} />
                        <meta name="description" content={DESC} />
                        <meta name="theme-color" content={Config.THEME_COLOR} />
                    </Helmet>
                <div className="bg-overlay"></div>
                <div className="home-center">
                    <div className="home-desc-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="title-heading text-center mt-5 pt-4">
                                        <h1 className="heading text-white mb-3" style={{color: "red"}}>CONTOH</h1>
                                        <p className="para-desc mx-auto text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                        <div className="mt-4 pt-2">
                                            <Link to="about" className="btn btn-custom">About</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
         <CTA />
         </>
		);
	}
}

export default Home;
