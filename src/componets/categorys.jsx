import React from 'react';
import '../assets/styles/components/_categories.scss';

const Categories = ({ children, title }) => (
  <div className='categories'>
    <h2 className='category__title' tabIndex='0'>
      {title}
    </h2>
    {children}
  </div>
);

export default Categories;
