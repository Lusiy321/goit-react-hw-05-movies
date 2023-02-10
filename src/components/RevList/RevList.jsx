import PropTypes from 'prop-types';
import { RevsList, RevItem } from './RevList.styled';
import { Section } from 'components/FilmDetails/FilmDetails.styled';

export const RevList = ({ data }) => {
  return (
    <Section>
      <RevsList>
        {data.map(review => {
          const { id, author, content } = review;
          return (
            <RevItem key={id}>
              <h3>
                Author: <span>{author}</span>
              </h3>
              <p>{content}</p>
            </RevItem>
          );
        })}
      </RevsList>
    </Section>
  );
};

RevList.propTypes = {
  data: PropTypes.array.isRequired,
};
