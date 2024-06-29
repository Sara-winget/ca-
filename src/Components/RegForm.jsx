import React from "react";
import {useForm} from 'react-hook-form'
import { useState } from "react";
import './RegForm.css'
function RegForm(){
const {register,handleSubmit,watch,formState:{errors}}=useForm();
const [registered,setreg]=useState(false);
const onSubmit=(data)=>{
setreg(true);
}
const currentPassword=watch('password','');
return(
    <>
<div className="formClass">
   <div>
    {registered?<pre><h1 className="registered">Registeration Successful</h1></pre>:null}
    </div> 
   <div className="formDiv"> <form onSubmit={handleSubmit(onSubmit)}>
       <div className="registration"> <h1>Create Account</h1></div>
<div className="username">
<input className="user"
  type="text"
  placeholder="Enter Username"
{...register('name',{required:true})}

/>
{errors.name && <h4>Name is required</h4>}
</div>
<div className="email">
<input className="user"
  type="email"
  placeholder="Enter email"
{...register('email',{required:"email is requird",pattern:{value:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,message:"this.is not valid email"}})}

/>
{errors.email&&<h4>{errors.email.message}</h4>}
</div>
<div className="password">
<input className="user"
  type="password"
  placeholder="Enter password"
  {...register('password',{required:"password is required",minLength:{value:4,message:"password must be minimum 4 character"},maxLength:{value:10,message:"password should not excced 10 characters"}})}
  
/>
    {errors.password && <h4>{errors.password.message}</h4>}

</div>
<div className="repassword">
<input className="user"
  type="password"
  placeholder="Reenter password"
  
  {...register('reEnterpassword',{required:"this field should not be left empty",validate:value=>value===currentPassword || "password do not match"})}
/>
{errors.reEnterpassword && <h4>{errors.reEnterpassword.message}</h4>}
</div>
<button type="submit">Register</button>
    </form></div></div>
    </>
)
}
export default RegForm;