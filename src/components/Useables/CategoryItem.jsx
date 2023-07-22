import React from "react";
import CategoryBox from "./CategoryBox";
import styles from "../UsablesCss/CategoryItem.css";

function CategoryItem(props) {
  return (
    <>
      {props.data.loading ? (
        <div>
          <h2>loading....</h2>
        </div>
      ) : props.data.error ? (
        <div>
          <h2>{props.data.error}</h2>{" "}
        </div>
      ) : (
        <CategoryBox category={props.categories} />
      )}
    </>
  );
}

export default CategoryItem;
