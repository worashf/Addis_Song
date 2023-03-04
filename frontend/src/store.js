import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core'
import songSlice from './redux/slice/songSlice';
import { rootSaga } from './redux/sagas';

const sagaMiddleWare  = createSagaMiddleware()


const store = configureStore({
    reducer :{
      addis :songSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleWare)
})


sagaMiddleWare.run(rootSaga)
export default  store
