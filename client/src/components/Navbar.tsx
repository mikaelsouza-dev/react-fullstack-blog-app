import Logo from '../img/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">Logo
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link to='/?cat=front-end' className="link">
            <h6>Front end</h6>
          </Link>
          <Link to='/?cat=back-end' className="link">
            <h6>Back end</h6>
          </Link>
          <Link to='/?cat=full-stack' className="link">
            <h6>Full stack</h6>
          </Link>
          <Link to='/?cat=tec-web' className="link">
            <h6>Tecnologias Web</h6>
          </Link>
          <Link to='/?cat=sec-and-perf' className="link">
            <h6>Segurança e desempenho</h6>
          </Link>
          <Link to='/?cat=trends-and-news' className="link">
            <h6>Tendências e novidades</h6>
          </Link>
          <span>Join</span>
          <span>Logout</span>
          <span className='write'>
            <Link to='/write' className='link'>Escrever</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar