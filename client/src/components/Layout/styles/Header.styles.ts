import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  & > .logo {
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.typography.weight.semi};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
