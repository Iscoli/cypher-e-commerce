    import React from 'react';
    import './CartBottom.css';
    import { useSelector } from 'react-redux';
    import { Link } from 'react-router-dom';
    
    function CartBottom({closeHandler}) {
      const data = useSelector(state => state.cartdata);
      const cart = [data.product]
            const TotalPrice =cart ?. map((product,index)=>{
        return ( product.reduce((a,c)=> a + c.price* c.count,0))
      
      })
      return (
        <>
          
          <Link className='cart-bottom' to='/check' style={{
            textDecoration:'none'
          }}
          onClick={closeHandler}
          >
            <p>Proceed To Checkout</p>
            <span>${TotalPrice}</span>
          </Link>
        </>
      )
    }
    
    export default CartBottom
    

