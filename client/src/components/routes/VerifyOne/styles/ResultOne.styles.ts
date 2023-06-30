import styled from '@emotion/styled';
import { VerifierResult } from '../../../../interfaces/VerifierResponse';

interface Props {
  result: VerifierResult;
}

export const ResultOneWrapper = styled.div<Props>`
  .title {
    font-size: 1.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 2rem;
  }
  .data {
    max-width: 800px;
    display: grid;
    justify-content: center;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    .cell {
      border: 1px solid ${({ theme }) => theme.colors.border};
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      align-items: center;
      padding: 1rem;
      background-color: ${({ theme }) => theme.colors.secBackground};
      border-radius: ${({ theme }) => theme.rounded.md};
      box-shadow: 0px 10px 16px #00000010;
      .cell-title {
        width: 100%;
        font-size: 1.8rem;
        text-transform: uppercase;
      }
      .cell-status {
        font-size: 5rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.secBackground};
        border-radius: ${({ theme }) => theme.rounded.md};
        padding: 0 1rem;
      }
      .ok {
        background-color: ${({ theme, result }) =>
          result.is_ok ? theme.colors.success : theme.colors.danger};
      }
      .mx {
        background-color: ${({ theme, result }) =>
          result.has.mx ? theme.colors.success : theme.colors.danger};
      }
      .spf {
        background-color: ${({ theme, result }) =>
          result.has.spf ? theme.colors.success : theme.colors.danger};
      }
      .dmarc {
        background-color: ${({ theme, result }) =>
          result.has.dmarc ? theme.colors.success : theme.colors.danger};
      }
      .record {
        width: 100%;
        & > h4 {
          margin-bottom: 0.8rem;
        }
        & > p {
          width: fit-content;
          margin: 0 auto;
        }
      }
    }
  }
`;
