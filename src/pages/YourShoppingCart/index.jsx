import Product from "../../components/Product";
import ShoppingSummary from "../../components/ShoppingSummary";

const YourShoppingCart = () => {
    return(
        <div className="container pb-3">
            <div className="row">
                <div className="col-md-8 col-12">
                    <Product id={1} name="Banana Prata" price="10.30" unit="kg" location="YOUR_SHOPPING_CART"  />
                    <Product id={2} name="Banana Prata" price="10.30" unit="kg" location="YOUR_SHOPPING_CART"  />
                    <Product id={3} name="Banana Prata" price="10.30" unit="kg" location="YOUR_SHOPPING_CART"  />
                    <Product id={4} name="Banana Prata" price="10.30" unit="kg" location="YOUR_SHOPPING_CART"  />
                    <Product id={5} name="Banana Prata" price="10.30" unit="kg" location="YOUR_SHOPPING_CART"  />
                    <Product id={6} name="Banana Prata" price="10.30" unit="kg" location="YOUR_SHOPPING_CART"  />
                </div>
                <ShoppingSummary totalPrice={67.50} />
            </div>
        </div>
    );
}
export default YourShoppingCart;
