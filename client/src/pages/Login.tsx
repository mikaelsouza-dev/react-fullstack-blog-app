import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder='username' required />
        <input type="password" placeholder='password' required />
        <button>Login</button>
        <p>Ocorreu um erro!</p>
        <span>Não tem uma conta? <Link to="/register">Registrar-se</Link></span>
      </form>
    </div>
  )
}

export default Login