import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/_login.scss';
const Register = () => (
  <section className='login'>
    <article className='login__container'>
      <h2 tabIndex='0'>Registrate</h2>
      <form action='' className='login__container--form'>
        <input
          aria-label=' Nombre'
          className='input--login'
          type='text'
          placeholder='Nombre'
        />
        <input
          aria-label=' Correo'
          className='input--login'
          type='email'
          placeholder='Correo'
        />
        <input
          aria-label=' Contraseña'
          className='input--login'
          type='password'
          placeholder='Contraseña'
        />
        <input
          aria-label=' Confirma la contraseña'
          className='input--login'
          type='password'
          placeholder='Confirma la contraseña'
        />
        <button className='button'>Regristrame</button>
      </form>

      <p className='login__container--iniciar-sesion'>
        <Link to='/login'>Iniciar Sesion</Link>
      </p>
    </article>
  </section>
);

export default Register;
