// import Header from './components/Header'
import Footer from './components/Footer';
import NavContainer from './components/NavContainer';
// import AboutMe from './components/AboutMe';
// import Portfolio from './components/Portfolio/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
import './components/style.css';

// import AboutMe from './components/AboutMe';
// import Header from './components/Header'
// import Portfolio from './components/Portfolio/Portfolio';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Resume from './components/Resume';
// import './components/style.css';


function App() {

    // const [currentPage, setCurrentPage] = useState('AboutMe');

  // const renderPage = () => {
  //   if(currentPage === 'AboutMe') {
  //     return <AboutMe />
  //   }
  //   if(currentPage === 'Contact') {
  //     return <Contact />
  //   }
  //   if(currentPage === 'Portfolio') {
  //     return <Portfolio />
  //   }
  //   if(currentPage === 'Resume') {
  //     return <Resume />
  //   }
  // }

  return (
    // <Router>
    <>
      <NavContainer />
      {/* <main>
      <Routes>
        <Route path="/mac-react-portfolio/aboutme" element={<AboutMe />} />
        <Route path="/mac-react-portfolio/portfolio" element={<Portfolio />} />
        <Route path="/mac-react-portfolio/contact" element={<Contact />} />
        <Route path="/mac-react-portfolio/resume" element={<Resume />} />
      </Routes>
      </main>
    </Router> */}
    <Footer />
    </>
  );
}

export default App;
