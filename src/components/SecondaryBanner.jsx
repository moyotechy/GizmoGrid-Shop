import { Link } from "react-router-dom";
function SecondaryBanner() {
  return (
    <section className="secondary-banner">

      <div className="secondary-content">

        <h2>ZENITH Z7 SPEAKER</h2>

        <Link to="/product/zx7-speaker">
          <button>SEE PRODUCT</button>
        </Link>

      </div>

    </section>
  );
}

export default SecondaryBanner;