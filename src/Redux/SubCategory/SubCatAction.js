import axios from 'axios'
import { FETCH_SUBCATEGORY_REQUEST } from "./SubCatTypes";
import { FETCH_SUBCATEGORY_SUCCESS } from "./SubCatTypes";
import { FETCH_SUBCATEGORY_FAILURE } from "./SubCatTypes";
 

export const fetchSubCategoryRequest = ()=>{
return{
  type:  FETCH_SUBCATEGORY_REQUEST 
}
}

export const fetchSubCategorySuccess = (subcategories)=>{
  return{
    type:  FETCH_SUBCATEGORY_SUCCESS,
    payload:subcategories
  }
  }


  export const fetchSubCategoryFailure = (error)=>{
    return{
      type:  FETCH_SUBCATEGORY_FAILURE,
      payload:error
    }
    }






    
export const fetchSubCategory = (param) => {
   
  return (dispatch) => {
  
     dispatch(fetchSubCategoryRequest())
    axios.get('/SUbCategory.json').then(response => {
   
      const {data}= response
     const date=[data[0][`${param}`],"data"]
      dispatch(fetchSubCategorySuccess(data[0][`${param}`]))
     
    })
    .catch(error => {
      const errormsg = error.message
      dispatch(fetchSubCategoryFailure(errormsg))
    })
  }
}