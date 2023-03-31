
    import {useState} from 'react'
    import '../Parts/PartsStyle/SubNav.css'    

    function SubNav(){

        
      return <div className='main-subNav'>
             <div className='subNav-container'>
            <div className='subNav1'>
               <div className='flex-11'>
                   Category
               </div>
               <div className='flex-12'>
                 About Us
               </div>
               <div className='flex-13'>
                 Contact Us
               </div>
               <div className='flex-14'> 
                Pages
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