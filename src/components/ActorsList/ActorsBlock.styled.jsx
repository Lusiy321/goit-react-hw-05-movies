import styled from 'styled-components';

export const ActorsList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ActorsItem = styled.li`
  width: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  list-style-type: none;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;