import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getSignupValidationSchema } from '../utiles/SignupValidationSchema';
import { useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../redux/service/SignupApi';
import { toast } from 'react-toastify';
import Input from '../components/Input';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


const Signup = () => {
    const validationSchema = getSignupValidationSchema();
    const navigate = useNavigate();

    const [signup] = useSignupMutation();


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data) => {
        try {
            
            await signup(data).unwrap();
            toast.success("Signup successfully!..");
        } catch (err) {
            toast.error("Signup failed. Please try again.");
        }
    };
    

    return (

        <div className="customer-signup-container d-flex justify-content-center align-items-center my-4">
            <div className="card border-0 shadow-lg bg-light  " style={{ maxWidth: '400px', height: '700px' }}>
                <div className="card-body flex-column justify-content-between">
                    <h2 className="text-center font-italic p-4">Customer Signup</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column align-items-center">
                        <div className="mb-3 d-flex justify-content-between w-100">
                            <div className="w-48 me-2">
                                <Input {...register('firstName')}
                                 placeholder="First name" 
                                 className="form-control" />
                                <span className="error text-danger">{errors.firstName?.message}</span>
                            </div>
                            <div className="w-48">
                                <Input {...register('lastName')} 
                                placeholder='Last name' 
                                className="form-control" />
                                <span className="error text-danger">{errors.lastName?.message}</span>
                            </div>
                        </div>
                        <div className="mb-3 w-100">
                            <Input type="date" {...register('dateOfBirth')}
                             className="form-control" />
                            <span className="error text-danger">{errors.dateOfBirth?.message}</span>
                        </div>
                        <div className="mb-3 w-100">
                            <Input {...register('email')}
                             placeholder='Email' 
                             className="form-control" />
                            <span className="error text-danger">{errors.email?.message}</span>
                        </div>
                        <div className="mb-3 w-100">
                            <Input type="password" 
                            {...register('password')} 
                            placeholder='Password'
                             className="form-control" />
                            <span className="error text-danger">{errors.password?.message}</span>
                        </div>
                        <div className="mb-3 d-flex align-items-center w-100">
                            <label className="me-3 text-secondary">Gender:</label>
                            <div className="form-check me-4">
                                <Input
                                    type="radio"
                                    {...register('gender')}
                                    value="Male"
                                    id="male"
                                    className="form-check-input"
                                />
                                <label htmlFor="male" className="form-check-label ms-3 text-secondary">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <Input
                                    type="radio"
                                    {...register('gender')}
                                    value="Female"
                                    id="female"
                                    className="form-check-input"
                                />
                                <label htmlFor="female" className="form-check-label ms-3 text-secondary">
                                    Female
                                </label>
                            </div>
                        </div>
                        <span className="error text-danger">{errors.gender?.message}</span>
                        <div className="mb-3 w-100">
                            <Input {...register('contactNumber')} 
                             placeholder='Contact number'
                             className="form-control" />
                            <span className="error text-danger">{errors.contactNumber?.message}</span>
                        </div>
                        <div className="mb-2 w-100">
                            <Input {...register('address')} 
                            placeholder='Address'
                             className="form-control" />
                            <span className="error text-danger">{errors.address?.message}</span>
                        </div>

                        <div className="mb-2 w-100">
                            <Input {...register('role')} 
                            placeholder='role'
                             className="form-control" />
                            <span className="error text-danger">{errors.role?.message}</span>
                        </div>


                        <div className="mb-3">
                            <div className="form-check">
                                <Input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="termsAccepted"
                                    {...register('termsAccepted')}
                                />
                                <label className="form-check-label" htmlFor="termsAccepted">
                                    I accept the Terms and Conditions
                                </label>
                            </div>
                            <div className="text-danger">{errors.termsAccepted?.message}</div>
                        </div>

                        <div className="justify-content-center mt-3 w-100" >
                            <button type="submit" 
                            className="btn  w-100"
                             style={{color : 'white', backgroundColor:'#0066b8'}} >
                            Sign Up</button>
                        </div>
                    </form>
                    <p className="text-center mt-3">
                        Already have an account?
                        <button
                            type="button"
                            className="btn btn-link p-0 "
                            onClick={() => navigate('/signin')}
                        >
                            Sign In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
