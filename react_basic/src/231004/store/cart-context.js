import { createContext } from "react";

const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  totalPrice: 0,
  setTotalPrice: () => {},
});

export default CartContext;
