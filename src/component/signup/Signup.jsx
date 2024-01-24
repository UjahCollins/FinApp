import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Signup.css"
import axios from 'axios'


const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [pwrd, setPwrd] = useState('')
  const [confrimPwrd, setConfirmPwrd] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [userPin, setUserpin] = useState('')
  const [sex, setSex] = useState('')

  const SignupSuccess = useNavigate()

  const useriNPUT = {
    firstName : firstName,
    lastName : lastName,
    email : emailInput,
    password : pwrd,
    confirmPassword : confrimPwrd,
    phoneNumber: phoneNumber,
    pin : userPin,
    sex : sex

  }
  console.log(useriNPUT)
  
  const url = "https://bankapp-v1.onrender.com/api/v1/user/sign-up"

  const handleSignUpSubmit = async(e)=> { 
    e.preventDefault();
     await axios.post(url, useriNPUT)
    .then((response)=>{
      console.log(response.data)
      SignupSuccess("/dashboard")
    })
    .catch((error)=>{
      console.log(error)
    })
  }


  return (
    <div className='SignupMainContainer'>
        <form  className='SignUpForm'>
        <h2>User Signup</h2>
        <div className='signupInput1'>
          <input type="text" placeholder='Enter First Name' onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
        <div className='signupInput1'>
          <input type="text" placeholder='Enter Last Name' onChange={(e)=>setLastName(e.target.value)} />
        </div>
        <div className='signupInput1'>
          <input type="email" placeholder='Enter Email' onChange={(e)=>setEmailInput(e.target.value)}/>
        </div>
        <div className='signupInput1'>
          <input type="password" placeholder='Enter Password' onChange={(e)=>setPwrd(e.target.value)} />
        </div>
        <div className='signupInput1'>
          <input type="password" placeholder='Confirm Passwprd 'onChange={(e)=>setConfirmPwrd(e.target.value)} />
        </div>
        <div className='signupInput1'>
          <select onChange={(e)=>setSex(e.target.value)}>
            <option >sex</option>
            <option value="male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className='signupInput2'>
          <input type="number"  placeholder='Enter Phone Number' onChange={(e)=>setPhoneNumber(e.target.value)}/>
          <input className='select' type='text' placeholder='Enter PIN' onChange={(e)=>setUserpin(e.target.value)}>
          </input>
        </div>
        <div className='signupInput1'>
          <button onClick={handleSignUpSubmit}>Sign Up</button>
          <p>Already have an account? <Link to="/">Login</Link> </p>
        </div>
      </form>
    </div>
  )
}

export default Signup
