import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Profile() {
  const [email, setEmail] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        
      if (user) {
        // User is logged in
        setEmail(user.email);
      } else {
        // User is logged out
        setEmail(null);
      }
    });

    return () => unsubscribe(); 
  }, [auth]);

  return (
    <div>
      {email !== null ? (
        <div className='user-email'>
          <Link to='/DashBoard' className='link-style'>
            <h1>{email.charAt(0)}</h1>
          </Link>
        </div>
      ) : (
        <div>
          <Link to='/DashBoard'>
            <FontAwesomeIcon className='svg' icon={faUser} />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Profile;
