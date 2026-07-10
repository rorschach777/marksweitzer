"use client";
import {useState} from 'react';
import PlaygroundReviews from './PlaygroundReviews';
import { pushToDataLayer } from '../utilities/analytics';

const Playground = () => {
    const [cart, setCart] = useState( {total: 0, items: []});

    const updateCart = (item) => {
    const updatedItems = [...cart.items, item];

    const payload = { eccomerce: {
            currency: "USD",
            value: updatedProducts.reduce((sum, product) => sum + product.price, 0),
            items: updatedItems

        }
    };

    pushToDataLayer("add_to_cart", payload);
    setCart(updatedCart);
    };

    const shirtHandler = () => {
        const sku = "SHIRT123";
        const price = 12.99;
        const payload = {
            item_id: 1,
            item_name: "Shirt", 
            sku : sku,
            price: price,
            quantity: 1
        }
        updateCart(payload);
    }

    const pantsHandler = () => {
        const sku = "PANTS123";
        const price = 19.99;
        const payload = {
            item_id: 2,
            item_name: "Pants", 
            sku : sku,
            price: price,
            quantity: 1
        }
        updateCart(payload);
    }

    return (
        <div className="playground">
            <div >Analytics Playground</div>
            <PlaygroundReviews />

            <div className="product-container">
                <div className="cart">
                    <div>Cart Total: ${cart.total.toFixed(2)}</div>
                    <div>Cart Items: {cart.products.length}</div>
                </div>
                <div className="product">
                    <span>Shirt</span>
                    <span>12.99</span>
                    <span>SKU: SHIRT123</span>
                    <button className="add-to-cart" onClick={shirtHandler}>Add to Cart</button>
                </div>
                <div className="product">
                    <span>Pants</span>
                    <span>19.99</span>
                    <span>SKU: PANTS123</span>
                    <button className="add-to-cart" onClick={pantsHandler}>Add to Cart</button>
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
}

export default Playground;