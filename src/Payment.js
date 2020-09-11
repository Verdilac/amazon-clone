import React, { useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement,useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  

  const stripe = useStripe();
  const elements = useElements();

    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);

  const handleSubmit = e => {
      //do all the fancy stripe settings
  }

  const handleChange = event => {
    //listen for changed in the card element and
    //diplay any error as the customer types their card detauls
    setDisabled(event.empty);
    setError(event.error? event.error.massage : "");
  }


  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
            Checkout(<Link to='/checkout'>{basket?.length} items
                </Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane </p>
            <p>Los Angeles,California</p>
          </div>
        </div>

        {/*payment section -Reviwe Items   */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Reviwe Items and Delivery</h3>
          </div>
          <div className="payment__items">
            
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/*payment section -Payment Methode  */}
        <div className="payment__section">
        <div className="payment__title">
            <h3>Payment Methode</h3>

            </div>
                <div className='payment__details'>
                    {/* strip magic */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                    </form>
                </div>
        
        </div>

      </div>
    </div>
  );
}

export default Payment;
