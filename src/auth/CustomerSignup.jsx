import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getCustomerValidationSchema } from '../utiles/CustomerValidationSchema';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


const CustomerSignup = () => {
    const validationSchema = getCustomerValidationSchema();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data) => {
        const formData = { ...data, role: 'Customer' };
        console.log("Form Data:", formData);
        navigate('/signin');
    };

    return (

        <div className="customer-signup-container d-flex justify-content-end align-items-center my-4">
            <div className="card border-0 shadow-lg bg-light mx-auto col-md-8 col-lg-4 col-xl-3" style={{ maxWidth: '450px', height: '650px' }}>
                <div className="card-body d-flex flex-column justify-content-between">
                    <h2 className="text-center font-italic ">Customer Signup</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column align-items-center">
                        <div className="mb-3 d-flex justify-content-between w-100">
                            <div className="w-48 me-2">
                                <input {...register('firstName')} placeholder="First name" className="form-control" />
                                <span className="error text-danger">{errors.firstName?.message}</span>
                            </div>
                            <div className="w-48">
                                <input {...register('lastName')} placeholder='Last name' className="form-control" />
                                <span className="error text-danger">{errors.lastName?.message}</span>
                            </div>
                        </div>
                        <div className="mb-3 w-100">
                            <input type="date" {...register('dob')} className="form-control" />
                            <span className="error text-danger">{errors.dob?.message}</span>
                        </div>
                        <div className="mb-3 w-100">
                            <input {...register('email')} placeholder='Email' className="form-control" />
                            <span className="error text-danger">{errors.email?.message}</span>
                        </div>
                        <div className="mb-3 w-100">
                            <input type="password" {...register('password')} placeholder='Password' className="form-control" />
                            <span className="error text-danger">{errors.password?.message}</span>
                        </div>
                        <div className="mb-3 d-flex align-items-center w-100">
                            <label className="me-3 text-secondary">Gender:</label>
                            <div className="form-check me-4">
                                <input
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
                                <input
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
                            <input {...register('phoneNumber')} placeholder='Contact number' className="form-control" />
                            <span className="error text-danger">{errors.phoneNumber?.message}</span>
                        </div>
                        <div className="mb-2 w-100">
                            <input {...register('address')} placeholder='Address' className="form-control" />
                            <span className="error text-danger">{errors.address?.message}</span>
                        </div>

                        <div className="mb-3">
                            <div className="form-check">
                                <input
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
                            <button type="submit" className="btn  w-100" style={{color : 'white', backgroundColor:'#0066b8'}} >Sign Up</button>
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

export default CustomerSignup;
