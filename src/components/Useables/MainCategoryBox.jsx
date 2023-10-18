import React from "react";
import { useState } from "react";
import styles from "../UsablesCss/MainCategoryBoxModule.css";
import { ReactComponent as AddCart } from "../assets/button.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { fetchCartData, decreaseProductQuantity } from "../../Redux";
import { useSelector, useDispatch } from "react-redux";

function MainCategoryBox(props) {
  const dispatch = useDispatch();
  const [isStockOut, setIsStockOut] = useState(false);

  const numOfItemsPurchased = 1;
  const handleAdd = ({ id, count, imgUrl, price, name, discount }) => {
    const discountValue = discount || 0;
    dispatch(
      fetchCartData(
        { id, count, imgUrl, price, name, discountValue },
        numOfItemsPurchased
      )
    );
  };
  const handleDecrease = ({ id }) => {
    dispatch(decreaseProductQuantity(id));
  };
  const data = useSelector((state) => state.cartdata);
  const cart = [data.product];

  let cartItem = [];

  cart?.map((product, index) => {
    return cartItem.push(product);
  });

  const cartCount = (id) => {
    const product = cart[0]?.find((item) => item.id === id);

    if (!product) return 0;
    return product?.count;
  };

  return (
    <div className="category-box">
      <div className="product-img-container">
        <img
          className="products-img"
          src={props.product.imgUrl}
          alt="products"
        />
      </div>
      <div className="weight-name">
        <p className="weight-wtag">{props.product.weight}</p>
        <p className="weight-ptag">{props.product.name}</p>
      </div>
      <div className="buttom-container"
      style={{position:'absolute',
             width:'90%',
            bottom:'5px' }}
      >
        <div className="price-container">
          <div>
            <p>
              {props.product.discount
                ? `$${(
                    props.product.price -
                    (props.product.price * props.product.discount) / 100
                  ).toFixed(2)}`
                : ""}
            </p>
          </div>
          <div>
            <p
              className={
                props.product.discount ? "discount-stroke" : "discount-price"
              }
            >
              ${props.product.price}
            </p>
          </div>
        </div>

        {cartCount(props.product.id) >= 1 ? (
          <div  className="cart-countnub">
            <button
             style={{cursor:'pointer'}} 
             onClick={() => handleAdd(props.product)}>+</button>
            <span>{cartCount(props.product.id)}</span>
            <button
             style={{cursor:'pointer'}}
             onClick={() => handleDecrease(props.product)}>-</button>
          </div>
        ) : (
          <span style={{cursor:'pointer'}}>
            <AddCart
              className="briefcase-icon"
              onClick={() => {
                if (props.product.stock === 0) {
                  setIsStockOut(true);
                } else {
                  handleAdd(props.product);
                }
              }}
           
              disabled={isStockOut}
            />
          </span>
        )}
      </div>

      <p className="discount-ptag">
        {props.product.discount ? (
          <span className="discount">{`${props.product.discount}% off`} </span>
        ) : (
          ""
        )}
      </p>
      <span>
        {props.product.stock === 0 ? (
          <span className="stock-out">Stock Out</span>
        ) : (
          ""
        )}
      </span>
    </div>
  );
}

export default MainCategoryBox;
