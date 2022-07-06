import React from 'react';
import { useSelector } from 'react-redux';
import Hero from './Hero';
import Categories from './Categories';

const Home = () => {
  const loading = useSelector((state) => state.loader);
  return (
    <>
      <Hero />
      <h2 className="home_h2">What is botherng you? Ask and you shall be given</h2>
      {loading && <div className="loader" />}
      <div className="main-container">
        <Categories />
      </div>
    </>
  );
};

export default Home;
