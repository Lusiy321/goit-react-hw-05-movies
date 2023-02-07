import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  width: 100px;
  margin-bottom: 30px;
`;

export const Link = styled(NavLink)`
  margin-right: 30px;
  color: gray;
  &.active {
    color: red;
  }
`;
