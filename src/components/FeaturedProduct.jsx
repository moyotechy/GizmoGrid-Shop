import "../styles/FeaturedProduct.css";
import { Link } from "react-router-dom";

import speaker from "../assets/speaker.png";
import earphones from "../assets/GX1EARPHONES.png";
import headphones from "../assets/headphone.png";

function FeaturedProduct() {
  return (
    <section className="featured-products">

      {/* Featured Speaker */}
      <div className="featured-main">

        <div className="featured-image">
          <img src={speaker} alt="ZX9 Speaker" />
        </div>

        <div className="featured-content">
          <h1>
            ZX9
            <br />
            SPEAKER
          </h1>

          <p>
            Upgrade to premium speakers built for exceptional sound,
            deep bass and immersive listening.
          </p>

          <Link to="/product/zx9-speaker">
            <button>SEE PRODUCT</button>
          </Link>
        </div>

      </div>

      {/* Secondary Product */}
      <div className="featured-secondary">

        <div className="secondary-content">
          <h2>ZX7 SPEAKER</h2>

          <Link to="/product/zx7-speaker">
            <button>SEE PRODUCT</button>
          </Link>
        </div>

      </div>

      {/* Third Product */}
      <div className="featured-third">

        <img src={earphones} alt="YX1 Earphones" />

        <div className="third-content">

          <h2>YX1 EARPHONES</h2>

          <Link to="/product/yx1-earphones">
            <button>SEE PRODUCT</button>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default FeaturedProduct;