import "../styles/CategoryCard.css";
import { Link } from "react-router-dom";

import headphone from "../assets/headphone.png";
import speaker from "../assets/speaker.png";
import earphone from "../assets/earphone.png";

function CategoryCard() {
  const categories = [
    {
      name: "HEADPHONES",
      image: headphone,
      link: "/headphones",
    },
    {
      name: "SPEAKERS",
      image: speaker,
      link: "/speakers",
    },
    {
      name: "EARPHONES",
      image: earphone,
      link: "/earphones",
    },
  ];

  return (
    <section className="categories">

      {categories.map((category) => (
        <div className="category-card" key={category.name}>

          <img
            src={category.image}
            alt={category.name}
          />

          <h2>{category.name}</h2>

          <Link
            to={category.link}
            className="shop-link"
          >
            SHOP →
          </Link>

        </div>
      ))}

    </section>
  );
}

export default CategoryCard;