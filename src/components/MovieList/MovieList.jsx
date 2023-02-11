import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Title,
  ItemLink,
  Image,
  List,
  Section,
  Item,
} from './MovieList.styled';

export const MovieList = ({ films, from }) => {
  const location = useLocation();
  if (from === 'home') {
    return (
      <>
        <Section>
          <Title>Trending Films</Title>
          <List>
            {films.map(film => (
              <Item key={film.id}>
                <ItemLink to={`movies/${film.id}`}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    alt={film.original_title}
                  ></Image>
                  {film.original_title} ({film.release_date.slice(0, 4)})
                </ItemLink>
              </Item>
            ))}
          </List>
        </Section>
      </>
    );
  }
  if (from === 'movies') {
    return (
      <List>
        {films.map(film => (
          <Item key={film.id}>
            <ItemLink to={film.id.toString()} state={{ from: location }}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.original_title}
              ></Image>
              {film.original_title} ({film.release_date.slice(0, 4)})
            </ItemLink>
          </Item>
        ))}
      </List>
    );
  }
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
  from: PropTypes.string.isRequired,
};
