import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{basket},dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <CheckoutProduct
              id='10948'
              title='test,this is a test this is a test this is a test this is a test this is a test this is a test this is a test'
              image='https://pbs.twimg.com/profile_images/717759633356623872/YrCHpa0u_400x400.jpg'
              price={239.99}
              rating={5}
            />
            <CheckoutProduct
              id='10948'
              title='test,this is a test this is a test this is a test this is a test this is a test this is a test this is a test'
              image='https://pbs.twimg.com/profile_images/717759633356623872/YrCHpa0u_400x400.jpg'
              price={239.99}
              rating={5}
            />





          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* bascket item */}
          {/* bascket item */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
