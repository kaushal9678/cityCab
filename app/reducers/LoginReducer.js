import {
  LOGIN,
  LOGIN_USER,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from "../actions/types";
const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  user: null,
  loading: false,
  is_deliveryBoy:'No'
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload, error: "" };
    case LOGIN_USER_FAIL:
        //console.log(action);
        //console.log(action.error);
      //  console.log('errorDict = ',action.error.message);
     

      return { ...state, error: action.error.message, loading: false };
    case LOGIN_USER:
      return { ...state, loading: true, error: "" };
    default:
      return state;
  }
};
export default reducer;
