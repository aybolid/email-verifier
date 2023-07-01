import React from 'react';
import { NavLink } from 'react-router-dom';
import { Footer, Header, Main, Navigation, Section } from './Layout.styled';

interface LayoutProps {
  children: React.ReactNode;
}

const links = {
  home: '/',
  verify: '/verify',
  api: '/api',
};

export default function Layout({ children }: LayoutProps) {
  const sections = React.Children.map(children, (child) => (
    <Section className="wrapper">
      <div className="container">{child}</div>
    </Section>
  ));

  const RenderedNavLinks = (): JSX.Element => (
    <>
      {Object.entries(links).map(([label, path]) => (
        <NavLink className="nav-link" key={label} to={path}>
          {label}
        </NavLink>
      ))}
    </>
  );

  return (
    <>
      <Header className="wrapper">
        <div className="container">
          <NavLink className="logo" to={'/'}>
            Email Verifier
          </NavLink>
          <Navigation>
            <RenderedNavLinks />
          </Navigation>
        </div>
      </Header>
      <Main>{sections}</Main>
      <Footer className="wrapper">
        <div className="container">
          <small className="copyright">
            {new Date().getFullYear()} - Email Verifier
          </small>
        </div>
      </Footer>
    </>
  );
}
