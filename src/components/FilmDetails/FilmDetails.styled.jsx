import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  display: flex;
  justyfy-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 90%;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const DetailsWrap = styled.div`
  display: flex;
  margin: 20px auto;
  justyfy-content: center;
  width: 90%;
`;

export const ImgWrap = styled.div`
  margin-right: 30px;
`;

export const InfoTitle = styled.h3`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const InfoWrap = styled.div`
  display: flex;
  justyfy-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;
  width: 90%;
`;

export const InfoList = styled.ul`
  display: flex;
  padding: 10px;
`;

export const InfoItem = styled.li`
  margin-right: 30px;
  list-style-type: none;
`;

export const InfoLink = styled(NavLink)`
  color: gray;
  font-size: 30px;
  margin: 20px;
  text-decoration: none;
  &.active {
    color: red;
  }
`;
