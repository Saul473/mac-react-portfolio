// import logo from './logo.svg';
// import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header'
import Portfolio from './components/Portfolio/Portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
