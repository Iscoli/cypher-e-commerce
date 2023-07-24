import { useState } from "react";
import { toast } from "react-toastify";
import "../Pages/PagesStyle/SignIn.css";
import visibilityIcon from "../components/assets/visibilityIcon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

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
      toast.success('')
      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      toast.error('invalid user details');
    }
  };

  return (
    <div>
      <div className="main-navbar"></div>
      <div className="main-signin">
        <div className="sec-1">
          <div className="sigin-bg">
            <h2> Sign In </h2>
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
                  {" "}
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
                <Link className="link-tag" style={{ textDecoration: 'none'}} to="/forgot-password">
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

            <button className="google-auth-btn">
              <p> Sign In With Google</p>
            </button>
            <Link to="/sign-up">
              {" "}
              <p>
                {" "}
                Not a registered user?{" "}
                <span className="span-signUp">Sign Up </span>{" "}
              </p>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
