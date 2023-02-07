import { Outlet } from 'react-router-dom';
import { Button } from 'components/Button/Button';
import {
  DetailsWrap,
  ImgWrap,
  InfoItem,
  InfoLink,
  InfoList,
  InfoTitle,
  InfoWrap,
} from './FilmDetails.styled';

export const FilmDetails = ({
  poster,
  title,
  release_date,
  votes,
  overview,
  genres,
}) => {
  const date = new Date(release_date);
  const yearRelease = date.getFullYear();
  const userScore = votes * 10;
  const fullPath = `https://image.tmdb.org/t/p/w500${poster}`;
  return (
    <>
      <Button from={'home'} />
      <section>
        <DetailsWrap>
          <ImgWrap>
            <img src={fullPath} alt={title} width="274px" height="398px" />
          </ImgWrap>
          <div>
            <h2>
              {title} ({yearRelease})
            </h2>
            <p>User score: {userScore}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <p>
              {genres.map(genr => (
                <span key={genr.id}>{genr.name} </span>
              ))}
            </p>
          </div>
        </DetailsWrap>
        <InfoWrap>
          <InfoTitle>Additional information</InfoTitle>
          <InfoList>
            <InfoItem>
              <InfoLink to={`cast`}>Cast</InfoLink>
            </InfoItem>
            <InfoItem>
              <InfoLink to={`revievs`}>Revievs</InfoLink>
            </InfoItem>
          </InfoList>
        </InfoWrap>
      </section>
      <Outlet />
    </>
  );
};
