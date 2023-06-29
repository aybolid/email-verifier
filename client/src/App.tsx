import Layout from './components/Layout';
import DataInput from './components/App/DataInput';
import Results from './components/App/Results';

export default function App() {
  return (
    <Layout>
      <DataInput />
      <Results />
    </Layout>
  );
}
