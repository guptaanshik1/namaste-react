import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../constants";
import { clearCart, removeFromCart } from "../slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <>
      <h3 onClick={() => handleClearCart()}>Clear Cart</h3>
      {cartItems?.map((item) => {
        return (
          <>
            <div className="menu-card-container" key={item?.id}>
              <h1>{item?.name}</h1>
              <img src={`${IMG_URL}/${item?.imageId}`} />
              <h3>{item?.category}</h3>
              {item?.ratings?.aggregatedRating?.rating ? (
                <p>{`${item?.ratings?.aggregatedRating?.rating} stars`}</p>
              ) : null}
              <h2>{item?.price}</h2>
            </div>
            <button onClick={() => handleRemoveItem(item)}>Remove</button>
          </>
        );
      })}
    </>
  );
};

export default Cart;
