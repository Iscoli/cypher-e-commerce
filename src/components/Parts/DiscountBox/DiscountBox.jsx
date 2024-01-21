import { useState,useEffect } from "react";
import axios from "axios";
import MainCategoryBox from "../../Useables/MainCategoryBox";
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
        <div className="product">
          {categories.map(([name, product], index) => (
            <MainCategoryBox name={name} product={product} key={index} />
          ))}
        </div>
      </>
    );
}







export default DiscountBox