 import React from 'react';
 import { useSelector } from 'react-redux';
 import './PagesStyle/IndexRoute.css';
 import OrderSummary from '../components/Useables/Order-Summary/OrderSummary';
 import { ReactComponent as Spinner} from "../components/assets/spinner.svg";
 
 
 function IndexRoute() {
  const mainOrders = useSelector((state) => state.orders);
   const {loading,
          error,
          allUserOrders,
          statusPending,
          statusProcessing,
          statusCompleted,} = mainOrders 
  
 
   return (
     <div className='main-ordersummary'>
      <div>
       <OrderSummary 
       
        bgColor="rgb(254, 202, 202)"
          iconColor="rgb(220, 38, 38)"
        text='Total Order'
        number={
          loading ? (
            <p className='order-spin'>{<Spinner/>}</p>
          ) : error ? (
            <p className="text-danger">network error!</p>
          ) : (
            allUserOrders && allUserOrders.length
          )
        }
       />
        <OrderSummary 
        bgColor="rgb(254, 215, 170)"
        iconColor="rgb(238, 88, 12)"
        text='Pending Order'
        number={
          loading ? (
            <p className='order-spin'>{<Spinner/>}</p>
          ) : error ? (
            <p className="text-danger">network error!</p>
          ) : (
            allUserOrders && statusPending.length
          )
        } 
       />
       </div>
       <div>
       <OrderSummary 
        bgColor="rgb(199, 210, 254)"
        iconColor="rgb(79, 70, 229)"
        text='Processing Order'
        number={loading ? (
          <p className='order-spin'>{<Spinner/>}</p>
        ) : error ? (
          <p className="text-danger">network error!</p>
        ) : (
          allUserOrders && statusProcessing.length
        )} 
        
       />
       <OrderSummary 
        bgColor="rgb(167, 243, 208)"
        iconColor="rgb(5, 150, 105)"
        text='Completed Order'
        number={loading ? (
          <p className='order-spin'>{<Spinner/>}</p>
        ) : error ? (
          <p className="text-danger">network error!</p>
        ) : (
          allUserOrders && statusCompleted.length
        )} 
       />
       </div>

     </div>
   )
 }
 
 export default IndexRoute
 