import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import MainCategoryBox from './MainCategoryBox';


function SubCategoryItem(props) {
  const [subcategories, setSubCategories] = useState([])  
  
 
  useEffect(()=>{
    
    const getSubCategories = async()=>{
       
     
      try {
        const {data} = await axios.get('/SubCategory.json')
        const category=Object.entries(data[0][`${props.param}`])
        
       
        setSubCategories(category)
        
        // [`${props.param}`]
   }
   catch (error){
     console.log('an eroo occured')
   }
    }
    getSubCategories()

},[])
  return (
    <div  className='product'>
    {
      
      subcategories.map(([name,product],index)=>(
        < MainCategoryBox name={name} product={product} key={index}/>
      ))
     
    }
  </div>
  )
}

export default SubCategoryItem












// const data = useSelector(state => state.subcategories)
  // const datas =[data.subcategories]
  // const fag= Object.entries(datas)

  // let hasown =[]


  // fag.map(([man,ind],int)=>{
  //   const val =Object.entries(ind)
  //   console.log()
  //   val.map(([trt,prp],inn)=>{

  //    hasown.push(Object.values(prp))
  // })
  //  })
  //  console.log(hasown)