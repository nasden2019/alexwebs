import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/VideoSection/HeroSection';
import Animation from './components/AboutMe/About'
import ProjectList from './components/Projects/Projects';
import OwlC from './components/Slider/OwlC';
// import ScrollToTop from './components/ScrollToTop/Scrolling';
import { FaRocket } from 'react-icons/fa';

// for the links
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [showScroll, setShowScroll] = React.useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 700) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };
  window.addEventListener('scroll', checkScrollTop)

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };




  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Animation />
      <ProjectList />
      <OwlC />
      <FaRocket
        className="scrollTop mx-auto mt-sm-4"
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
      />
    </div>
  );
}

export default App;
