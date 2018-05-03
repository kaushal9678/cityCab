 import { takeEvery, call, put, select,takeLatest } from 'redux-saga/effects';

import {API} from './API'
import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from '../../actions/types';

function* getLoginUserDetails(action){
    try{
      const {email,password}= action
     console.log(`email=${email},ppassword=${password}`)
        const response = yield API.loginUserAPI(action)
       const result = yield response.json();
        console.log(result);
        const resultDict= result.result;
       //console.log(result.); 
      // console.log('result error status = ',result.result.status)
        if (resultDict.status === '0') {
          console.log('resultstatus = ',resultDict.status)
          console.log('resultDict = ',resultDict)

            yield put({ type: LOGIN_USER_FAIL, error: resultDict });
          } else {
            console.log('resultDict = ',resultDict)
            yield put({ type: LOGIN_USER_SUCCESS, resultDict });
          }
        } catch (error) {
          yield put({ type: LOGIN_USER_FAIL, error: error.message });
        }
    
}
export function* watchLogin(){
    yield takeLatest(LOGIN_USER,getLoginUserDetails)
}
 