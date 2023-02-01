import styled from 'styled-components';

export const List = styled.ul`
  padding: 20px;
  background-color: gray;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 20px 10px;
`;

export const Button = styled.button`
  padding: 3px;
  width: 100px;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.25;
  background-color: yellow;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;
