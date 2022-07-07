import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import CTA from "../components/feature/CTA";

const TITLE = "Project | " + Config.SITE_TITLE;
const DESC = "Sample page to Project.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Project extends React.Component {
	render() {
		return (
            <>
	<section className="bg-3" id="Project">
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
                                    <div className="heading text-white mb-3">Project</div>
                                    <p className="para-desc mx-auto text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
        <section class="section bg-light" id="project">
        <div class="container">

            <div class="row justify-content-center mt-4 pt-2">
                <div class="col-lg-8">
                    <div class="text-center">
                        <ul class="col container-filter portfolioFilter list-inline list-unstyled mb-0" id="filter">
                            <li class="list-inline-item mb-2"><a class="categories pr-4 pl-4 border rounded active" data-filter="*">All</a></li>
                            <li class="list-inline-item mb-2"><a class="categories pr-4 pl-4 border rounded" data-filter=".apps">Lorem</a></li>
                            <li class="list-inline-item mb-2"><a class="categories pr-4 pl-4 border rounded" data-filter=".ui">Lorem</a></li>
                            <li class="list-inline-item mb-2"><a class="categories pr-4 pl-4 border rounded" data-filter=".illus">Lorem</a></li>
                            <li class="list-inline-item mb-2"><a class="categories pr-4 pl-4 border rounded" data-filter=".brand">Lorem</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-4 pt-3">
            <div class="portfolioContainer row">
                <div class="col-lg-3 col-md-6 p-0 apps">
                    <div class="portfolio-box position-relative overflow-hidden mt-0 mb-0">                                
                        <a class="mfp-image" href="images/project/01.jpg" title="Project Name">
                            <div class="work-img position-relative overflow-hidden">
                            <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/project/01.jpg`} alt="logo"/>
                                <div class="work-detail">
                                    <div class="content">
                                        <h5 class="text-light title mb-0">Project Title</h5>
                                        <small class="text-light">Client Name</small>
                                    </div>
                                </div>
                            </div>  
                        </a>                              
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6 p-0 ui">
                    <div class="portfolio-box position-relative overflow-hidden mt-0 mb-0">                                
                        <a class="mfp-image" href="images/project/02.jpg" title="Project Name">
                            <div class="work-img position-relative overflow-hidden">
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/project/02.jpg`} alt="logo"/>
                                <div class="work-detail">
                                    <div class="content">
                                        <h5 class="text-light title mb-0">Project Title</h5>
                                        <small class="text-light">Client Name</small>
                                    </div>
                                </div>
                            </div>  
                        </a>                              
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6 p-0 illus">
                    <div class="portfolio-box position-relative overflow-hidden mt-0 mb-0">                                
                        <a class="mfp-image" href="images/project/03.jpg" title="Project Name">
                            <div class="work-img position-relative overflow-hidden">
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/project/03.jpg`} alt="logo"/>
                                <div class="work-detail">
                                    <div class="content">
                                        <h5 class="text-light title mb-0">Project Title</h5>
                                        <small class="text-light">Client Name</small>
                                    </div>
                                </div>
                            </div>  
                        </a>                              
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6 p-0 brand">
                    <div class="portfolio-box position-relative overflow-hidden mt-0 mb-0">                                
                        <a class="mfp-image" href="images/project/04.jpg" title="Project Name">
                            <div class="work-img position-relative overflow-hidden">
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/project/04.jpg`} alt="logo"/>
                                <div class="work-detail">
                                    <div class="content">
                                        <h5 class="text-light title mb-0">Project Title</h5>
                                        <small class="text-light">Client Name</small>
                                    </div>
                                </div>
                            </div>  
                        </a>                              
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6 p-0 apps">
                    <div class="portfolio-box position-relative overflow-hidden mt-0 mb-0">                                
                        <a class="mfp-image" href="images/project/05.jpg" title="Project Name">
                            <div class="work-img position-relative overflow-hidden">
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/project/05.jpg`} alt="logo"/>
                                <div class="work-detail">
                                    <div class="content">
                                        <h5 class="text-light title mb-0">Project Title</h5>
                                        <small class="text-light">Client Name</small>
                                    </div>
                                </div>
                            </div>  
                        </a>                              
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6 p-0 ui brand">
                    <div class="portfolio-box position-relative overflow-hidden mt-0 mb-0">                                
                        <a class="mfp-image" href="images/project/06.jpg" title="Project Name">
                            <div class="work-img position-relative overflow-hidden">
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/project/06.jpg`} alt="logo"/>
                                <div class="work-detail">
                                    <div class="content">
                                        <h5 class="text-light title mb-0">Project Title</h5>
                                        <small class="text-light">Client Name</small>
                                    </div>
                                </div>
                            </div>  
                        </a>                              
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6 p-0 illus">
                    <div class="portfolio-box position-relative overflow-hidden mt-0 mb-0">                                
                        <a class="mfp-image" href="images/project/07.jpg" title="Project Name">
                            <div class="work-img position-relative overflow-hidden">
                            <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/project/06.jpg`} alt="logo"/>
                                <div class="work-detail">
                                    <div class="content">
                                        <h5 class="text-light title mb-0">Project Title</h5>
                                        <small class="text-light">Client Name</small>
                                    </div>
                                </div>
                            </div>  
                        </a>                              
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

export default Project;
