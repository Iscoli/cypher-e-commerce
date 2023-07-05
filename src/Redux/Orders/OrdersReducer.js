import { FETCH_ORDER_REQUEST,FETCH_ORDER_SUCCESS,FETCH_ORDER_FAILURE } from "./OrdersTypes";

const initialState = {
  loading: false,
	allUserOrders: null,
	statusPending: null,
	statusProcessing: null,
	statusCompleted: null,
	error: null,
}


const OrdersReducer = (state = initialState, action) =>{
  switch(action.type){
    case  FETCH_ORDER_REQUEST:
      return {
        ...state,
        loading:true
      }
 

  case FETCH_ORDER_SUCCESS:
    const pending = action.payload.filter(
      (order) => order.status === 'pending'
    );

    const processing = action.payload.filter(
      (order) => order.status === 'processing'
    );

    const completed = action.payload.filter(
      (order) => order.status === 'completed'
    );

    return {
      loading: false,
      allUserOrders: action.payload.sort(
        (a, b) => b.created_at - a.created_at
      ),
      statusPending: pending,
      statusProcessing: processing,
      statusCompleted: completed,
      error: null,
    };



    case FETCH_ORDER_FAILURE:
      return {
        ...state,
        loading:false,
        error:action.payload,
        allUserOrders: null,
        statusPending: null,
        statusProcessing: null,
        statusCompleted: null,
        
      
      }
      default : return state
  }
}

export default OrdersReducer