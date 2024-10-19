import React from 'react';

const Form = ({ className, children, onSubmit, submitText }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
      <button type="submit">{submitText}</button>
    </form>
  );
};

export default Form;