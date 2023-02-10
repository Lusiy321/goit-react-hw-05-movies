import { useLocation } from 'react-router-dom';
import { ButtonBack, Link } from './Button.styled';

export const Button = () => {
  const location = useLocation();
  return (
    <ButtonBack>
      <Link to={location?.state?.from ?? '/goit-react-hw-05-movies'}>
        GO BACK
      </Link>
    </ButtonBack>
  );
};
