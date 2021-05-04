import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter, FaInstagram } from 'react-icons/fa'
import { links, social } from './DataNav';
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';

// import ProjectList from '../Projects/ProjectList'

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     NavLink
//   } from "react-router-dom";

// import ProjectList from '../Projects/ProjectList';
// import Home from '../../App';
// import OwlC from '../Slider/OwlC';
// import Animation from '../Aboutme/Animation'


const Navbar = () => {

const [showLinks, setShowLinks] = useState(false);
// const [hideNav, setHideNav] = useState(false);
const [navbar, setNavbar] = useState(false);


// animation of navbar on scroll
const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 100) {
        setNavbar(true)
    } else {
        setNavbar(false)
    }
}
window.addEventListener('scroll', changeBackground);


// const hideNav = () => {
//   document.querySelector('.show-container').display = 'hide';
// }

// Scrobable Links
const scrollToSectionH = () => {
  document.querySelector('#home').scrollIntoView({
    behavior: 'smooth'
  });
}
const scrollToSectionAbout = () => {
  document.querySelector('#aboutme').scrollIntoView({
    paddingTop: '60px',
    behavior: 'smooth',
  });
}
const scrollToSectionP = () => {
  document.querySelector('#projects').scrollIntoView({
    behavior: 'smooth',
    margin: '50px',
  });
}
const scrollToSectionS = () => {
  document.querySelector('#myskills').scrollIntoView({
    behavior: 'smooth'
  });
}

    return (
        <>
        <nav className={ navbar ? 'activeNav fixed-top' : ''}>
            <div className="navbar-center">
                <div className="navbar-header flex-column">
                    {/* <h3 className="logo">Alex Declercq</h3>
                      <h4 className="logo">Frontend Developer</h4>      */}
                    <button  onClick={() => setShowLinks(!showLinks)}
                             className="navbar-toggle">
                        <FaBars />
                    </button>
                 </div>   

             
                      <div>
                          <li className="mr-3 linksNav home d-none d-sm-block"
                                         onClick={scrollToSectionH}>
                             <Link to="home">ALEX DECLERCQ</Link>
                           </li>
                      </div> 

                    <div className={`${showLinks ? 'links-container show-container' : 'links-container'}`}>
                       <ul className="links my-auto">
                           <li className="mr-3 linksNav" onClick={scrollToSectionAbout}>
                             <Link smooth to="aboutme">About</Link>
                           </li>
                           <li className="mr-3 linksNav" onClick={scrollToSectionP}>
                             <Link smooth to="projects">Projects</Link>
                           </li>
                           <li className="mr-3 linksNav" onClick={scrollToSectionS}>
                             <Link smooth to="myskills">My Skills</Link>
                           </li>
                       </ul>
                    </div>
                 {/* } */}
                    
                    {/* SOCIAL ICONS */}
                    <ul className="social-icons mr-sm-5">
                      {
                          social.map(item => {
                              const { id, url, icon } = item;
                              return (
                                  <li key={id}>
                                      <a className="socialIcons" href={url} className={ navbar ? 'activosSocial' : ''}
                                      target="_blank">
                                          {icon}
                                      </a>
                                  </li>
                              )
                          })
                      }
                    </ul>
                </div>
        </nav>
        </>
    )
}

export default Navbar