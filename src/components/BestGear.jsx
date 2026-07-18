import "../styles/BestGear.css";
import bestGear from "../assets/headphone2.png";

function BestGear() {
  return (
    <section className="best-gear">
      <div className="best-text">
        <h2>
          Bringing you the <span>BEST</span> audio gear
        </h2>

        <p>
          Located at the heart of the city, GizmoGrid is your one-stop
          destination for premium headphones, speakers and earphones.
          We are passionate about delivering exceptional sound experiences
          with products crafted for music lovers and professionals alike.
        </p>
      </div>

      <div className="best-image">
        <img src={bestGear} alt="Best Audio Gear" />
      </div>
    </section>
  );
}

export default BestGear;