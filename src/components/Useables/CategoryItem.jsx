import React from "react";
import CategoryBox from "./CategoryBox";
import styles from "../UsablesCss/CategoryItem.css";
import DisplaySpinner from "./DisplaySpinner/DisplaySpinner";

function CategoryItem(props) {
  return (
    <>
      {props.data.loading ? (
        <div>
          <DisplaySpinner />
        </div>
      ) : props.data.error ? (
        <div>
          <h2>{props.data.error}</h2>
        </div>
      ) : (
        <CategoryBox category={props.categories} />
      )}
    </>
  );
}

export default CategoryItem;
