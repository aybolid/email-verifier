import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VerifyOne from './routes/VerifyOne';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VerifyOne />} />
        {/* <Route path="/several" element={<VerifySeveral />} /> */}
      </Routes>
    </Router>
  );
}
