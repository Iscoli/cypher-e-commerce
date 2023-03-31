


import { combineReducers } from "redux"; 

import  userReducer from '../Redux/User/userReducer'


  const rootReducer = combineReducers({
    
    user: userReducer
  })

  export default rootReducer



