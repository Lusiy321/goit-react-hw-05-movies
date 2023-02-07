import { Nav, Link } from './Navigation.styled';
import { Outlet } from 'react-router-dom';

export const Navigation = () => (
  <>
    <Nav>
      <Link to="/goit-react-hw-05-movies">Home</Link>
      <Link to="movies">Movies</Link>
    </Nav>
    <Outlet />
  </>
);
