import { ADD_CART_DATA,REMOVE_PRODUCT,DECREASE_QUANTITY,EMPTY_CART_CONTENT } from "./CartDataTypes";

export const fetchCartData = (product,numOfItemPurchased)  => (dispatch) => {
  
  dispatch({
    type: ADD_CART_DATA,
    payload: { product,numOfItemPurchased},
  });
};

export const removeProductFromCart = (id) => (dispatch) => {
  
  dispatch({
    type: REMOVE_PRODUCT,
    payload: id,
  });
};

export const decreaseProductQuantity = (id) => (dispatch) => {

  dispatch({
    type: DECREASE_QUANTITY,
    payload: id,
  });
};

