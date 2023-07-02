import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {getAuth} from "firebase/auth";
import {faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';


    function Profile(){
        const dispatch = useDispatch()
        const auth = getAuth();
        const user = auth.currentUser
        
     
    return  <div>
        {user !== null ? <div className='user-email'><Link to='/DashBoard' className='  link-style'><h1>{user.email.charAt(0)}</h1> </Link></div> : <div> <Link to='/DashBoard' ><FontAwesomeIcon className='svg' icon={faUser}/></Link></div>}
    </div>
    }
    // <div className='user-email'>{ user !== null ?  <Link to='/DashBoard' className='  link-style'><h1>{user.email.charAt(0)}</h1> </Link> :  <Link to='/DashBoard' ><FontAwesomeIcon className='svg' icon={faUser}/></Link>} </div>
    export default Profile