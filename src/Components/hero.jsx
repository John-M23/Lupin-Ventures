import { useEffect, useState } from "react";
// import "./Hero.css";
import masaiMara from "../assets/masai-mara.png";
import mountKenya from "../assets/mount-kenya.png";
import kwale from "../assets/kwale.png";

const slides = [
  {
    id: 1,
    image: masaiMara,
    title: "Discover The Wild Beauty",
    subtitle: "Explore East Africa’s untamed landscapes with Lupin Ventures."
  },
  {
    id: 2,
    image: mountKenya,
    title: "Conquer New Heights",
    subtitle: "Experience the thrill of adventure in every climb."
  },
  {
    id: 3,
    image: kwale,
    title: "Relax by The Coast",
    subtitle: "Find serenity on East Africa’s pristine beaches."
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // changes every 5 seconds
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay"></div>
          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <a href="#about" className="hero-btn">Discover More</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
