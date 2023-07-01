import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from '@src/routes/IndexPage';
import Layout from './components/Layout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/verify" element={<Layout><div>verify</div></Layout>} />
        <Route path="/api" element={<Layout><div>api</div></Layout>} />
      </Routes>
    </Router>
  );
}
