
    import {useState} from 'react';
    import '../Parts/PartsStyle/SubNav.css';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import {faAngleDown } from '@fortawesome/free-solid-svg-icons';
    
    import FCategoryModal from './FCategoryModal';
    import PagesModal from './PagesModal';

    function SubNav(){
      const [open, setOpen] = useState(false);
        
      return <div className='main-subNav'>
             <div className='subNav-container'>
            <div className='subNav1'>
               <div className='flex-11'>
               <div className='menu-trigger' onClick={()=>(setOpen(!open))}>
                   Category     <FontAwesomeIcon  icon={faAngleDown}/> 
               </div>
                
       <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                 <FCategoryModal/>
                 </div>
               </div>
               <div className='flex-12'>
                 About Us
               </div>
               <div className='flex-13'>
                 Contact Us
               </div>
               <div className='flex-14'> 
               <div className='menu-trigger' onClick={()=>(setOpen(!open))}>
                Pages  <FontAwesomeIcon  icon={faAngleDown}/> 
                <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                    <PagesModal/>
                </div>
                </div>
               </div>
            </div>
            <div className='subNav2'>
               <div className='flex-15'>
                Privacy Policy
                </div>
                <div className='flex-16'>
                Terms & Conditions
               </div>
            </div>
            </div>
      </div>





     
    }

    export default SubNav