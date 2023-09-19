/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useForm } from "react-hook-form";

function SignUp() {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <section className='main'>
  <div className='container'>
<div className='row'>
<div className='col-lg-7 col-md-12'></div>
<div className='col-lg-5 col-md-10 col-sm-12'>
  <div className='form-box px-5 py-4'>
<form onSubmit={handleSubmit(onSubmit)}>
<h2 className='text-center mb-4'>Register Now and Enjoy 25% OFF</h2>
<input type='text' name='' placeholder='Name' className='form-control mb-3' {...register("name", { required: true })}/>
{errors.name && 
<div className="alert alert-danger fw-bold p-1" role="alert">
  Name Is Required !
</div>}
<input type='email' name='' placeholder='Email' className='form-control mb-3' {...register("email", { required: true })}/>
{errors.email && 
<div className="alert alert-danger fw-bold p-1" role="alert">
  Email Is Required !
</div>}
<select className='form-select mb-3'>
  <option>City</option>
  <option>Berlin</option>
</select>
<input type='number' name='' placeholder='Contact number' className='form-control mb-3'/>
<div className='input-group mb-3'>
<input type='Password' name='' placeholder='Password' className='form-control border-0 '/>

<span className='input-group-text bg-white border-start-0'></span>
</div>
<div>
  <input type='checkbox' name='' />  
  <label><small className='fw-bold'>By Signing up, i agree to the <a href="#"> <b>terms and conditions</b></a></small></label>
</div>
<button type="submit" className="register-btn w-100 form-control ">SignUp</button>
</form>









  </div>

</div>




</div>







  </div>




    </section>
  )
}

export default SignUp