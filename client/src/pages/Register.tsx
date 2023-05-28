import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder='username' required />
        <input type="email" placeholder='email' required />
        <input type="password" placeholder='password' required />
        <button>Register</button>
        <p>Ocorreu um erro!</p>
        <span>Já tem uma conta? <Link to="/login">Logar-se</Link></span>
      </form>
    </div>
  )
}

export default Register