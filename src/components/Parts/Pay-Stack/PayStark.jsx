import React, { useEffect, usestate } from "react";
import { toast } from "react-toastify";
import { PaystackConsumer } from "react-paystack";
import { getAuth, updateProfile } from "firebase/auth";
import "./PayStack.css";
import { useState } from "react";
import { ReactComponent as CashDelivery } from "../../assets/delivery.svg";
import { ReactComponent as PayStack } from "../../assets/pay-stark.svg";

function PayStark({ formData, amount, selectedOption, onStateTransfer }) {
  const [isTransactionSuccessful, setTransactionSuccessful] = useState(false);
  const [cardOption, setCardOption] = useState("");

  useEffect(() => {
    // Call the function passed from the parent component whenever the states update
    onStateTransfer(isTransactionSuccessful, cardOption);
  }, [isTransactionSuccessful, cardOption, onStateTransfer]);

  const auth = getAuth();

  const { email } = auth.currentUser;

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

  const handleSuccess = (response) => {
    if (response.status === "success") {
      // Set transaction as successful
      setTransactionSuccessful(true);
    }
  };

  const handleClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const handleCardRadioChange = (e) => {
    setCardOption(e.target.value);
  };

  const totalamount = parseFloat(amount + "00");

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: totalamount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_5a4e23446df0c49c615306bdb20b6a22c3447915",
    phone: usernumber,
    metadata: {
      name: firstname,
      lastname,
      usercode,
      useraddress,
      usercountry,
      usercity,
      useremail,
    },
  };

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose,
  };
  const handleRadioChange = (event) => {
    setCardOption(event.target.value);
  };

 
  return ( 
    <div className="payment-type">
      <div className="payment-content">
        <CashDelivery />
        <p
        style={{ color: "#4b5563", fontWeight: "500" }}
        >Cash on Delivery</p>
        <label className="radio-label">
          <input
            type="radio"
            value="Payment On Delivery"
            checked={cardOption === "Payment On Delivery"}
            onChange={handleRadioChange}
            onClick={() => {
              if (!selectedOption) {
                toast.error("please select a delivery method");

              } else {
              }
            }}
            disabled={isTransactionSuccessful}
          />
          <span className="radio-button"></span>
        </label>
      </div>

      <div className="payment-content">
        <PayStack />
        <p
        style={{ color: "#4b5563", fontWeight: "500" }}
        >Pay Via PayStark</p>
        <PaystackConsumer {...componentProps}>
          {({ initializePayment }) => (
            <label className="radio-label">
              <input
                type="radio"
                value="card"
                checked={selectedOption === "card"}
                onClick={() => {
                  if (!selectedOption) {
                    toast.error("please select a delivery method");
                  } else {
                    initializePayment(handleSuccess, handleClose);
                  }
                }}
                onChange={handleRadioChange}
                disabled={isTransactionSuccessful}
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
