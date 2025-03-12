import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Analytics from './components/Analytics';
import RedirectPage from "./components/RedirectPage";
import AllAnalytics from "./components/AllAnalytics";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.body.className = `${theme}-mode`;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className={`App ${theme}-mode`}>
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/allAnalytics" element={<AllAnalytics />} /> 
            <Route path="/link/:shortId" element={<RedirectPage />} /> 
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;