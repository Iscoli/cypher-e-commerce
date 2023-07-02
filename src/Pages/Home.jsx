import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Header/Navbar";
import Swipper from "../components/Parts/Swipper";
import "./PagesStyle/Home.css";
import FeaturedCategories from "../components/Parts/FeaturedCategories";
import { fetchCategory} from '../Redux';
import CategoryItem from "../components/Useables/CategoryItem";
import PopularItem   from "../components/Useables/PopularItem" ;
import { useSelector,useDispatch } from 'react-redux';
function Home() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCategory())
    
  },[])
  const data = useSelector(state => state.categories)
 
   
  
    const categories = Object.values(data.categories)

    

     
 
   

    
   
  return (
    <div>
     

      <div className="main-home">
        <div className="section-1">
          <Swipper />
        </div>
        
        <div className="section-2">
        <div className="part1">
          <FeaturedCategories />
        </div>
        <div className="main-category">
          <CategoryItem categories={categories} data={data}/>     
        </div>
        <div className="section-3">
           <PopularItem/>
        </div>

        </div>


        


      </div>
    </div>
  );
}

export default Home;



// {
//   data.loading ? (<h2>loading....</h2>) : data.error ? (
//     <h2>{data.error}</h2>
//   ) : categories.map((ind,index)=>(
//     <div key={index}>
//       <img src={ind.img} alt='' />
//       <h6>{ind.Name}</h6>
//       <ul>                 
//          {ind.subCategory.map((prd,ind)=>(
//            <p key={ind}>{prd}</p>
//          ))}
//       </ul>

//     </div>
 
//   ))

//  }










// const arr = [];

// Object.keys(datas).forEach(function (key) {
//   arr.push(datas[key]);
// });
// <ul>{arr.map((data,index) => {
//     console.log(data);
//     const tut = (Object.values(data))

//     console.log(tut.subcategory)
//   })}</ul>























//     const format = () => {
    //       const categories = Object.entries(data);
      
    //       const categoriesHashMap = {};
      
    //       categories.forEach(([category, products], index) => {
      
    //           const items = Object.values(products);
      
    //           // set value of category in categoriesHashMap object
    //           categoriesHashMap[category] = [];
      
    //           // get value of category from categoriesHashMap object
    //           const currentCategory =  categoriesHashMap[category];
      
    //           items.forEach((item) => {
    //               if (!currentCategory.includes(item.subcategory)) {
    //                   currentCategory.push(item.subcategory);
    //               }
    //           });
    //       })
      
    //       console.log(categoriesHashMap);
    //   }const format = () => {
    //     const categories = Object.entries(data);
    
    //     const categoriesHashMap = {};
    
    //     categories.forEach(([category, products], index) => {
    
    //         const items = Object.values(products);
    
    //         // set value of category in categoriesHashMap object
    //         categoriesHashMap[category] = [];
    
    //         // get value of category from categoriesHashMap object
    //         const currentCategory =  categoriesHashMap[category];
    
    //         items.forEach((item) => {
    //             if (!currentCategory.includes(item.subcategory)) {
    //                 currentCategory.push(item.subcategory);
    //             }
    //         });
    //     })
    
    //     console.log(categoriesHashMap);
    // }

        //  console.log('num1',datas[0])
        //  console.log('number 2',Object.values(datas))

        // console.log(Object.values(data));

        // datas.map((data) => {
        //   console.log(data);
        // });

        // for (const data in datas) {
        //   const element = datas.data;
        //   console.log(element);
        // }

        // for (let i = 0; i < datas.length; i++) {
        //   const element = datas.i;
        //   console.log(element);
        // }

        // console.log(cur)
        // const tut = (Object.values(cur))
        //   console.log(tut[1].subcategory)
        //   console.log(tut[2].subcategory)
        //   console.log(tut[3].subcategory)
        //   console.log(tut[4].subcategory)
        // const cur = Object.values(currencies)







































  //       console.log("uu")
  // const categoriesHashMap =[];
  // const subCategory=[]
  // const subCategories = Object.entries(subCategory);

     
  // useEffect(() => {
  //   const getCountries = async () => {
  //     try {
  //       const { data } = await axios.get("Category backupPretty.json");
         
  //        const dat = Object.entries(data)
        
  //          {dat.map((prp,index)=>{
  //               console.log(prp[1].subCategory)
  //          })}

    
  //     } catch (error) {
  //       console.log("an eroo occured");
  //     }
  //   };
  //   getCountries();


  // }, []);

        