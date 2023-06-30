import styled from '@emotion/styled';

export const DataInputOneWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  .title {
    font-weight: ${({ theme }) => theme.typography.weight.regular};
    font-size: 2rem;
    & > span {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: ${({ theme }) => theme.typography.weight.semi};
    }
  }
  .form {
    margin-top: 24px;
    width: 100%;
    max-width: 700px;
    .input-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .input {
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
    .submit-btn {
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
  }
  .error {
    color: ${({ theme }) => theme.colors.danger};
    font-size: ${({ theme }) => theme.typography.size.sm};
    margin-top: 4px;
  }
  .link {
    text-decoration: none;
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
