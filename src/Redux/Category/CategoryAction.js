import axios from 'axios'
import { FETCH_CATEGORY_REQUEST } from "./CategoryTypes";
import { FETCH_CATEGORY_SUCCESS } from "./CategoryTypes";
import { FETCH_CATEGORY_FAILURE } from "./CategoryTypes";
 

export const fetchCategoryRequest = ()=>{
return{
  type:  FETCH_CATEGORY_REQUEST
}
}

export const fetchUserSuccess  = (categories)=>{
  return{
    type:  FETCH_CATEGORY_SUCCESS,
    payload:categories
  }
  }


  export const fetchCategoryFailure = (error)=>{
    return{
      type:  FETCH_CATEGORY_FAILURE,
      payload:error
    }
    }






    
export const fetchCategory = () => {
  return (dispatch) => {
     dispatch( fetchCategoryRequest())
    axios.get('/Category backupPretty copy.json').then(response => {
      const {data}= response
      
      dispatch(fetchUserSuccess(data))
     
    })
    .catch(error => {
      const errormsg = error.message
      dispatch(fetchCategoryFailure(errormsg))
    })
  }
}