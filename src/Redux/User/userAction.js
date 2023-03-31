
import {USER_DETAILS} from './userTypes'
 

export const userDetails = (users)=>{
return{
  type: USER_DETAILS,
  payload:users
}
}
