    import React, { useEffect} from "react";
    import { toast } from "react-toastify";
    import { PaystackConsumer } from "react-paystack";
    import { getAuth} from "firebase/auth";
    import "./PayStack.css";
    import { useState } from "react";
    import { ReactComponent as CashDelivery } from "../../assets/delivery.svg";
    import { ReactComponent as PayStack } from "../../assets/pay-stark.svg";

    function PayStark({
      formData,
      selectedOption,
      onStateTransfer,
      TotalPrice,
      finalAmount,
    }) {
      const [isTransactionSuccessful, setTransactionSuccessful] = useState(false);
      const [cardOption, setCardOption] = useState("");

      // env config
      const publicKey = process.env.REACT_APP_PAYSTACK_KEY ;

     

      useEffect(() => {
        // Call the function passed from the parent component whenever the states update
        onStateTransfer(isTransactionSuccessful, cardOption);
      }, [isTransactionSuccessful, cardOption, onStateTransfer, finalAmount]);

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

    
      const totalamount = parseInt(finalAmount);

      const config = {
        reference: new Date().getTime().toString(),
        email,
        // you can only send an integer
        amount: totalamount + "00", //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey:`${publicKey}`,
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
            <p style={{ color: "#4b5563", fontWeight: "500" }}>Cash on Delivery</p>
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
            <p style={{ color: "#4b5563", fontWeight: "500" }}>Pay Via PayStark</p>
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
