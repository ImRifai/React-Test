import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import From from "../components/feature/From";

const TITLE = "Contact Me | " + Config.SITE_TITLE;
const DESC = "Sample page to contact me.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Contact extends React.Component {
	render() {
		return (
            <>
		<section className="bg-2" id="Contact">
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
                                    <div className="heading text-white mb-3">Contact</div>
                                    <p className="para-desc mx-auto text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
        <section className="section" id="contact">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                    <div className="row align-items-center">
                    <div className="col-4">
                        <div className="contact-detail">
                        <i className="mdi mdi-phone text-white shadow bg-custom rounded-pill d-inline-block text-center" />
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="contact-detail">
                        <div className="content d-block overflow-hidden">
                            <h4 className="title mb-0">Call Me</h4>
                            <p className="text-muted mb-0">0213456789</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                    <div className="row align-items-center">
                    <div className="col-4">
                        <div className="contact-detail">
                        <i className="mdi mdi-crosshairs-gps text-white shadow bg-custom rounded-pill d-inline-block text-center" />
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="contact-detail">
                        <div className="content d-block overflow-hidden">
                            <h4 className="title mb-0">Office</h4>
                            <p className="text-muted mb-0">Lorem ipsum dolor <br /> sit amet - 5684</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                    <div className="row align-items-center">
                    <div className="col-4">
                        <div className="contact-detail">
                        <i className="mdi mdi-email text-white shadow bg-custom rounded-pill d-inline-block text-center" />
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="contact-detail">
                        <div className="content d-block overflow-hidden">
                            <h4 className="title mb-0">Send Me</h4>
                            <p className="text-muted mb-0">yourname@example.com</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row justify-content-center mt-4 pt-2">
                <div className="col-lg-12">
                    <div className="custom-form mb-sm-30">
                    <div id="message" />
                    <form method="post" action="#" name="contact-form" id="contact-form">
                        <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="form-group position-relative mb-4">
                            <label htmlFor="name">Your Name <span className="text-danger">*</span> :</label>
                            <input name="name" id="name" type="text" className="form-control" placeholder="Your Name :" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="form-group position-relative mb-4">
                            <label htmlFor="email">Your Email <span className="text-danger">*</span> :</label>
                            <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" />
                            </div> 
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="form-group position-relative mb-4">
                            <label htmlFor="subject">Subject :</label>
                            <input name="subject" id="subject" className="form-control" placeholder="Your subject :" />
                            </div>                                                                               
                        </div>
                        <div className="col-md-12">
                            <div className="form-group position-relative mb-4">
                            <label htmlFor="comments">Your Message <span className="text-danger">*</span> :</label>
                            <textarea name="comments" id="comments" rows={4} className="form-control" placeholder="Your Message :" defaultValue={""} />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-12 text-center">
                            <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom w-100" defaultValue="Send Message" />
                            <div id="simple-msg" />
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
		);
	}
}

export default Contact;
