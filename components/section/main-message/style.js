import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 660px;
  margin-bottom: 100px;

  p {
    margin-bottom: 40px;
  }
`;

export const Heading = styled.h1`
  font-size: 54px;
  margin: 60px 0 40px 0;
`;

export const ImageContainer = styled.div`
  width: 700px;
  height: 700px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  right: -50px;
  top: -200px;
  z-index: -1;

  img {
    object-fit: cover;
  }
`;
