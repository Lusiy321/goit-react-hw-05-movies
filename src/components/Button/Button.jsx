import { ButtonBack } from './Button.styled';
import { PropTypes } from 'react-types';

export const Button = ({ children, disabled, onclick }) => {
  return (
    <ButtonBack disabled={disabled} onClick={onclick}>
      {children}
    </ButtonBack>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
