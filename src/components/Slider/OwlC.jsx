import React from 'react';
// import './App.css';
//Owl Carousel Libraries and Module
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import { Element } from 'react-scroll'

import logo1 from '../../img/bootstrap.png'
import logo2 from '../../img/html.png'
import logo3 from '../../img/sass.png'
import logo4 from '../../img/react.png'
import logo5 from '../../img/git.png'
import logo6 from '../../img/js.png'
import logo7 from '../../img/github.png'
import logo8 from '../../img/laravel.png'
import logo9 from '../../img/laragon.png'
import logo10 from '../../img/css1.png'
import logo11 from '../../img/scrumm.png'
// import logo10 from '../../img/cssjpg.jpg'

//Owl Carousel Settings
const options = {


   loop: true,
   margin: 15,
   responsiveClass: true,
   //   nav: true, 
   autoplay: true,
   autoplayTimeout: 2000,
   //   navText: ["Prev", "Next"],
   smartSpeed: 700,
   responsive: {
      0: {
         dotsEach: 2,
         items: 1
      },
      300: {
         dotsEach: 4,
         items: 3
      },
      600: {
         dotsEach: 3,
         items: 6
      }
      //   0: {
      //       items: 1,
      //   },
      //   200: {
      //       items: 1,
      //   },
      //   200: {
      //       items: 2,
      //   },
      //   300: {
      //       items: 3,
      //   },
      //   400: {
      //       items: 4,
      //   },
      //   500: {
      //       items: 5,
      //   },
      //   600: {
      //       items: 6,
      //   }
   },
};

class App extends React.Component {


   render() {
      let owl_carousel = require('owl.carousel');
      window.fn = owl_carousel;

      return (
         <footer id='myskills' className="" >
            <h2 className="text-center titleSkills">My Skills</h2>
            <div className="titleUnderlineS"></div>

            <div className="container pb-sm-5">
               <OwlCarousel className="owl-carousel owl-theme" {...options}>
                  <div>
                     <img src={logo1} alt="" className="logo rounded-circle mx-auto" />
                     <p className="text-center mt-sm-1">BOOTSTRAP</p>
                  </div>
                  <div>
                     <img src={logo2} alt="" className="logo rounded-circle mx-auto" />
                     <p className="text-center mt-sm-1">HTML</p>
                  </div>
                  <div className="sassD">
                     <img src={logo3} alt="" className="logo rounded-circle mx-auto" />
                     <p className="text-center mt-sm-1">SASS</p>
                  </div>
                  <div>
                     <img src={logo4} alt="" className="logo rounded-circle mx-auto" />
                     <p className="text-center mt-sm-1">REACT</p>
                  </div>
                  <div>
                     <img src={logo5} alt="" className="logo rounded-circle mx-auto" />
                     <p className="text-center mt-sm-1">GIT</p>
                  </div>
                  <div>
                     <img src={logo6} alt="" className="logo rounded-circle mx-auto" />
                     <p className="text-center mt-sm-1">JAVASCRIPT</p>
                  </div>
                  <div>
                     <img src={logo7} alt="" className="logo rounded-circle mx-auto" />
                     <p className="text-center mt-sm-1">GITHUB</p>
                  </div>
                  <div>
                     <img src={logo8} alt="" className="logo rounded-circle mx-auto" />
                     <p className="text-center mt-sm-1">LARAVEL</p>
                  </div>
                  <div>
                     <img src={logo9} alt="" className="logo rounded-circle mx-auto" />
                     <p className="text-center mt-sm-1">LARAGON</p>
                  </div>
                  <div className="sassD">
                     <img src={logo10} alt="" className="logo rounded-circle mx-auto" />
                     <p className="text-center mt-sm-1">CSS</p>
                  </div>
                  <div>
                     <img src={logo11} alt="" className="logo rounded-circle mx-auto" />
                     <p className="text-center mt-sm-1">SCRUM</p>
                  </div>
               </OwlCarousel>
            </div>
         </footer>
      )
   };
}
export default App;
