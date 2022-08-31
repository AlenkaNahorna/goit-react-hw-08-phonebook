import { MainTitle } from 'components/ui/titles';
// import { useState, useEffect } from 'react';

// import { getTrendingMovies } from 'api/getTrendingMovies';
// import { MoviesList } from 'components/MoviesList/MoviesList';
// import { Title } from 'components/ui/Title';

const Home = () => {
  //   const [trendingMovies, setTrendingMovies] = useState([]);

  //   useEffect(() => {
  //     async function trending() {
  //       const { results } = await getTrendingMovies();
  //       setTrendingMovies(results);
  //     }
  //     trending();
  //   }, []);

  return (
    <div>
      <MainTitle>Welcome to your Phonebook</MainTitle>
      {/* <MoviesList movies={trendingMovies} /> */}
    </div>
  );
};

export default Home;
