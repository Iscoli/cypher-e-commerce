import {useState,useEffect} from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import './PagesStyle/profile.css'

import {updateDoc,doc} from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db,storage } from '../firebase.config';
import axios from 'axios';
import Navbar from '../Header/Navbar';

function  Profile(){
  const [changeDetails, setChangeDetails]= useState(false)
  const auth = getAuth()
  
 
  
  const { displayName, email, uid, photoURL,phoneNumber } = auth.currentUser;
 
  const [formData, setFormData] = useState({
    username: auth.currentUser.displayName,
    useremail: auth.currentUser.email,
    usernumber: auth.currentUser.number,
		useraddress: auth.currentUser.useraddress ??' ',
    imgUrl:null

  })
  const { username, useremail,usernumber,useraddress,imgUrl} = formData
    
  
  const onChange = (e)=>{
    if (e.target.files) {
			setFormData((prevState) => ({ ...prevState, imgUrl: e.target.files }));
		}
    if (!e.target.files) {
			setFormData((prevState) =>({
        ...prevState,
        [e.target.id] : e.target.value
      })
  
      )
		}
    
  }

 const onSubmit = async()=>{
  try {
    if (imgUrl !== null) {


      const storeImg = async (image) => {
        return new Promise((resolve, reject) => {
          const fileName = `${uid}-${image.name}`;
          const storageRef = ref(storage, `userImages/${fileName}`);

          const uploadTask = uploadBytesResumable(storageRef, image);
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              return progress;
            },
            (error) => {
              reject(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL);
              });
            }
          );
        });
      };
      const formattedUrl = await Promise.all(
        [...imgUrl].map((image) => storeImg(image))
      ).catch((e) => {
        return new Error();
      });

      
      // Update display name in fb
      await updateProfile(auth.currentUser, {
        displayName:username,
        email:useremail,
        phoneNumber:usernumber,
        photoURL: formattedUrl[0]
      })

      // Update in firestore
      const userRef = doc(db, 'users', auth.currentUser.uid)
      await updateDoc(userRef, {
        
        name:username,
        email:useremail,
        number: usernumber,
        address:useraddress,
        photoURL: formattedUrl[0]
      })
    }else{
        // Update display name in fb
        await updateProfile(auth.currentUser, {
          displayName:username,
          email:useremail,
          phoneNumber:usernumber,
          
        })
  
        // Update in firestore
        const userRef = doc(db, 'users', auth.currentUser.uid)
        await updateDoc(userRef, {
          
          name:username,
          email:useremail,
          number: usernumber,
          address:useraddress,
          
        })

    }
  } catch (error) {
    console.log(error)
  
  }
 }

  return<>
   <form className='profile '>
         <label>Name</label>
        <input
              type='text'
              id='username'
              className={!changeDetails ? 'profileOutlet' : 'profileOutletActive'}
              disabled={!changeDetails}
              value={username || ''}
              onChange={onChange}
            />
            <label>Email</label>
            <input
              type='text'
              id='useremail'
              className={!changeDetails ? 'profileOutlet' : 'profileOutletActive'}
              disabled={!changeDetails}
              value={useremail || ''}
              onChange={onChange}
            />
            <label>phoneNumber</label>
           <input
              type='text'
              id='usernumber'
              className={!changeDetails ? 'profileOutlet' : 'profileOutletActive'}
              disabled={!changeDetails}
              value={usernumber || ''}
              onChange={onChange}
            />
             <label>Address</label>
             <input
              type='text'
              id='useraddress'
              className={!changeDetails ? 'textarea' : 'textareaActive'}
              disabled={!changeDetails}
              value={useraddress || ''}
              onChange={onChange}
            />
            <label htmlFor="name">Upload Image</label>
									<input
										type="file"
										accept=".jpg,.jpeg,.png"
                    className='profile-image'
										onChange={onChange}
										disabled={!changeDetails}
										style={{
											cursor: !changeDetails ? 'not-allowed' : 'pointer',
										}}
									/>
              </form>
              <div className={changeDetails ? 'change-detailsActive' : 'change-details'}>
             <div>
             <p
            className='changePersonalDetails'
            onClick={() => {
              changeDetails && onSubmit()
              setChangeDetails((prevState) => !prevState)
            }}
          >
            {changeDetails ? 'Done' : 'Edit Profile'}
          </p>
          </div>
 
            <div>
          <p onClick={()=>{
              setChangeDetails((prevState) => !prevState)
          }}>
            {
              changeDetails ? 'Cancel' : ''
            } 

          </p>
          </div>

  </div>
 
  </>
}

export default Profile