import UserSearch from "../components/Atom/SearchUsers/UserSearch";
import { useState } from "react";
import Cart from "../components/Atom/CartShopping/Cart";
import Profile from "../components/Atom/Profile/ProfileLogo";
import Bell from "../components/Atom/Bell/Bell";
import Home from "../components/Atom/Home/Home";
import Logo from "../components/Logo/Logo";
import ToggleBtn from "../components/Atom/Toggle button/ToggleBtn";
import PhCategoryModal from "../components/Parts/ProductModal/PhCategoryModal";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SubNav from "../components/Parts/SubNav";
import CartModal from "../components/Atom/CartShopping/Cart-modal/CartModal";


function Navbar() {
  const [open, setOpen] = useState(true);
  const [bude, setBude] = useState(true);
  const toggle = () => {
    setOpen((prevstate) => !prevstate);
  };
  const CartToggle = () => {
    setBude((prevstate) => !prevstate);
  };
  const closeModalHandler = () => {
    setOpen(true);
    setBude(true);
  };

  return (
    <div className="Header-container">
      <div className="side-bar">
        <PhCategoryModal open={!open} closeModalHandler={closeModalHandler} />
        <div className={!open ? "backdrop moveaway  " : "movehere "}></div>
      </div>
      <div className="">
        <CartModal bude={!bude} closeModalHandler={closeModalHandler} />
        <div className={!bude ? "backdrop" : " "}></div>
      </div>
      <div className="">
        <nav className="top">
          <div className="container-nav">
            {/* my images was shrinking when ever i use the Link tag
     so i removed the div and put the class on link tag */}
            <Link to="/" className="flex-1">
              <Logo />
            </Link>

            <div className="flex-2">
              <UserSearch />
            </div>
            <div className="top-3">
              <div className="flex-3">
                <div className="Bell">
                  <Bell />
                </div>
                <div className="toggleBtn">
                  <ToggleBtn toggle={toggle} />
                </div>
                <div className="home-logo">
                  <Home />
                </div>
                <div>
                  <Cart CartToggle={CartToggle} />
                </div>
                <div>
                  <Profile />
                </div>
              </div>
            </div>
          </div>
          <div className="sub-nav">
            <SubNav />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
