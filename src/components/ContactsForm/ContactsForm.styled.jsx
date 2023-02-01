import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  border: 2px solid gray;
`;

export const Label = styled.label`
  margin-top: 10px;
  font-size: 20px;
  line-height: 1.25;
`;

export const Input = styled.input`
  margin-top: 15px;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 5px;
`;

export const Button = styled.button`
  margin: 15px auto 10px auto;
  padding: 10px;
  width: 150px;
  font-size: 15px;
  line-height: 1.25;
  background-color: yellow;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;
