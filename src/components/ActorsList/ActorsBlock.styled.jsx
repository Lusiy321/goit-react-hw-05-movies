import styled from 'styled-components';

export const ActorsList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 5px;
`;

export const ActorsItem = styled.li`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;
