// import "./About.css";
import aboutImage from "../assets/kwale-2.png"; // ← replace with your own image

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Image Left */}
        <div className="about-image">
          <img src={aboutImage} alt="About Lupin Ventures" />
        </div>

        {/* Text Right */}
        <div className="about-content">
          <h2>
            About <span>Lupin Ventures</span>
          </h2>
          <p>
            At Lupin Ventures, we specialize in curating unforgettable
            experiences across East Africa. Whether you're chasing wildlife in
            the Maasai Mara, hiking Mount Kenya, or relaxing on Zanzibar’s
            pristine beaches — our goal is to connect you with authentic
            adventures that inspire the soul.
          </p>
          <p>
            Our passionate team ensures every journey is smooth, safe, and
            meaningful. We partner with local guides and communities to make
            every expedition not just exciting, but sustainable.
          </p>
          <a href="#adventures" className="about-btn">
            Explore Adventures
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
