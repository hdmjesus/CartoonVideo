import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/_header.scss';
import logo from '../assets/static/carton.png';
import userIcon from '../assets/static/icons8-usuario-masculino-48.png';

const Header = () => (
  <header className='header'>
    <Link to='/'>
      <figure className='header__figure'>
        <img tabIndex='0' src={logo} alt='Logo Platzi video' />
        <p>Cartoons</p>
      </figure>
    </Link>

    <nav className='header__menu'>
      <figure className='header__menu--profile'>
        <img tabIndex='0' src={userIcon} alt='Usuario' />
        <figcaption>Perfil</figcaption>
      </figure>
      <ul>
        <li>
          <a href=''>Cuenta</a>
        </li>
        <li>
          <Link to='/login'>Iniciar Sesion</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
