import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../Pages/PagesStyle/Proceeds.css";
import ProceedForm from "../components/Useables/Proceed-Form/ProceedForm";
import CartItem from "../components/Atom/CartShopping/Cart-Item/CartItem";

function CheckOut() {
  const data = useSelector((state) => state.cartdata);
  const [discountedPrice, setDiscountedPrice] = useState([]);

  const cart = [data.product];

  useEffect(() => {
    // Function to calculate discounted prices for all products
    const calculateDiscountedPrices = () => {
      const updatedDiscountedPrices = [];

      cart[0].forEach((product) => {
        const discountedPrice = (product.price * product.discountValue) / 100;
        const totalDiscountedPrice = discountedPrice * product.count;
        updatedDiscountedPrices.push(totalDiscountedPrice);
      });

      return updatedDiscountedPrices;
    };

    // Call the function to get the updated discounted prices for all products
    const updatedDiscountedPrices = calculateDiscountedPrices();

    setDiscountedPrice(updatedDiscountedPrices);
    // eslint-disable-next-line
  },[cart[0]]);

  const [totalDiscountedPriceSum, setTotalDiscountedPriceSum] = useState(0);

  // Function to calculate and set the total discounted price sum
  const calculateTotalDiscountedPriceSum = () => {
    const sum = discountedPrice.reduce((acc, price) => acc + (price || 0), 0);
    setTotalDiscountedPriceSum(sum);
  };

  // useEffect to watch for changes in the discountedPrice array
  useEffect(() => {
    calculateTotalDiscountedPriceSum();
    // eslint-disable-next-line
  }, [discountedPrice]); // This dependency array will trigger the effect whenever discountedPrice changes

  // Rounding the total discounted price sum to two decimal places
  const roundedTotalDiscountedPriceSum = totalDiscountedPriceSum.toFixed(2);

  console.log(totalDiscountedPriceSum, "oooo");

  const totalPrice = cart?.map((product, index) => {
    return product.reduce((a, c) => a + c.price * c.count, 0);
  });

  const [shippingDetails, setShippingDetails] = useState(0);
  const handleRadioChange = (value) => {
    setShippingDetails(value);
  };

  const TotalPrice = parseFloat(totalPrice, 10);
  const Number = parseFloat(shippingDetails, 10);

  console.log(roundedTotalDiscountedPriceSum);
  let amount =
    TotalPrice + Number + parseFloat(roundedTotalDiscountedPriceSum, 10);
  let TotalAmount = amount + 0.0;

  return (
    <div>
      <div className="overall-summary">
        <div className="order-summarry">
          <div className="mainorder">
            <p className="order-tag">Order Summary</p>
            <div className="proceed-item">
              <CartItem />
            </div>
            <div className="sum-total">
              <p>
                <span>Subtotal</span>
                {TotalPrice === 0 ? (
                  <span>$00.00</span>
                ) : (
                  <span>${TotalPrice}.00</span>
                )}
              </p>
              <p>
                <span>Shipping Cost</span>
                {shippingDetails ? (
                  <span>${shippingDetails}</span>
                ) : (
                  <span>$00.00</span>
                )}
              </p>

              <p>
                <span>Discount</span>
                {roundedTotalDiscountedPriceSum ? (
                  <span style={{ color: " #fb923c" }}>
                    ${roundedTotalDiscountedPriceSum}
                  </span>
                ) : (
                  <span style={{ color: " #fb923c" }}>$00.00</span>
                )}
              </p>

              <h2>
                <span>Total Cost</span>
                {TotalAmount === 0 ? (
                  <span>$00.00</span>
                ) : (
                  <span>
                    ${TotalAmount}
                    {roundedTotalDiscountedPriceSum === "0.00" ? ".00" : ""}{" "}
                  </span>
                )}
              </h2>
            </div>
          </div>
        </div>

        <div className="proceeds-container">
          <div>
            <ProceedForm
              onRadioChange={handleRadioChange}
              TotalPrice={TotalPrice}
              TotalAmount={TotalAmount}
              shippingDetails={shippingDetails}
              roundedTotalDiscountedPriceSum={roundedTotalDiscountedPriceSum}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
