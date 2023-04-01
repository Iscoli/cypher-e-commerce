import React from 'react'

import Dropdownitem from '../Useables/Dropdownitem'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './PartsStyle/FCategoryModal.css'
function FCategoryModal() {
 
  return (
    
     
                    <ul>
                       <Dropdownitem img = {faAngleDown} text = {"Drop Down"}/>
                       <Dropdownitem img = {faAngleDown} text = {"My Profile"}/>
                       <Dropdownitem img = {faAngleDown} text = {"My Profile"}/>
                       <Dropdownitem img = {faAngleDown} text = {"My Profile"}/>
                    </ul>
        
    
  )
}

export default FCategoryModal
