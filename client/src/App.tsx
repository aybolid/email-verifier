import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from '@src/routes/IndexPage';
import Layout from './components/Layout';
import VerifySinglePage from './routes/VerifySinglePage';
import VerifySeveralPage from './routes/VerifySeveralPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route
          path="/api"
          element={
            <Layout>
              <div>api</div>
            </Layout>
          }
        />
        <Route path="/verify" element={<VerifySinglePage />} />
        <Route path="/verify/several" element={<VerifySeveralPage />} />
      </Routes>
    </Router>
  );
}
