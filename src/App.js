/* eslint-disable */

import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainNav from './MainNav';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <MainNav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/members" element={<div>Members임</div>} />
        <Route path="/blog" element={<div>Blog임</div>} />
        <Route path="*" element={<div>없는페이지임</div>} />
      </Routes>
    </div>
  );
}

export default App;
