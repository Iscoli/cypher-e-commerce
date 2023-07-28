 import React from 'react';
 import '../Cart-Item/CartItem.css';
 import Delete from '../assets/delete.svg';
 import { fetchCartData,decreaseProductQuantity,removeProductFromCart} from '../../../../Redux';
 import  {ReactComponent as Plus} from '../../../assets/plus.svg';
 import  {ReactComponent as Minus} from '../../../assets/minus.svg';
 import { useSelector,useDispatch } from 'react-redux';
 
 
 function CartItem() {
  const data = useSelector(state => state.cartdata);
  const cart = [data.product]
   
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

      function capitalizeWords(str) {
        return str.replace(/\b\w/g, (char) => char.toUpperCase());
      }

 
   return (
    
     <div className='main-cartitem'>
       {
         cart?.map((product,index)=>{
          return product.map(({imgUrl,id,name,price,count})=>(
            <div key={id}>
            <div  className='cart-container'>
              <div className='cart-imagediv'>
              <img className='cart-img' src={imgUrl}/>
             </div>
              <div className='cart-details'>
                <div>
               <p className='cart-detailsName'>{capitalizeWords(name)}</p>
               <p className='item-price'>item price ${price}</p>
               </div>
               <div className='bottom-cart'>
                <span style={{fontSize:'.92rem',
                   fontWeight: '500', marginTop:'6px'}}>${price *count}.00</span>
               <div className='cal-button'>
              <button onClick={()=>handleAdd({imgUrl,id,name,price,count})} >
                <Plus style={{marginTop:'-6px'}}/>
                </button>
                  <span>{count}</span>
                  
              <button onClick={()=>handleDecrease({id})}>
                <Minus style={{marginTop:'-6px'}}/>
                </button>
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
 
