export const BASE_URL = "http://localhost:8081/api/v1/auth/";
// src/constant/SignupFields.js

export const FormFields = [
    {
        id: 'first-name',
        name: 'firstName',
        type: 'text',
        placeholder: 'First Name',
    },
    {
        id: 'last-name',
        name: 'lastName',
        type: 'text',
        placeholder: 'Last Name',
    },
    {
        id: 'date-of-birth',
        name: 'dateOfBirth',
        type: 'date',
    },
    {
        id: 'email',
        name: 'email',
        type: 'email',
        placeholder: 'Email',
    },
    {
        id: 'password',
        name: 'password',
        type: 'password',
        placeholder: 'Password',
    },
    {
        id:'gender-male',
        name:'gender',
        type:'radio',
        options:[
            { value:'Male', label:'Male' },
            { value:'Female', label:'Female' }
        ],
    },
    {
        id:'contact-number',
        name:'contactNumber',
        type:'text',
        placeholder:'Contact Number',
    },
    {
        id:'address',
        name:'address',
        type:'text',
        placeholder:'Address',
    },
    {
      id:'role', 
      name:'role', 
      type:'text', 
      placeholder:'Role (ADMIN or CUSTOMER)', 
    },
    {
      id:'terms-accepted', 
      name:'termsAccepted', 
      type:'checkbox', 
      label:'I accept the Terms and Conditions'
    }
];