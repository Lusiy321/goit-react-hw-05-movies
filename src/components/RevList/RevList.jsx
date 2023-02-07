import PropTypes from 'prop-types';

export const RevList = ({ data }) => {
  return (
    <ul>
      {data.map(review => {
        const { id, author, content } = review;
        return (
          <li key={id}>
            <h3>
              Author: <span>{author}</span>
            </h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

RevList.propTypes = {
  data: PropTypes.array.isRequired,
};
