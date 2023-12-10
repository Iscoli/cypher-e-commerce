import React from "react";
import "../UsablesCss/CategoryBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CategoryBox(props) {
  return (
    <div className="box-container">
      {props.category?.map((category, index) => (
        <div className="box-contain" key={index}>
          <div>
            <img className="category-img" src={category.img} alt="" />
          </div>
          <div className="category-text">
            <Link
              className="link-tag link custom-link"
              to={`/main-category/${category.Name}`}
            >
              <p className="categoty-name">{category.Name}</p>
            </Link>
            <ul className="category-list">
              {category.subCategory.map((subCategory, index) => (
                <Link
                  className="link-tag link"
                  to={`/sub-category/${subCategory}`}
                  key={index}
                >
                  {" "}
                  <li key={index}>
                    <FontAwesomeIcon
                      className="category-pionter"
                      icon={faAngleRight}
                    />
                    {subCategory}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryBox;
