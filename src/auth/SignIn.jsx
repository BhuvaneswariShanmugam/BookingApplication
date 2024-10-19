
import React from 'react';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { getLoginValidationSchema } from '../utiles/LoginValidationSchema';
import { useNavigate } from 'react-router-dom';
import { useSigninMutation } from '../redux/service/SignupApi';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const validationSchema = getLoginValidationSchema();
    const navigate = useNavigate();

    const [signin] = useSigninMutation(); 

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await signin(data).unwrap(); 
            toast.success("Sign-in Successful!"); 
            console.log("Sign-in Successful:", response);
            navigate('/'); 
        } catch (error) {
            toast.error("Sign-in Failed! Please try again."); 
            console.error("Sign-in Failed:", error); 
        }
    };

    return (
        <div className="customer-signup-container d-flex justify-content-center align-items-center ">
            
            <div className="card border-0 shadow-lg bg-light mx-auto " style={{ maxWidth: '380px' }}>
                <div className="card-body">
                    <h2 className="text-center font-italic">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column align-items-center">
                    
                        <div className="mb-3 w-100">
                            <input 
                                {...register('email')} 
                                placeholder='Email' 
                                className="form-control" 
                            />
                            <span className="error text-danger">{errors.email?.message}</span>
                        </div>
                        <div className="mb-3 w-100">
                            <input 
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

export default Login;
