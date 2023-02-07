import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieId } from 'API/MovieAPI';
import { Loader } from 'components/Loader/Loader';
import { FilmDetails } from 'components/FilmDetails/FilmDetails';

export const FilmPage = () => {
  const [status, setStatus] = useState('idle');
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(null);

  const { itemId } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        setStatus('pending');
        const foundFilm = await fetchMovieId(itemId);
        if (!foundFilm) {
          return await Promise.reject(new Error('movie not found'));
        } else {
          setFilm(foundFilm);
        }
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    }
    fetchData();
  }, [itemId]);

  if (status === 'idle') {
    return <p>Try again</p>;
  }
  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'resolved') {
    const {
      poster_path,
      original_title,
      release_date,
      vote_average,
      overview,
      genres,
    } = film;
    return (
      <FilmDetails
        poster={poster_path}
        title={original_title}
        release_date={release_date}
        votes={vote_average}
        overview={overview}
        genres={genres}
      />
    );
  }

  if (status === 'rejected') {
    return <h2>{error}</h2>;
  }
};
