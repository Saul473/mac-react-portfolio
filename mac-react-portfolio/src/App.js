import AboutMe from './components/AboutMe';
import Header from './components/Header'
import Portfolio from './components/Portfolio/Portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import './components/style.css';


function App() {
  return (
    <Router>
      <Header />
      <main>
      <Routes>
        <Route path="/mac-react-portfolio/aboutme" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
