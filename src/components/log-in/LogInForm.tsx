import React from 'react';
import { useForm } from "react-hook-form";

interface LogInFormProps {
  onFormSubmitted: (email: string) => void;
}

const LogInForm = (props: LogInFormProps) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => { 
    props.onFormSubmitted(data.email); 
  };

  return (
    <>
      <input 
          ref={register}
          name="email"
          className="email" 
          type="email" 
          placeholder="Enter your email address" />
      <button onClick={handleSubmit(onSubmit)}>Continue With Email</button>
    </>
  );
}

export default LogInForm;