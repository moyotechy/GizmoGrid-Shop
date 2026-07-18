import "./../styles/category.css";

import headphone from "../assets/headphone.png";
import speaker from "../assets/speaker.png";
import earpod from "../assets/earpod.png";

function CategoryCard() {
  const categories = [
    {
      title: "HEADPHONES",
      image: headphone,
    },
    {
      title: "SPEAKERS",
      image: speaker,
    },
    {
      title: "EARPHONES",
      image: earpod,
    },
  ];

  return (
    <section className="categories">

      {categories.map((item, index) => (
        <div className="category-card" key={index}>

          <img
            src={item.image}
            alt={item.title}
            className="category-image"
          />

          <h3>{item.title}</h3>

          <button>
            SHOP →
          </button>

        </div>
      ))}

    </section>
  );
}

export default CategoryCard;