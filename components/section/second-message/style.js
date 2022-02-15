import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: flex-end;
  margin: 100px 0;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 660px;

  p {
    margin-bottom: 40px;
  }
`;

export const SmallHeading = styled.h1`
  font-size: 34px;
  margin: 60px 0 40px 0;
`;
