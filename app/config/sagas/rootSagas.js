
//import {LOGIN_USER} from '../../actions/LoginActions'
import {fork, call,put} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga/effects';
import  {watchLogin} from './LoginSaga'
import { LOGIN_USER, HOST_URL, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../../actions/types';
//import {watchLogin} from './LoginSaga';
//import rootSaga from '../sagas';

const getLatestUserDetail = action=>fetch(`https://www.eznetpos.com/api/serviceecom.php`,{
    method:'POST',
   
    body:JSON.stringify({
        //console.log('login'),
        action:'login',
        email:action.email,
        password:action.password,
        is_deliveryboy:'No',
    }),
});




function* loginUserAPI1(action){
    console.log("action param=",action.email,action.password)
    const body = {
        action:'login',
            email:action.email,
            password:action.password,
            is_deliveryboy:'No',
    }
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
   
    const response =  yield fetch('https://www.eznetpos.com/api/serviceecom.php',{
        method:'POST',
       
        body:formData
    });
    console.log('formdata.body = ',formData)
    //console.log('response.body = ',response.body)
    console.log('response.status=', response.status)
    console.log(`response=${JSON.stringify(response)}`);
   console.log('response json=',response.json())
    return yield (response.status === 200);
}

function* loginUserAPI(action){
    console.log("action param=",action.email,action.password)
    const body = {
        action:'login',
            email:action.email,
            password:action.password,
            is_deliveryboy:'No',
    }
    console.log('body= ',body);
    const response =  yield fetch('https://www.eznetpos.com/api/serviceecom.php',{
        method:'POST',
        headers:{
            Accept: 'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type' :'multipart/form-data, application/x-www-form-urlencoded; charset=utf-8'
        },
        body:JSON.stringify({
        //body
        action:'login',
            email:action.email,
            password:action.password,
            is_deliveryboy:'No',
        }),
    });
    console.log(`response=${JSON.stringify(response)}`);
    return yield (response.status === 201);
} 

const fetchLatestConversionRates = function* (action) {
    try {
      let {email,password} = action;
      console.log(`email=${email},password=${password}`)
      if (email.trim() == ""|| password.trim() == "") {
        //currency = yield select(state => state.currencies.baseCurrency);
        console.log('undefined');
      }
     // console.log('currencies=',currency)
      const response = yield call(loginUserAPI1, action);

      const result = yield response.json();
      console.log('result = ',result);
      if (result.error) {
        yield put({ type: LOGIN_USER_FAIL, error: result.error });
      } else {
        yield put({ type: LOGIN_USER_SUCCESS, result });
      }
    } catch (error) {
      yield put({ type: LOGIN_USER_FAIL, error: error.message });
    }
  };

function* fetchLoginUserDetails(action){
    console.log('TODO: update the things',action);
    //loginUserAPI(action)


    //getLatestUserDetail(action).then((res)=>res.json()).then((res)=>console.log(res)).catch((error)=> console.log(error));
     try {
        const response = yield call(loginUserAPI, action);
        console.log('response status ======  ',response.status);
        if (response.status >= 200 && response.status < 300) {
          const user = yield response.json();
            console.log('user=',user);
          yield put({ type: LOGIN_USER_SUCCESS, user });
        } else {
            console.log('error come=',response);
            yield put({ type: LOGIN_USER_FAIL});
          throw response;
        }
      } catch (error) {
          console.log('error=',error)
        yield put({ type: LOGIN_USER_FAIL, error });
      } 
}
export function* watchLoginUser(){
    yield takeEvery(LOGIN_USER,fetchLoginUserDetails);
}
export default function* rootSaga(){
   // yield call(watchLoginUser);//call(watchLogin)
    // yield takeEvery(LOGIN_USER,fetchLatestConversionRates)   
    yield [
        fork(watchLogin)
    ];
}