/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useForm } from "react-hook-form";
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import SignUp from './SignUp';
function Login() {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
<div className='login d-flex justify-content-center align-align-items-center 100-w vh-100'>
  <div className=' 50-w p-5 rounded bg-white h-75 mt-4'>
<Form onSubmit={handleSubmit(onSubmit)} >
  <h3 className='text-center'>Sign in</h3>
  <div className='mb-2'>
    <label htmlFor="email">Email</label>
    <input type='email' placeholder='Enter Email' className='form-control' {...register("email", { required: true })}/>
    {errors.email && 
<div className="alert alert-danger fw-bold p-1" role="alert">
  Email Is Required !
</div>}

  </div>
    <div className='mb-2'>
    <label htmlFor="password">Password</label>
    <input type='password' placeholder='Enter Password' className='form-control' {...register("password", { required: true })}/>
    {errors.password && 
<div className="alert alert-danger fw-bold p-1" role="alert">
  Enter Your Password 
</div>}
  </div>
  <div className='mb-2'>
    <input type='checkbox' className='custom-control custom-checkbox' id='check'/>
    <label htmlFor="check" className='custom-input-label ms-2'> Remember Me</label>
  </div>
  <div className='d-grid'>
   <Button type='submit' className='btn btn-primary'>Sign in</Button>
  </div>
  <p className='text-center  pt-5'>
  Forgot <a href="#"> Password ? </a> NOT A MEMBER! <Link to="/SignUp">Sign Up NOW</Link>
  </p>
</Form>
</div>
</div>


  )
}

export default Login