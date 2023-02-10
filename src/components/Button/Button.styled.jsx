import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ButtonBack = styled.button`
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #ffe0b2;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fefefe;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: #2f2f37;
  }
`;

export const Link = styled(NavLink)`
  color: gray;
  font-size: 30px;
  margin: 20px;
  text-decoration: none;
  &.active {
    color: red;
  }
`;
