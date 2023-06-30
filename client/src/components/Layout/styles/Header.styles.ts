import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  padding: 2rem 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  & > .logo {
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.typography.weight.semi};
    color: ${({ theme }) => theme.colors.primary};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    justify-content: center;
  }
`;
