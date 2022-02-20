import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  min-height: 80vh;
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 660px;
  padding: 150px 0;
  margin-left: 50px;

  p {
    margin-bottom: 40px;
    color: white;
  }
`;

export const Heading = styled.h1`
  font-size: 72px;
  margin-bottom: 40px;
  color: white;
  font-weight: 700;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0px;
  top: 0px;
  left: 0;
  bottom: 0;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    background: #0008;
  }

  img {
    object-fit: cover;
  }
`;
