import styled from '@emotion/styled';

export const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 20px;
  & > .domains {
    background-color: ${({ theme }) => theme.colors.secBackground};
    padding: 16px;
    border-radius: ${({ theme }) => theme.rounded.md};
    border: 2px solid ${({ theme }) => theme.colors.border};
    height: fit-content;
    h3 {
      font-size: 1.4rem;
    }
    ul {
      list-style: disc;
      margin-top: 16px;
      li {
        margin-left: 38px;
      }
    }
  }
  & > .results {
    overflow-x: auto;
    height: fit-content;
    grid-column: span 3;
    background-color: ${({ theme }) => theme.colors.secBackground};
    border-radius: ${({ theme }) => theme.rounded.md};
    border: 2px solid ${({ theme }) => theme.colors.border};
    table {
      width: 100%;
      thead {
        tr {
          height: 30px;
          th {
            border: 1px solid ${({ theme }) => theme.colors.text};
            padding: 5px;
            background: ${({ theme }) => theme.colors.background};
            color: ${({ theme }) => theme.colors.text};
            font-weight: ${({ theme }) => theme.typography.weight.bold};
          }
        }
      }
      tbody {
        tr {
          td {
            border: 1px solid ${({ theme }) => theme.colors.text};
            padding: 4px 16px;
          }
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    & > .results {
      width: 100%;
    }
  }
`;
