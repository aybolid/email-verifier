import { css } from '@emotion/react';
import { theme } from './globalStyles';

const markdownStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    opacity: 0.8;
  }
  h1 {
    font-size: 2rem;
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
    margin-top: 0;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid ${theme.colors.border};
  }
  h2 {
    font-size: 1.75rem;
    color: ${theme.colors.primary};
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.25rem;
  }
  h5 {
    font-size: 1rem;
  }
  p {
    color: ${theme.colors.text};
    opacity: 0.7;
    font-size: 1rem;
  }
  pre {
    font-family: 'Fira Code', monospace;
    font-size: 1rem;
    background-color: ${theme.colors.secBackground};
    padding: 0.5rem 0.8rem;
    border-radius: 0.5rem;
  }
  code {
    font-family: 'Fira Code', monospace;
    font-size: 0.9rem;
    background-color: ${theme.colors.secBackground};
    border-radius: 0.5rem;
  }
  hr {
    margin-bottom: 1rem;
    margin-top: 1rem;
    border: 0;
    border-top: 2px solid ${theme.colors.border};
  }
  strong {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

export default markdownStyles;
