import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Header = () => {
    return (
        <div>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0" style={{ marginBottom: '100px'}}>
                <a href="" className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><i ></i>TravellO</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to={"/Home"} className="nav-item nav-link ">Home</Link>
                        <Link to={"/About"} className="nav-item nav-link">About</Link>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <Link to={"/Destinations"} className="dropdown-item">Destination</Link>
                                <Link to={"/Hotel"} className="dropdown-item">Hotel</Link>
                                <Link to={"/Booking"} className="dropdown-item">Booking</Link>
                            </div>
                        </div>
                        <Link to={"/Contact"} className="nav-item nav-link">Contact</Link>
                        <Link to={"/"} className="nav-item nav-link">logout</Link>

                    </div>
                    <Link to={"/Regestration"} className="btn btn-primary rounded-pill py-2 px-4">Register</Link>
                </div>
            </nav>
            
           
        </div>
    );
}

export default Header;