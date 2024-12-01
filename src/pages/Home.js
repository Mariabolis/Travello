import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/home.css";

const Home = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [highlightedSections, setHighlightedSections] = useState([]);
  const [scrollToId, setScrollToId] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setScrollToId(null); // Reset after scrolling
    }
  }, [scrollToId]);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    const matchedSections = sections.filter(
      (section) =>
        section.title.toLowerCase().includes(searchTerm) ||
        section.content.toLowerCase().includes(searchTerm)
    );

    if (matchedSections.length > 0) {
      let firstMatchId = null;
      const highlighted = matchedSections.map((section, sectionIndex) => {
        const { highlightedTitle, highlightedContent, firstMatch } = highlightText(
          section.title,
          section.content,
          searchTerm,
          sectionIndex
        );
        if (!firstMatchId && firstMatch) {
          firstMatchId = firstMatch;
        }
        return {
          ...section,
          title: highlightedTitle,
          content: highlightedContent,
        };
      });
      setHighlightedSections(highlighted);
      setSearchResult("");
      if (firstMatchId) {
        setScrollToId(firstMatchId); // Scroll to the first match
      }
    } else {
      setSearchResult("not found");
    }
  };

  const highlightText = (title, content, term, sectionIndex) => {
    const regex = new RegExp(`(${term})`, "gi");
    let firstMatchId = null;
    let matchIndex = 0;

    const highlightedTitle = title.replace(regex, (match, offset) => {
      const id = `match-${sectionIndex}-${matchIndex}`;
      if (!firstMatchId) {
        firstMatchId = id;
      }
      matchIndex++;
      return `<span id="${id}" style="background-color: #863928; color: white;">${match}</span>`;
    });

    const highlightedContent = content.replace(regex, (match, offset) => {
      const id = `match-${sectionIndex}-${matchIndex}`;
      if (!firstMatchId) {
        firstMatchId = id;
      }
      matchIndex++;
      return `<span id="${id}" style="background-color: #863928; color: white;">${match}</span>`;
    });

    return { highlightedTitle, highlightedContent, firstMatch: firstMatchId };
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const services = [
    {
      title: "Egypt Tours",
      description: "Discover Egypt's charming governorates with fun experiences",
      icon: "fa-globe",
      link: "/Destinations",
    },
    {
      title: "Hotel Reservation",
      description: "We provide you with 5-star hotel reservations with great service",
      icon: "fa-hotel",
      link: "/Hotel",
    },
  ];

  const sections = [
    {
      id: "explore-egypt",
      title: "Explore Egypt: A Land of Wonders",
      content: `Egypt is a destination where ancient history and modern culture blend seamlessly.
        Start in Cairo, home to the majestic Giza Pyramids, the enigmatic Sphinx, and the treasure-filled Egyptian Museum.
        Travel south to Luxor and Aswan to witness the grandeur of temples and tombs, and enjoy a peaceful Nile cruise.
        For beach enthusiasts, the Red Sea Riviera, with its luxurious resorts and vibrant coral reefs, is perfect for relaxation and water sports.
        Don't miss the unique landscapes of the Siwa Oasis and the White Desert for a desert adventure like no other.
        Egypt offers something for every traveler—historic sites, stunning natural beauty, and a lively cultural scene. Discover the timeless allure of Egypt, where every corner holds a new adventure.`,
      link: "/Destinations",
      buttonText: "See more",
      images: ["aaaa.jpg", "bbbb.jpg", "cccc.jpg", "dddd.jpg", "eeee.jpg", "ffff.jpg"]
    },
    {
      id: "luxurious-hotels",
      title: "Discover Egypt's Luxurious Hotels: Where Comfort Meets Heritage",
      content: `Egypt offers a blend of ancient charm and modern luxury across its diverse range of hotels.
        Cairo: Stay at the Marriott Mena House for pyramid views or the Nile Ritz-Carlton for contemporary elegance and historic proximity.
        Luxor and Aswan: Experience royal luxury at the Sofitel Winter Palace in Luxor or historic charm at Aswan's Old Cataract Hotel.
        Red Sea Riviera: Enjoy beachfront luxury at Sharm El Sheikh’s Four Seasons Resort or Hurghada's Oberoi Sahl Hasheesh.
        Desert Retreats: Find unique tranquility at Adrere Amellal in Siwa Oasis.
        Egyptian hotels are known for warm hospitality and exceptional service, combining luxury, history, and charm for an unforgettable stay.`,
      link: "/Hotel",
      buttonText: "See more",
      images: ["111.jpg", "222.jpg", "333.jpg", "444.jpg"]
    },
  ];



  const popularDestinations = [
    { name: "Cairo", image: "giza.jpg" },
    { name: "alexandria", image: "alex.jpg" },
    { name: "luxor", image: "luxor.jpg" },
  ];

  const firstContainerData = sections[0];
  const secondContainerData = sections[1];

  return (
    <div>
      {/* First Container */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-end py-5">
            <div className="col-lg-8 pt-lg-5 mt-lg-5 text-end">
              <h1 className="display-3 text-white mb-3 animated texxt">
                Enjoy Your Trip
              </h1>
              <div className="position-relative w-75 mx-auto animated slideInDown">
                <input
                  className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button
                  id="buttonStyle"
                  type="button"
                  className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
              {searchResult && <p className="text-white">{searchResult}</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="marquee">
        <div className="tape">
          <div className="tape-text">
            <p>
              Welcome to TravellO where you can book your lovely trip and
              hotel !!
            </p>
          </div>
        </div>
      </div>



      {/* Popular Destinations Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Popular Destinations
            </h6>
            <h1 className="mb-5">Explore Popular Destinations in Egypt</h1>
          </div>
          <div className="row g-4">
          {popularDestinations.map((destination, index) => (
  <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    <div className="destination-item rounded overflow-hidden">
      <img
        src={require(`../assests/img/${destination.image}`)}
        alt={destination.name}
        className="img-fluid"
      />
      <div className="position-relative p-4">
        <h5 className={["cairo", "alexandria", "luxor"].includes(destination.name.toLowerCase()) ? 'text-shams' : ''}>{destination.name}</h5>
      </div>
    </div>
  </div>
))}


          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Services
            </h6>
            <h1 className="mb=5">Our Services</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <a
                  href={service.link}
                  className="service-item rounded pt-3 d-block text-center"
                >
                  <div className="p-4" style={{ color: "grey" }}>
                    <i className={`fa fa-3x ${service.icon} text-primary mb-4`}></i>
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="container-fluid my-5 custom-container bordered-container">
        <div className="row">
          <div className="col-md-6 text-right">
            <div className="slider-container">
              <Slider {...sliderSettings}>
                {firstContainerData.images.map((image, index) => (
                  <div key={index} className="imgee">
                    <img
                      src={require(`../assests/img/${image}`)}
                      alt={`Image ${index + 1}`}
                      className="cropped-image"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="col-md-6 text-left">
            <h2
              className="mb-4"
              dangerouslySetInnerHTML={{
                __html:
                  highlightedSections.find((s) => s.id === firstContainerData.id)
                    ?.title || firstContainerData.title,
              }}
            ></h2>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  highlightedSections.find((s) => s.id === firstContainerData.id)
                    ?.content || firstContainerData.content,
              }}
            ></p>
            <a href={firstContainerData.link} className="btn btn-primary">
              {firstContainerData.buttonText}
            </a>
          </div>
        </div>
      </div>

      {/* Second Container */}
      <div className="container-fluid my-5 custom-container bordered-container">
        <div className="row">
          <div className="col-md-6 text-right">
            <div className="slider-container">
              <Slider {...sliderSettings}>
                {secondContainerData.images.map((image, index) => (
                  <div key={index} className="imgee">
                    <img
                      src={require(`../assests/img/${image}`)}
                      alt={`Image ${index + 1}`}
                      className="cropped-image"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="col-md-6 text-left">
            <h2
              className="mb-4"
              dangerouslySetInnerHTML={{
                __html:
                  highlightedSections.find((s) => s.id === secondContainerData.id)
                    ?.title || secondContainerData.title,
              }}
            ></h2>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  highlightedSections.find((s) => s.id === secondContainerData.id)
                    ?.content || secondContainerData.content,
              }}
            ></p>
            <a href={secondContainerData.link} className="btn btn-primary">
              {secondContainerData.buttonText}
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
          onClick={scrollToTop}
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default Home;