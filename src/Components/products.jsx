import masaiMara from "../assets/masai-mara.png";
import kwale from "../assets/kwale.png";
import mountKenya from "../assets/mount-kenya.png";
import namanga from "../assets/Namanga.png";
import uganda from "../assets/uganda-chimpanze.png";
import zanzibar from "../assets/Zanzibar-2.png";
import naivasha from "../assets/Naivasha.png";
import mombasa from "../assets/Mombasa.png";
const Products = () => {
  return (
    <section className="products" id="products">
      <h2>
        All <span style={{ color: "var(--accent-brown)" }}>Adventure Packages</span>!
      </h2>
      <div className="product-grid">

        <div className="product-card">
          <img src={masaiMara} alt="Maasai Mara Safari" />
          <div className="product-details">
            <h4>Maasai Mara Safari</h4>
            <p className="price">From 30,000 Ksh</p>
          </div>
        </div>

        <div className="product-card">
          <img src={kwale} alt="Diani Beach Escape" />
          <div className="product-details">
            <h4>Diani Beach Escape</h4>
            <p className="price">From 70,000 Ksh</p>
          </div>
        </div>

        <div className="product-card">
          <img src={mountKenya} alt="Mount Kenya Climb" />
          <div className="product-details">
            <h4>Mount Kenya Climb (5-Day)</h4>
            <p className="price">From $900</p>
          </div>
        </div>

        <div className="product-card">
          <img src={namanga} alt="Kilimanjaro Trek" />
          <div className="product-details">
            <h4>Kilimanjaro Trek (Machame)</h4>
            <p className="price">From $2,500</p>
          </div>
        </div>

        <div className="product-card">
          <img src={uganda} alt="Uganda Gorilla Trek" />
          <div className="product-details">
            <h4>Uganda Gorilla Trek</h4>
            <p className="price">From 70,000</p>
          </div>
        </div>

        <div className="product-card">
          <img src={zanzibar} alt="Zanzibar Stone Town Tour" />
          <div className="product-details">
            <h4>Zanzibar Stone Town Tour</h4>
            <p className="price">From 58,050</p>
          </div>
        </div>

        <div className="product-card">
          <img src={naivasha} alt="Great Rift Valley Excursion" />
          <div className="product-details">
            <h4>Great Rift Valley Excursion</h4>
            <p className="price">From 83,850</p>
          </div>
        </div>

        <div className="product-card">
          <img src={mombasa} alt="Mombasa Historical Tour" />
          <div className="product-details">
            <h4>Mombasa Historical Tour</h4>
            <p className="price">From 70,950</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
