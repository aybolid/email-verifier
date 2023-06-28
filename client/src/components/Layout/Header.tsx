import { HeaderContainer } from './styles/Header.styles';

export default function Header() {
  return (
    <header className="wrapper">
      <HeaderContainer className="container">
        <h1 className="logo">Email Verifier</h1>
        <p>A simple email verifier app with API</p>
      </HeaderContainer>
    </header>
  );
}
