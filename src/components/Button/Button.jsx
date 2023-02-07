import { useLocation, Link } from 'react-router-dom';
import { ButtonBack } from './Button.styled';

export const Button = () => {
  const location = useLocation();
  return (
    <ButtonBack>
      <Link to={location?.state?.from ?? '/'}>go back</Link>
    </ButtonBack>
  );
};
