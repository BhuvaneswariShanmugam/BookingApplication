import { Placeholder } from "react-bootstrap";

export const BASE_URL =  "http://localhost:8081/api/v1/auth/";

export const FormFields = [
    {
        ...register('firstName'),
        placeholder: "First name",
        className: "form-control",
        type: "text",
        error: errors.firstName?.message
    },
    {
        ...register('lastName'),
        placeholder: "Last name",
        className: "form-control",
        type: "text",
        error: errors.lastName?.message
    },
    {
        ...register('dateOfBirth'),
        className: "form-control",
        type: "date",
        error: errors.dateOfBirth?.message
    },
    {
        ...register('email'),
        placeholder: "Email",
        className: "form-control",
        type: "email",
        error: errors.email?.message
    },
    {
        ...register('password'),
        placeholder: "Password",
        className: "form-control",
        type: "password",
        error: errors.password?.message
    },
    {
        label: "Gender:",
        type: "radioGroup",
        options: [
            {
                value: "Male",
                label: "Male",
                ...register('gender'),
                className: "form-check-input",
                id: "male"
            },
            {
                value: "Female",
                label: "Female",
                ...register('gender'),
                className: "form-check-input",
                id: "female"
            }
        ],
        error: errors.gender?.message
    },
    {
        ...register('contactNumber'),
        placeholder: "Contact number",
        className: "form-control",
        type: "text",
        error: errors.contactNumber?.message
    },
    {
        ...register('address'),
        placeholder: "Address",
        className: "form-control",
        type: "text",
        error: errors.address?.message
    },
    {
        ...register('role'),
        placeholder: "Role",
        className: "form-control",
        type: "text",
        error: errors.role?.message
    },
    {
        type: "checkbox",
        label: "I accept the Terms and Conditions",
        ...register('termsAccepted'),
        className: "form-check-input",
        id: "termsAccepted",
        error: errors.termsAccepted?.message
    }
];
