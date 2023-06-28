import { FooterContainer } from './styles/Footer.styles';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="wrapper">
      <FooterContainer className="container">
        <small className="copyright">
          ©{YEAR} - <span>Email Verifier</span> with API
        </small>
      </FooterContainer>
    </footer>
  );
}
