import React from 'react';
import Main from './Main';
import Categories from './Categories';

const Home = () => (
  <>
    <Main />
    <h2 className="home_h2">an introduction text goes here!</h2>
    <div className="wrappers">
      <Categories />
    </div>
  </>
);

export default Home;
