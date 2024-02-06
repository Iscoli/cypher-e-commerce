import { useState, useEffect } from "react";
import axios from "axios";
import MainCategoryBox from "../../Useables/MainCategoryBox";


function RelatedProduct({ maincategory }) {
  const [mainCategory, setMainCategory] = useState();

  useEffect(() => {
    const getMainCategories = async () => {
      console.log(maincategory, "maincategory");
      try {
        const { data } = await axios.get("/MainCategoryBackupPretty.json");

        const category = Object.entries(data[0][maincategory]);

        console.log(category, "category");
       
        // for the Category
        setMainCategory(category);

      } catch (error) {
        console.log("an eroo occured");
      }
    };
    getMainCategories();
  }, [maincategory]);

  return (
   <>
      {console.log(mainCategory, "mainsgs w")}
      <div className="product">
        {mainCategory &&
          mainCategory.map(([name, product], index) => (
            <MainCategoryBox name={name} product={product} key={index} />
          ))}
      </div>
  </>
  );
}

export default RelatedProduct;
