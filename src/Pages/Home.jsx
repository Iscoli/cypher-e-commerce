import {useState,useEffect} from 'react';
import axios from 'axios';
import Navbar from '../Header/Navbar';
import Swipper from '../components/Parts/Swipper';
import  './PagesStyle/Home.css';
import FeaturedCategories from '../components/Parts/FeaturedCategories';
function Home(){

  useEffect(()=>{
    
    const getCountries = async()=>{
     
     
      try {
        const {data} = await axios.get('allJSONproducts')
        
        console.log(data)


       
   }
   catch (error){
     console.log('an eroo occured')
   }
    }
    getCountries()

},[])



 

  return<div>
   <Navbar />
   
    <div className='main-home'>
      <div className='section-1'>
        <Swipper/>
      </div>
      <div className='section-2'>
         <FeaturedCategories/>
      </div>
    </div>
   
  </div>
}

export default Home