import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import CTA from "../components/feature/CTA";

const TITLE = "Services | " + Config.SITE_TITLE;
const DESC = "Sample page to Services.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Services extends React.Component {
	render() {
		return (
            <>
		<section className="bg-4" id="services">
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
                                    <div className="heading text-white mb-3">Services</div>
                                    <p className="para-desc mx-auto text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
        <section class="section bg-light" id="offer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 mt-5 pt-4">
                    <div class="services border pt-5 p-4 rounded bg-white">
                        <div class="icon position-relative border rounded bg-white mb-4">
                            <i class="mdi mdi-star-outline"></i>
                        </div>
                        <div class="content">
                            <h4 class="title mb-3">Lorem ipsum</h4>
                            <p class="text-muted"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#" class="text-custom">Read More <i class="mdi mdi-chevron-right"></i> </a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 mt-5 pt-4">
                    <div class="services border pt-5 p-4 rounded bg-white">
                        <div class="icon position-relative border rounded bg-white mb-4">
                            <i class="mdi mdi-charity"></i>
                        </div>
                        <div class="content">
                            <h4 class="title mb-3">Lorem ipsum</h4>
                            <p class="text-muted"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#" class="text-custom">Read More <i class="mdi mdi-chevron-right"></i> </a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 mt-5 pt-4">
                    <div class="services border pt-5 p-4 rounded bg-white">
                        <div class="icon position-relative border rounded bg-white mb-4">
                            <i class="mdi mdi-pen"></i>
                        </div>
                        <div class="content">
                            <h4 class="title mb-3">Lorem ipsum</h4>
                            <p class="text-muted"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#" class="text-custom">Read More <i class="mdi mdi-chevron-right"></i> </a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 mt-5 pt-4">
                    <div class="services border pt-5 p-4 rounded bg-white">
                        <div class="icon position-relative border rounded bg-white mb-4">
                            <i class="mdi mdi-responsive"></i>
                        </div>
                        <div class="content">
                            <h4 class="title mb-3">Lorem ipsum</h4>
                            <p class="text-muted"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#" class="text-custom">Read More <i class="mdi mdi-chevron-right"></i> </a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 mt-5 pt-4">
                    <div class="services border pt-5 p-4 rounded bg-white">
                        <div class="icon position-relative border rounded bg-white mb-4">
                            <i class="mdi mdi-lifebuoy"></i>
                        </div>
                        <div class="content">
                            <h4 class="title mb-3">Lorem ipsum</h4>
                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#" class="text-custom">Read More <i class="mdi mdi-chevron-right"></i> </a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 mt-5 pt-4">
                    <div class="services border pt-5 p-4 rounded bg-white">
                        <div class="icon position-relative border rounded bg-white mb-4">
                            <i class="mdi mdi-laptop"></i>
                        </div>
                        <div class="content">
                            <h4 class="title mb-3">Lorem ipsum</h4>
                            <p class="text-muted"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#" class="text-custom">Read More <i class="mdi mdi-chevron-right"></i> </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section bg-two" id="price">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-12 text-center">
                <div className="section-title">
                <h4 className="title text-uppercase mb-4">Lorem ipsum</h4>
                <p className="text-muted mx-auto para-desc mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                </div>
            </div>
            </div>
            <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 p-lg-0 mt-4 pt-2">
                <div className="pricing-table border rounded bg-white text-center">
                <h6 className="pricing-plan rounded-top text-uppercase bg-light p-3 mb-0">
                    Basic
                </h6>
                <div className="price-value border-bottom py-4">
                    <h3 className="mb-0 font-weight-normal">$0</h3>
                    <h6 className="text-capitalize font-weight-normal mb-0">Monthly</h6>
                </div>
                <div className="pricing-features py-4 px-5">
                    <ul className="list-unstyled">
                    <li>Full Access</li>
                    <li className="border-top pt-2 mt-2">Lorem ipsum</li>
                    <li className="border-top pt-2 mt-2">Lorem ipsum</li>
                    <li className="border-top pt-2 mt-2">Lorem ipsum</li>
                    <li className="border-top pt-2 mt-2">Lorem ipsum</li>
                    </ul>
                    <a href="contact.html" className="btn btn-dark w-100 mt-2">
                    Contact
                    </a>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 p-lg-0 mt-4 pt-2">
                <div className="pricing-table border rounded business-plan position-relative bg-white text-center">
                <h6 className="pricing-plan rounded-top text-uppercase bg-custom text-light p-3 mb-0">
                    Standerd
                </h6>
                <div className="price-value border-bottom py-4">
                    <h3 className="mb-0 font-weight-normal">$199</h3>
                    <h6 className="text-capitalize font-weight-normal mb-0">Monthly</h6>
                </div>
                <div className="pricing-features py-4 px-5">
                    <ul className="list-unstyled">
                    <li>Full Access</li>
                    <li className="border-top pt-2 mt-2">Lorem ipsum</li>
                    <li className="border-top pt-2 mt-2">Lorem ipsum</li>
                    <li className="border-top pt-2 mt-2">Lorem ipsum</li>
                    <li className="border-top pt-2 mt-2">Lorem ipsum</li>
                    <li className="border-top pt-2 mt-2">Lorem ipsum</li>
                    </ul>
                    <a href="contact.html" className="btn btn-custom w-100 mt-2">
                    Contact
                    </a>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 p-lg-0 mt-4 pt-2">
                <div className="pricing-table border rounded bg-white text-center">
                <h6 className="pricing-plan rounded-top text-uppercase bg-light p-3 mb-0">
                    Premium
                </h6>
                <div className="price-value border-bottom py-4">
                    <h3 className="mb-0 font-weight-normal">$299</h3>
                    <h6 className="text-capitalize font-weight-normal mb-0">Monthly</h6>
                </div>
                <div className="pricing-features py-4 px-5">
                    <ul className="list-unstyled">
                    <li>Full Access</li>
                    <li className="border-top pt-2 mt-2">Lorem ipsum</li>
                    <li className="border-top pt-2 mt-2">Lorem ipsum</li>
                    <li className="border-top pt-2 mt-2">Lorem ipsum</li>
                    <li className="border-top pt-2 mt-2">Lorem ipsum</li>
                    </ul>
                    <a href="contact.html" className="btn btn-dark w-100 mt-2">
                    Contact
                    </a>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 p-lg-0 mt-4 pt-2">
                <div className="pricing-table border rounded bg-white text-center">
                <h6 className="pricing-plan rounded-top text-uppercase bg-light p-3 mb-0">
                    Professional
                </h6>
                <div className="price-value border-bottom py-4">
                    <h3 className="mb-0 font-weight-normal">$499</h3>
                    <h6 className="text-capitalize font-weight-normal mb-0">Monthly</h6>
                </div>
                <div className="pricing-features py-4 px-5">
                    <ul className="list-unstyled">
                    <li>Full Access</li>
                    <li className="border-top pt-2 mt-2">Lorem ipsum</li>
                    <li className="border-top pt-2 mt-2">Lorem ipsum</li>
                    <li className="border-top pt-2 mt-2">Lorem ipsum</li>
                    <li className="border-top pt-2 mt-2">Lorem ipsum</li>
                    </ul>
                    <a href="contact.html" className="btn btn-dark w-100 mt-2">
                    Contact
                    </a>
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

export default Services;
