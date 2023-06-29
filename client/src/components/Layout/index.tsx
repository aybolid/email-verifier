import React from 'react';
import { Main, SectionWrapper } from './styles/Index.styles';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const content = React.Children.map(children, (child) => (
    <SectionWrapper className="wrapper">
      <div className="container">{child}</div>
    </SectionWrapper>
  ));

  return (
    <>
      <Header />
      <Main>{content}</Main>
      <Footer />
    </>
  );
}
