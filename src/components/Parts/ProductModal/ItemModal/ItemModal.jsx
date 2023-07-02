import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemModal.css";
import arrow from "../../../assets/left-arrow.svg";

function ItemModal({item}) {
  const [open, setOpen] = useState(false);

  const Toggle = () => {
    setOpen((prev) => !prev);
  };
  const AddIt = (e) => {
    console.log(e.target);
  };

  return (
    <>
      {
        //  onClick={props.closeModalHandler}

        
         
            <div >
              <div className="product-modal">
                <div className="modalimg-container" onClick={Toggle}>
                  <img className="main-modalimg" src={item.img} alt="image" />
                  <p className="categoty-name" >{item.Name}</p>
                </div>

                <div>
                  <img src={arrow} alt="arrow" />
                </div>
              </div>

              {open && <div > 
                
                  {item.subCategory.map((subCategory, index) => (
                    <Link
                      className="link-tag link"
                      to={`/sub-category/${subCategory}`}
                      key={index}
                    >
                    
                      <li key={index}>
                        <span>- {subCategory}</span>
                       
                      </li>
                    </Link>
                  ))}
                
              </div>}
            </div>
          
       
      }
    </>
  );
}

export default ItemModal;
