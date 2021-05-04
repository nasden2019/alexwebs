import React from 'react';
import Video from '../../videos/video.mp4'
// import { HeroContainer, HeroBg, VideoBg } from './HeroElements'

const HeroSection = () => {
    return (
         <div className="HeroContainer" id="home">
             <div className="HeroBg" >
                 <h3 className="d-sm-none">Alex Declercq</h3>
                 <h4>Frontend Developer</h4>
               <video src={Video} autoPlay loop muted type="video/mp4" />
             </div>
         </div>
    )
}

export default HeroSection
