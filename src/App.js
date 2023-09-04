import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { useLocation } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ForgotPwd from "./Pages/ForgotPwd";
import NotFound from "./Pages/NotFound";
import PrivateRoute from "./components/Parts/PrivateRoute";
import DashBoard from "./Pages/DashBoard";
import Orders from "./Pages/Orders";
import Offer from "./Pages/Offer";
import CheckOut from "./Pages/CheckOut";
import About from "./Pages/About";
import FAQ from "./Pages/FAQ";
import Contact from "./Pages/Contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Terms from "./Pages/Terms";
import ChangePwd from "./Pages/ChangePwd";
import SubCategory from "./Pages/SubCategory";
import MainCategory from "./Pages/MainCategory";
import Navbar from "./Header/Navbar";
import IndexRoute from "./Pages/IndexRoute";
import Proceeds from "./Pages/Proceeds";
import OrderDetail from "./Pages/OrderDetail";
import AppSection from "./components/Parts/AppSection/AppSection";

function App() {
  let persistor = persistStore(store);
 

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <ScrollToTopOnRouteChange />
          <div
            className="major-container"
            style={{
              maxWidth: "1400px",
              minWidth: "300px",
              margin: "0 auto",
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              overflow: "auto",
            }}
          >
            <Navbar
              style={{
                maxWidth: "1200px",
              }}
            />

            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/DashBoard" element={<PrivateRoute />}>
                <Route path="/DashBoard" element={<DashBoard />}>
                  <Route index element={<IndexRoute />} />
                  <Route path="my-orders" element={<IndexRoute />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="changepwd" element={<ChangePwd />} />
                  <Route path="orders" element={<Orders />} />
                </Route>
              </Route>

              <Route path="/sign-in" element={<SignIn />} />

              <Route path="/sign-up" element={<SignUp />} />

              <Route path="/forgot-password" element={<ForgotPwd />} />

              <Route path="/offer" element={<Offer />} />

              <Route path="/checkout" element={<CheckOut />} />

              <Route path="/faq" element={<FAQ />} />

              <Route path="/about" element={<About />} />

              <Route path="/contact" element={<Contact />} />

              <Route path="/privacy" element={<PrivacyPolicy />} />

              <Route path="/terms" element={<Terms />} />

              <Route path="/check" element={<PrivateRoute />}>
                <Route path="/check" element={<Proceeds />} />
              </Route>

              <Route path="/order" element={<PrivateRoute />}>
                <Route path="/order/:orderDetails" element={<OrderDetail />} />
              </Route>

              <Route path="/sub-category/:product" element={<SubCategory />} />
              <Route
                path="/main-category/:category"
                element={<MainCategory />}
              />
              <Route path="/*" element={<NotFound />} />
            </Routes>

            <AppSection />
          </div>
        </Router>

        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}

// Scroll to top on route change
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
