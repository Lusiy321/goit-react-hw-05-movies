import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ handleChange, filter }) => {
  return (
    <Label>
      Find contacts by name
      <Input onChange={handleChange} type="text" name="filter" value={filter} />
    </Label>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
