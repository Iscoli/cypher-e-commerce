import React from "react";
import "../AppSection/AppSection.css";
import { ReactComponent as Goggle } from "../../assets/WGoggle.svg";
import { ReactComponent as PlayStore } from "../../assets/Wplaystore.svg";
import { ReactComponent as Car } from "../../assets/car.svg";
import { ReactComponent as PayStack } from "../../assets/pay-stark.svg";
import { ReactComponent as Gift } from "../../assets/gift.svg";
import { ReactComponent as Call } from "../../assets/call.svg";
import { ReactComponent as Cypher } from "../../assets/x chypher.svg";
import { ReactComponent as Linkedel } from "../../assets/linkedel.svg";
import { ReactComponent as Whatsapp } from "../../assets/whatsapp.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Pik } from "../../assets/pot.svg";
import { ReactComponent as FaceBook } from "../../assets/facebook.svg";
import Wtrolley from "../../assets/W trolley.webp";
import womanapp from "../../assets/woman app.webp";
import paypal from "../../assets/x paypal.webp";
import { Link } from "react-router-dom";

function AppSection() {
  return (
    <div className="appsection-container">
      <section className="AppSection Py5">
        <div>
          <img
            className="appstore-img fir-img"
            src={Wtrolley}
            alt="store-img"
          />
        </div>
        <div className="app-content">
          <div className="app-text">
            <h1>Get Your Daily Needs From Your Repable Cypher Store</h1>
            <p>
              There are many products you will find our shop, Choose your daily
              necessary product from our KachaBazar shop and get some special
              offer.
            </p>
          </div>
          <div className="image-container">
            <Goggle className="svg-item" />
            <PlayStore className="svg-item" />
          </div>
        </div>
        <div>
          <img className="appstore-img sec-img" src={womanapp} alt="" />
        </div>
      </section>
      <section className="contacte-container">
        <div className="cover-info">
          <Car className="cover-img" />
          <p className="cover-text">Free Shipping From $500.00</p>
        </div>
        <div className="cover-info">
          <Call className="cover-img" />
          <p className="cover-text">Support 24/7 At Anytime</p>
        </div>
        <div className="cover-info">
          <PayStack className="cover-img" />
          <p className="cover-text">Secure Payment Totally Safe</p>
        </div>
        <div className="cover-info">
          <Gift className="cover-img" />
          <p className="cover-text">Latest Offer Upto 20% Off</p>
        </div>
      </section>{" "}
      <hr className="my-hr"></hr>
      <section className="company-container">
        <div>
          <h1>Company</h1>
          <Link
            style={{ textDecoration: "none", color: "#000000" }}
            to="/about"
          >
            {" "}
            <p>About us</p>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#000000" }}
            to="/contact"
          >
            {" "}
            <p>Contact us</p>
          </Link>
          <p>Careers</p>
          <p>Latest News</p>
        </div>

        <div>
          <h1>Top Category</h1>
          <Link
            style={{ textDecoration: "none", color: "#000000" }}
            to="main-category/fish-meat"
          >
            <p>Fish & Meat</p>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#000000" }}
            to="main-category/drinks"
          >
            <p>Soft Drinks</p>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#000000" }}
            to="main-category/baby-care"
          >
            {" "}
            <p>Baby Care</p>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#000000" }}
            to="main-category/beauty-health"
          >
            <p>Beauty & Health</p>
          </Link>
        </div>
        <div>
          <h1>My Account</h1>
          <Link
            style={{ textDecoration: "none", color: "#000000" }}
            to="/DashBoard/my-orders"
          >
            {" "}
            <p>My Orders</p>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#000000" }}
            to="/DashBoard"
          >
            <p> Dashboard</p>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#000000" }}
            to="/DashBoard/orders"
          >
            <p>Recent Orders</p>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#000000" }}
            to="/DashBoard/profile"
          >
            <p>Updated Profile</p>
          </Link>
        </div>
        <div>
          <Cypher className="cypher-bottom" />
          <p>987 Andre Plain Suite High Street 838,</p>
          <p> Lake Hestertown,</p>
          <p> USA Tell: 02.356.1666 Email: ccruidk@test.com</p>
        </div>
      </section>
      <section className="socials-bg">
        <div>
          <p>Follow Us</p>
          <div className="socials-container">
            <Link className="socials-link">
              <FaceBook />
            </Link>
            <Link className="socials-link">
              <Linkedel />
            </Link>
            <Link className="socials-link">
              <Whatsapp />
            </Link>
            <Link className="socials-link">
              <Twitter />
            </Link>
            <Link className="socials-link">
              <Pik />
            </Link>
          </div>
        </div>
        <div className="social-lp">
          <p>Call Us Today!</p>
          <p>+012345-67900</p>
        </div>
        <div className="social-lp">
          <img src={paypal} alt="" />
        </div>
      </section>
      <footer>
        {" "}
        Copyright 2023 @ <span className="footer-span">Iscoli</span>, All rights
        reserved.
      </footer>
    </div>
  );
}

export default AppSection;
