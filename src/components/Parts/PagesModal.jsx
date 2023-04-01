import React from 'react'

import Dropdownitem from '../Useables/Dropdownitem'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './PartsStyle/FCategoryModal.css'
function PagesModal() {
 
  return (
    
     
                    <ul>
                       <Dropdownitem img = {faAngleDown} text = {"my pages"}/>
                       <Dropdownitem img = {faAngleDown} text = {"my pages"}/>
                       <Dropdownitem img = {faAngleDown} text = {"my pages"}/>
                       <Dropdownitem img = {faAngleDown} text = {"my pages"}/>
                    </ul>
        
    
  )
}

export default PagesModal
