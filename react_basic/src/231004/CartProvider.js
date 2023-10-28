import { useState } from "react";
import CartContext from "./store/cart-context";

export default function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, totalPrice, setTotalPrice }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
