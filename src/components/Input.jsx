import React from 'react';

const Input = ({
  type,
  value,
  onChange,
  placeholder,
  name,
  disabled,
  className,
  maxLength,
  minLength,
  pattern,
  required,
  autoFocus,
  autoComplete,
  ...rest
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      disabled={disabled}
      className={className}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      required={required}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      {...rest} 
    />
  );
};

export default Input;
