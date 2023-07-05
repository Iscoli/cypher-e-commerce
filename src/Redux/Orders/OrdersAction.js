 import { FETCH_ORDER_REQUEST } from "./OrdersTypes";
import { FETCH_ORDER_SUCCESS } from "./OrdersTypes";
import { FETCH_ORDER_FAILURE } from "./OrdersTypes";
import {
  collection,
  getDocs,
  query,
  where,
 
} from "firebase/firestore";
import { db } from "../../firebase.config";


export const fetchOrderRequest = ()=>{
  return{
    type:  FETCH_ORDER_REQUEST 
  }
  }
  
  export const fetchOrderSuccess = (orders)=>{
    return{
      type:  FETCH_ORDER_SUCCESS,
      payload:orders
    }
    }
  
  
    export const fetchOrderFailure = (error)=>{
      return{
        type:  FETCH_ORDER_FAILURE,
        payload:error
      }
      }
  

      export const fetchAllUserOrders = (userUid) => async (dispatch) => {
        dispatch(fetchOrderRequest);
      
        try {
          const allOrdersRef = collection(db, 'orders');
      
          const qry = query(allOrdersRef, where('userRef', '==', userUid));
      
          const querySnap = await getDocs(qry);
       
          if(querySnap.metadata.fromCache){
            throw new Error()
          }
      
          let allUserOrders = [];
          querySnap.forEach((doc) => {
            return allUserOrders.push(doc.data());
          });
      
          dispatch(fetchOrderSuccess(allUserOrders));
         
        } catch (error) {
          dispatch(fetchOrderFailure(error) );
        }
      };