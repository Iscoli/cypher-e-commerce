import { FETCH_MAIN_CATEGORY_REQUEST,FETCH_MAIN_CATEGORY_SUCCESS,FETCH_MAIN_CATEGORY_FAILURE } from "./MainCatTypes";

const initialState = {
  loading: false,
  categories: [],
  error: ''
}


const MainCategoryReducer = (state = initialState, action) =>{
  switch(action.type){
    case  FETCH_MAIN_CATEGORY_REQUEST:
      return {
        ...state,
        loading:true
      }
 

  case FETCH_MAIN_CATEGORY_SUCCESS:
    return {
      ...state,
      loading:false,
      categories:action.payload,
      error: ''
    }


    case FETCH_MAIN_CATEGORY_FAILURE:
      return {
        ...state,
        loading:false,
        error:action.payload,
        categories: []
      }
      default : return state
  }
}

export default MainCategoryReducer 