import React from 'react';
import '../assets/styles/components/_carouselItem.scss';
import playButton from '../assets/static/icons8-play-64.png';
import plusButton from '../assets/static/icons8-más-64.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt={title} />
    <div className='carousel-item__details'>
      <figure className='carousel-item__figure'>
        <img src={playButton} />
        <img src={plusButton} />
      </figure>
      <p className='carousel-item__details--title'>{title} </p>
      <p className='carousel-item__details--subtitle'>
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>
  </div>
);

export default CarouselItem;
