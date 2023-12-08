import notfound from './pictures/not found.svg';
import styles from './PagesStyle/notfound.module.css';
import { Link } from 'react-router-dom';


      function NotFound(){
        
             return <div className={styles.mainContainer}>
              <img src={notfound} alt="not-found" />
              <div className={styles.notFoundBtn}>
                    <Link style={{textDecoration:'none',color:'white'}} to='/'>
                     Try Again
                    </Link>
              </div>
             </div>

      }

      export default NotFound