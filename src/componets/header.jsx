import React from 'react';
import '../assets/styles/components/_header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/icons8-usuario-masculino-48.png';

const Header = () => (
	<header className='header'>
		<figure className='header__figure'>
			<img tabIndex='0' src={logo} alt='Logo Platzi video' />
		</figure>

		<nav className='header__menu'>
			<figure className='header__menu--profile'>
				<img tabIndex='0' src={userIcon} alt='Usuario' />
				<figcaption>Perfil</figcaption>
			</figure>
			<ul>
				<li>
					<a href=''>Cuenta</a>
				</li>
				<li>
					<a href=''>Cerrar Sesion</a>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
