import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import styles from '../CartShopping/Cart.moudle.css'


function Cart(props){
   const data = useSelector(state => state.cartdata)
   let cart = data?.product?.reduce((amount, item) => item.count + amount, 0);
   return  <>
   <div className='cart-icon' onClick={props.CartToggle}><FontAwesomeIcon   className='svg' icon={faCartShopping}  />
   <div className='cartnumber'>{cart}</div></div>
   </>
}
export default Cart