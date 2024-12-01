import React from "react";
import "../assests/lib/animate/animate.css";
import "../assests/lib/animate/animate.min.css";
import "https://code.jquery.com/jquery-3.4.1.min.js";
import team1 from "../assests/img/team-1.jpg";
import team2 from "../assests/img/team-2.jpg";
import team3 from "../assests/img/anonymous.png";
import team4 from "../assests/img/team-4.jpg";
import team5 from "../assests/img/team-5.jpg";
import team6 from "../assests/img/team-6.jpg";
import { Link } from "react-router-dom";

const TravelGuide=()=>{
    return(
        
<div>
<div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-3 text-white animated slideInDown">TravelGuide</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="TravelGuide"></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title bg-white text-center text-primary px-3">TravelO Team</h6>
                <h1 class="mb-5">Meet Our Team</h1>
            </div>
 <div class="row g-4">
     <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
         <div class="team-item">
             <div class="overflow-hidden">
                 <img class="img-fluid" src={team1} alt=""/>
             </div>
             <div class="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
             </div>
             <div class="text-center p-4">
                 <h5 class="mb-0">Abdalaziz Hasan</h5>
                 <small>Information System</small>
                 <br/>
                 <small>Front end</small>

             </div>
         </div>
     </div>
     <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
         <div class="team-item">
             <div class="overflow-hidden">
                 <img class="img-fluid" src={team2} alt=""/>
             </div>
             <div class="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
             </div>
             <div class="text-center p-4">
                 <h5 class="mb-0">Mario Emad</h5>
                 <small>Information System</small>
                 <br/>
                 <small>Front end</small>

             </div>
         </div>
     </div>
     <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
         <div class="team-item">
             <div class="overflow-hidden">
                 <img class="img-fluid" src={team3} alt=""/>
             </div>
             <div class="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
             </div>
             <div class="text-center p-4">
                 <h5 class="mb-0">Sama Ahmed</h5>
                 <small>Information System</small>
                 <br/>
                 <small>Front end</small>

             </div>
         </div>
     </div>
    
     <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
         <div class="team-item">
             <div class="overflow-hidden">
                 <img class="img-fluid" src={team4} alt=""/>
             </div>
             <div class="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
             </div>
             <div class="text-center p-4">
                 <h5 class="mb-0">Yahia Mohamed</h5>
                 <small>Information System</small>
                 <br/>
                 <small>Back end</small>

             </div>
         </div>
     </div>
     <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
         <div class="team-item">
             <div class="overflow-hidden">
                 <img class="img-fluid" src={team5} alt=""/>
             </div>
             <div class="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
             </div>
             <div class="text-center p-4">
                 <h5 class="mb-0">Shams Ahmed</h5>
                 <small>Information System</small>
                 <br/>
                 <small>Back end</small>

             </div>
         </div>
     </div>
     <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
         <div class="team-item">
             <div class="overflow-hidden">
                 <img class="img-fluid" src={team6} alt=""/>
             </div>
             <div class="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
             </div>
             <div class="text-center p-4">
                 <h5 class="mb-0">Maria Ashraf </h5>
                 <small>Information System</small>
                 <br/>
                 <small>Back end</small>

                         </div>
                     </div>
                </div>    
            </div>
        </div>
    </div>
        



    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>

            </div>
    )
}
export default TravelGuide ;