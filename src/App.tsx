// src/App.tsx

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Privacy from './Privacy';
import Products from './Products';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ 'borderBottom': '1px solid', 'marginBottom': '20px', padding: '20px 0', position: 'fixed', width: '100%', top: 0, left: 0, background: '#fff' }}>
          <Link style={{padding: '20px 0',}} to="/">ホーム</Link> | <Link to="/privacy">プライバシーポリシー</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
