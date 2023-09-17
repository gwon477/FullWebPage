/* eslint-disable */

import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainNav from './MainNav';
import MainPage from './pages/MainPage';
import PeoplesPage from './pages/PeoplesPage';
import ProjectPage from './pages/ProjectsPage';

function App() {
  return (
    <div className="App">
      <MainNav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/peoples" element={<PeoplesPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
