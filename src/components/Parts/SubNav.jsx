
    import {useState} from 'react';
    import '../Parts/PartsStyle/SubNav.css';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import {faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
    import MainItemModal from './ProductModal/ItemModal/MainItemModal';
    import { Link } from 'react-router-dom';
    import Pages from '../Useables/Pages';

    function SubNav(){
      const [open, setOpen] = useState(false);
      const [bude, setBude] = useState(false);

      const closeModalHandler = ()=>{
        setBude(false);
        setOpen(false);
      }
        
      return <div className='main-subNav'>
             <div className='subNav-container'>
            <div className='subNav1'>
               <div className='flex-11'>
               <div className='menu-trigger' 
               style={{cursor:"pointer"}}
               onClick={()=>(setOpen(!open),setBude(false))}>
                   Category     <FontAwesomeIcon  icon={open? faAngleUp : faAngleDown}/> 
               </div>
              
               <div className={` dropdown-menuu iscoli ${open? 'active' : 'inactive'}`}>
                
                <MainItemModal closeModalHandler={closeModalHandler} /> 
                
                </div> 
                
               </div>
               <div className='flex-12'>
               <Link
                  className="link-tag link"
                  to={`/about`} 
                >
                 About Us
                 </Link>
               </div>
               <div className='flex-13'>
                <Link
                 className="link-tag link"
                  to={'/contact'} >
                Contact Us
                </Link>
               </div>
               <div className='flex-14'> 
               <div className='menu-trigge' onClick={()=>(setBude(!bude),setOpen(false))}>
                   Pages     <FontAwesomeIcon icon={bude? faAngleUp : faAngleDown}/> 
               </div>
               <div className={`dropdown-menus ${bude? 'active' : 'inactive'}`}>
               <Pages  closeModalHandler={closeModalHandler}/> 
                  </div> 


               </div>
            </div>
            <div className='subNav2'>
               <div className='flex-15'>
                <Link
               className="link-tag link"
               to={'/privacy'}  >
                Privacy Policy
                </Link>
                </div>
                <div className='flex-16'>
                <Link 
                className="link-tag link"
                to={'/terms'} >
                Terms & Conditions
                </Link>
               </div>
            </div>
            </div>
      </div>





     
    }

    export default SubNav