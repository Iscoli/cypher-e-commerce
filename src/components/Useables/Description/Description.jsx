import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Description({subcategory}) {
  const [descriptions, setDescriptions] = useState([]);

  

   useEffect(() => {
     const getMainCategories = async () => {
       try {
         const { data } = await axios.get("/MainCategoryBackupPretty.json");

         // for the decription
          setDescriptions(data[0]["descriptionss"][subcategory]);


       } catch (error) {
         console.log("an eroo occured");
       }
     };
     getMainCategories();
   }, [subcategory]);

  return <p>{descriptions}</p>;
}

export default Description;
