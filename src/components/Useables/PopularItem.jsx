import React from "react";
import { useEffect, useState } from "react";
import "../UsablesCss/PopularItem.css";
import axios from "axios";
import MainCategoryBox from "./MainCategoryBox";

function PopularItem() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getMainCategories = async () => {
      try {
        const { data } = await axios.get("/MainCategoryBackupPretty.json");

        const category = Object.entries(data[0]["Popular-items"]);

        setCategories(category);
      } catch (error) {
        console.log("an eroo occured");
      }
    };
    getMainCategories();
  }, []);
  return (
    <div className="popular-container">
      <div className="popular-tag">
        <h3 style={{padding:'2rem'}}>Popular Products for Daily Shopping</h3>
        <p>
          See all our popular products in this week. You can choose your daily
          needs products from this list and get some special offer with free
          shipping.
        </p>
      </div>
      <div className="product">
        {categories.map(([name, product], index) => (
          <MainCategoryBox name={name} product={product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default PopularItem;
