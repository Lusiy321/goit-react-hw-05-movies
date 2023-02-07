import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieName } from 'API/MovieAPI';
import { Loader } from 'components/Loader/Loader';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MovieList } from 'components/MovieList/MovieList';

export const Movies = () => {
  const [name, setName] = useState(null);
  const [status, setStatus] = useState('idle');
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  let currentQuery = searchParams.get('query');

  const handleFormSubmit = name => {
    setName(name);
  };

  useEffect(() => {
    if (name) {
      setSearchParams({ query: name });
    }
    async function fetchData() {
      try {
        setStatus('pending');
        const films = await fetchMovieName(currentQuery);

        if (films.length === 0) {
          return await Promise.reject(new Error('Try another name'));
        } else {
          setFilms(films);
        }
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    }
    if (currentQuery) {
      fetchData();
    }
  }, [name, setSearchParams, currentQuery]);

  if (status === 'idle') {
    return <SearchBar onSubmit={handleFormSubmit} />;
  }
  if (status === 'pending') {
    return (
      <>
        <SearchBar onSubmit={handleFormSubmit} />
        <Loader />
      </>
    );
  }
  if (status === 'resolved') {
    return (
      <>
        <SearchBar onSubmit={handleFormSubmit} />
        <MovieList films={films} from="movies" />
      </>
    );
  }

  if (status === 'rejected') {
    return (
      <>
        <SearchBar onSubmit={handleFormSubmit} />
        <h2>{error}</h2>
      </>
    );
  }
};
