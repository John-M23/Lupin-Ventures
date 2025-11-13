// import React from "react";
import profile1 from "../assets/profile-1.png";
import profile2 from "../assets/profil-2.png";
import funImage from "../assets/having-fun.png";

const testimonials = [
  {
    quote: "Lupin Venture transformed our holiday. The itinerary was flawless, the guides were incredibly knowledgeable, and we felt safe and cared for every step of the way. I highly recommend their safari packages!",
    name: "Sarah Smith",
    role: "Traveler from UK",
    avatar: profile1,
    image: funImage,
  },
  // {
  //   quote: "Lupin Ventures transformed the road trip to an experience.\nHighly recommended when making music videos.\n#Mboka Doba",
  //   name: "Toxic Lyricall",
  //   role: "Upcoming Artist",
  //   avatar: profile2,
  //   image: null,
  // },
];

const Testimonial = () => (
  <section className="testimonials">
    <div className="container">
      <h2>
        What People Are{" "}
        <span style={{ color: "var(--accent-brown)" }}>Saying About Us</span>
      </h2>

      {testimonials.map((t, i) => (
        <div key={i} className="testimonial-grid">
          <div className="testimonial-content">
            <p className="testimonial-quote">{t.quote}</p>
            <div className="author-info">
              <div className="author-avatar">
                <img src={t.avatar} alt={`Portrait of ${t.name}`} />
              </div>
              <div className="author-details">
                <h4>{t.name}</h4>
                <p>{t.role}</p>
              </div>
            </div>
          </div>

          {t.image && (
            <div className="testimonial-image">
              <img src={t.image} alt="Group of happy travelers" />
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Testimonial;
