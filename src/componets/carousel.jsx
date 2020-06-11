import React from 'react';
import '../assets/styles/components/_carousel.scss';

const Carousel = ({ children }) => (
	<section className='carousel'>
		<article className='carousel__container'>{children}</article>
	</section>
);

export default Carousel;
