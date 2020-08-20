import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/_carouselItem.scss';
import playButton from '../assets/static/icons8-play-64.png';
import plusButton from '../assets/static/icons8-más-64.png';
import removeButton from '../assets/static/remove.png';

const CarouselItem = (props) => {
  const {
    id,
    cover,
    title,
    year,
    contentRating,
    duration,
    setFavorite,
    isList,
  } = props;

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
    });
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <figure className='carousel-item__figure'>
          <Link to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={playButton}
              alt='Play Icon'
            />
          </Link>

          {isList ? (
            <img src={removeButton} onClick={() => handleDeleteFavorite(id)} />
          ) : (
            <img src={plusButton} onClick={handleSetFavorite} />
          )}
        </figure>
        <p className='carousel-item__details--title'>{title} </p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};
export default connect(null, mapDispatchToProps)(CarouselItem);
