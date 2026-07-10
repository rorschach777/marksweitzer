"use client";
import {useState} from 'react';



const playground = () => {
    const [cart, setCart] = useState( {total: 0, products: []});

    const updateCart = (items) => {
        let updatedCartTotal = cart.total;
        // get current products
        const currentProducts = cart.products;
        // add new items 
        const updatedProducts = [...currentProducts, items];
        // total the items 
        updatedProducts.forEach(c => {
            updatedCartTotal += c.price;
        })
        const updatedCart = {
            total: updatedCartTotal,
            products: updatedProducts
        }
        setCart(updatedCart);
    }

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
            <div>Reviews iframe</div>
            <div >Analytics Playground</div>
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