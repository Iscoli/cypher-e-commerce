import {useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import '../Pages/PagesStyle/SignUp.css';
import Oauth from '../components/Parts/GoogleOauth/Oauth';
import visibilityIcon from '../components/assets/visibilityIcon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faHeartPulse, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate} from 'react-router';
import {Link} from 'react-router-dom';
import ForgotPwd from './ForgotPwd';

function SignUp(){
   

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
       email: '',
       password: '',
       name: '',
       number: '',
  })
 
    const { email, password,name,number } = formData
    const navigate = useNavigate();

    const onChange= (e)=>{
      setFormData((prevState)=>({
        ...prevState,
       [e.target.id]: e.target.value,
    }))      
    }

    const [modalVisible, setModalVisible] = useState(false);

    // Function to toggle the modal visibility
    const toggleModal = () => {
      setModalVisible((prevState) => !prevState);
    };
  
    // Function to close the modal
    const closeModal = () => {
      setModalVisible(false);
    };

    const onSubmit= async(e)=>{
      e.preventDefault()

      try{
        const auth = getAuth()

        const userCredential = await createUserWithEmailAndPassword(auth,email,password,number)
    
            const user = userCredential.user
                updateProfile(auth.currentUser,{
                displayName:name
                })
               
                const formDataCopy = { ...formData }
                delete formDataCopy.password
                formDataCopy.timestamp = serverTimestamp()

                await setDoc(doc(db, 'users', user.uid), formDataCopy)
      

        navigate('/')
      }catch (error){
        toast.error("Registration failed, please retry");
      }
   
  }



   
  return <div>
         <div className="main-navbar">
     
         </div>
         <div className="main-signin">
          <div className='sec-1'>
          <div
            style={{ fontSize: "1.8rem" }}
            className="sigin-bg sharedPages-div"
          >
            Sign Up
          </div>
        <div className='formSignIn'>
          <form onSubmit={onSubmit}>




          <div className='emailInputDiv'>
            <label className='label-email'>Name</label>
           
            <div className='main-passwordInputDiv'>
          <FontAwesomeIcon className='faEnvelope' icon={faUser}/>
          <input
          type='name'
          className='emailInput'
          placeholder=' enter your name'
          id='name'
          value={name}
          onChange={onChange}
          />
          </div>
          </div>





          <div className='emailInputDiv'>
            <label className='label-email'> Email</label>
           
            <div className='main-passwordInputDiv'>
          <FontAwesomeIcon className='faEnvelope' icon={faEnvelope }/>
          <input
          type='email'
          className='emailInput'
          placeholder=' enter your email'
          id='email'
          value={email}
          onChange={onChange}
          />
          </div>
          </div>






          <div className='emailInputDiv'>
            <label className='label-email'>Phone</label>
           
            <div className='main-passwordInputDiv'>
          <FontAwesomeIcon className='faEnvelope' icon={faPhone }/>
          <input
          type='number'
          className='emailInput'
          placeholder=' +2349067886012'
          id='number'
          value={number}
          onChange={onChange}
          />
          </div>
          </div>








          <div className='passwordInputDiv'>
           <div> <label className='label-password'> Password</label> </div>
            
          <div className='main-passwordInputDiv'>
           
          
          <FontAwesomeIcon className='faEnvelope' icon={faLock}/>
          <input
          
            type={showPassword ? 'text' : 'password'}
            className='passwordInput'
            placeholder= '    Known to me'
            id='password'
            value={password}
            onChange={onChange}
            
          />
           
         
          <img
            src={visibilityIcon}
            alt='show password'
            className='showPassword'
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
         
         </div>
        </div>
        <div className='forgot-pwd'>
        {modalVisible && <ForgotPwd closeModal={closeModal} />}
          
            
               <p  style={{  cursor:'pointer'}}>Forgot Password?</p> 
            
        </div>
        <div className='signInBtnDiv'>
         <button className='sign-in-btn'>
           Sign Up
          </button>
          </div>
          </form>
        </div>
        <div  className='google-auth'>
            <p>OR</p>

            <Oauth/>
         
          <div className="registerLink" > 
            <span>Already a user?</span>
            <Link to="/sign-in"  className="linkey"
             style={{ textDecoration: "none", paddingLeft:'10px'}}>
            Sign in
           </Link>
        </div> 

      
          
        </div>
        </div>
</div>  
</div>

}


export default SignUp