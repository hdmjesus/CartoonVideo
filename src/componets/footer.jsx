import React from 'react';
import '../assets/styles/components/_footer.scss';
import classNames from 'classnames';
import { connect } from 'react-redux';
const Footer = (props) => {
  const { user, isLoginF, isRegisterF } = props;

  const footerClass = classNames('footer', {
    isLoginF,
    isRegisterF,
  });

  return (
    <footer className={footerClass}>
      <a href='/ '>Terminos de uso</a>
      <a href='/ '>Declaracion de privacidad</a>
      <a href='/ '>Centro de ayuda</a>
    </footer>
  );
};

export default Footer;
