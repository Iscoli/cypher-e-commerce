import {useEffect} from 'react';
import {getAuth} from "firebase/auth";
import {userDetails} from '../Redux'
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import  '../Pages/PagesStyle/DashBoard.css';
import { useSelector,useDispatch } from 'react-redux';

function  DashBoard(){
   const dispatch = useDispatch()
   const auth = getAuth();
   const user = auth.currentUser
  
   const users = useSelector(state => state.user)
   useEffect(() => {
    
      if(user !== null){
          
     
            
            // dispatch(userDetails(data, 'nam ey'));
            dispatch(userDetails(user))
               
      }
     
   },[])

   
    

  
   

   


   
  return<div>
   <div>
     <Navbar />
  </div>


    <div className='main-dashboard'>
      <div className='welcome'>
         <div className='welcome-container'>
            <div className='welcome-text'>
               <h5 className='welcome-name'>Welcome, <span className='displayName'>{user.displayName.split(" ")[0]}</span></h5>
               <p className='email'>{user.email}</p>
              </div>
              <div className='email-circle'>
              <p  className='first-email'>{user.email.charAt(0)}</p> 
              </div>
      </div>
      </div>
      <ul>
        <li>
           <NavLink to='profile'>Profile</NavLink>
        </li>
        <li>
           <NavLink to='Orders'>Orders</NavLink>
        </li>
        <li>
           <NavLink to='Changepwd'>ChangePwd</NavLink>
        </li>
        <li>
           <NavLink to='Logout'>LogOut</NavLink>
        </li>

      </ul>
    </div>
    <div>
    <Outlet />
    </div>
   
  </div>
}





  

















export default DashBoard








































// if(user !== null){
//    const displayName = user.displayName;
//    const email = user.email
//     const data={
//      displayName,
//      email
//     }
//    store.dispatch({
//      type: "USER_LOGIN",
//      payload: { user: user.providerData[0] }
//    });
 

// }

// })
