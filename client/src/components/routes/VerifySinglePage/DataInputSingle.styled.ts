import styled from '@emotion/styled';

export const DataInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  & > h2 {
    font-size: 2rem;
    & > span {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  & > form {
    width: 66%;
    margin: 0 auto;
    & > p {
      color: ${({ theme }) => theme.colors.danger};
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }
    & > div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      & > input {
        width: 100%;
        height: 48px;
        padding: 0 1rem;
        color: ${({ theme }) => theme.colors.text};
        font-size: 1.5rem;
        background-color: ${({ theme }) => theme.colors.secBackground};
        border: 2px solid ${({ theme }) => theme.colors.border};
        border-right: none;
        border-top-left-radius: ${({ theme }) => theme.rounded.md};
        border-bottom-left-radius: ${({ theme }) => theme.rounded.md};
        &:focus {
          border: 2px solid ${({ theme }) => theme.colors.primary};
          border-right: none;
          outline: none;
          box-shadow: 0 4px 14px #2196f340;
        }
      }
      & > button {
        height: 48px;
        border-top-right-radius: ${({ theme }) => theme.rounded.md};
        border-bottom-right-radius: ${({ theme }) => theme.rounded.md};
        background-color: ${({ theme }) => theme.colors.primary};
        border: 2px solid ${({ theme }) => theme.colors.primary};
        padding: 0 1rem;
        font-size: 1.5rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.background};
        transition: all 150ms ease-in-out;
        &:active {
          transform: scale(0.95);
        }
      }
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 100%;
    }
  }
  & > a {
    opacity: 0.4;
    font-size: 0.95rem;
    transition: opacity 150ms ease-in-out;
    &:hover {
      opacity: 1;
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
