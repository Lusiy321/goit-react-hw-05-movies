import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const Styles = createGlobalStyle`
* {
  box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    min-height: 100vh;
    margin: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: #fff;
    color: #010101;
    line-height: 1.5;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  img {
    display: block;
    max-width: 100%;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;
export const MainTitle = styled.h1`
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 30px;
  line-height: 1.25;
  text-align: center;
  color: black;
`;

export const SecondaryTitle = styled.h2`
  padding-top: 30px;
  padding-bottom: 15px;
  font-size: 30px;
  line-height: 1.25;
  text-align: center;
  color: black;
`;

export const PhonebookWrap = styled.div`
  width: 400px;
  margin: 0 auto;
  background-color: gray;
`;
