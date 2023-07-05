import Layout from '@src/components/Layout';
import DataInputSeveral from '@src/components/routes/VerifySeveralPage/DataInputSeveral';
import { Helmet } from 'react-helmet';

const SEO = (): JSX.Element => (
  <Helmet>
    <title>Verify Several Emails</title>
    <meta
      name="description"
      content="Verify Several Emails at Once. Check addresses format and DNS records (MX, SPF and DMARC)"
    />
    <meta name="robots" content="noindex" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Helmet>
);

export default function VerifySeveralPage() {
  return (
    <>
      <SEO />
      <Layout>
        <DataInputSeveral />
      </Layout>
    </>
  );
}
