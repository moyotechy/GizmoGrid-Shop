import { useParams, Link } from "react-router-dom";
import { useContext, useState } from "react";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import "../styles/productDetails.css";

function ProductDetails() {
  const { slug } = useParams();

  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="not-found">
        <h1>Product Not Found</h1>

        <Link to="/">Go Home</Link>
      </div>
    );
  }

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const relatedProducts = products.filter(
    (item) => item.id !== product.id
  );

  return (
    <div className="product-page">

      {/* Back Button */}

      <button
        className="back-btn"
        onClick={() => window.history.back()}
      >
        Go Back
      </button>

      {/* Product */}

      <section className="product-top">

        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">

          <p className="new-product">
            NEW PRODUCT
          </p>

          <h1>{product.name}</h1>

          <p className="description">
            {product.description}
          </p>

          <h2 className="price">
            ${product.price}
          </h2>

          <div className="cart-controls">

            <div className="quantity-box">

              <button onClick={decrease}>
                -
              </button>

              <span>{quantity}</span>

              <button onClick={increase}>
                +
              </button>

            </div>

            <button
              className="add-cart-btn"
              onClick={handleAdd}
            >
              ADD TO CART
            </button>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="features-section">

        <div className="features">

          <h2>FEATURES</h2>

          <p>{product.features}</p>

        </div>

        <div className="includes">

          <h2>IN THE BOX</h2>

          {product.includes.map((item, index) => (

            <div
              className="include-item"
              key={index}
            >
              <span>{item.quantity}x</span>

              <p>{item.item}</p>

            </div>

          ))}

        </div>

      </section>

      {/* Gallery */}

      <section className="gallery">

        <img
          src={product.gallery[0]}
          alt=""
        />

        <img
          src={product.gallery[1]}
          alt=""
        />

        <img
          src={product.gallery[2]}
          alt=""
        />

      </section>

      {/* Related Products */}

      <section className="related-products">

        <h2>You May Also Like</h2>

        <div className="related-grid">

          {relatedProducts.map((item) => (

            <div
              className="related-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <h3>{item.name}</h3>

              <Link
                to={`/product/${item.slug}`}
              >
                <button>
                  SEE PRODUCT
                </button>
              </Link>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default ProductDetails;