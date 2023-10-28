import CartContext from "./store/cart-context";

export default function Cart() {
  return (
    <CartContext.Consumer>
      {(value) => {
        return (
          <>
            <h1>CART</h1>
            {value.cartItems.map((item, index) => {
              return (
                <div key={index}>
                  <h2>{item.name}</h2>
                  <p>{item.price}원</p>
                  <button
                    type="button"
                    onClick={() => {
                      console.log(item);
                      value.setCartItems(
                        value.cartItems.filter((items) => items.id !== item.id)
                      );
                      value.setTotalPrice((value.totalPrice -= item.price));
                    }}
                  >
                    장바구니 삭제
                  </button>
                </div>
              );
            })}
            <h2>총 금액 : {value.totalPrice}</h2>
          </>
        );
      }}
    </CartContext.Consumer>
  );
}
