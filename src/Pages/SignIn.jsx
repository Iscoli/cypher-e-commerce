import { useState } from "react";
import { toast } from "react-toastify";
import "../Pages/PagesStyle/SignIn.css";
import visibilityIcon from "../components/assets/visibilityIcon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Oauth from "../components/Parts/GoogleOauth/Oauth";
import AppSection from "../components/Parts/AppSection/AppSection";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Login successful");
      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("invalid user details");
    }
  };

  return (
    <div>
      <div className="main-navbar"></div>
      <div className="main-signin">
        <div className="sec-1">
          <div
            style={{ fontSize: "1.8rem" }}
            className="sigin-bg sharedPages-div"
          >
            Sign In
          </div>
          <div className="formSignIn">
            <form onSubmit={onSubmit}>
              <div className="emailInputDiv">
                <label className="label-email"> Email</label>

                <div className="main-passwordInputDiv">
                  <FontAwesomeIcon className="faEnvelope" icon={faEnvelope} />
                  <input
                    type="email"
                    className="emailInput"
                    placeholder=" enter your email"
                    id="email"
                    value={email}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="passwordInputDiv">
                <div>
                  <label className="label-password"> Password</label>{" "}
                </div>

                <div className="main-passwordInputDiv">
                  <FontAwesomeIcon className="faEnvelope" icon={faLock} />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="passwordInput"
                    placeholder="    enter your Password"
                    id="password"
                    value={password}
                    onChange={onChange}
                  />

                  <img
                    src={visibilityIcon}
                    alt="show password"
                    className="showPassword"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                </div>
              </div>
              <div className="forgot-pwd">
                <Link
                  className="linkey"
                  style={{ textDecoration: "none" }}
                  to="/forgot-password"
                >
                  <p>Forgot Password?</p>
                </Link>
              </div>
              <div className="signInBtnDiv">
                <button className="sign-in-btn">Sign In</button>
              </div>
            </form>
          </div>
          <div className="google-auth">
            <p>OR</p>

            <Oauth />
          <div className="registerLink" > 
            <span> Not a registered user?</span>
            <Link to="/sign-up"  className="linkey"
             style={{ textDecoration: "none", paddingLeft:'10px'}}>
            Sign up 
           </Link>
        </div> 
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default SignIn;
