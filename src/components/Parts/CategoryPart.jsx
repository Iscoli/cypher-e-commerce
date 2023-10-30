import React from "react";
import bread from "../assets/Bread & bakery.webp";
import fish from "../assets/fish & meat.webp";
import fresh from "../assets/fresh & natural.webp";
import "./PartsStyle/CategoryPart.moudle.css";
import { Link } from "react-router-dom";

function CategoryPart() {
  return (
    <div className="sec1">
      <div style={{ position: "relative" }}>
        <img className="pic1" src={bread} alt="" />
        <div className="pic1Sub">
          <p>Taste of</p>
          <h2>Bread &amp; Backery</h2>
          <p>Weekend discount offer</p>
          <div className="natural-btn">
            <Link to='/main-category/breakfast'>
              <button className="">shop now</button>
            </Link>
          </div>
        </div>
      </div>
      <div
      style={{position:"relative"}}
      >
        <img className="pic2" src={fish} alt="" />
        <div className="pic2Sub">
          <p>Taste of</p>
          <h2>fish &amp; meat</h2>
          <p>Weekend discount offer</p>
          <div className="natural-btn">
            <Link to='/main-category/fish-meat'>
              <button className="">shop now</button>
            </Link>
          </div>
        </div>
      </div>
      <div
      style={{position:"relative"}}
      >
        <img className="pic3" src={fresh} alt="" />
        <div className="pic3Sub">
          <p>Taste of</p>
          <h2>fresh &amp; natural</h2>
          <p>Weekend discount offer</p>
          <div className="natural-btn">
            <Link to='/main-category/fruits-vegetable'>
              <button className="">shop now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPart;
