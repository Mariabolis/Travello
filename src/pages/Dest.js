import React, { useState, useEffect, useRef } from "react";
import ReactCardFlip from "react-card-flip";
import "../Styles/dest.css";

const Dest = () => {
    const [trips, setTrips] = useState([]);
    const [error, setError] = useState(null);
    const [flipped, setFlipped] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const firstTripRef = useRef(null);

    // Function to fetch trips from the server
    const fetchTrips = async () => {
        try {
            const response = await fetch("http://localhost:5001/api/trips");
            if (!response.ok) {
                throw new Error("Failed to fetch trips");
            }
            const data = await response.json();
            setTrips(data);
            setError(null); // Reset error if fetching succeeds
        } catch (error) {
            console.error("Error fetching trips:", error);
            setError("Failed to fetch trips. Please try again later.");
        }
    };

    useEffect(() => {
        fetchTrips();
        const intervalId = setInterval(fetchTrips, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const handleClick = (tripId) => {
        setFlipped(prevState => ({ ...prevState, [tripId]: !prevState[tripId] }));
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchClick = () => {
        if (filteredTrips.length > 0 && firstTripRef.current) {
            firstTripRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const filteredTrips = trips.filter(trip => 
        trip.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trip.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="Dest">
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Destination</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Destination</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="position-relative w-75 mx-auto animated slideInDown" style={{ paddingLeft: "220px" }}>
                    <input
                        className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                        type="text"
                        placeholder="cairo..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <button
                        id="buttonStyle"
                        type="button"
                        className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                        onClick={handleSearchClick}
                    >
                        Search
                    </button>
                </div>
            </div>
            {error && <div>Error: {error}</div>}
            
            <div className="container-xxl py-5 destination">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Destination</h6>
                        <h1 className="mb-5">Popular Destination</h1>
                    </div>
                    <div className="row g-4">
                        {filteredTrips.length === 0 && (
                            <div className="col-12">
                                <p className="text-center">No destinations found matching your search criteria.</p>
                            </div>
                        )}
                        {filteredTrips.map((trip, index) => (
                            <div
                                key={trip._id}
                                className="col-lg-4 col-md-6 wow zoomIn"
                                data-wow-delay="0.3s"
                                ref={index === 0 ? firstTripRef : null}
                            >
                                <ReactCardFlip isFlipped={flipped[trip._id]} flipDirection="horizontal" className="Dest react-card-flip">
                                    <div className="Dest card fixed-card" onClick={() => handleClick(trip._id)}>
                                        {trip.image && (
                                            <img
                                                src={`http://localhost:5001/${trip.image}`}
                                                className="Dest fixed-image"
                                                alt={trip.destination}
                                            />
                                        )}
                                    </div>
                                    <div className="Dest card fixed-card" onClick={() => handleClick(trip._id)}>
                                        <div className="Dest card-body fixed-card-body">
                                            <h5 className="card-title">{trip.destination}</h5>
                                            <p className="card-text">{trip.price}</p>
                                            <p className="card-text">{trip.description}</p>
                                            <p className="card-text">Start Date: {new Date(trip.startDate).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                </ReactCardFlip>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    );
};

export default Dest;
