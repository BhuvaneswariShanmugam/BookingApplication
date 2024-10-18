import  {getSignin}  from '../action/Indix';
let initialSigninState = {
    userInfo: null,
    error: null,
    loading: false,
};

 const SigninReducer = (state = initialSigninState, action) => {
    switch (action?.type) {
        case getSignin.REQUEST:
            return { ...state, loading: true, error: null }; 
        case getSignin.SUCCESS:
            return { ...state, loading: false, userInfo: action.payload }; 
        case getSignin.ERROR:
            return { ...state, loading: false, error: action.payload }; 
        default:
            return state;
    }
};
export default SigninReducer;