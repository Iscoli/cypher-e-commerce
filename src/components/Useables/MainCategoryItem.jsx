import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import  MainCategoryBox from './MainCategoryBox'
import  styles from "../UsablesCss/MainCategoryItem.moudle.css"
import axios from 'axios';
import { useSelector } from 'react-redux';

function MainCategoryItem(props) {
  // const data = useSelector(state => state.maincategories)
  //    const datas = data.categories
  //    console.log(datas)
  const [categories, setCategories] = useState([])  
  
  // useEffect(()=>{
    //   const categora=(props.data.categories);
    // const category=(categora[0][`${props.param}`])

     
    // // },[])
    // const id = props.id
    
  //  const cartCount = (id) => {
  //   const product = product?.find((item) => item.id === id);
  //   if (!product) return 0;
  //   return product?.count;
  // };
  useEffect(()=>{
    
    const getMainCategories = async()=>{
       
     
      try {
        const {data} = await axios.get('/MainCategoryBackupPretty.json')
        
        const category=Object.entries(data[0][`${props.param}`])
       
       setCategories(category)
      
   }
   catch (error){
     console.log('an eroo occured')
   }
    }
    getMainCategories()

},[props.param])

const cartCount = (id) => {
  const product = categories?.find((item) => item.id === id);
  if (!product) return 0;
  console.log(product,'ppp')
  return product?.count;
  
};

  return (
    <div  className='product'>
      {
        
        categories.map(([name,product],index)=>(
          <span>{cartCount(product.id)}</span>,
          < MainCategoryBox name={name} product={product} key={index}/>
        ))
       
      }
    </div>
  )
}

export default MainCategoryItem
