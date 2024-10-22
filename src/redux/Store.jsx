import { configureStore } from '@reduxjs/toolkit';
import { SignupApi } from '../redux/service/SignupApi';
import {UsersApi} from '../redux/service/UserApi';
import { TripApi } from './service/TripApi';



const store = configureStore({
  reducer:{
    [SignupApi.reducerPath]:SignupApi.reducer,
    [UsersApi.reducerPath]:UsersApi.reducer,
    [TripApi.reducerPath]:TripApi.reducer
},
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({}).concat([SignupApi.middleware,UsersApi.middleware,TripApi.middleware])
})

export default store;
