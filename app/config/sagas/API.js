import { takeEvery, call, put, select } from 'redux-saga/effects';


const hotstURL = 'https://www.eznetpos.com/api/serviceecom.php';

function*  loginUserAPI(action){
    //console.log("action param=",action.email,action.password)
    let is_deliveryboy = action.is_deliveryboy
    var formData = new FormData();
    formData.append('action', 'login');
    formData.append('email', action.email);
    formData.append('password', action.password);
    if (is_deliveryboy === undefined){
        formData.append('is_deliveryboy', 'No');
    }else{
    formData.append('is_deliveryboy', action.is_deliveryboy);
    }
 //  console.log('formData = ',formData)
    const response =  yield fetch('https://www.eznetpos.com/api/serviceecom.php',{
        method:'POST',
       
        body:formData
    });
  //  console.log('response from API = ',response)
   // console.log('response JSON = ',response.json())
   // const loginUser = yield response.status === 200 ? JSON.parse(response._bodyInit):[]
   // console.log('loginUser=',loginUser);
    return response;
}

export const API = {
    loginUserAPI,
};
