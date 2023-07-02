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
 
  // const data = useSelector(state => state.maincategories)
  //  console.log(data,'data')
   
  
  //   const categora = ((data.categories))
  //   console.log(categora[0]['babycare'],'pppppp')
  // // 

  // const data = useSelector(state => state.maincategories)
  // console.log(data.loading)
  // const dispatch = useDispatch()
  
  // useEffect(()=>{
 


  // //   const getCountries = async()=>{

     
  // //     try {
  // //       const {data} = await axios.get('/MainCategoryBackupPretty.json')
        
        
       
       
       
  // //      const products=(Object.entries(data[0]["fish-meat"]))
  // //      setCategories([...products])
       
 
        
      

       
       
  // //  }
  // //  catch (error){
  // //    console.log('an eroo occured')
  // //  }
  // // }
  
  // //     getCountries()
  //   // eslint-disable-next-line
  //  },[])
     
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
