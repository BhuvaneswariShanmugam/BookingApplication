import { configureStore } from '@reduxjs/toolkit';
// import signupReducer from './reducer/SignupReducer';
// import signinReducer from './reducer/SigninReducer';
import { SignupApi } from '../redux/service/SignupApi';


// const store = configureStore({
//   reducer: {
//     signup: signupReducer,
//     signin: signinReducer,
//     [SignupApi.reducerPath]: SignupApi.reducer,
  
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(SignupApi.middleware),
// });

const store = configureStore({
  reducer:{
    [SignupApi.reducerPath]:SignupApi.reducer
},
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({}).concat([SignupApi.middleware])
})

export default store;
