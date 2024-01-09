import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { userDetails } from "../Redux";
import { fetchAllUserOrders } from "../Redux";
import { Outlet } from "react-router";
import "../Pages/PagesStyle/DashBoard.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import DashBoardLink from "../components/Useables/DashBoardLink/DashBoardLink";
import { ReactComponent as Profile } from "../components/assets/person-check.svg";
import { ReactComponent as DashBod } from "../components/assets/Dashboard.svg";
import { ReactComponent as Orders } from "../components/assets/orders.svg";
import { ReactComponent as PassWord } from "../components/assets/change-pwd.svg";
import { ReactComponent as LogOut } from "../components/assets/log-out.svg";

function DashBoard() {
  const dispatch = useDispatch();
  const auth = getAuth();
  const user = auth.currentUser;

  const { photoURL, email } = auth.currentUser;

  useEffect(() => {
    dispatch(fetchAllUserOrders(auth.currentUser.uid));
    // eslint-disable-next-line
  }, [auth.currentUser.uid]);

  // const users = useSelector((state) => state.user);
  useEffect(() => {
    if (user !== null) {
      dispatch(userDetails(user));
    }
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();
  const onLogout = () => {
    auth.signOut();
    navigate("/sign-in");
    toast.success("you have logged out, from your account");
  };

  const ResetPwd = async () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div>
      <div className="dashboard-outlet">
        <div className="main-dashboard ">
          <div className="welcome">
            <div className="welcome-container">
              <div className="welcome-text">
                <h5 className="welcome-name">
                  Welcome,{" "}
                  <span className="displayName">
                    {user.displayName.split(" ")[0]}
                  </span>
                </h5>
                <p className="email">{user.email}</p>
              </div>
              {user ? (
                <div className="email-circle">
                  <img className="circle-img" alt="circle-img" src={photoURL} />{" "}
                </div>
              ) : (
                <div>
                  <p className="first-email">{user.email.charAt(0)}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div  className="main-outletContainer">
          <div className="container-dashboard">
            <ul className="samba">
              <DashBoardLink
                url="my-orders"
                text="Dashboard"
                icon={<DashBod />}
              />

              <DashBoardLink url="profile" text="Profile" icon={<Profile />} />

              <DashBoardLink url="orders" text="Orders" icon={<Orders />} />

              <div onClick={ResetPwd}>
                <DashBoardLink
                  url="changepwd"
                  text="Reset Password"
                  icon={<PassWord />}
                />
              </div>

              <li
                style={{ cursor: "pointer" }}
                className="dashboard-list"
                onClick={onLogout}
              >
                <LogOut /> <span style={{ fontSize: "0.9rem" }}>LogOut</span>
              </li>
            </ul>
          </div>
          <div className="outlet-product">
            <Outlet />
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default DashBoard;
