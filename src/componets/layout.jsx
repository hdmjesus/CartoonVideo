import React from 'react';
import Header from './header';
import Footer from './footer';
import { withRouter } from 'react-router-dom';

const Layout = ({ children }) => <div className='App'>{children}</div>;

export default Layout;
