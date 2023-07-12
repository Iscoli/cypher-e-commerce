import React from 'react';
import   './CartModal.moudle.css';
import Cart from '../assets/cart-add.svg';
import CartItem from '../Cart-Item/CartItem';
import { Link } from 'react-router-dom';
import CartBottom from '../Cart-bottom/CartBottom';


function CartModal(props) {
  return (
    <>
  <div className={props.bude? "main-phmod cartaway " : "main-phmod carthere"}> 
     <div className='cartmodal-nav' >
        <div className='shopping-cart'>
          <div>
         <img src={Cart} alt='shopping cart'/>
         </div>
         <div>
          <p>Shopping Cart</p>
          </div>
      </div>
      <div className='cart-closebtn' onClick={props.closeModalHandler}>
        <h2>x</h2>
      </div>
     </div>
     </div>
     <div className={props.bude? "main-phmoda cartaway " : "main-phmoda carthere"}> 

     <CartItem/>
     </div>
     <div className={props.bude? "main-botphmoda cartaway " : "main-botphmoda carthere"}> 
     <CartBottom closeHandler={props.closeModalHandler}/>
     
     </div>
     
     </>
  
  
 )
}

export default CartModal
