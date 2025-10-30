import { Routes, Route, NavLink } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Article from './Article';

import './App.css';

function App() {
  return (
    <div>
      <ul>
        <li><NavLink to="/" className="my">Home page</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "orange" : "my"}>About</NavLink></li>
        <li><NavLink to={{pathname: "/articles"}} style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}>Articles</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
