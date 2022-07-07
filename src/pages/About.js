import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import CTA from "../components/feature/CTA";


const TITLE = "About | " + Config.SITE_TITLE;
const DESC = "Sample page about me.";
const CANONICAL = Config.SITE_DOMAIN + "/";
class About extends React.Component {
	render() {
		return (
			<>
         <section className="bg-1" id="About">
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
                            <div className="col-lg-10">
                                <div className="title-heading text-center mt-5 pt-4">
                                    <div className="heading text-white mb-3">About</div>
                                    <p className="para-desc mx-auto text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">               
                <div className="row mt-4">
                    <div className="col-12">
                        <ul className="nav nav-pills nav-justified" id="pills-tab" role="tablist">
                            
                            <li className="nav-item mb-4 pt-2">
                                <a className="nav-link active" id="pills-cloud-tab" data-toggle="pill" href="#pills-cloud" role="tab" aria-controls="pills-cloud" aria-selected="false">
                                    <div className="capabilities text-center rounded pt-2 pb-2">
                                        <div className="icon bg-custom mb-3">
                                            <i className="mdi mdi-cloud-outline text-white"></i>
                                        </div>
                                        <div className="title font-weight-normal mb-0">Lorem < br/> ipsum 1</div>
                                    </div>
                                </a>
                            </li>
                            
                            <li className="nav-item mb-4 pt-2">
                                <a className="nav-link" id="pills-smart-tab" data-toggle="pill" href="#pills-smart" role="tab" aria-controls="pills-smart" aria-selected="false">
                                    <div className="capabilities text-center rounded pt-2 pb-2">
                                        <div className="icon bg-custom mb-3">
                                            <i className="mdi mdi-laptop text-white"></i>
                                        </div>
                                        <div className="title font-weight-normal mb-0">Lorem < br/> ipsum 2</div>
                                    </div>
                                </a>
                            </li>
                            
                            <li className="nav-item mb-4 pt-2">
                                <a className="nav-link" id="pills-apps-tab" data-toggle="pill" href="#pills-apps" role="tab" aria-controls="pills-apps" aria-selected="false">
                                    <div className="capabilities text-center rounded pt-2 pb-2">
                                        <div className="icon bg-custom mb-3">
                                            <i className="mdi mdi-cart-outline text-white"></i>
                                        </div>
                                        <div className="title font-weight-normal mb-0">Lorem < br/> ipsum 3</div>
                                    </div>
                                </a>
                            </li>

                            <li className="nav-item mb-4 pt-2">
                                <a className="nav-link" id="pills-intelligence-tab" data-toggle="pill" href="#pills-intelligence" role="tab" aria-controls="pills-intelligence" aria-selected="false">
                                    <div className="capabilities text-center rounded pt-2 pb-2">
                                        <div className="icon bg-custom mb-3">
                                            <i className="mdi mdi-lightbulb-outline text-white"></i>
                                        </div>
                                        <div className="title font-weight-normal mb-0">Lorem < br/> ipsum 4</div>
                                    </div>
                                </a>
                            </li>

                            <li className="nav-item mb-4 pt-2">
                                <a className="nav-link" id="pills-automation-tab" data-toggle="pill" href="#pills-automation" role="tab" aria-controls="pills-automation" aria-selected="false">
                                    <div className="capabilities text-center rounded pt-2 pb-2">
                                        <div className="icon bg-custom mb-3">
                                            <i className="mdi mdi-recycle text-white"></i>
                                        </div>
                                        <div className="title font-weight-normal mb-0">Lorem < br/> ipsum 5</div>
                                    </div>
                                </a>
                            </li>

                            <li className="nav-item mb-4 pt-2">
                                <a className="nav-link" id="pills-time-tab" data-toggle="pill" href="#pills-time" role="tab" aria-controls="pills-time" aria-selected="false">
                                    <div className="capabilities text-center rounded pt-2 pb-2">
                                        <div className="icon bg-custom mb-3">
                                            <i className="mdi mdi-account-clock text-white"></i>
                                        </div>
                                        <div className="title font-weight-normal mb-0">Lorem < br/> ipsum 6</div>
                                    </div>
                                </a>
                            </li>
                        </ul>

                        <div className="tab-content mt-3" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-cloud" role="tabpanel" aria-labelledby="pills-cloud-tab">
                                <div className="capabilities-content border rounded p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <h4 className="title">Lorem ipsum 1</h4>
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <ul className="list-unstyled mb-0">
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                            </ul>
                                        </div>

                                        <div className="col-md-6 mt-4 pt-2">
                                        <img className="img-fluid d-block mx-auto" src={`${process.env.PUBLIC_URL}/images/feature/1.svg`} alt="logo"/> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="pills-smart" role="tabpanel" aria-labelledby="pills-smart-tab">
                                <div className="capabilities-content border rounded p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <h4 className="title">Lorem ipsum 2</h4>
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <ul className="list-unstyled mb-0">
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                            </ul>
                                        </div>

                                        <div className="col-md-6 mt-4 pt-2">
                                        <img className="img-fluid d-block mx-auto" src={`${process.env.PUBLIC_URL}/images/feature/2.svg`} alt="logo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-apps" role="tabpanel" aria-labelledby="pills-apps-tab">
                                <div className="capabilities-content border rounded p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <h4 className="title">Lorem ipsum 3</h4>
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <ul className="list-unstyled mb-0">
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                            </ul>
                                        </div>

                                        <div className="col-md-6 mt-4 pt-2">
                                        <img className="img-fluid d-block mx-auto" src={`${process.env.PUBLIC_URL}/images/feature/3.svg`} alt="logo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-intelligence" role="tabpanel" aria-labelledby="pills-intelligence-tab">
                                <div className="capabilities-content border rounded p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <h4 className="title">Lorem ipsum 4</h4>
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <ul className="list-unstyled mb-0">
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                            </ul>
                                        </div>

                                        <div className="col-md-6 mt-4 pt-2">
                                        <img className="img-fluid d-block mx-auto" src={`${process.env.PUBLIC_URL}/images/feature/4.svg`} alt="logo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-automation" role="tabpanel" aria-labelledby="pills-automation-tab">
                                <div className="capabilities-content border rounded p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <h4 className="title">Lorem ipsum 5</h4>
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <ul className="list-unstyled mb-0">
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                            </ul>
                                        </div>

                                        <div className="col-md-6 mt-4 pt-2">
                                        <img className="img-fluid d-block mx-auto" src={`${process.env.PUBLIC_URL}/images/feature/5.svg`} alt="logo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-time" role="tabpanel" aria-labelledby="pills-time-tab">
                                <div className="capabilities-content border rounded p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <h4 className="title">Lorem ipsum 6</h4>
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <ul className="list-unstyled mb-0">
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                                <li className="mt-2"><i className="mdi mdi-album mr-3 text-custom"></i>Lorem ipsum dolor sit amet</li>
                                            </ul>
                                        </div>

                                        <div className="col-md-6 mt-4 pt-2">
                                            <img className="img-fluid d-block mx-auto" src={`${process.env.PUBLIC_URL}/images/feature/6.svg`} alt="logo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>

            <section className="section bg-two" id="team">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title">
                                <div className="title text-uppercase mb-4">Our Team</div>
                                <p className="text-muted mx-auto para-desc mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="team-detail bg-light rounded text-center p-3 pb-4">
                                <div className="image position-relative">
                                    <img className="avatar avatar-medium rounded-pill" src={`${process.env.PUBLIC_URL}/images/team/01.jpg`} alt="logo"/>
                                </div>
                                <div className="content mt-3">
                                    <div className="name mb-0">Johnny</div>
                                    <div className="designation text-muted font-weight-normal">C.E.O.</div>
                                    <p className="text-muted font-italic mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    <ul className="list-unstyled social-icon mb-0 mt-4">
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-youtube" title="Youtube"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="team-detail bg-light rounded text-center p-3 pb-4">
                                <div className="image position-relative">
                                <img className="avatar avatar-medium rounded-pill" src={`${process.env.PUBLIC_URL}/images/team/02.jpg`} alt="logo"/>
                                </div>
                                <div className="content mt-3">
                                    <div className="name mb-0">Johnny</div>
                                    <div className="designation text-muted font-weight-normal">C.E.O.</div>
                                    <p className="text-muted font-italic mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                    <ul className="list-unstyled social-icon mb-0 mt-4">
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-youtube" title="Youtube"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="team-detail bg-light rounded text-center p-3 pb-4">
                                <div className="image position-relative">
                                <img className="avatar avatar-medium rounded-pill" src={`${process.env.PUBLIC_URL}/images/team/03.jpg`} alt="logo"/>
                                </div>
                                <div className="content mt-3">
                                    <div className="name mb-0">Johnny</div>
                                    <div className="designation text-muted font-weight-normal">C.E.O.</div>
                                    <p className="text-muted font-italic mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    <ul className="list-unstyled social-icon mb-0 mt-4">
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-youtube" title="Youtube"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="team-detail bg-light rounded text-center p-3 pb-4">
                                <div className="image position-relative">
                                <img className="avatar avatar-medium rounded-pill" src={`${process.env.PUBLIC_URL}/images/team/04.jpg`} alt="logo"/>
                                </div>
                                <div className="content mt-3">
                                    <div className="name mb-0">Johnny</div>
                                    <div className="designation text-muted font-weight-normal">C.E.O.</div>
                                    <p className="text-muted font-italic mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    <ul className="list-unstyled social-icon mb-0 mt-4">
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-youtube" title="Youtube"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                                    </ul>
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

export default About;
