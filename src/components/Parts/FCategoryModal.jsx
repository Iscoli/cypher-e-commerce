import React from 'react'
import { useState } from 'react';
import Dropdownitem from '../Useables/Dropdownitem'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './PartsStyle/FCategoryModal.css'
function FCategoryModal(props) {
    
  return (
    <div>
      
      
                    <li>
                       <p>{props.text}</p>
                    </li>
         
    </div>
  )
}

export default FCategoryModal
