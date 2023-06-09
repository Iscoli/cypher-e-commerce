import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "../Pages/PagesStyle/Proceeds.css";
import ProceedForm from "../components/Useables/Proceed-Form/ProceedForm";
import CartItem from "../components/Atom/CartShopping/Cart-Item/CartItem";


function Proceeds() {
  const data = useSelector(state => state.cartdata);

  const cart = [data.product]
            const totalPrice =cart ?. map((product,index)=>{
        return ( product.reduce((a,c)=> a + c.price* c.count,0))
      
      })

    
      
  
  const [shippingDetails, setShippingDetails] = useState(0)
  const handleRadioChange = (value) => {
    setShippingDetails(value);
    // Do something with the selected option value in the parent component
  };
    const  TotalPrice =  (parseFloat(totalPrice, 10) )
     const Number = (parseFloat(shippingDetails, 10))
     
     let amount = (TotalPrice + Number)
     amount = amount + '.00'
  
  return (
    <div>
         <div className="overall-summary">   
       <div className="order-summarry">
        <div className="mainorder">
        <p>Order Summary</p>
        <div className="proceed-item">
          <CartItem/>
        </div>
        <div className="sum-total">
          <p>
            <span>Subtotal</span>
            {
              TotalPrice && <span>${TotalPrice}.00</span> 
            }
          </p>
          <p>
            <span>Shipping Cost</span>
             {
              shippingDetails !== '' ? <span>${shippingDetails}</span>:
              <span>$00.00</span>
             }
          </p>
          <p>
            <span>Discount</span>
            <span>$00.00</span>
          </p>

          <h2>
            <span>Total Cost</span>
            <span>${amount}</span>
          </h2>
        </div>
      </div>
      </div>


     <div className="proceeds-container">
     <div>
       <ProceedForm onRadioChange={handleRadioChange} TotalPrice={TotalPrice}/>
     </div> 
    </div>
    </div>
              </div>
 
  );
}

export default Proceeds;
