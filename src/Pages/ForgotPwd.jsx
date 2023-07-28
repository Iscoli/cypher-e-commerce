import "./PagesStyle/ForgotPwd.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import { ReactComponent as Close } from "../components/assets/close.svg";

function ForgotPwd({ closeModal }) {
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!");
      setEmail("");
    } catch (error) {
      toast.error("Could not send password reset email");
    }
  };

  return (
    <div>
      <div>
        <div className="modal">
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="modal-close"
          >
            <h2>Forgot Password?</h2>
            <Close onClick={closeModal} style={{ marginTop: "2.4rem" }} />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <label htmlFor="email" style={{ marginBottom: "0.5rem" }}>
              Enter your email
            </label>
            <input
              style={{ padding: "0.6rem" }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn-forgot" type="submit" onClick={onSubmit}>
            Send Reset Link
          </button>
        </div>
      </div>
      <div className="form-backdrop"></div>
    </div>
  );
}

export default ForgotPwd;
