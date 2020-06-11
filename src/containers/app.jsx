import React from 'react';
import Header from '../componets/header';
import '../assets/styles/app.scss';
import Search from '../componets/search';
import Categories from '../componets/categorys';
import Carousel from '../componets/carousel';
import CarouselItem from '../componets/carouselItem';
import Footer from '../componets/footer';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);
  console.log(initialState);
  return (
    <div className='App'>
      <Header />
      <Search />

      {initialState.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {initialState.trends &&
            initialState.trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi'>
        <Carousel>
          {initialState.originals &&
            initialState.originals.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
