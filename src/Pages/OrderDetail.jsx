import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { fetchOrderDetails } from "../Redux";
import OrderDetailsBox from "../components/Useables/OrderDetailsBox/OrderDetailsBox";

function OrderDetail() {
  const { orderDetails } = useParams();
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.orderdetails);

     
      useEffect(()=>{
        dispatch(fetchOrderDetails( orderDetails))
      },[orderDetails])
       
      console.log(invoices,'iniin')
  return<> 
  {
    invoices.loading ? <div>loading.....</div> : 
    invoices.error ? <div>
      {invoices.error.message}
    </div> :
    <div>
      
      <OrderDetailsBox invoice={invoices.invoice}  />
    </div>
    
  }
   
   
  </>;
}

export default OrderDetail;
