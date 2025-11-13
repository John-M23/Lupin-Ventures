
import safariVan from "../assets/tembea-4.png"; // use your uploaded image here

const Choice = () => {
  return (
    <section className="choice" id="choice">
      <div className="choice-container">
        <div className="choice-text">
          <h2>
            The Best <span>Adventure Partner</span> <br /> Of Your Choice
          </h2>
          <p>
            Lupin Venture is committed to safety, authenticity, and creating
            responsible tourism experiences. We handle all logistics so you can
            focus entirely on your journey.
          </p>
          <p>
            Choose us for journeys that connect you deeply with nature and local
            life. We offer flexible packages, from thrilling hikes to relaxing
            beach holidays.
          </p>
        </div>
        <div className="choice-image">
          <img src={safariVan} alt="Adventure Van" />
        </div>
      </div>
    </section>
  );
};

export default Choice;
