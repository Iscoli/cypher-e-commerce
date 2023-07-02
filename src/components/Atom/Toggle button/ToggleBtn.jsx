import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft} from '@fortawesome/free-solid-svg-icons';

    function ToggleBtn (props){

      return <>
         <FontAwesomeIcon className='svg' icon={ faAlignLeft} onClick={props.toggle}/></>
    }
    export default ToggleBtn