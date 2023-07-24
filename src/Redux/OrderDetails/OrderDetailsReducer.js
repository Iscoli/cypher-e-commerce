import {
  FETCH_ORDERDETAILS_REQUEST,
  FETCH_ORDERDETAILS_SUCCESS,
  FETCH_ORDERDETAILS_FAILURE,
} from "./OrderDetailsTypes";

const initialState = {
  loading: false,
  invoice: [],
  error: [],
};

const OrderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERDETAILS_REQUEST:
      return {
        loading: true,
        invoice: null,
        error: null,
      };

    case FETCH_ORDERDETAILS_SUCCESS:
      return {
        loading: false,
        invoice: action.payload,
        error: null,
      };

    case FETCH_ORDERDETAILS_FAILURE:
      return {
        ...state,
        error: "failed to fetch",
        loading: false,
        invoice: null,
      };

    default:
      return state;
  }
};

export default OrderDetailsReducer;
