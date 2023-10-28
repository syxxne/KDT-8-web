import CartContext from "./store/cart-context";

export default function ProductList() {
  const items = [
    { id: 1, name: "A", price: 10000 },
    { id: 2, name: "B", price: 5000 },
    { id: 3, name: "C", price: 8000 },
  ];

  return (
    <CartContext.Consumer>
      {(value) => {
        return (
          <>
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <h2>{item.name}</h2>
                  <p>{item.price}원</p>
                  <button
                    type="button"
                    onClick={() => {
                      value.setCartItems([...value.cartItems, item]);
                      value.setTotalPrice((value.totalPrice += item.price));
                    }}
                  >
                    장바구니 추가
                  </button>
                </div>
              );
            })}
          </>
        );
      }}
    </CartContext.Consumer>
  );
}
