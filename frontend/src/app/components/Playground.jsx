"use client";
import {useState} from 'react';
import PlaygroundReviews from './PlaygroundReviews';
import { pushToDataLayer } from '../utilities/analytics';

const Playground = () => {
    const defaultState = {
        eccomerce:{
            currency: "USD", 
            value: 0, 
            items: []
        }
    }
    const [cart, setCart] = useState( defaultState);

    const updateCart = (item) => {
    const updatedItems = [...cart.eccomerce.items, item];

    const payload = { eccomerce: {
            currency: "USD",
            value: updatedItems.reduce((sum, product) => sum + product.price, 0),
            items: updatedItems

        }
    };

    // pushToDataLayer("add_to_cart", payload);
    setCart(payload);
    };

    const shirtHandler = () => {
        const sku = "SHIRT123";
        const price = 12.99;
        const item = {
            item_id: 1,
            item_name: "Shirt", 
            sku : sku,
            price: price,
            quantity: 1
        }
        updateCart(item);
    }

    const pantsHandler = () => {
        const sku = "PANTS123";
        const price = 19.99;
        const item = {
            item_id: 2,
            item_name: "Pants", 
            sku : sku,
            price: price,
            quantity: 1
        }
        updateCart(item);
    }

    return (
        <div className="playground">
            <div >Analytics Playground</div>
            <PlaygroundReviews />

            <div className="product-container">
                <div className="cart">
                    <div>Cart Total: ${cart.eccomerce.value.toFixed(2)}</div>
                    <div>Cart Items: {cart.eccomerce.items !== undefined ? cart.eccomerce.items.length : 0}</div>
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