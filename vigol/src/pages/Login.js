import React, { useState } from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';


function Login() {
const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPasssword] = useState('')

  const signIn = e => {
    e.preventDefault()

    auth
    .signInWithEmailAndPassword(email, password)
    .then((auth) => {
      navigate('/shop')
    })
    .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault()
auth
.createUserWithEmailAndPassword(email, password) 
.then((auth) => {
  console.log(auth);
  if (auth) {
    navigate('/shop')
  }
})
.catch(error => alert(error.message))
   
  }

  return (
    <div>

<form className="login"> 

    <h1>Login</h1>

<div className='login-content'>
    <input type="text" value={email}  onChange={e => setEmail(e.target.value)} 
  placeholder="Enter Email" id="email"/>
  
    <input type="password" value={password} onChange={e => setPasssword(e.target.value)}
     placeholder="Enter Password" id="password" 
 />

    <button className='login-btn' type='submit' onClick={signIn}>Login</button>

    </div>

   <h4 id="no-account">Don't have an account yet?</h4>


   <button className='login-register-btn' onClick={register}>Register</button>

</form>




    </div>
  )
}

export default Login
