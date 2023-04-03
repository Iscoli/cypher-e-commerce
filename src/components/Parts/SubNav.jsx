
    import {useState} from 'react';
    import '../Parts/PartsStyle/SubNav.css';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import {faAngleDown } from '@fortawesome/free-solid-svg-icons';
   
    import FCategoryModal from './FCategoryModal';
    import PagesModals from './PagesModal';

    function SubNav(){
      const [open, setOpen] = useState(false);
      const [bude, setBude] = useState(false);

        
      return <div className='main-subNav'>
             <div className='subNav-container'>
            <div className='subNav1'>
               <div className='flex-11'>
               <div className='menu-trigger' onClick={()=>(setBude(false),setOpen(!open))}>
                   Category     <FontAwesomeIcon  icon={faAngleDown}/> 
               </div>
               <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                <ul>
                    <FCategoryModal text={'texta'}/> 
                    <FCategoryModal text={'randa'}/> 
                    <FCategoryModal text={'panda'}/> 
                    <FCategoryModal text={'texta'}/> 
                </ul>  
                  </div> 

               </div>
               <div className='flex-12'>
                 About Us
               </div>
               <div className='flex-13'>
                 Contact Us
               </div>
               <div className='flex-14'> 
               <div className='menu-trigge' onClick={()=>(setBude(!bude),setOpen(false))}>
                   pages     <FontAwesomeIcon  icon={faAngleDown}/> 
               </div>
               <div className={`dropdown-menus ${bude? 'active' : 'inactive'}`}>
                <ul>
                    <FCategoryModal text={'text'}/> 
                    <FCategoryModal text={'rand'}/> 
                    <FCategoryModal text={'pand'}/> 
                    <FCategoryModal text={'text'}/> 
                </ul>  
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