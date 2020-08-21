import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/_Search.scss';

const Search = ({ isHome }) => {
  const inputStyle = classNames('input', {
    isHome,
  });
  return (
    <section className='main__section--seach'>
      <h2 className='seach__title'> ¿Que quieres ver hoy?</h2>

      <input
        aria-label='Buscar Pelicula'
        className={inputStyle}
        type='text'
        name=''
        id=''
        placeholder='Buscar...'
      />
    </section>
  );
};

export default Search;
