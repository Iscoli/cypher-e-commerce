    import {Link} from 'react-router-dom'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




    function Dropdownitem(props){


      return <li>
         <FontAwesomeIcon  icon={props.img}/> 
         <Link><p>na so</p> lorem1000 </Link>
         {/* <img src=''></img> */}
      </li>
    }


    export default Dropdownitem