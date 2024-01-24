import React, { useContext, useState} from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/context'


const Login = () => {
  const [email, setEmail] = useState('')
  const [pwrd, setPwrd] = useState('')
  const navigate = useNavigate()
  const {setUserToken} = useContext(AppContext)

  const loginInput = {
      email: email,
      password: pwrd,

  }
  const handleLoginSubmit = async(e)=>{
    const url = "https://bankapp-v1.onrender.com/api/v1/user/login"
    e.preventDefault();
    axios.post(url,loginInput )
    .then((response)=>{
     console.log(response.data)
     navigate('/dashboard')
     setUserToken(response.data.token)
    }).catch(error =>{
     console.log(error)
    })
   
 }

  return (
    <div className='loginMainCOntainer'>
      <form  className='LoginForm'>
        <h2>User Login</h2>
        <div className='loginInput1'>
          <label>Enter Email</label>
          <input type="email" placeholder='Enter Email' onClick={(e)=>setEmail(e.target.value)}  />
          {/* <p>{errors.email?.message}</p> */}
        </div>
        <div className='loginInput1'>
        <label> Password</label>
          <input type="password" placeholder='Enter Password' onClick={(e)=>setPwrd(e.target.value)} />
          {/* <p>{errors.password?.message}</p> */}
        </div>
        <div className='loginInput1'>
          <button onClick={handleLoginSubmit}>Login</button>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login
