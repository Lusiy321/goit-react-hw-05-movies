import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { fetchPopularMovie } from 'API/MovieAPI';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [popularFilms, setPopularFilms] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFilms() {
      try {
        setStatus('pending');
        const films = await fetchPopularMovie();
        setPopularFilms(films);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    }
    fetchFilms();
  }, []);
  if (status === 'idle') {
    return <p>Try later</p>;
  }
  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'resolved') {
    return <MovieList films={popularFilms} from="home" />;
  }

  if (status === 'rejected') {
    return <h2>{error}</h2>;
  }
  console.log(popularFilms);
};

export default Home;
