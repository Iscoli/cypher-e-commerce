import axios from 'axios'
import { FETCH_MAIN_CATEGORY_REQUEST } from "./MainCatTypes";
import { FETCH_MAIN_CATEGORY_SUCCESS } from "./MainCatTypes";
import { FETCH_MAIN_CATEGORY_FAILURE } from "./MainCatTypes";
 

export const fetchMainCategoryRequest = ()=>{
return{
  type:  FETCH_MAIN_CATEGORY_REQUEST 
}
}

export const fetchCategorySuccess = (categories)=>{
  return{
    type:  FETCH_MAIN_CATEGORY_SUCCESS,
    payload:categories
  }
  }


  export const fetchCategoryFailure = (error)=>{
    return{
      type:  FETCH_MAIN_CATEGORY_FAILURE,
      payload:error
    }
    }






    
export const fetchMainCategory = (param) => {
 
  return (dispatch) => {
  
     dispatch(fetchMainCategoryRequest())
    axios.get('/MainCategoryBackupPretty.json').then(response => {
      const {data}= response
    //  console.log(data[0][`${param}`],'dat')
      dispatch(fetchCategorySuccess(Object.entries(data[0][`${param}`])))
     
    })
    .catch(error => {
      const errormsg = error.message
      dispatch(fetchCategoryFailure(errormsg))
    })
  }
}