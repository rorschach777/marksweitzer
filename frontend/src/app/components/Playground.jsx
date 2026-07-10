"use client";
import {useState} from 'react';
import PlaygroundReviews from './PlaygroundReviews';
import { pushToDataLayer } from '../utilities/analytics';

const playground = () => {
    const [cart, setCart] = useState( {total: 0, products: []});

    const updateCart = (item) => {
    const updatedProducts = [...cart.products, item];

    const updatedCart = {
        total: updatedProducts.reduce((sum, product) => sum + product.price, 0),
        products: updatedProducts
    };

    pushToDataLayer("update-cart", {
        cart: updatedCart
    });

    setCart(updatedCart);
    };

    const shirtHandler = () => {
        const sku = "SHIRT123";
        const price = 12.99;
        const payload = {
            sku : sku,
            price: price
        }
        updateCart(payload);
    }

    const pantsHandler = () => {
        const sku = "PANTS123";
        const price = 19.99;
        const payload = {
            sku : sku,
            price: price
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

export default playground;