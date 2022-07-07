import React from 'react'
import { Link } from "react-router-dom";

function CTA() {
    return (
        <section class="section-two bg-custom contact-cta">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 col-md-8 col-12">
                        <div class="intro-text">
                            <h4 class="text-capitalize text-light title mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                            <p class="text-light mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-4 col-12  mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="contact-cta-button text-right">
                            <Link to="/contact" class="btn btn-dark">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default CTA;