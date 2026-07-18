import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">
          <h2 className="footer-logo">GizmoGrid</h2>

          <nav className="footer-nav">
            <Link to="/">HOME</Link>
            <Link to="/headphones">HEADPHONES</Link>
            <Link to="/speakers">SPEAKERS</Link>
            <Link to="/earphones">EARPHONES</Link>
          </nav>
        </div>

        <p className="footer-text">
          GizmoGrid is your one-stop destination for premium headphones,
          speakers and earphones. We provide exceptional products with
          beautiful design and amazing sound quality.
        </p>

        <div className="footer-bottom">
          <p>© 2026 GizmoGrid. All Rights Reserved.</p>

          <div className="socials">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;