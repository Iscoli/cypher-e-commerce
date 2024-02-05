import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../UsablesCss/MainCategoryBoxModule.css";
import { ReactComponent as AddCart } from "../../assets/button.svg";
import { fetchCartData, decreaseProductQuantity } from "../../../Redux";
import { useSelector, useDispatch } from "react-redux";

function RelatedProductBox({
  id,
  count,
  imgUrl,
  price,
  name,
  discount,
  stock,
  weight,
}) {
  

  console.log(id, count, imgUrl, price, name, discount, stock, weight, "kaya");
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
  const cartItem = data.product || [];

  const cartCount = (id) => {
    const product = cartItem.find((item) => item.id === id);

    if (!product) return 0;
    return product.count;
  };

  const suna = name;

  return (
    <div className="category-box">
      <div className="product-img-container">
        <Link to={`/product/${suna}`}>
          <img className="products-img" src={imgUrl} alt="products" />
        </Link>
      </div>
      <div className="weight-name">
        <p className="weight-wtag">{weight}</p>
        <p className="weight-ptag">{name}</p>
      </div>
      <div
        className="buttom-container"
        style={{ position: "absolute", width: "90%", bottom: "5px" }}
      >
        <div className="price-container">
          <div>
            <p>
              {discount
                ? `$${(price - (price * discount) / 100).toFixed(2)}`
                : ""}
            </p>
          </div>
          <div>
            <p className={discount ? "discount-stroke" : "discount-price"}>
              ${price}
            </p>
          </div>
        </div>

        {cartCount(id) >= 1 ? (
          <div className="cart-countnub">
            <button
              style={{ cursor: "pointer" }}
              onClick={() =>
                handleAdd({ id, count, imgUrl, price, name, discount })
              }
            >
              +
            </button>
            <span>{cartCount(id)}</span>
            <button
              style={{ cursor: "pointer" }}
              onClick={() =>
                handleDecrease({ id, count, imgUrl, price, name, discount })
              }
            >
              -
            </button>
          </div>
        ) : (
          <span style={{ cursor: "pointer" }}>
            <AddCart
              className="briefcase-icon"
              onClick={() => {
                if (stock === 0) {
                  setIsStockOut(true);
                } else {
                  handleAdd({ id, count, imgUrl, price, name, discount });
                }
              }}
              disabled={isStockOut}
            />
          </span>
        )}
      </div>

      <p className="discount-ptag">
        {discount ? (
          <span
            style={{ display: stock ? "block" : "none" }}
            className="discount"
          >
            {`${discount}% off`}{" "}
          </span>
        ) : (
          ""
        )}
      </p>
      <span>
        {stock === 0 ? <span className="stock-out">Stock Out</span> : ""}
      </span>
    </div>
  );
}

export default RelatedProductBox;
