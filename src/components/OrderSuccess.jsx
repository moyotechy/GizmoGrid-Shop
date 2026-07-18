import { Link } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess({ total, onClose }) {
  return (
    <div className="success-overlay">

      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>
          THANK YOU
          <br />
          FOR YOUR ORDER
        </h1>

        <p>
          You will receive an email confirmation shortly.
        </p>

        <div className="success-summary">

          <div className="summary-left">

            <h3>Grand Total</h3>

            <span>${total}</span>

          </div>

        </div>

        <Link to="/">
          <button
            className="success-btn"
            onClick={onClose}
          >
            BACK TO HOME
          </button>
        </Link>

      </div>

    </div>
  );
}

export default OrderSuccess;