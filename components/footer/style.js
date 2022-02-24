import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.color.background};
  padding: 20px 0 20px 0;

  p {
    font-size: 12px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
