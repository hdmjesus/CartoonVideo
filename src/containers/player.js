import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions';
import '../assets/styles/components/_player.scss';

const Player = (props) => {
  //Este id se obtiene por medio de la etiqueta Link de react-router-dom
  const { id } = props.match.params;

  const [loading, setLoading] = useState(true);

  // Con esto sabemos si tenemos un elemento o no reproduciendose
  const hasPlaying = Object.keys(props.playing).length > 0;
  //Con esta logica nos permite mandar el ID a nuestro reducer
  useEffect(() => {
    props.getVideoSource(id);
    setLoading(false);
  }, []);

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return hasPlaying ? (
    <div className='Player'>
      <video controls={true} autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    setTimeout(<Redirect to='/404/' />, 0)
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
