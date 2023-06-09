import { useState } from 'react'
import './Login.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const logIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={logIn}>
        <input type="email" placeholder="Email" className="login-input" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <p>Or go to <a href="/signup">SignUp</a></p>
    </div>
  )
}

export default Login


