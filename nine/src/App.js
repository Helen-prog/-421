import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Article from './Article';
import Layout from './components/Layout';
import AboutInfo from './AboutInfo';
import NotFoundPage from './NotFoundPage';

import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about/:id" element={<AboutInfo />} />
          <Route path="articles" element={<Article />} />
          <Route path="articles-us" element={<Navigate to="/articles" replace />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
