import React from 'react';
import '../assets/styles/components/_Search.scss';

const Search = () => (
	<section className='main__section--seach'>
		<h2 className='seach__title'> ¿Que quieres ver hoy?</h2>

		<input aria-label='Buscar Pelicula' className='input' type='text' name='' id='' placeholder='Buscar...' />
	</section>
);

export default Search;
