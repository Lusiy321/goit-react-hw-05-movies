import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin: 20px auto;
  background-color: #ffe0b2;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Link = styled(NavLink)`
  color: gray;
  font-size: 50px;
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    color: red;
  }
`;
