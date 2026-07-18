import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/OrderSummary.css";

function OrderSummary() {
  const { cart, cartTotal } = useContext(CartContext);

  const shipping = cart.length > 0 ? 50 : 0;
  const vat = Math.round(cartTotal * 0.075);
  const grandTotal = cartTotal + shipping + vat;

  return (
    <div className="summary">

      <h2>SUMMARY</h2>

      {cart.map((item) => (
        <div className="summary-item" key={item.id}>

          <img src={item.image} alt={item.name} />

          <div className="summary-info">
            <h4>{item.name}</h4>
            <p>${item.price}</p>
          </div>

          <span>x{item.quantity}</span>

        </div>
      ))}

      <div className="summary-row">
        <span>Total</span>
        <strong>${cartTotal}</strong>
      </div>

      <div className="summary-row">
        <span>Shipping</span>
        <strong>${shipping}</strong>
      </div>

      <div className="summary-row">
        <span>VAT</span>
        <strong>${vat}</strong>
      </div>

      <div className="summary-row grand-total">
        <span>Grand Total</span>
        <strong>${grandTotal}</strong>
      </div>

    </div>
  );
}

export default OrderSummary;