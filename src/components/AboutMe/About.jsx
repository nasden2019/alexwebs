import React, { useState } from 'react';
import info from './Languages';
import logo1 from '../../img/bootstrap.png'
import about from '../../img/about.jpg'

const AboutMe = () => {

  const [jobs, setJobs] = useState(info);
  const [value, setValue] = useState(0);

  const { flag, id, text } = jobs[value];
  return (

    <section className="sectionAbout" id="aboutme">
    
       <div className="title" >
         <h2 className="h2title">About Me</h2>
         <div className="titleUnderline"></div>
       </div>
   
       <div className="container">
          <div className="row justify-content-center boxAbout">
              <div className="col-sm-5 im">
                 {/* <div className="firstHalf"> */}
                     <div>
                         <img src={about} alt="" className="img-fluid" />
                     </div>
              </div>

              <div className="col-sm-5 my-sm-auto">
                    <div className="mt-4">
                       {text.map((line, index) => {
                         return <div key={index} className="boxAboutText">
                                    <p className="">{line}</p>
                               </div>
                       })}
                   </div>

                   <div className='mt-5 d-sm-flex d-sm-block d-none'>
                      {jobs.map((item, index) => {
                        return (
                          <img
                            src ={item.flag}
                            key={item.id}
                            onClick={() => setValue(index)}
                            className={`mx-sm-auto job-btn mb-5 ${index === value && 'active-btn'}`}
                           />
                        )
                      })}
                    </div>

                   <div className='mt-5 d-sm-none d-block pipi'>
                      {jobs.map((item, index) => {
                        return (
                          <img
                            src ={item.flag}
                            key={item.id}
                            onClick={() => setValue(index)}
                            className={`btnMob  mb-5 ${index === value && 'active-btn'}`}
                           />
                        )
                      })}
                    </div>
                 </div>
              </div>  
          </div>
    </section>

  )
}

export default AboutMe;