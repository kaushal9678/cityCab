import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';
import createSagaMiddleware  from 'redux-saga';
import rootSaga from './sagas/rootSagas' //'./sagas'
const sagaMiddleware = createSagaMiddleware()


 const middlerware = [sagaMiddleware];
 if (process.env.NODE_ENV === 'developemt'){
     middlerware.push(logger);
 }
const store = createStore(reducers,applyMiddleware(...middlerware));
sagaMiddleware.run(rootSaga);
export default store //createStore(reducers,applyMiddleware(...middlerware));
