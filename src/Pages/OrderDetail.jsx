import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { fetchOrderDetails } from "../Redux";
import OrderDetailsBox from '../components/Useables/OrderDetails/OrderDetailsBox';



function OrderDetail() {
  const { orderDetails } = useParams();
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.orderdetails);

     
      useEffect(()=>{
        dispatch(fetchOrderDetails( orderDetails))
      },[orderDetails])
       
      console.log(invoices.error,'iniin')
  return<> 
  { 
     (
      invoices.loading ? 
      <div>loading....</div>:
      invoices.error ? 
      <div>error</div>   :
      <div>
        <OrderDetailsBox invoices={invoices.invoice} />
      </div>
    ) 
    
  }
   
   
  </>;
}

export default OrderDetail;
