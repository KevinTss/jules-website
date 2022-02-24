import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: flex-end;
  margin: 150px 0;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 150px 50px;
  background: ${({ theme }) => theme.color.background};

  p {
    margin-bottom: 40px;
  }
`;

export const SmallHeading = styled.h2`
  font-size: 34px;
  margin-bottom: 40px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Ul = styled.ul`
  padding-left: 30px;
`;

export const Li = styled.li`
  margin: 10px 0;
`;
