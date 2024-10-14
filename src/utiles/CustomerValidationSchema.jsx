import * as Yup from 'yup';

export const getCustomerValidationSchema = () => {
    return Yup.object().shape({
        firstName: Yup.string()
            .required("First Name is required"),
        lastName: Yup.string()
            .required("Last Name is required"),
        dob: Yup.date()
            .required("Date of Birth is required")
            .nullable(),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        gender: Yup.string()
            .oneOf(['Male', 'Female', 'Other'], "Gender must be either Male, Female, or Other")
            .required("Gender is required"),
        phoneNumber: Yup.string()
            .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
            .required("Phone Number is required"),
        address: Yup.string()
            .required("Address is required"),
        termsAccepted: Yup.bool().oneOf([true], 'You must accept the terms and conditions').required('Terms and conditions are required'),
    
    });
};