import React from "react";
import "../assests/lib/animate/animate.css";
import "../assests/lib/animate/animate.min.css";
import "https://code.jquery.com/jquery-3.4.1.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import img12 from "../assests/img/testimonial-1.jpg";
import img13 from "../assests/img/testimonial-2.jpg";
import img14 from "../assests/img/testimonial-3.jpg";
import img15 from "../assests/img/testimonial-4.jpg";

const Testimonial=()=>{
    return(
        <div>
                <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Testimonial</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>         
                <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="text-center">
                            <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                            <h1 className="mb-5">Our Clients Say!!!</h1>
                        </div>
                        <div className="owl-carousel testimonial-carousel position-relative">
                            <div className="testimonial-item bg-white text-center border p-4">
                                <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={img12} style={{width: '80px; height: 80px'}}/>
                                <h5 className="mb-0">Sarah Ahmed</h5>
                                <p>Cairo, Egypt</p>
                                <p className="mb-0">Thank you TravelO for the great service,
                                Made our holiday so enjoyable definitely be recommending to our family and friends.</p>
                            </div>
                            <div className="testimonial-item bg-white text-center border p-4">
                                <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={img13} style={{width: '80px; height: 80px'}}/>
                                <h5 className="mb-0">Mark Raafat</h5>
                                <p>Cairo, Egypt</p>
                                <p className="mt-2 mb-0">Easy to book through, good communication and response to questions would book again through travel online.</p>
                            </div>
                            <div className="testimonial-item bg-white text-center border p-4">
                                <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={img14} style={{width: '80px; height: 80px'}}/>
                                <h5 className="mb-0">Andrew James</h5>
                                <p>New York, USA</p>
                                <p className="mt-2 mb-0">Good deal, easy throughout and valve for money. I will rate TravelO 5/5.</p>
                            </div>
                            <div className="testimonial-item bg-white text-center border p-4">
                                <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={img15} style={{width: '80px; height: 80px'}}/>
                                <h5 className="mb-0">Nada Nabil</h5>
                                <p>Giza, Egypt</p>
                                <p className="mt-2 mb-0">Very helpful and made the process very easy.</p>
                            </div>
                        </div>
                    </div>
                </div>
    
        </div>
    )
}
export default Testimonial ;