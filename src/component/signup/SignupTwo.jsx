import React, { useState } from 'react'
import axios from 'axios'

const SignupTwo = () => {
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
    phoneNumber:'',
    pin:'',
    sex:'',
  })
  const [userData, setUserData]=useState('')

  const {firstName, lastName,email, password, confirmPassword, phoneNumber, pin, sex}= formData

  const handleChange=((e)=>{
    e.preventDefault();
    setFormData({...formData, [e.target.name] : e.target.value});
  });
  console.log(formData)

  const handleSubmit = ((e)=>{
    e.preventDefault();
    axios.post(`https://bankapp-v1.onrender.com/api/v1/user/sign-up`, formData)
    .then((response)=>{
      console.log(response)
    }).catch((error)=>{
      console.log(error)
    })
    setUserData([...userData, formData])
    setFormData({ firstName:"",lastName:"",email:"", password:"",
    confirmPassword:"", phoneNumber:"", pin:"", sex:""})
  })

  return (
    <div>
      <form >
        <input type="text" placeholder='first name' name='firstName' value={firstName} onChange={handleChange}/>
        <input type="text" placeholder='last name' name='lastName' value={lastName} onChange={handleChange}/>
        <input type="text" placeholder='email' name='email' value={email} onChange={handleChange}/>
        <input type="text" placeholder='password' name='password' value={password} onChange={handleChange}/>
        <input type="text" placeholder='confirm password' name='confirmPassword' value={confirmPassword} onChange={handleChange}/>
        <input type="text" placeholder='phone' name='phoneNumber' value={phoneNumber} onChange={handleChange}/>
        <input type="text" placeholder='pin' name='pin' value={pin} onChange={handleChange}/>
        <input type="text" placeholder='sex' name='sex' value={sex} onChange={handleChange}/>
        <button onClick={handleSubmit}>Signup</button>
      </form>
    </div>
  )
}

export default SignupTwo
