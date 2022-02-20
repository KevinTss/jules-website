import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  width: 100%;
  margin: 100px 0;
`;

export const Box = styled.div`
  padding: 5px;
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  border-radius: 15px;
  position: relative;
`;

export const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  padding: 50px 20px;
  text-align: center;
`;

export const Sentence = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
  font-weight: 700;
`;
