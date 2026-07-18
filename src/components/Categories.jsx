import CategoryCard from "./CategoryCard";

import headphone from "../assets/headphone.png";
import speaker from "../assets/speaker.png";
import earpod from "../assets/earpod.png";

function Categories() {
  return (
    <section className="categories">
      <Link to="/headphones">HEADPHONES</Link>

      <Link to="/speakers">SPEAKERS</Link>

      <Link to="/earphones">EARPHONES</Link>

    </section>
  );
}

export default Categories;