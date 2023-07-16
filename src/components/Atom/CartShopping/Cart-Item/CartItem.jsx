 import React from 'react';
 import '../Cart-Item/CartItem.css';
 import Delete from '../assets/delete.svg';
 import { fetchCartData,decreaseProductQuantity,removeProductFromCart} from '../../../../Redux';
 import { useSelector,useDispatch } from 'react-redux';
 
 
 function CartItem() {
  const data = useSelector(state => state.cartdata);
  const cart = [data.product]
  console.log(data,'ooo')
   
   const dispatch= useDispatch()
   const numOfItemsPurchased = 1;

   const  handleAdd = ({imgUrl,id,name,price,count})=>{
    dispatch(fetchCartData({id,count, imgUrl, price, name },numOfItemsPurchased))
    }

    const  handleDelete = (id)=>{
      dispatch(removeProductFromCart(id))
      
  }
      const  handleDecrease = ({id})=>{
       
        dispatch(decreaseProductQuantity(id))
        
      } 


 
   return (
    
     <div className='main-cartitem'>
       {
       
         cart ?.map((product,index)=>{
          return product.map(({imgUrl,id,name,price,count})=>(
            <div key={id}>
            <div  className='cart-container'>
              <div className='cart-imagediv'>
              <img className='cart-img' src={imgUrl}/>
             </div>
              <div className='cart-details'>
                <div>
               <p>{name}</p>
               <h6>item price ${price}</h6>
               </div>
               <div className='bottom-cart'>
                <span>${price *count}</span>
               <div >
                  <button onClick={()=>handleAdd({imgUrl,id,name,price,count})}>+</button>
                  <span>{count}</span>
                  <button onClick={()=>handleDecrease({id})}>-</button>
                   </div>
                  
                <img className='del-btn' style={{fill:'red'}}onClick={()=>handleDelete({id})} src={Delete}  alt='delete-btn'/>
              
               </div>
               </div>
               </div>
              
               <hr/>
              
              </div>
          ))
        })
        
       }
         
        
     </div>
    
     
   )
 }
 
 export default CartItem
 
