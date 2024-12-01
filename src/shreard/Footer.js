import React from "react";
import { Link } from "react-router-dom";
import "../assests/css/bootstrap.min.css";
import "../assests/css/style.css";
import "../assests/lib/animate/animate.css";
import "../assests/lib/animate/animate.min.css";
import "../index.css";
import "../Styles/Footer.css"; // Make sure this path is correct

const Footer = () => {
    return (
        <div>
            <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Company</h4>
                            <Link to={"/About"} className="btn btn-link">About Us</Link>
                            <Link to={"/Contact"} className="btn btn-link">Contact Us</Link>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Contact</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, Cairo, Egypt</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 6789</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>TravellOo24@gmail.com</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3 gallery">Gallery</h4>
                            <div className="row g-2 pt-2">
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1 gallery-img" src={require("../assests/img/5eaa93aaaff3600e402fc67a97b4144c.jpg")} alt="Gallery Image 1" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1 gallery-img" src={require("../assests/img/9c707b0ffd93a9a3268815dbed5b2fb0.jpg")} alt="Gallery Image 2" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1 gallery-img" src={require("../assests/img/d45d9cbebd8393f0d5889b7a1ba1c852.jpg")} alt="Gallery Image 3" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1 gallery-img" src={require("../assests/img/5eaf7c1a5de25e459bf639fcf0f51a26.jpg")} alt="Gallery Image 4" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1 gallery-img" src={require("../assests/img/e3a7ab17cbf37e3c0c6c40cbda1c3d7e.jpg")} alt="Gallery Image 5" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1 gallery-img" src={require("../assests/img/5b715271cd8889713eb61aff72aa3ce9.jpg")} alt="Gallery Image 6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a className="border-bottom" href="#">Travelo</a>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                {/* Additional footer content if needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
