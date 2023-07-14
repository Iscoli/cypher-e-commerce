import React from "react";
import { PaystackConsumer } from "react-paystack";
import { getAuth, updateProfile } from "firebase/auth";
import "./PayStack.css";
import { useState } from "react";
import { ReactComponent as CashDelivery } from "../../assets/delivery.svg";
import { ReactComponent as PayStack } from "../../assets/pay-stark.svg";

function PayStark({ formData, amount,handleRadioChange }) {
  const auth = getAuth();

  const { email } = auth.currentUser;
  console.log(auth, "rerere");
  const {
    firstname,
    useremail,
    usernumber,
    lastname,
    usercode,
    useraddress,
    usercountry,
    usercity,
  } = formData;

  const [selectedOption, setSelectedOption] = useState("");

  // you can call this function anything
  const handleSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handleClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const totalamount = parseFloat(amount + "00");
  console.log(typeof totalamount);

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: totalamount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_5a4e23446df0c49c615306bdb20b6a22c3447915",
    phone: usernumber,
    metadata: {
      name: firstname,
    },
  };

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose,
  };
 
  return (
    <div className="payment-type">
      <div className="payment-content">
        <CashDelivery />
        <p>Cash on Delivery</p>
        <label className="radio-label">
          <input
            type="radio"
            value="59.00"
            checked={selectedOption === "59.00"}
            onChange={handleRadioChange}
          />
          <span className="radio-button"></span>
        </label>
      </div>

      <div className="payment-content">
        <PayStack />
        <p>Pay Via PayStark</p>
        <PaystackConsumer {...componentProps}>
          {({ initializePayment }) => (
            <label className="radio-label">
              <input
                type="radio"
                onClick={() => initializePayment(handleSuccess, handleClose)}
                value="30.00"
                checked={selectedOption === "30.00"}
                onChange={handleRadioChange}
              />
              <span className="radio-button"></span>
            </label>
          )}
        </PaystackConsumer>
      </div>
    </div>
  );
}

export default PayStark;
