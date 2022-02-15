import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  width: 100%;
  margin: 100px 0;
`;

export const Box = styled.div`
  display: flex;
  border: 1px solid red;
`;

export const Sentence = styled.p`
  font-size: 24px;
`;
