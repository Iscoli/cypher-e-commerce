import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../Header/Navbar';

import './PartsStyle/Sidebar.module.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClose} from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/Logo';



function sidebar(props) {
  

  return (
    <div className={props.bude? "main-phmodal  moveaway " : "main-phmodal movehere"}> 
     
    </div>
  )
}

export default sidebar
