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
// import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
// import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Car } from "../../assets/car.svg";
import PayStark from "../../Parts/Pay-Stack/PayStark";

function ProceedForm({
  onRadioChange,
  TotalPrice,
  shippingDetails,
  TotalAmount,
}) {
  const [amount, setAmount] = useState(0);
  const data = useSelector((state) => state.cartdata);
  const cart = [data.product];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();
  const user = auth.currentUser;

  const [selectedOption, setSelectedOption] = useState("");

  const discountPrice = "00.00";

  useEffect(() => {
    setAmount(TotalPrice + parseFloat(selectedOption, 10));
  });

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

  console.log(auth.currentUser.displayName, "uuid");

  const onOrderSubmit = async (e) => {
    e.preventDefault();

    try {
      if (cart[0].length < 1) {
        toast.error("cart is empty");
      } else {
        const invoice = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
        const order_id = uuidv4();
        const userUid = auth.currentUser.uid;
        const senderName = auth.currentUser.displayName || firstname;
        const items = cart[0];

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
          discountPrice,
          status: "pending",
          userRef: userUid,
          created_at: new Date().getTime(),
        };

        //
        //
        // payment_option,
        console.log();

        await setDoc(doc(db, "orders", order_id), invoice_form);

        toast.success("Your order has been confirmed!");

        // setTimeout(() => {
        //   dispatch({ type: "EMPTY_CART_CONTENT" });
        // }, 1500);

        // setTimeout(() => {
        //   navigate(`/order/${order_id}`);
        // }, 2000);
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
          <span>shiping</span>
          <div className="major-proceed">
            <div>
              <label>FirstName</label>
              <input
                type="text"
                id="firstname"
                className="proceedActive"
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
                value={usernumber}
                onChange={onChange}
                required
              />
            </div>
          </div>

          <div className="major-proceed">
            <div>
              <label>Street Address</label>
              <input
                type="text"
                id="useraddress"
                className="proceedActive"
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
                value={usercode}
                onChange={onChange}
                required
              />
            </div>
          </div>

          <div className="shippin">
            <div className="payment-content">
              <Car />
              <div className="shippin-type1">
                <span>FedEx</span>
                <br></br>
                <span>Delivary:3 Days </span>
                <br></br>
                <span>Cost:$30.00</span>
              </div>
              <label className="radio-label">
                <input
                  type="radio"
                  value="30.00"
                  checked={selectedOption === "30.00"}
                  onChange={handleRadioChange}
                />
                <span className="radio-button"></span>
              </label>
            </div>

            <div className="payment-content">
              <Car />
              <div className="shippin-type2">
                <span>FedEx</span>
                <br></br>
                <span>Delivary:7 Days</span>
                <br></br>
                <span> Cost:$15.00</span>
              </div>
              <label className="radio-label">
                <input
                  type="radio"
                  value="15.00"
                  checked={selectedOption === "15.00"}
                  onChange={handleRadioChange}
                />
                <span className="radio-button"></span>
              </label>
            </div>
          </div>
          <div>
            <PayStark
              formData={formData}
              amount={amount}
              selectedOption={selectedOption}
            />
          </div>
          <div className="submitBtn">
            <Link to="/">
              <span>
                <ArrowLeft />
              </span>
              continue shopping
            </Link>
            <button type="submit">
              confirm order
              <span>
                <ArrowRight />
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProceedForm;
