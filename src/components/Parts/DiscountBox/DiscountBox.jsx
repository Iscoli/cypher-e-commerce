import { useState,useEffect } from "react";
import axios from "axios";
import MainCategoryBox from "../../Useables/MainCategoryBox";
import styles from "./Discount.module.css"
function DiscountBox(){
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      const getMainCategories = async () => {
        try {
          const { data } = await axios.get("/MainCategoryBackupPretty.json");

          const category = Object.entries(data[0]["Discounts"]);

          setCategories(category);
        } catch (error) {
          console.log("an eroo occured");
        }
      };
      getMainCategories();
    }, []);
    return (
      <>
        <div style={{textAlign:'center'}}>
          <h1>Latest Discounted Products</h1>
          <p className={styles.ptag}>
            See Our latest discounted products below. Choose your daily needs
            from here and get a special discount with free shipping.
          </p>
        </div>
        <div className="product">
          {categories.map(([name, product], index) => (
            <MainCategoryBox name={name} product={product} key={index} />
          ))}
        </div>
      </>
    );
}







export default DiscountBox