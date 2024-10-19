import { configureStore } from '@reduxjs/toolkit';
import { SignupApi } from '../redux/service/SignupApi';
import {UsersApi} from '../redux/service/UserApi';



const store = configureStore({
  reducer:{
    [SignupApi.reducerPath]:SignupApi.reducer,
    [UsersApi.reducerPath]:UsersApi.reducer
},
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({}).concat([SignupApi.middleware,UsersApi.middleware])
})

export default store;
