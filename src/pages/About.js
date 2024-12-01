import React from "react";
import "../assests/lib/animate/animate.css";
import "../assests/lib/animate/animate.min.css";
import { Link } from "react-router-dom";
import team1 from "../assests/img/team-1.jpg";
import team2 from "../assests/img/team-2.jpg";
import team3 from "../assests/img/anonymous.png";
import team4 from "../assests/img/team-4.jpg";
import team5 from "../assests/img/team-5.jpg";
import team6 from "../assests/img/team-6.jpg";
import img1 from "../assests/img/about.jpg";
import img8 from "../assests/img/team-1.jpg";
import img9 from "../assests/img/team-2.jpg";
import img10 from "../assests/img/team-3.jpg";
import img11 from "../assests/img/team-4.jpg";
import video1 from "../assests/img/c9552b2b3539a59bc3316bb051142d53.mp4"; // Example video file

const About = () => {
    return (
        <div>
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-3 text-white animated slideInDown">About</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div id="about-style-1" className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="position-relative h-100">
                                <video id="about-video-1" className="video-fluid position-absolute w-100 h-100" autoPlay src={video1} muted style={{ objectFit: 'cover' }}></video>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h6 className="section-title bg-white text-center text-primary pe-3 " style={{ marginLeft: 212 + 'px' }}>About Us</h6>
                            <h1 className="mb-4 text-center">Welcome to <span className="text-primary">Travello</span></h1>
                            <p className="mb-4 text-center">Where it offers a unique travel agency experience</p> <p className="mb-4 text-center">One of Travello's key strengths is its user-friendly interface, which makes it easy for travelers to browse destinations, hotels, and book their trips with just a few clicks. The website also features a robust search engine that allows users to filter their results based on various criteria, such as travel dates, budget, and preferences.</p>
                            <div className="row gy-2 gx-4 mb-4 ">
                                <div className="col-sm-6 text-center">
                                    <p className="mb-0 "><i className="fa fa-arrow-right text-primary me-2"></i>First Class Flights</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Handpicked Hotels</p>
                                </div>

                                <div className="col-sm-6  " style={{ paddingLeft: 63 + 'px' }}>
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i><span  >27 Premium City Tours</span></p>   </div>                             <div className="col-sm-6 ">
                                    <p className="mb-0 "><i className="fa fa-arrow-right text-primary me-2 "></i>24/7 Service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">TravelO Team</h6>
                        <h1 className="mb-5">Meet Our Team</h1>
                    </div>
                    <div className="row g-4 justify-content-center">

                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={team5} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                    <a className="btn btn-square mx-1" href="https://www.facebook.com/profile.php?id=100034520072496&mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href="https://www.instagram.com/shams.ahmed.21?igsh=MXUwaGRtb2VpYmxoMA=="><i className="fab fa-instagram"></i></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Shams Ahmed</h5>
                                    <small>Information System</small>
                                    <br />
                                    <small>Backend end</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={team6} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                    <a className="btn btn-square mx-1" href="https://www.facebook.com/maria.ashraf.129?mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href="https://www.instagram.com/maria_ashraf2002?igsh=MXF3NHo4dDc5dXg3"><i className="fab fa-instagram"></i></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Maria Ashraf</h5>
                                    <small>Information System</small>
                                    <br />
                                    <small>Backend</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={team4} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                    <a className="btn btn-square mx-1" href="https://www.facebook.com/yahiamohamed.me?mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href="https://www.instagram.com/yahiamuhamed__?igsh=azUyamg5Nnh4MzVx"><i className="fab fa-instagram"></i></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Yahia Mohamed</h5>
                                    <small>Information System</small>
                                    <br />
                                    <small>Back end</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={team3} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                    <a className="btn btn-square mx-1" href="https://www.facebook.com/profile.php?id=100007848797639&mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href="https://www.instagram.com/sama_khattab6?igsh=aGJhbGp5YTF6YXdk"><i className="fab fa-instagram"></i></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Sama Ahmed</h5>
                                    <small>Information System</small>
                                    <br />
                                    <small>Front end</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={team1} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                    <a className="btn btn-square mx-1" href="https://www.facebook.com/abdalaziz.helal.3?mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href="https://www.instagram.com/abdalaziz_helal?igsh=MTNoYXpzajBxOWdyNQ=="><i className="fab fa-instagram"></i></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Abdelaziz Hassan</h5>
                                    <small>Information System</small>
                                    <br />
                                    <small>Front end</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={team2} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                    <a className="btn btn-square mx-1" href="https://www.facebook.com/profile.php?id=100008437397878&mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href="https://www.instagram.com/mario.emadd?igsh=MWJobmVjNTh2MjYyaw=="><i className="fab fa-instagram"></i></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Mario Emad</h5>
                                    <small>Information System</small>
                                    <br />
                                    <small>Front end</small>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    );
};

export default About;
