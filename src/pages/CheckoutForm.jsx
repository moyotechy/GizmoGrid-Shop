import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/CheckoutForm.css";

function CheckoutForm() {
  const navigate = useNavigate();

  const { cart, cartTotal, clearCart } = useContext(CartContext);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateOrderID = () => {
    const random = Math.floor(Math.random() * 9000 + 1000);
    return `GZM-${Date.now()}-${random}`;
  };

  const handleWhatsAppOrder = () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Please complete all required fields.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    setLoading(true);

    const orderID = generateOrderID();

    const items = cart
      .map(
        (item) =>
          `• ${item.name}
Quantity: ${item.quantity}
Price: $${item.price}
Subtotal: $${item.price * item.quantity}`
      )
      .join("\n\n");

    const message = `🛒 *NEW GIZMOGRID ORDER*

━━━━━━━━━━━━━━━━━━

📌 Order ID:
${orderID}

━━━━━━━━━━━━━━━━━━

👤 CUSTOMER DETAILS

Name:
${formData.name}

Email:
${formData.email}

Phone:
${formData.phone}

━━━━━━━━━━━━━━━━━━

📍 DELIVERY ADDRESS

${formData.address}

${formData.city}

${formData.state}

${formData.country}

━━━━━━━━━━━━━━━━━━

🛍 ORDER ITEMS

${items}

━━━━━━━━━━━━━━━━━━

💰 GRAND TOTAL

$${cartTotal}

━━━━━━━━━━━━━━━━━━

Thank you for shopping with GizmoGrid.`;

    setTimeout(() => {
      const whatsappURL = `https://wa.me/2348023805410?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappURL, "_blank");

      clearCart();

      navigate("/");

    }, 1800);
  };

  if (loading) {
    return (
      <div className="loading-screen">

        <div className="loader"></div>

        <h2>Preparing your WhatsApp Order...</h2>

        <p>Please wait a moment...</p>

      </div>
    );
  }

  return (
    <div className="checkout-form">

      <h1>Checkout</h1>

      <h2>Billing Details</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name *"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number *"
        value={formData.phone}
        onChange={handleChange}
      />

      <h2>Shipping Information</h2>

      <input
        type="text"
        name="address"
        placeholder="Address *"
        value={formData.address}
        onChange={handleChange}
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />

      <input
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
      />

      <input
        type="text"
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
      />

      <button
        className="whatsapp-btn"
        onClick={handleWhatsAppOrder}
      >
        Order on WhatsApp
      </button>

    </div>
  );
}

export default CheckoutForm;