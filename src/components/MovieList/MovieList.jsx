import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Title, ItemLink, Image, List, Section } from './MovieList.styled';

export const MovieList = ({ films, from }) => {
  const location = useLocation();
  if (from === 'home') {
    return (
      <>
        <Section>
          <Title>Trending Films</Title>
          <List>
            {films.map(film => (
              <li key={film.id}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt={film.original_title}
                ></Image>
                <ItemLink to={`movies/${film.id}`}>
                  {film.original_title}{' '}
                </ItemLink>
              </li>
            ))}
          </List>
        </Section>
      </>
    );
  }
  if (from === 'movies') {
    return (
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <ItemLink to={film.id.toString()} state={{ from: location }}>
              {film.original_title}
            </ItemLink>
          </li>
        ))}
      </ul>
    );
  }
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
  from: PropTypes.string.isRequired,
};
