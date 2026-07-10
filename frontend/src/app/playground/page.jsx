import './page.css';

export default async function Page(){
    const QUERY = `*[_type == "profile"]{ _id,
    title,
    jobTitle->{
      title,
      cookieValue
    },
    mainMessage,
    sections[]->{
      title,
      subHeadlineTop,
      subHeadlineBottom,
      mainTitle,
      secondaryTitle,
      mainContent
    }
    }`;

    return (
        <>
        <div className="playground">
            <div >Analytics Playground</div>

            <div className="product-container">
                <div>Cart Total: $0.00</div>
                <div className="product">
                    <span>Shirt</span>
                    <span>12.99</span>
                    <span>SKU: SHIRT123</span>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="product">
                    <span>Pants</span>
                    <span>19.99</span>
                    <span>SKU: PANTS123</span>
                    <button className="add-to-cart">Add to Cart</button>
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
   
       </>
    );
}