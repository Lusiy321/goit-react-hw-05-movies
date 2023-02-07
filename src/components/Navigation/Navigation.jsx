import { Nav, Link } from './Navigation.styled';
import { Outlet } from 'react-router-dom';

export const Navigation = () => (
  <>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="movies">Movies</Link>
    </Nav>
    <Outlet />
  </>
);
