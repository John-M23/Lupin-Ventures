import { useState, useEffect } from "react";
// import "./ChristmasOffers.css"; // Make sure to import the CSS
import kwale from "../assets/kwale.png";
import masai from "../assets/masai-mara.png";
import mount from "../assets/mount-kenya.png";
import bonfire from "../assets/masai-2.png";
import Naivasha from "../assets/Naivasha.png";

const Offers = () => {
  const offers = [
    {
      id: 1,
      image: kwale,
      name: "Kwale Beaches",
      price: "50,000 Ksh",
      duration: "5 Day Exploration",
    },
    {
      id: 2,
      image: masai,
      name: "Masai Mara Reserve",
      price: "30,000 Ksh",
      duration: "3 Day Adventure",
    },
    {
      id: 3,
      image: mount,
      name: "Mount Kenya Hike",
      price: "10,000 Ksh",
      duration: "2 Day Trip",
    },
    {
      id: 4,
      image: bonfire,
      name: "Campfire Retreat",
      price: "15,000 Ksh",
      duration: "2 Night Experience",
    },
    {
      id: 5,
      image: Naivasha,
      name: "Lake Naivasha Tour",
      price: "25,000 Ksh",
      duration: "3 Day Excursion",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); // Default for desktop

  // Handle responsive cards display
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= offers.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? offers.length - cardsToShow : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, cardsToShow]);

  return (
    <section className="christmas-offers" id="christmas">
      <h2>Christmas Holiday Package</h2>
      <p className="subtitle">
        Special seasonal offers for unforgettable holiday experiences
      </p>

      <div className="slider-container">
        <button className="slider-btn prev-btn" onClick={prevSlide}>
          ‹
        </button>
        
        <div className="slider-wrapper">
          <div 
            className="slider-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
            }}
          >
            {offers.map((offer) => (
              <div 
                className="offer-card" 
                key={offer.id}
                style={{
                  flex: `0 0 ${100 / cardsToShow}%`
                }}
              >
                <img src={offer.image} alt={offer.name} />
                <h3>{offer.name}</h3>
                <p className="price">{offer.price}</p>
                <p className="duration">{offer.duration}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="slider-btn next-btn" onClick={nextSlide}>
          ›
        </button>
      </div>

      {/* Dots indicator */}
      <div className="slider-dots">
        {Array.from({ length: Math.max(1, offers.length - cardsToShow + 1) }).map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Offers;