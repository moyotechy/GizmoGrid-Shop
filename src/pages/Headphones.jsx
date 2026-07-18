import products from "../data/products";
import { Link } from "react-router-dom";

function Headphones() {
  const headphones = products.filter(
    (product) => product.category === "headphones"
  );

  return (
    <div style={{ maxWidth: "1200px", margin: "50px auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "60px" }}>
        HEADPHONES
      </h1>

      {headphones.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            gap: "50px",
            marginBottom: "80px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "350px" }}
          />

          <div style={{ flex: 1 }}>
            {product.new && (
              <p style={{ color: "#D87D4A", letterSpacing: "5px" }}>
                NEW PRODUCT
              </p>
            )}

            <h2>{product.name}</h2>

            <p>{product.description}</p>

            <h3>${product.price}</h3>

            <Link to={`/product/${product.slug}`}>
              <button
                style={{
                  background: "#D87D4A",
                  color: "#fff",
                  border: "none",
                  padding: "15px 30px",
                  cursor: "pointer",
                }}
              >
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Headphones;