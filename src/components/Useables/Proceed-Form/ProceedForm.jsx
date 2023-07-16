import { useState, useEffect } from "react";
import React from "react";
import "./ProceedForm.css";
import { usePaystackPayment } from "react-paystack";
import { PaystackConsumer } from "react-paystack";
import { PaystackButton } from "react-paystack";
import { ReactComponent as Car } from "../../assets/car.svg";
import PayStark from "../../Parts/Pay-Stack/PayStark";

function ProceedForm({ onRadioChange,TotalPrice}) {
  const [selectedOption, setSelectedOption] = useState("");
  const [amount , setAmount] = useState(0);
  const [empty, setempty] = useState("")
  useEffect(()=>{
    setAmount( TotalPrice + parseFloat(selectedOption, 10))
  })

    
    
 
  const [formData, setFormData] = useState({
    firstname: '',
    lastname:'',
    useremail: '',    
		useraddress: '',
    usernumber:'',
    usercode:'',
    usercountry:'',
    usercity:'',
  })
  const { firstname,
          useremail,
          usernumber,
          lastname,
          usercode,
          useraddress,
          usercountry,
          usercity} = formData

  
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    onRadioChange(event.target.value);
  };
  const onChange = (e) => {
    setFormData((prevState) =>({
      ...prevState,
      [e.target.id] : e.target.value
    })

    )
  };

  

  return (
    <>
      <div className="form-container">
        <form >
          <span>shiping</span>
          <div className="major-proceed">
          <div>
            <label>First main Name</label>
            <input
              type="text"
              id="firstname"
              className="proceedActive"
              value={firstname}    
               onChange={onChange}

              
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
            />
          </div>
          </div>
        </form>
      </div>

      <section>
        <form >
          
        </form>
      </section>

      <section className="shippin">
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
      </section>

      <PayStark formData={formData} amount={amount} selectedOption={selectedOption}/>
    </>
  );
}

export default ProceedForm;

