import styled from '@emotion/styled';

export const SeveralResultsWrapper = styled.div`
  & > h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 2rem;
  }
  & > table {
    width: 100%;
    border: 2px solid ${({ theme }) => theme.colors.border};
    & > thead {
      & > tr {
        position: sticky;
        top: 0;
        left: 0;
        background-color: ${({ theme }) => theme.colors.background};
        border: 2px solid ${({ theme }) => theme.colors.border};
        & > th {
          font-weight: 600;
          font-size: 1.3rem;
          padding: 0.5rem;
          color: ${({ theme }) => theme.colors.primary};
          border: 2px solid ${({ theme }) => theme.colors.border};
        }
      }
    }
    & > tbody > tr > td {
      padding: 0.2rem;
      text-align: center;
      border: 2px solid ${({ theme }) => theme.colors.border};
      &.ok {
        background-color: #4caf5060;
      }
      &.bad {
        background-color: #f4433670;
      }
      &.warn {
        background-color: #ffc10760;
      }
    }
  }
`;
