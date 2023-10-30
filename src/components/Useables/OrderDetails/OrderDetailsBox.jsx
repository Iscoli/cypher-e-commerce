import React from "react";
import "./OrderDetails.css";
import { ReactComponent as Cypher } from "../../assets/x chypher.svg";

function OrderDetail({ invoices }) {
  const handlePrint = () => {
    window.print();
  };

  const {
    senderName,
    items,
    // senderAddress,
    // firstName,
    // lastName,
    email,
    address,
    // country,
    // code,
    city,
    number,
    totalPriceInCart,
    totalPriceToPay,
    // shipping_cost,
    // order_id,
    invoice,
    discountPrice,
    status,
    // userRef,
    created_at,
  } = invoices;

  const timestamp = created_at;
  const date = new Date(timestamp);

  const options = {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = date.toLocaleString("en-US", options);
  console.log(status, "sattta");
  return (
    <div className="main-orderdetail">
      <div className="orderdetail-sec1">
        <button className="print-button" onClick={handlePrint}>
          Print Receipt
        </button>
        <h2>INVOICE</h2>
        <div className="cypher-imgdiv">
          <Cypher className="cypher-img" />
          <p>Lafe Akure</p>
        </div>
        <div>
          <h3>Date</h3>
          <span>{formattedDate}</span>
        </div>

        <div>
          <h3>Invoice No.</h3>
          <p>#{invoice}</p>
        </div>

        <div>
          <h3>Invoice To.</h3>
          <p>{senderName}</p>
          <p>{address}</p>
          <p>{city}</p>
          <p>{email}</p>
          <p>{number}</p>
        </div>
      </div>

      <div className="order-scroll userOrdersPage">
        <table className="userOrdersPage">
          <thead>
            <tr>
              <th>SR.</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Item Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          {items?.map((order, index) => {
            console.log(order, "ooorr");
            const { name, count, price } = order;
            return (
              <tbody key={index}>
                <tr>
                  <td>{index}</td>
                  <td>{name}</td>
                  <td>{count}</td>
                  <td>${price}</td>
                  <td style={{ color: "red" }}>${count * price}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>

      <div className="orderdetail-sec2">
        <div>
          <h4>Discount</h4>
          <p style={{ color: " #fb923c" }}>${discountPrice}</p>
        </div>

        <div>
          <h4>Total Item Price</h4>
          <p style={{ color: "#20c997" }}>${totalPriceInCart}</p>
        </div>

        <div>
          <h4>Total Amount</h4>
          <p style={{ color: "#FF0000" }}>${totalPriceToPay}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
