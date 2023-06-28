import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  & > .logo {
    font-size: 2.5rem;
    font-weight: ${({ theme }) => theme.typography.weight.semi};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
