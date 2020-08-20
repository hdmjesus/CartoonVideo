import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import { Link } from 'react-router-dom';
import '../assets/styles/components/_login.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <article className='login__container'>
        <h2 tabIndex='0'>Registrate</h2>
        <form
          action=''
          className='login__container--form'
          onSubmit={handleSubmit}>
          <input
            name='name'
            aria-label=' Nombre'
            className='input--login'
            type='text'
            placeholder='Nombre'
            onChange={handleInput}
          />
          <input
            name='email'
            aria-label=' Correo'
            className='input--login'
            type='email'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='contraseña'
            aria-label=' Contraseña'
            className='input--login'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <input
            name='contraseñaConfirmada'
            aria-label=' Confirma la contraseña'
            className='input--login'
            type='password'
            placeholder='Confirma la contraseña'
            onChange={handleInput}
          />
          <button className='button'>Regristrame</button>
        </form>

        <p className='login__container--iniciar-sesion'>
          <Link to='/login'>Iniciar Sesion</Link>
        </p>
      </article>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
