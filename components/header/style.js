import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const RightContainer = styled.div`
  display: flex;
`;

export const Nav = styled.nav``;

export const Items = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Item = styled.li`
  margin-right: ${({ theme }) => theme.spacing.m};
`;

export const NavLinkEl = styled.a`
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.s}`};
  border-radius: ${({ theme }) => theme.border.radius};

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.color.background};
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 50px;
  object-fit: contain;
`;
