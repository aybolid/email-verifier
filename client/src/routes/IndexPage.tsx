import Layout from '@src/components/Layout';
import Hero from '@src/components/routes/IndexPage/Hero';
import { Helmet } from 'react-helmet';

const SEO = (): JSX.Element => (
  <Helmet>
    <title>Simple Email Verifier</title>
    <meta
      name="description"
      content="Verify Email. Check address format and DNS records (MX, SPF and DMARC). Check if email is valid."
    />
    <meta name="robots" content="noindex" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Helmet>
);

export default function IndexPage() {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
