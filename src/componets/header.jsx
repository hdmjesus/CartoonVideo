import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/_header.scss';
import logo from '../assets/static/carton.png';
import userIcon from '../assets/static/icons8-usuario-masculino-48.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = (event) => {
    event.preventDefault();
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <Link to='/'>
        <figure className='header__figure'>
          <img tabIndex='0' src={logo} alt='Logo Platzi video' />
          <p>Cartoons</p>
        </figure>
      </Link>

      <nav className='header__menu'>
        <figure className='header__menu--profile'>
          {/* {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img tabIndex='0' src={userIcon} alt='Usuario' />
          )} */}
          <img
            src={Object.keys(user).length > 0 ? gravatar(user.email) : userIcon}
            alt={user.email}
          />
          <figcaption>Perfil</figcaption>
        </figure>
        <ul>
          {hasUser ? (
            <li>
              <a
                href=''
                onClick={(event) => {
                  event.preventDefault();
                }}>
                {user.email}
              </a>
            </li>
          ) : null}

          {hasUser ? (
            <li>
              <a onClick={handleLogout}>Cerrar Sesion</a>
            </li>
          ) : (
            <li>
              <Link to='/login'>Iniciar Sesion</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {
  logoutRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
