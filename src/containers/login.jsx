import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/static/googleIcon.png';
// import twitterIcon from '../assets/static/twitter-brands.svg';
import '../assets/styles/components/_login.scss';

const Login = () => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <section className='login '>
      <article className='login__container '>
        <h2 tabIndex='0'>Inicia Sesion</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            aria-label='Correo'
            className='input--login '
            type='text '
            placeholder='Correo '
            onChange={handleInput}
          />
          <input
            name='password'
            aria-label='Contraseña'
            className='input--login '
            type='password '
            placeholder='Contraseña '
            onChange={handleInput}
          />
          <button className='button'>Iniciar Sesion</button>
          <div className='login__container--remember '>
            <label>
              <input type='checkbox' name=' ' id='caja1 ' value='checkbox ' />
              Recuerdame
            </label>
            <a href='/ '>Olvide mi contraseña</a>
          </div>
        </form>
        <div className='login_container--social-media '>
          <p>
            <img src={googleIcon} alt='Google' />
            Inicia sesion con Google
          </p>
          <p>
            {/* <img src={twitterIcon} alt='Twitter' /> */}
            Inicia sesion con Twitter
          </p>
        </div>
        <p className='login__container--register '>
          No tienes ninguna cuenta.
          <Link to='/register'>Registrate</Link>
        </p>
      </article>
    </section>
  );
};

export default Login;
