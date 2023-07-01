import styled from '@emotion/styled';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.secBackground};
  box-shadow: 0px 4px 4px #00000030;
  & > .container {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    & > .logo {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 2rem;
      font-weight: 600;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  & > .nav-link {
    opacity: 0.8;
    font-size: 1.2rem;
    font-weight: 600;
    transition: opacity 150ms ease-in-out;
    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
    &.active {
      opacity: 0.8;
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.colors.primary};
      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const Main = styled.main`
  flex-grow: 1;
  height: 100%;
`;

export const Section = styled.section`
  & > .container {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.secBackground};
  box-shadow: 0 -4px 4px #00000030;
  & > .container {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    & > .copyright {
      opacity: 0.7;
      font-size: 0.8rem;
    }
  }
`;
