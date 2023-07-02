import React from "react";
import styles from "../UsablesCss/MainCategoryBoxModule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { fetchCartData,decreaseProductQuantity} from "../../Redux";
import { useSelector, useDispatch } from "react-redux";
function MainCategoryBox(props) {
  const dispatch = useDispatch();

  const numOfItemsPurchased = 1;
      const handleAdd = ({ id, count, imgUrl, price, name }) => {
        
        dispatch(
          fetchCartData({ id, count, imgUrl, price, name }, numOfItemsPurchased)
        );
      };
      const  handleDecrease = ({id})=>{
       
        dispatch(decreaseProductQuantity(id))
        
      } 
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
      <div>
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
      <div className="buttom-container">
        <div className="price-container">
          <div>
            <p>
              {props.product.discount
                ? `$${
                    props.product.price -
                    (props.product.price * props.product.discount) / 100
                  }`
                : ""}
            </p>
          </div>
          <div>
            <p
              className={
                props.product.discount ? "discount-stroke" : ".discount-price"
              }
            >
              ${props.product.price}
            </p>
          </div>
        </div>

        {cartCount(props.product.id) >= 1 ? <div className="cart-countnub">
          <button onClick={()=>handleAdd(props.product)}>+</button>
                  <span>{cartCount(props.product.id)}</span>
                  <button onClick={()=>handleDecrease(props.product)}>-</button>
        </div> :  
        <span>
          <FontAwesomeIcon
            className="briefcase-icon"
            onClick={() => handleAdd(props.product)}
            icon={faBriefcaseMedical}
          />
        </span>}
       
      </div>

      <p>
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
