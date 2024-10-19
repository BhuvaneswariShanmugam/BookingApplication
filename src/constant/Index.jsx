export const BASE_URL = "http://localhost:8081/api/v1/auth/";


export const FormFields = [
    
        {
          name: 'firstName',
          placeholder: 'First name',
          type: 'text',
          className: 'w-48 me-2',
          id: 'firstName'
        },
        {
          name: 'lastName',
          placeholder: 'Last name',
          type: 'text',
          className: 'w-48',
          id: 'lastName'
        },
        {
          name: 'dateOfBirth',
          placeholder: 'Date of Birth',
          type: 'date',
          className: 'w-100',
          id: 'dateOfBirth'
        },
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email',
          className: 'w-100',
          id: 'email'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password',
          className: 'w-100',
          id: 'password'
        },
        {
          name: 'contactNumber',
          placeholder: 'Contact number',
          type: 'text',
          className: 'w-100',
          id: 'contactNumber'
        },
        {
          name: 'address',
          placeholder: 'Address',
          type: 'text',
          className: 'w-100',
          id: 'address'
        },
        {
          name: 'role',
          placeholder: 'Role',
          type: 'text',
          className: 'w-100',
          id: 'role'
        },
        {
          name: 'termsAccepted',
          label: 'I accept the Terms and Conditions',
          type: 'checkbox',
          className: 'form-check-input',
          id: 'termsAccepted',
          isCheckbox: true
        }
    
      
];