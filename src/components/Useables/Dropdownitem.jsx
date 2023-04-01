    import {Link} from 'react-router-dom'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import {faAngleDown } from '@fortawesome/free-solid-svg-icons';
    function Dropdownitem(props){


      return <li>
         <FontAwesomeIcon  icon={props.img}/> 
         <Link><p>na so</p> lorem1000 </Link>
         <img src=''></img>
      </li>
    }


    export default Dropdownitem