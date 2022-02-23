import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: flex-end;
  margin: 150px 0;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px 0;

  p {
    margin-bottom: 40px;
  }
`;

export const SmallHeading = styled.h2`
  font-size: 34px;
  margin-bottom: 40px;
`;

export const Image = styled.img`
  width: 80%;
  height: 100%;
  object-fit: cover;
`;

export const Ul = styled.ul`
  padding-left: 30px;
`;

export const Li = styled.li`
  margin: 10px 0;
`;
