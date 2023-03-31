
import { USER_DETAILS } from "./userTypes"


const intialState ={
  loading:false,
  user:{}
}

  const userReducer = (state = intialState, action)=>{
    switch(action.type){
      case USER_DETAILS: return {
        ...state,
        loading:true,
        user:action.payload
      }
      default : return state
  }
  }

  export default userReducer