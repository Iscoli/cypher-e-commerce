import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemModal.css";
import arrow from "../../../assets/left-arrow.svg";

function ItemModal({ item, closeModalHandler }) {
  const [open, setOpen] = useState(false);

  const Toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      {
        //  onClick={props.closeModalHandler}

        <div>
          <div className="product-modal">
            <div className="modalimg-container" onClick={Toggle}>
              <img className="main-modalimg" src={item.img} />
              <span className="categor-name">{item.Name}</span>
            </div>

            <div onClick={Toggle}>
              <img
                className={open ? "arrow-down" : "arrow-left"}
                src={arrow}
                alt="arrow"
              />
            </div>
          </div>

          {open && (
            <div>
              {item.subCategory.map((subCategory, index) => (
                <Link
                  className="link-tag link sub-category"
                  to={`/sub-category/${subCategory}`}
                  key={index}
                  onClick={closeModalHandler}
                >
                  <p key={index}>
                    <span>- {subCategory}</span>
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      }
    </>
  );
}

export default ItemModal;
