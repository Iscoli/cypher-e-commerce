import { FETCH_CATEGORY_REQUEST,FETCH_CATEGORY_SUCCESS,FETCH_CATEGORY_FAILURE } from "./CategoryTypes";

const initialState = {
  loading: false,
  categories: [],
  error: ''
}


const CategoryReducer = (state = initialState, action) =>{
  switch(action.type){
    case  FETCH_CATEGORY_REQUEST:
      return {
        ...state,
        loading:true
      }
 

  case FETCH_CATEGORY_SUCCESS:
    return {
      ...state,
      loading:false,
      categories:action.payload,
      error: ''
    }


    case FETCH_CATEGORY_FAILURE:
      return {
        ...state,
        loading:false,
        error:action.payload,
        categories: []
      }
      default : return state
  }
}

export default CategoryReducer