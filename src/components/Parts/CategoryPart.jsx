import React from "react";
import bread from "../assets/Bread & bakery.webp";
import fish from "../assets/fish & meat.webp";
import fresh from "../assets/fresh & natural.webp";
import styles from "./PartsStyle/CategoryPart.moudle.css";

function CategoryPart() {
  return (
    <div className="sec1">
      <div style={{position:'relative'}}>
        <img className="pic1" src={bread} alt="" />
        {/* <div className="pic1Sub">
          <p>Taste of</p>
          <h3>fresh &amp; natural</h3>
          <p>Weekend discount offer</p>
          <div className="natural-btn">
            <button className="">shop now</button>
          </div>
        </div> */}
      </div>
      <div>
        <img className="pic2" src={fish} alt="" />
      </div>
      <div>
        <img className="pic3" src={fresh} alt="" />
      </div>
    </div>
  );
}

export default CategoryPart;
