import { combineReducers } from "redux";
import CategoryReducer from "./Category/CategoryReducer";
import userReducer from "../Redux/User/userReducer";
import MainCatReducer from "../Redux/MainCategory/MainCatReducer";
import CartDataReducer from "./CartData/CartDataReducer";
import SubCatReducer  from  "./SubCategory/SubCatReducer"
import OrdersReducer  from  "./Orders/OrdersReducer";
import OrderDetailsReducer from "./OrderDetails/OrderDetailsReducer"

const rootReducer = combineReducers({
  categories: CategoryReducer,
  user: userReducer,
  maincategories:MainCatReducer,
  cartdata:CartDataReducer,
 subcategories:  SubCatReducer,
  orders: OrdersReducer,
 orderdetails: OrderDetailsReducer,
});

export default rootReducer;
