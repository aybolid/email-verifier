import { Helmet } from 'react-helmet';

import Layout from '@src/components/Layout';
import DataInputSingle from '@src/components/routes/VerifySinglePage/DataInputSingle';
import { useAppSelector } from '@src/app/hooks';
import { selectEmail } from '@src/features/verifySingleEmail/verifySingleEmailSlice';
import SingleResult from '@src/components/routes/VerifySinglePage/SingleResult';

const SEO = ({ email }: { email: string }): JSX.Element => (
  <Helmet>
    {email ? (
      <title>Verify Email | {email}</title>
    ) : (
      <title>Verify Email</title>
    )}

    <meta
      name="description"
      content="Verify Email. Check address format and DNS records (MX, SPF and DMARC)"
    />
    <meta name="robots" content="noindex" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Helmet>
);

export default function VerifySinglePage() {
  const email = useAppSelector(selectEmail);

  return (
    <>
      <SEO email={email} />
      <Layout>
        <DataInputSingle />
        <SingleResult />
      </Layout>
    </>
  );
}
