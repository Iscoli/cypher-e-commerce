    import React from 'react';
    import './CartBottom.css';
    import { useSelector } from 'react-redux';
    
    function CartBottom() {
      const data = useSelector(state => state.cartdata);
      const cart = [data.product]
            const TotalPrice =cart ?. map((product,index)=>{
        return ( product.reduce((a,c)=> a + c.price* c.count,0))
      
      })
      return (
        <>
          
          <div className='cart-bottom'>
            <p>Proceed To Checkout</p>
            <span>${TotalPrice}</span>
          </div>
        </>
      )
    }
    
    export default CartBottom
    

