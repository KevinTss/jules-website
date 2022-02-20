import styled, { createGlobalStyle } from 'styled-components';

export * from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  body {
    font-family: ${({ theme }) => theme.font.family};
  }

  div#__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0 ${({ theme }) => theme.spacing.m};
`;

export const Section = styled.section`
  max-width: 1440px;
  width: 100%;
  margin: auto;
`;

export const Button = styled.button`
  border-radius: 50px;
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  border: none;
  padding: ${({ theme }) => `${theme.spacing.l} ${theme.spacing.xl}`};
  color: white;
  font-weight: 700;
  font-size: 22px;
  cursor: pointer;
`;

export const Text = styled.p`
  font-size: 24px;
`;
