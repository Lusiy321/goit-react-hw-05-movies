import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  margin: 2% 10%;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin: 2% 40%;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  font-size: 20px;
  margin: 20px;
`;

export const Item = styled.li`
  list-style: none;
  width: 300px;
`;

export const ItemLink = styled(Link)`
  display: block;
  margin-bottom: 5px;
  color: gray;
  text-decoration: none;
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 300px;
  height: auto;
`;
