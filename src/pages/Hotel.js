import React, { useState, useEffect, useRef } from "react";
import ReactCardFlip from "react-card-flip";
import "../Styles/hotel.css";

const Hotel = () => {
    const [hotels, setHotels] = useState([]);
    const [error, setError] = useState(null);
    const [flipped, setFlipped] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const firstHotelRef = useRef(null);

    const fetchHotels = async () => {
        try {
            const response = await fetch("http://localhost:5001/api/hotels");
            if (!response.ok) {
                throw new Error("Failed to fetch hotels");
            }
            const data = await response.json();
            setHotels(data);
            setError(null);
        } catch (error) {
            console.error("Error fetching hotels:", error);
            setError("Failed to fetch hotels. Please try again later.");
        }
    };

    useEffect(() => {
        fetchHotels();
        const intervalId = setInterval(fetchHotels, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const handleClick = (hotelId) => {
        setFlipped(prevState => ({ ...prevState, [hotelId]: !prevState[hotelId] }));
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchClick = () => {
        if (filteredHotels.length > 0 && firstHotelRef.current) {
            firstHotelRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const filteredHotels = hotels.filter(hotel => 
        hotel.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.roomType.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="Hotel">
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Hotel</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Hotel</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="position-relative w-75 mx-auto animated slideInDown" style={{ paddingLeft: "250px" }}>
                    <input
                        className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                        type="text"
                        placeholder="Search..."
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
                        <h6 className="section-title bg-white text-center text-primary px-3">Hotels</h6>
                        <h1 className="mb-5">Popular Hotels</h1>
                    </div>
                    <div className="row g-4">
                        {filteredHotels.length === 0 && (
                            <div className="col-12">
                                <p className="text-center">No hotels found matching your search criteria.</p>
                            </div>
                        )}
                        {filteredHotels.map((hotel, index) => (
                            <div
                                key={hotel._id}
                                className="col-lg-4 col-md-6 wow zoomIn"
                                data-wow-delay="0.3s"
                                ref={index === 0 ? firstHotelRef : null}
                            >
                                <ReactCardFlip isFlipped={flipped[hotel._id]} flipDirection="horizontal" className="Hotel react-card-flip">
                                    <div className="Hotel card fixed-card" onClick={() => handleClick(hotel._id)}>
                                        {hotel.image && (
                                            <img
                                                src={`http://localhost:5001/${hotel.image}`}
                                                className="Hotel fixed-image"
                                                alt={hotel.location}
                                            />
                                        )}
                                    </div>
                                    <div className="Hotel card fixed-card" onClick={() => handleClick(hotel._id)}>
                                        <div className="Hotel card-body fixed-card-body">
                                            <h5 className="card-title">{hotel.location}</h5>
                                            <p className="card-text">Price: {hotel.price}</p>
                                            <p className="card-text">Room Type: {hotel.roomType}</p>
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

export default Hotel;
