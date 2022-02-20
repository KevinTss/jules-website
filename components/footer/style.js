import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.color.background};
  padding: 20px 0;

  a {
    color: inherit;
    text-decoration: none;
  }
`;
