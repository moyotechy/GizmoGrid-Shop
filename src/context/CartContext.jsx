import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  // Load cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add product
const addToCart = (product) => {
  setCart((prevCart) => {
    const existing = prevCart.find((item) => item.id === product.id);

    if (existing) {
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prevCart, { ...product, quantity: 1 }];
  });
};
  

  // Increase quantity
  const increaseQuantity = (id) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

  // Decrease quantity
 const decreaseQuantity = (id) => {
  setCart((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
}

  // Remove item completely
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
};

  // Empty cart
  const placeOrder = () => {
  clearCart();
};
  const clearCart = () => {
    setCart([]);
  };

  // Total number of items
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total price
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
    placeOrder,
    cartCount,
    cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}