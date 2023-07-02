import { FETCH_SUBCATEGORY_REQUEST,FETCH_SUBCATEGORY_SUCCESS,FETCH_SUBCATEGORY_FAILURE } from "./SubCatTypes";

const initialState = {
  loading: false,
  subcategories: [],
  error: ''
}


const MainCategoryReducer = (state = initialState, action) =>{
  switch(action.type){
    case  FETCH_SUBCATEGORY_REQUEST:
      return {
        ...state,
        loading:true
      }
 

  case FETCH_SUBCATEGORY_SUCCESS:
    return {
      ...state,
      loading:false,
      subcategories:action.payload,
      error: ''
    }


    case FETCH_SUBCATEGORY_FAILURE:
      return {
        ...state,
        loading:false,
        error:action.payload,
        subcategories: []
      }
      default : return state
  }
}

export default MainCategoryReducer 