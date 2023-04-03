import React from 'react'

import Dropdownitem from '../Useables/Dropdownitem'; 
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './PartsStyle/FCategoryModal.css'
function PagesModals() {
 
  const [bude, setBude] = useState(false);
     
  return (
    
    <div>
         <div className='menu-trigger' onClick={()=>(setBude(!bude))}>
      Pages     <FontAwesomeIcon  icon={faAngleDown}/> 
          </div>
          <div className={`dropdown-menus ${bude? 'active' : 'inactive'}`}>
                    <ul>
                       <Dropdownitem img = {faAngleDown} text = {"my pages"}/>
                       <Dropdownitem img = {faAngleDown} text = {"My Profile"}/>
                       <Dropdownitem img = {faAngleDown} text = {"My Profile"}/>
                       <Dropdownitem img = {faAngleDown} text = {"My Profile"}/>
                    </ul>
            </div>
       </div>
 
    
  )
}

export default PagesModals
