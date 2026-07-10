"use client";

import { useState } from "react";
import PlaygroundReviews from "./PlaygroundReviews";
import { pushToDataLayer } from "../utilities/analytics";

const defaultState = {
  ecommerce: {
    currency: "USD",
    value: 0,
    items: [],
  },
};

const Playground = () => {
  const [cart, setCart] = useState(defaultState);

  const updateCart = (item) => {
    const updatedItems = [...cart.ecommerce.items, item];

    const ecommerce = {
      currency: "USD",
      value: updatedItems.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      ),
      items: updatedItems,
    };

    setCart({ ecommerce });

    pushToDataLayer("add_to_cart", {
      ecommerce: {
        currency: "USD",
        value: item.price * item.quantity,
        items: [item],
      },
    });
  };

  const shirtHandler = () => {
    updateCart({
      item_id: "SHIRT123",
      item_name: "Shirt",
      price: 12.99,
      quantity: 1,
    });
  };

  const pantsHandler = () => {
    updateCart({
      item_id: "PANTS123",
      item_name: "Pants",
      price: 19.99,
      quantity: 1,
    });
  };

  return (
    <div className="playground">
      <div>Analytics Playground</div>
      <PlaygroundReviews />

      <div className="product-container">
        <div className="cart">
          <div>Cart Total: ${cart.ecommerce.value.toFixed(2)}</div>
          <div>Cart Items: {cart.ecommerce.items.length}</div>
        </div>

        <div className="product">
          <span>Shirt</span>
          <span>12.99</span>
          <span>SKU: SHIRT123</span>
          <button className="add-to-cart" onClick={shirtHandler}>
            Add to Cart
          </button>
        </div>

        <div className="product">
          <span>Pants</span>
          <span>19.99</span>
          <span>SKU: PANTS123</span>
          <button className="add-to-cart" onClick={pantsHandler}>
            Add to Cart
          </button>
        </div>
      </div>

      <form>
        <div className="input-group">
          <label>Email </label>
          <input type="email" />
        </div>
        <button className="checkout">checkout</button>
      </form>
    </div>
  );
};

export default Playground;