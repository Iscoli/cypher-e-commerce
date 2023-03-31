import {useState} from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {db} from '../firebase.config';
import Navbar from "../Header/Navbar"
import '../Pages/PagesStyle/SignUp.css'
import visibilityIcon from '../components/assets/visibilityIcon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate} from 'react-router';
import {Link} from 'react-router-dom'

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



    const onSubmit= async(e)=>{
      e.preventDefault()

      try{
        const auth = getAuth()

        const userCredential = await createUserWithEmailAndPassword(auth,email,password)
    
            const user = userCredential.user
                updateProfile(auth.currentUser,{
                displayName:name
                })
               

        navigate('/')
      }catch (error){
          console.log(error)
      }
   
  }



   
  return <div>
         <div className="main-navbar">
         <Navbar/>
         </div>
         <div className="main-signin">
          <div className='sec-1'>
          <div className='sigin-bg'>
           <h2> Sign Up  </h2>
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
          placeholder=' enter your email'
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
           <Link to='/forgot-password'> <p>Forgot Password?</p> </Link>
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

            <button className='google-auth-btn'>
             <p> Sign Up With Google</p>
          </button>
          <Link to='/sign-in'><p>Are you a user? <span className='span-signUp'>Sign In  </span> </p> </Link>

      
          
        </div>
        </div>
</div>  
</div>

}


export default SignUp