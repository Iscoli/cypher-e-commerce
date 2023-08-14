import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams,Link  } from 'react-router-dom';
import Navbar from '../Header/Navbar';

import styles from '../Pages/PagesStyle/MainCategory.module.css';
import { fetchMainCategory} from '../Redux';
import { useSelector,useDispatch } from 'react-redux';
import MainCategoryItem from '../components/Useables/MainCategoryItem';
import CategoryPart from '../components/Parts/CategoryPart';
function MainCategory() {
  const dispatch = useDispatch()
  const params = useParams()
  const param = params.category
  useEffect(()=>{
    
   
   dispatch(fetchMainCategory(param))
    
    
  },[])
 

     
  return (
    <div className={styles["main-container"]}>
    <div className={styles["main-category"]}>
      <Navbar/>
            
         <div className={styles['category-part']}>
        <CategoryPart/>
        </div>

        <div className={styles['main-item']}>
        <MainCategoryItem param={param} />
        </div>
        </div>
        </div>
  )
}

export default MainCategory
