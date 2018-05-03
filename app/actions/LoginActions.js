import { LOGIN, EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL,LOGIN_USER, IS_DELIVERY_BOY } from "./types";

export const emailChanged = (text)=>({
    type:EMAIL_CHANGED,
    payload:text

});

export const passwordChanged = (text)=>({
    type:PASSWORD_CHANGED,
    payload:text

});
export const loginUser = ({email,password})=>({
    type:LOGIN_USER,
    email,
    password,
    

})
export const isDeliveryBoy = (isDeliveryBoy)=>({
    type:IS_DELIVERY_BOY,
    payload:is_deliveryBoy,
})

/* export const loginUser = ({email,password}) =>{
    return (dispatch)=>{
        dispatch({type:LOGIN_USER});
     firebase.auth().signInWithEmailAndPassword(email,password)
     .then(user=>loginUserSuccess(dispatch,user)).catch(()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password).then(user=>loginUserSuccess(dispatch,user)).catch(()=>loginUserFail(dispatch))

     });
};
}; */
const loginUserSuccess = (dispatch,user)=>{
    dispatch({
        type:LOGIN_USER_SUCCESS,
        payload:user
    })
    Actions.main(); // navigating after successful to employeelist page where employeeList is a key defined in router scene but we need to first import that Actions from react-redux-flux
}

export const loginUserFail = ()=>({
    type:LOGIN_USER_FAIL,
    
})