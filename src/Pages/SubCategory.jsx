import React from 'react';
import { useEffect } from 'react';
import { useParams,Link  } from 'react-router-dom';
import styles from './PagesStyle/MainCategory.module.css'
import CategoryPart from '../components/Parts/CategoryPart';
import Navbar from '../Header/Navbar';
import SubCategoryItem from '../components/Useables/SubCategoryItem';
import { fetchSubCategory} from '../Redux';
import { useSelector,useDispatch } from 'react-redux';

function SubCategory() {
  const dispatch = useDispatch()

  const params = useParams()
  const param = params.product
  useEffect(()=>{
       
   dispatch(fetchSubCategory(param))
      
      
    // eslint-disable-next-line
   },[])
     
     
  
  return (  <div className={styles["main-container"]}>
  <div className={styles["main-category"]}>
          
       <div className={styles['category-part']}>
      <CategoryPart/>
      </div>

      <div className={styles['main-item']}>
        <SubCategoryItem param={param}/>
      </div>
      </div>
      </div>)  
}

export default SubCategory
