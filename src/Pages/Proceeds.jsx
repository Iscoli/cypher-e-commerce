import React from "react";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import "../Pages/PagesStyle/Proceeds.css";
import ProceedForm from "../components/Useables/Proceed-Form/ProceedForm";
import CartItem from "../components/Atom/CartShopping/Cart-Item/CartItem";

function Proceeds() {
  const data = useSelector((state) => state.cartdata);
  const [discountedPrice, setDiscountedPrice] = useState([])

  const cart = [data.product];
    
     

  useEffect(() => {
    // Function to calculate discounted prices for all products
    const calculateDiscountedPrices = () => {
      const updatedDiscountedPrices = cart[0].map((product) => {
        if (product.hasOwnProperty("discount")) {
          const discountedPrice = (product.price * product.discount) / 100;
          const totalDiscountedPrice = discountedPrice * product.count;
          return totalDiscountedPrice;
        }
        return 0; // If the product doesn't have a discount, return 0
      });
      
      return updatedDiscountedPrices;
      
    };

    // Call the function to get the updated discounted prices for all products
    const updatedDiscountedPrices = calculateDiscountedPrices();
   
    setDiscountedPrice(updatedDiscountedPrices);
  },[cart[0]]);
      
  
  
 

  

     const totalDiscountedPriceSum = discountedPrice.reduce((sum, price) => sum + price, 0);

     console.log(totalDiscountedPriceSum,'poooo')
     const roundedTotalDiscountedPriceSum = totalDiscountedPriceSum ? totalDiscountedPriceSum.toFixed(2) : "0.00";
   

    
       
      console.log(totalDiscountedPriceSum,'oooo')



  const totalPrice = cart?.map((product, index) => {
    return product.reduce((a, c) => a + c.price * c.count, 0);
  });

  const [shippingDetails, setShippingDetails] = useState(0);
  const handleRadioChange = (value) => {
    setShippingDetails(value);
  
  };

  const TotalPrice = parseFloat(totalPrice, 10);
  const Number = parseFloat(shippingDetails, 10);

    console.log(roundedTotalDiscountedPriceSum)
  let amount = TotalPrice + Number + parseFloat(roundedTotalDiscountedPriceSum,10);
   let TotalAmount = amount + .00

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
                {TotalPrice == 0 ? <span>$00.00</span>:
                <span>${TotalPrice}.00</span>
                }
                
              </p>
              <p>
                <span>Shipping Cost</span>
                {shippingDetails ? 
                  <span>${shippingDetails}</span>:
                  <span>$00.00</span>}
              </p>


              <p>
                <span>Discount</span>
                {
                  roundedTotalDiscountedPriceSum ?
                  
                  <span style={{color:' #fb923c'}}>
                    ${roundedTotalDiscountedPriceSum}
                  </span>
                  : 

                  <span style={{color:' #fb923c'}}>$00.00</span>
                }
               
              </p>

              <h2>
                <span>Total Cost</span>
                {
                  TotalAmount == 0 ? 
                  <span>$00.00</span> :
                  <span>${TotalAmount} </span>
                }
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

export default Proceeds;
