import styled from '@emotion/styled';
import { DNS } from '@src/interfaces/DNS';
import { OneEmailRes } from '@src/interfaces/OneEmailRes';

export const ResultWrapper = styled.div`
  & > .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 4rem;
    & > .title {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 2rem;
      & > a:hover {
        text-decoration: underline;
      }
      & > span {
        color: ${({ theme }) => theme.colors.text};
      }
    }
    & > .display-toggler {
      width: 130px;
      border-radius: ${({ theme }) => theme.rounded.md};
      background-color: ${({ theme }) => theme.colors.accent};
      border: 2px solid ${({ theme }) => theme.colors.accent};
      padding: 0 1rem;
      font-size: 1rem;
      font-weight: 600;
      color: #333;
      transition: all 150ms ease-in-out;
      &:active {
        transform: scale(0.95);
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-direction: column;
      justify-content: center;
    }
  }
`;

interface ResultContentProps {
  result: OneEmailRes;
}

export const ResultContent = styled.div<ResultContentProps>`
  & > .json-wrapper {
    position: relative;
    overflow-x: auto;
    border-radius: ${({ theme }) => theme.rounded.md};
    background-color: ${({ theme }) => theme.colors.secBackground};
    box-shadow: 0 4px 4px #00000030;
    width: 100%;
    padding: 1rem;
    & > .json {
      font-family: 'Fira Code', monospace;
      font-size: 0.9rem;
    }
    & > .copy-btn {
      position: absolute;
      right: 1rem;
      top: 1rem;
      background-color: ${({ theme }) => theme.colors.primary};
      border: 2px solid ${({ theme }) => theme.colors.primary};
      color: #fff;
      border-radius: ${({ theme }) => theme.rounded.md};
      transition: all 100ms ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }
  & > .formatted-wrapper {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    column-gap: 0.42rem;
    row-gap: 1rem;
    & > .format {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        color: ${({ theme, result }) =>
          result.format ? theme.colors.success : theme.colors.danger};
        & > span {
          margin-top: 4px;
        }
      }
      & > div {
        width: 100%;
        flex-grow: 1;
        padding: 1rem;
        background-color: ${({ theme }) => theme.colors.secBackground};
        border-radius: ${({ theme }) => theme.rounded.md};
        border: ${({ theme, result }) =>
          result.format
            ? `2px solid ${theme.colors.success}`
            : `2px solid ${theme.colors.danger}`};
        box-shadow: 0 4px 4px #00000030;
        & > p {
          color: ${({ theme, result }) =>
            result.format ? theme.colors.primary : theme.colors.danger};
          font-size: 1.2rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        & > ul {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          & > li {
            gap: 1rem;
            display: flex;
            justify-content: start;
            align-items: start;
          }
        }
      }
    }
    & > .spf-dmarc {
      width: 100%;
      grid-column: span 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        & > span {
          margin-top: 4px;
        }
        &.title-ok {
          color: ${({ theme }) => theme.colors.success};
        }
        &.title-bad {
          color: ${({ theme }) => theme.colors.danger};
        }
      }
      & > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        padding: 1rem;
        background-color: ${({ theme }) => theme.colors.secBackground};
        border-radius: ${({ theme }) => theme.rounded.md};

        box-shadow: 0 4px 4px #00000030;
        &.wrapper-ok {
          border: ${({ theme }) => `2px solid ${theme.colors.success}`};
        }
        &.wrapper-bad {
          border: ${({ theme }) => `2px solid ${theme.colors.danger}`};
        }
        & > .status {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          font-weight: 600;
          &.status-ok {
            color: ${({ theme }) => theme.colors.primary};
          }
          &.status-bad {
            color: ${({ theme }) => theme.colors.danger};
          }
        }
        & > .record-wrapper {
          & > .record {
            color: ${({ theme }) => theme.colors.accent};
            width: fit-content;
            margin: 0 auto;
            margin-top: 0.5rem;
            font-family: 'Fira Code', monospace;
            font-size: 0.95rem;
          }
        }
        & > .info {
          margin-top: 1.5rem;
          font-size: 0.8rem;
          opacity: 0.6;
        }
      }
      @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        grid-column: span 1;
      }
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
`;

interface MxResultContentProps {
  mx: DNS['mx'];
}

export const MxResultWrapper = styled.div<MxResultContentProps>`
  grid-column: span 3;
  & > h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: ${({ theme, mx }) =>
      mx.status ? theme.colors.success : theme.colors.danger};
    & > span {
      margin-top: 4px;
    }
  }
  & > div {
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.secBackground};
    border-radius: ${({ theme }) => theme.rounded.md};
    border: ${({ theme, mx }) =>
      mx.status
        ? `2px solid ${theme.colors.success}`
        : `2px solid ${theme.colors.danger}`};
    box-shadow: 0 4px 4px #00000030;
    & > .status {
      color: ${({ theme, mx }) =>
        mx.status ? theme.colors.primary : theme.colors.danger};
      font-size: 1.2rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }
    & > table {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.background};
      & > thead {
        & > tr {
          & > th {
            border: 1px solid ${({ theme }) => theme.colors.text};
            padding: 0.5rem 0;
            font-weight: 600;
            text-align: center;
            color: ${({ theme }) => theme.colors.accent};
          }
        }
      }
      & > tbody {
        font-family: 'Fira Code', monospace;
        font-size: 0.95rem;
        & > tr {
          & > td {
            opacity: 0.9;
            border: 1px solid ${({ theme }) => theme.colors.text};
            padding: 0.5rem 1rem;
            /* even */
            &:nth-child(even) {
              text-align: center;
            }
          }
        }
      }
    }
    & > .info {
      margin-top: 1.5rem;
      font-size: 0.8rem;
      opacity: 0.6;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-column: span 1;
  }
`;

interface TotalWrapperProps {
  data: OneEmailRes;
  totalScore: number;
}

export const TotalWrapper = styled.div<TotalWrapperProps>`
  grid-column: span 2;
  & > h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: ${({ theme, totalScore }) =>
      totalScore > 0
        ? totalScore < 4
          ? theme.colors.accent
          : theme.colors.success
        : theme.colors.danger};
    & > span {
      margin-top: 4px;
    }
  }
  & > div {
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.secBackground};
    border-radius: ${({ theme }) => theme.rounded.md};
    border: 2px solid
      ${({ theme, totalScore }) =>
        totalScore > 0
          ? totalScore < 4
            ? theme.colors.accent
            : theme.colors.success
          : theme.colors.danger};
    box-shadow: 0 4px 4px #00000030;
    & > .score {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      font-size: 4.5rem;
      font-weight: 600;
      color: ${({ theme, totalScore }) =>
        totalScore > 0
          ? totalScore < 4
            ? theme.colors.accent
            : theme.colors.success
          : theme.colors.danger};
    }
    & > .info {
      margin-top: 1.5rem;
      font-size: 0.8rem;
      opacity: 0.6;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-column: span 1;
  }
`;
