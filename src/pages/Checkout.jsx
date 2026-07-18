import CheckoutForm from "../pages/CheckoutForm";
import OrderSummary from "../components/OrderSummary";
import "../styles/Checkout.css";

function Checkout() {
  return (
    <div className="checkout-page">

      <div className="checkout-container">

        <div className="checkout-left">
          <CheckoutForm />
        </div>

        <div className="checkout-right">
          <OrderSummary />
        </div>

      </div>

    </div>
  );
}

export default Checkout;