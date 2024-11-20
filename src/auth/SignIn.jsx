import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { getLoginValidationSchema } from '../utiles/LoginValidationSchema';
import { useNavigate } from 'react-router-dom';
import { useSigninMutation } from '../redux/service/SignupApi';
import { ToastContainer, toast } from 'react-toastify';
import Input from '../components/Input';
import 'bootstrap/dist/css/bootstrap.min.css';
import { jwtDecode } from 'jwt-decode'; 

const SignIn = () => {
    const validationSchema = getLoginValidationSchema();
    const navigate = useNavigate();
    const [signin] = useSigninMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    useEffect(() => {
        sessionStorage.removeItem('Token');
        sessionStorage.removeItem('FirstName');
    }, []);

    const onSubmit = async (data) => {
        try {
            const result = await signin(data);
            console.log("API Response: ", result);
    
            if (result?.data?.statusCode === 200) {
                const { accessToken, refreshToken } = result.data.data; 
               
                const decodedToken = jwtDecode(accessToken); 
                const firstName = decodedToken.FirstName || 'User'; 
                
                sessionStorage.setItem('Token', accessToken);
                sessionStorage.setItem('RefreshToken', refreshToken);
                sessionStorage.setItem('FirstName', firstName); 
    
                toast.success("Login successful!", { autoClose: 1000 });
                setTimeout(() => navigate('/home'), 1000);
                reset();
            } else {
                const errorMessage = result.data.message || "Login failed. Please try again.";
                toast.error(errorMessage, { autoClose: 1000 });
            }
        } catch (error) {
            console.error("Error during login: ", error.message);
            toast.error(error.message || "An error occurred during submission. Please try again.", { autoClose: 500 });
        }
    };
    

    return (
        <div className="customer-container d-flex justify-content-center align-items-center">
            <div className="card border-0 shadow-lg bg-light mx-auto" style={{ maxWidth: '380px' }}>
                <div className="card-body">
                    <h2 className="text-center font-italic">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column align-items-center">
                        <div className="mb-3 w-100">
                            <Input
                                {...register('email')} 
                                type="email"
                                placeholder="Email"
                                className="form-control"
                            />
                            <span className="error text-danger">{errors.email?.message}</span>
                        </div>
                        <div className="mb-3 w-100">
                            <Input
                                type="password"
                                {...register('password')}
                                placeholder='Password'
                                className="form-control"
                            />
                            <span className="error text-danger">{errors.password?.message}</span>
                        </div>
                        <div className="justify-content-center mt-3 w-100">
                            <button
                                type="submit"
                                className="btn w-100"
                                style={{ color: 'white', backgroundColor: '#0066b8' }}
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <ToastContainer />

                    <p className="text-center mt-3">
                        Don't have an account?
                        <button
                            type="button"
                            className="btn btn-link p-0"
                            onClick={() => navigate('/signup')}
                        >
                            Sign Up
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
