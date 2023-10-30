// import { useState} from 'react';
// import { getAuth, sendPasswordResetEmail } from "firebase/auth";


function ChangePwd(){
  // const auth = getAuth();
  // // const user = auth.currentUser;
  

  // const [formData, setFormData] = useState({
  //   useremail: auth.currentUser.email,
  //   currPassword: '',
  //   newPassword: '',
  // });

  // const { useremail, currPassword, newPassword } = formData;
  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.id]: e.target.value,
  //   }));
  // };




//   const onSubmit = async(e) => {
//     e.preventDefault();

   
//   };
//   const changePassword = async()=>{
   
// sendPasswordResetEmail(auth, email)
//   .then(() => {
//     // Password reset email sent!
//     // ..
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
//   }
  // const { email } = auth.currentUser;
  return <div>
     
     <p>Congratulation a message has been sent to your email !!!!</p>
     
  </div>
 
}

export default ChangePwd