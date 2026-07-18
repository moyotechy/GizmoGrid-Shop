import { Link } from "react-router-dom";
import heroImage from "../assets/headphone2.png";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="small-text">NEW PRODUCT</p>

        <h1>
          QUANTUM X9
          <br />
          HEADPHONES
        </h1>

        <p>
          Experience immersive sound with premium wireless technology.
        </p>

        <Link to="/headphones">
          <button>SEE PRODUCT</button>
        </Link>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Headphones" />
      </div>
    </section>
  );
}

export default Hero;