import { ADD_CART_DATA,REMOVE_PRODUCT,DECREASE_QUANTITY } from "./CartDataTypes";

const initialState = {
  
  product: []
 
};


const CartDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_DATA:
      let foundItem = state.product?.find(
        
        (product) => product.id === action.payload.product.id
      );

        if (foundItem) {
          
          return {
            product: state.product?.map((product) =>
              product.id === action.payload.product.id
                ? {
                    ...product,
                    count: product.count +action.payload.numOfItemPurchased,
                  }
                :  product
            ),
          };
      };
      const newItem = {
        
        ...action.payload.product,
        count: action.payload.numOfItemPurchased,
      };

      return {
        
        product: [...state.product, newItem],
      };



      
      case DECREASE_QUANTITY:
        const foundItemInCart = state.product?.find(
          (product) => product.id === action.payload
        );
          // Get me a product that matches with the id 
        
        if (foundItemInCart && foundItemInCart.count > 1) {
          
  
          return {
            ...state,
            product: state.product?.map((item) =>
              item.id === action.payload
                ? { ...item, count: item.count - 1 }
                : item
            ),
          };
        }
  
        let newCart = [...state.product];
  
        newCart.map((cartItem, index) => {
          if (cartItem.id === action.payload) {
            newCart.splice(index, 1);
            return newCart;
          }
        });
  
        return { product: newCart.length ? newCart : [] };


        case REMOVE_PRODUCT:
            
          return {
            product: state.product?.filter((item) => item.id !== action.payload.id),
          };
    


    default:
      return state;
  }
};

export default CartDataReducer;
