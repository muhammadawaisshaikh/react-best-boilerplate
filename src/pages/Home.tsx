import React from 'react';
import AllFilms from '../components/AllFilms';

const Home: React.FC<any> = () => {
  return (
    <div>
      <h3>All Films</h3>

      <AllFilms />
    </div>
  );
};

export default Home;