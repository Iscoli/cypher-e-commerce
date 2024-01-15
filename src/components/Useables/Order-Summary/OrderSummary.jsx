import React from "react";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import "../Order-Summary/OrderSummary.css";

function OrderSummary({ text, number, bgColor, iconColor }) {
  return (
    <div className="ordersummary-contain">
      <div className="orders-maincontainer">
        <div
          className="cartsummary-image"
          style={{ backgroundColor: `${bgColor}`, color: `${iconColor}` }}
        >
          {<Cart />}
        </div>
        <div>
          <p>{text}</p>
          <h1>{number}</h1>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
