import React, { useState, useEffect } from "react";
import "../assests/lib/animate/animate.css";
import "../assests/lib/animate/animate.min.css";
import "../Styles/booking.css";
import bookingImage from "../assests/img/5ebbcd1c1b4434dbadee2cd618dd14a1.jpg"; // Import the image

const Book = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [trips, setTrips] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [selectedTrip, setSelectedTrip] = useState("");
    const [selectedHotel, setSelectedHotel] = useState("");
    const [bookings, setBookings] = useState([]);
    const [isUpdating, setIsUpdating] = useState(false);
    const [updateIndex, setUpdateIndex] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userId, setUserId] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5001/api/user/${userId}/bookings`)
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setBookings(data);
                } else {
                    setBookings([]);
                }
            })
            .catch((error) => {
                console.error("Error fetching user's bookings:", error);
                setError("Failed to fetch user's bookings. Please try again later.");
            });

        fetch("http://localhost:5001/api/trips")
            .then((response) => response.json())
            .then((data) => {
                setTrips(data);
            })
            .catch((error) => {
                console.error("Error fetching destination:", error);
                setError("Failed to fetch destinations. Please try again later.");
            });

        fetch("http://localhost:5001/api/hotels")
            .then((response) => response.json())
            .then((data) => {
                setHotels(data.map((hotel) => hotel.location));
            })
            .catch((error) => {
                console.error("Error fetching hotels:", error);
                setError("Failed to fetch hotels. Please try again later.");
            });
    }, [userId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch("http://localhost:5001/api/booking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName: name,
                email: email,
                destination: selectedTrip,
                hotel: selectedHotel,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setBookings([...bookings, data]);
                resetForm();
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    };

    const handleUpdateBooking = (index) => {
        setLoading(true);
        const bookingToUpdate = bookings[index];
        fetch(`http://localhost:5001/api/booking/${bookingToUpdate._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName: name,
                email: email,
                destination: selectedTrip,
                hotel: selectedHotel,
            }),
        })
            .then((response) => response.json())
            .then((updatedBooking) => {
                const updatedBookings = [...bookings];
                updatedBookings[index] = updatedBooking;
                setBookings(updatedBookings); // Update the state with the new booking data
                setIsUpdating(false);
                setUpdateIndex(null);
                resetForm();
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    };

    const handleDeleteBooking = (index) => {
        setLoading(true);
        const bookingToDelete = bookings[index];
        fetch(`http://localhost:5001/api/booking/${bookingToDelete._id}`, {
            method: "DELETE",
        })
            .then(() => {
                const updatedBookings = bookings.filter((_, i) => i !== index);
                setBookings(updatedBookings);
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    };

    const populateFormWithBookingData = (index) => {
        const bookingToUpdate = bookings[index];
        setName(bookingToUpdate.userName);
        setEmail(bookingToUpdate.email);
        setSelectedTrip(bookingToUpdate.destination);
        setSelectedHotel(bookingToUpdate.hotel);
        setIsUpdating(true);
        setUpdateIndex(index);
    };

    const resetForm = () => {
        setName("");
        setEmail("");
        setSelectedTrip("");
        setSelectedHotel("");
        setIsUpdating(false);
        setUpdateIndex(null);
    };

    const handleTripChange = (e) => {
        setSelectedTrip(e.target.value);
    };

    const handleHotelChange = (e) => {
        setSelectedHotel(e.target.value);
    };

    return (
        <div className="main">
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Booking</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Booking</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="form-container">
                            <div className="form-content">
                                <h6 className="section-title bg-white text-center text-primary pe-3" style={{ marginLeft: '100px' }}>Your Trip From A To Z</h6>
                                <form onSubmit={isUpdating ? (e) => {e.preventDefault(); handleUpdateBooking(updateIndex);} : handleSubmit}>
                                    <input
                                        className="mdl-textfield__input"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Name"
                                        required
                                    />
                                    <input
                                        className="mdl-textfield__input"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                        required
                                    />
                                    <br />
                                    <select
                                        className="form-select"
                                        value={selectedTrip}
                                        onChange={handleTripChange}
                                        required
                                    >
                                        <option value="">Select Trip</option>
                                        {trips.map((trip, index) => (
                                            <option key={index} value={trip.destination}>
                                                {trip.destination}</option>
                                        ))}
                                    </select>
                                    <br />
                                    <select
                                        className="form-select"
                                        value={selectedHotel}
                                        onChange={handleHotelChange}
                                        required
                                    >
                                        <option value="">Select Hotel</option>
                                        {hotels.map((hotel, index) => (
                                            <option key={index} value={hotel}>{hotel}</option>
                                        ))}
                                    </select>
                                    <button
                                        className="mdl-button mdl-js-button
                                        mdl-button--raised color--light-blue"
                                        type="submit"
                                        disabled={loading}
                                    >
                                        {loading ? 'Processing...' : isUpdating ? 'Update Booking' : 'Book Now'}
                                    </button>
                                    {error && <p className="error">{error}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="imagee" style={{ borderRadius: '100px' }}>
                            <img src={bookingImage} alt="Booking" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <h1 style={{ color: '#863928' }}>Tickets</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <ul className="booking-list">
                        {bookings.map((booking, index) => (
                            <li key={booking._id} className="booking-item">
                                <div className="booking-details">
                                    <p><strong>Name:</strong> {booking.userName}</p>
                                    <p><strong>Email:</strong> {booking.email}</p>
                                    <p><strong>Destination:</strong> {booking.destination}</p>
                                    <p><strong>Hotel:</strong> {booking.hotel}</p>
                                </div>
                                <div className="booking-actions">
                                    <button
                                        className="mdl-button2 mdl-js-button mdl-button--raised color--light-blue"
                                        onClick={() => populateFormWithBookingData(index)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="mdl-button2 mdl-js-button mdl-button--raised color--light-blue"
                                        onClick={() => handleDeleteBooking(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Book;