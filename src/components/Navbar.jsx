import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useContext(CartContext);

  return (
    <header className="navbar">
      <div className="container">

        {/* Logo */}
        <Link to="/" className="logo">
          GizmoGrid
        </Link>

        {/* Navigation */}
        <nav>
          <Link to="/" className="link">
            <h3>HOME</h3>
          </Link>

          <Link to="/headphones" className="link">
            <h3>HEADPHONES</h3>
          </Link>

          <Link to="/speakers" className="link">
            <h3>SPEAKERS</h3>
          </Link>

          <Link to="/earphones" className="link">
            <h3>EARPHONES</h3>
          </Link>
        </nav>

        {/* Cart */}
        <div className="cart">
          <Link to="/cart" className="cart-icon">
            🛒
            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Navbar;