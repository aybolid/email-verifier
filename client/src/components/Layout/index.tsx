import React from 'react';
import { Main } from './styles/Index.styles';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const content = React.Children.map(children, (child) => (
    <section className="wrapper">
      <div className="container">{child}</div>
    </section>
  ));

  return (
    <>
      <Header />
      <Main>{content}</Main>
      <Footer />
    </>
  );
}
