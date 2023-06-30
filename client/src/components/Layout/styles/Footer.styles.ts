import styled from '@emotion/styled';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  & > .copyright {
    font-size: ${({ theme }) => theme.typography.size.xs};
    & > span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
