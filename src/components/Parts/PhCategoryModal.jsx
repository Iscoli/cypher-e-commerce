import React from 'react';
import './PartsStyle/PhCategoryModal.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClose} from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/Logo';



function PhCategoryModal() {

  const menuItem=[
    {
        path:"/",
        name:"Baby Care",
       
    },
    {
        path:"/about",
        name:"Pet Care",
        
    },
   
    {
        path:"/comment",
        name:"Beauty & Health",
        
    },
    {
        path:"/product",
        name:"Sports & Fitness",
        
    }
  
]


const PagesItem=[
  {
      path:"/",
      name:"Offer",
     
  },
  {
      path:"/about",
      name:"Checkout",
      
  },
 
  {
      path:"/comment",
      name:"FAQ",
      
  },
  {
      path:"/product",
      name:"About US",
      
  },
  {
    path:"/product",
    name:"Contact US",
    
  },
  {
    path:"/product",
    name:"Privacy Policy",
    
  },
  {
    path:"/product",
    name:"Terms & Condition",
    
  },
  {
    path:"/product",
    name:"404",
    
  },

]

  return (
    <div className='main-phmodal'>
      <div className='phmodal-flex1'>
        <div className='phmodal-flex11'>
       
      <Logo/> 
     
        </div>
        <div className='phmodal-flex12'>
           <FontAwesomeIcon  className='close-btn' icon={faClose}/>
        </div>
      </div>
      <div className='phmodal-flex2' >
           
          { menuItem.map((item, index)=>(
               <div key={index} className='linky'>
               <p>{item.name}</p>
               </div>
             ))}
             <h1>Pages</h1>
           <hr></hr>
           
           { menuItem.map((item, index)=>(
            
               <div key={index}>
               <p>{item.name}</p>
               </div>
             ))}
      </div>
    </div>
  )
}

export default PhCategoryModal
