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
  max-width: 900px;
  padding: 150px 0;
  margin-left: 50px;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }

  p {
    margin-bottom: 40px;
    color: white;

    @media only screen and (max-width: 768px) {
      margin-bottom: 20px;
    }
  }
`;

export const Heading = styled.h1`
  font-size: 68px;
  margin-bottom: 40px;
  color: white;
  font-weight: 700;

  @media only screen and (max-width: 768px) {
    font-size: 38px;
    margin-bottom: 20px;
  }
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
