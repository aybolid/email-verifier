import styled from '@emotion/styled';

export const DataInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  & > .title {
    font-weight: ${({ theme }) => theme.typography.weight.regular};
    font-size: 2rem;
  }
  & > .form {
    margin-top: 24px;
    width: 100%;
    max-width: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > .textarea {
      font-family: inherit;
      outline: none;
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.5rem;
      padding: 0 16px;
      border: 2px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.rounded.md};
      width: 100%;
      background-color: ${({ theme }) => theme.colors.secBackground};
      resize: vertical;
      &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }
    & > .input {
      outline: none;
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.5rem;
      padding: 0 16px;
      border: 2px solid ${({ theme }) => theme.colors.border};
      border-top-left-radius: ${({ theme }) => theme.rounded.md};
      border-bottom-left-radius: ${({ theme }) => theme.rounded.md};
      border-right: none;
      width: 100%;
      height: 48px;
      background-color: ${({ theme }) => theme.colors.secBackground};
      &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }
    & > .submit-btn-1 {
      height: 51px;
      color: ${({ theme }) => theme.colors.secBackground};
      font-size: 1.5rem;
      font-weight: ${({ theme }) => theme.typography.weight.regular};
      padding: 0 16px;
      border-top-right-radius: ${({ theme }) => theme.rounded.md};
      border-bottom-right-radius: ${({ theme }) => theme.rounded.md};
      border: none;
      background-color: ${({ theme }) => theme.colors.primary};
      transition: transform 150ms ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
      &:active {
        transform: scale(1);
      }
      &:disabled {
        opacity: 0.6;
        pointer-events: none;
      }
    }
    & > .submit-btn-2 {
      margin-top: 16px;
      height: 51px;
      color: ${({ theme }) => theme.colors.secBackground};
      font-size: 1.5rem;
      font-weight: ${({ theme }) => theme.typography.weight.regular};
      padding: 0 16px;
      border-radius: ${({ theme }) => theme.rounded.md};
      border: none;
      background-color: ${({ theme }) => theme.colors.primary};
      transition: transform 150ms ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
      &:active {
        transform: scale(1);
      }
      &:disabled {
        opacity: 0.6;
        pointer-events: none;
      }
    }
  }
  & > .toggler {
    background-color: transparent;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.size.lg};
    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
