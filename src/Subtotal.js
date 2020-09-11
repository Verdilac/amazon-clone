import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {

  const history = useHistory();
  const [{basket},dispatch] = useStateValue();
  return (
    <div className="subtotal">

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
        Subtotal ({basket.length}) : <strong>{value}</strong>
              {/* Subtotal ({basket.length} items) : <strong>{`${value}`}</strong> */}
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        // value={0}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e => history.push('/payment')} className="subtotal__button">Proceed to Checkout</button>
      {/* this allows us to push user data without interupting the styling of the button at a given time programaticly */}
    </div>
  );
}

export default Subtotal;
