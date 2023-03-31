import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

function Home(){

  return   <Link to='/'><FontAwesomeIcon className='svg' icon={ faHome }/> </Link>
}


export default Home