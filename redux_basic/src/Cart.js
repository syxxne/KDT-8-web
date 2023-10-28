import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_CART, DELETE_CART } from "./store";

export default function Cart() {
  const products = [
    {
      id: 1,
      name: "상품 A",
      price: 10000,
    },
    {
      id: 2,
      name: "상품 B",
      price: 15000,
    },
    {
      id: 3,
      name: "상품 C",
      price: 20000,
    },
  ];

  const cartItems = useSelector((state) => state);
  const dispatch = useDispatch();

  const addCart = (name, id, price) => {
    dispatch({ type: ADD_CART, name, id, price });
    console.log(cartItems);
  };

  const deleteCart = (id) => {
    dispatch({ type: DELETE_CART, id });
  };

  const totalPrice = cartItems.reduce(
    (acc, val) => acc + val.price * val.quantity,
    0
  );

  return (
    <div>
      <h2>상품리스트</h2>
      {products.map((value) => {
        return (
          <div key={value.id}>
            <span>
              {value.name} : {value.price}
            </span>
            <button onClick={() => addCart(value.name, value.id, value.price)}>
              장바구니 추가
            </button>
          </div>
        );
      })}
      <h2>CART</h2>
      {cartItems.map((value) => {
        return (
          <div key={value.id}>
            <span>
              {value.name} : {value.price * value.quantity}원 ({value.quantity})
              개
            </span>
            <button onClick={() => deleteCart(value.id)}>장바구니 삭제</button>
          </div>
        );
      })}
      {totalPrice}
    </div>
  );
}
