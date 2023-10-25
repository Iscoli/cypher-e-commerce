import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {getAuth} from "firebase/auth";
import {faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { useEffect,useState } from 'react';


    function Profile(){
        const [email, setEmail] = useState(false)
        const dispatch = useDispatch()
        const auth = getAuth();

        
        const user = auth.currentUser
        
        useEffect(()=>{
           if(auth.currentUser == null){
            setEmail(false)
           }else{
            setEmail(true)
           }
        },[auth.currentUser,email])
     
        console.log(email,'hjajw')  
      

    return  <div>
        {auth.currentUser !== null ? <div className='user-email'><Link to='/DashBoard' className='  link-style'><h1>{user.email.charAt(0)}</h1> </Link></div> : <div> <Link to='/DashBoard' ><FontAwesomeIcon className='svg' icon={faUser}/></Link></div>}
    </div>
    }
    // <div className='user-email'>{ user !== null ?  <Link to='/DashBoard' className='  link-style'><h1>{user.email.charAt(0)}</h1> </Link> :  <Link to='/DashBoard' ><FontAwesomeIcon className='svg' icon={faUser}/></Link>} </div>
    export default Profile