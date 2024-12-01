import React from "react";
import "../assests/lib/animate/animate.css";
import "../assests/lib/animate/animate.min.css";
import { Link } from "react-router-dom";
import img12 from "../assests/img/testimonial-1.jpg";
import img13 from "../assests/img/testimonial-2.jpg";
import img14 from "../assests/img/testimonial-3.jpg";
import img15 from "../assests/img/testimonial-4.jpg";

const Services = () => {
    return (
        <div>
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Services</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-xxl py-5">
            <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center text-primary px-3">Services</h6>
            <h1 class="mb-5">Our Services</h1>
        </div>
        <div class="row g-4 justify-content-center">
            <div class="col-lg-3 col-sm-6 wow fadeInUp " data-wow-delay="0.1s">
                <a href="/Destinations" class="service-item rounded pt-3 d-block text-center">
                    <div class="p-4" style={{color:"grey"}}>
                        <i class="fa fa-3x fa-globe text-primary mb-4"></i>
                        <h5>Egypt Tours</h5>
                        <p>Discover Egypt's charming governorates with fun experiences</p>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                <a href="/Hotel" class="service-item rounded pt-3 d-block text-center">
                    <div class="p-4" style={{color:"grey"}}>
                        <i class="fa fa-3x fa-hotel text-primary mb-4"></i>
                        <h5>Hotel Reservation</h5>
                        <p>We provide you with 5-star hotel reservations with great service</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
            <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>


        </div>
    )
}

export default Services;