import { useState } from 'react'
import './Login.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const SignUp = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="login-container">
      <h2 className="login-title">SignUp</h2>
      <form className="login-form" onSubmit={signUp}>
        <input type="email" placeholder="Email" className="login-input" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="login-button">
          SignUp
        </button>
      </form>

      
      <p>Or go to <a href="/login">Login</a></p>
    </div>
  )
}

export default SignUp

