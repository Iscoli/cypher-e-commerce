import {
  FETCH_ORDERDETAILS_REQUEST,
  FETCH_ORDERDETAILS_SUCCESS,
  FETCH_ORDERDETAILS_FAILURE,
} from "./OrderDetailsTypes";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase.config";

export const fetchOrderDetails = (order_id) => async (dispatch) => {
 
  dispatch({ type: FETCH_ORDERDETAILS_REQUEST });
  
  try {
    const invoiceRef = doc(db, "orders", order_id);
    const docSnap = await getDoc(invoiceRef);
    if (docSnap.exists()) {
      dispatch({ type: FETCH_ORDERDETAILS_SUCCESS, payload: docSnap.data() });
    } else {
      dispatch({ type: FETCH_ORDERDETAILS_SUCCESS, payload: {} });
    }
  } catch (error) {
    dispatch({ type: FETCH_ORDERDETAILS_FAILURE });
  }
};
