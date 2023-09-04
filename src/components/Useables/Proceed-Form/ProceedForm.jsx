import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase.config";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import React from "react";
import "./ProceedForm.css";
import { ReactComponent as ArrowLeft } from "../../assets/left-arrow.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Car } from "../../assets/car.svg";
import PayStark from "../../Parts/Pay-Stack/PayStark";

function ProceedForm({
  onRadioChange,
  TotalPrice,
  shippingDetails,
  TotalAmount,
  roundedTotalDiscountedPriceSum,
  finalAmount
}) {
  const [amount, setAmount] = useState(0);
  const items = useSelector((state) => state?.cartdata?.product);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();
  const user = auth.currentUser;

  const [selectedOption, setSelectedOption] = useState("");
  const [isTransactionSuccessful, setTransactionSuccessful] = useState(false);
  const [cardOption, setCardOption] = useState("");
  const handleStateTransfer = (value1, value2) => {
    // Update the states in the parent component
    setTransactionSuccessful(value1);
    setCardOption(value2);
  };

  useEffect(() => {
    setAmount(TotalPrice);
  }, []);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    useremail: "",
    useraddress: "",
    usernumber: "",
    usercode: "",
    usercountry: "",
    usercity: "",
  });
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

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    onRadioChange(event.target.value);
  };
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onOrderSubmit = async (e) => {
    e.preventDefault();

    // else {

    //
    //   }

    try {
      if (items?.length < 1) {
        return toast.error("cart is empty");
      }
      if (isTransactionSuccessful === false && cardOption === "") {
        toast.error("please select a payment method");
        return;
      }

      if (selectedOption === "") {
        toast.error("please select a Delivery method");
        return;
      } else {
        const invoice = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
        const order_id = uuidv4();
        const userUid = auth.currentUser.uid;
        const senderName = auth.currentUser.displayName || firstname;
        const payment_method = cardOption || "via pay-stark";
        const discount = roundedTotalDiscountedPriceSum || "00.00";

        const invoice_form = {
          senderName: senderName,
          items,
          senderAddress: useraddress,
          firstName: firstname,
          lastName: lastname,
          email: useremail,
          address: useraddress,
          country: usercountry,
          code: usercode,
          city: usercity,
          number: usernumber,
          totalPriceInCart: TotalPrice,
          totalPriceToPay: TotalAmount,
          shipping_cost: shippingDetails,
          order_id,
          invoice,
          payment_option: payment_method,
          discountPrice: parseFloat(discount),
          status: "pending",
          userRef: userUid,
          created_at: new Date().getTime(),
        };

        console.log(invoice_form, "rororoSP");
        //
        //
        // payment_option,
        console.log();

        await setDoc(doc(db, "orders", order_id), invoice_form);

        toast.success("Your order has been confirmed!");

        setTimeout(() => {
          dispatch({ type: "EMPTY_CART_CONTENT" });
        }, 1500);

        setTimeout(() => {
          navigate(`/order/${order_id}`);
        }, 2000);
      }
    } catch (error) {
      toast.error("failed to checkout users!");
      console.log(error);
    }
  };
  

  return (
    <>
      <div className="form-container">
        <form onSubmit={onOrderSubmit}>
          <h3 className="personal-details">01 Personal Details</h3>
          <div className="major-proceed">
            <div>
              <label>FirstName</label>
              <input
                type="text"
                id="firstname"
                className="proceedActive"
                placeholder="yusuf"
                value={firstname}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                id="lastname"
                className="proceedActive"
                placeholder="ismail"
                value={lastname}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label>Email Address</label>
              <input
                type="text"
                id="useremail"
                className="proceedActive"
                placeholder="example@gmail.com"
                value={useremail}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label>phoneNumber</label>
              <input
                type="text"
                id="usernumber"
                className="proceedActive"
                placeholder="+2347014124559"
                value={usernumber}
                onChange={onChange}
                required
              />
            </div>
          </div>

          <h3 className="personal-details">02. Shipping Details</h3>
          <div className="major-proceed">
            <div>
              <label>Street Address</label>
              <input
                type="text"
                id="useraddress"
                className="proceedActive"
                placeholder="341 otefun, Oshogbo"
                value={useraddress}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label>city</label>
              <input
                type="text"
                id="usercity"
                className="proceedActive"
                placeholder="Oshogbo"
                value={usercity}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label>Country</label>
              <input
                type="text"
                id="usercountry"
                className="proceedActive"
                placeholder="Nigeria"
                value={usercountry}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label>Zip/Postal Code</label>
              <input
                type="text"
                id="usercode"
                className="proceedActive"
                placeholder="01410"
                value={usercode}
                onChange={onChange}
                required
              />
            </div>
          </div>

          <h3 className="personal-details"> Shipping Cost</h3>
          <div className="shippin">
            <div className="payment-content">
              <Car />
              <div className="shippin-type1">
                <span>FedEx</span>
                <br></br>
                <span style={{ color: "#6b7280", fontSize: ".905rem" }}>
                  Delivary:3 Days{" "}
                </span>
                <br></br>
                <span style={{ color: "#6b7280", fontSize: ".905rem" }}>
                  Cost:$30.00
                </span>
              </div>
              <label className="radio-label">
                <input
                  type="radio"
                  value="30.00"
                  checked={selectedOption === "30.00"}
                  onChange={handleRadioChange}
                  disabled={isTransactionSuccessful}
                />
                <span className="radio-button"></span>
              </label>
            </div>

            <div className="payment-content">
              <Car />
              <div className="shippin-type2">
                <span style={{ color: "#4b5563", fontWeight: "500" }}>
                  FedEx
                </span>
                <br></br>
                <span style={{ color: "#6b7280", fontSize: ".905rem" }}>
                  Delivary:7 Days
                </span>
                <br></br>
                <span style={{ color: "#6b7280", fontSize: ".905rem" }}>
                  {" "}
                  Cost:$15.00
                </span>
              </div>
              <label className="radio-label">
                <input
                  type="radio"
                  value="15.00"
                  checked={selectedOption === "15.00"}
                  onChange={handleRadioChange}
                  disabled={isTransactionSuccessful}
                />

                <span className="radio-button"></span>
              </label>
            </div>
          </div>
          <h3 className="personal-details">03. Delivery Details</h3>
          <div>
            <PayStark
              formData={formData}
              amount={amount}
              selectedOption={selectedOption}
              onStateTransfer={handleStateTransfer}
              TotalPrice={TotalPrice}
              finalAmount= {finalAmount}
            />
            
          </div>
          <div className="submitBtn">
            <Link to="/" className="shoppiin">
              <span>
                <ArrowRight className="btn-leftarrow" />
              </span>
              continue shopping
            </Link>
            <button type="submit" className="btn">
              confirm order
              <span>
                <ArrowRight className="btn-rightarrow" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProceedForm;
