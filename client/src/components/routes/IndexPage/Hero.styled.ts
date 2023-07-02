import styled from '@emotion/styled';

export const HeroWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 3rem;
  & > .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    & > .title {
      font-size: 4rem;
      font-weight: bold;
      & > span {
        font-size: 4.08rem;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    & > .info {
    }
    & > .start {
      place-self: center;
      background-color: ${({ theme }) => theme.colors.accent};
      text-transform: uppercase;
      font-size: 1.5rem;
      padding: 1rem 2rem;
      border-radius: ${({ theme }) => theme.rounded.md};
      font-weight: 600;
      color: #333;
      transition: all 100ms ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
      &:active {
        transform: scale(1);
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      text-align: center;
    }
  }
  & > .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 700px;
    & > .img {
      width: 100%;
      @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        height: 300px;
      }
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      height: auto;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
