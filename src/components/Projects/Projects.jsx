import React from 'react';
import data from './Data'

const ProjectList = () => {

const [projects, setProjects] = React.useState(data);

// display text on hover:
const [isShown, setIsShown] = React.useState(false);
const [isShown2, setIsShown2] = React.useState(false);
// const [isShown3, setIsShown3] = React.useState(false);
const [isShown4, setIsShown4] = React.useState(false);
const [isShown5, setIsShown5] = React.useState(false);
const [isShown6, setIsShown6] = React.useState(false);
const [isShown7, setIsShown7] = React.useState(false);
const [isShown8, setIsShown8] = React.useState(false);
const [isShown9, setIsShown9] = React.useState(false);

// function changeBackground(e) {
//   e.target.style.background = 'red';
// }

const { id, links, thumbnail } = projects;

    return (
        <div className="container-fluid" id="projects" >
             <div className="row">
                 <div className="col-sm-12 color">
                   <h2 className="h2titleP text-center">Projects</h2>
                   <div className="titleUnderlineP"></div>
                     <div className="row">
                         {/* {
                           projects.map(project => (
                             <div key={project.id} className="col-sm-4 mb-5">
                               <a href={project.links}>
                                   <img src={project.thumbnail} alt="" className="img-fluid" />
                               </a>
                            </div>
                           ))   
                         } */}
                            <div className="col-xs-12 col-sm-4 col-md-3 mb-5 pHeight">
                               <a href="https://shopshi.netlify.app/" 
                                      onMouseEnter={() => setIsShown(true)}
                                      onMouseLeave={() => setIsShown(false)}
                                      target="_blank">
                                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTOvzzTkt44jg2FM4qJr4BwD58lls90O_RA&usqp=CAU" alt="" className="imgProjects" />
                                  <p className="pMobile d-block d-sm-none text-center">
                                    Original Merchandising: Clothes, Calendars
                                  </p>
                               {isShown && (
                                 <div className="projectEffect">
                                   <p className="projectText">
                                     Original Merchandising: Clothes, Calendars
                                   </p>
                                 </div>
                               )}
                               </a>
                            </div>
                            <div className="col-xs-12 col-sm-4  col-md-3 mb-5 pHeight">
                               <a href="https://sendasverdes.netlify.app/" 
                                      onMouseEnter={() => setIsShown2(true)}
                                      onMouseLeave={() => setIsShown2(false)}
                                      target="_blank">
                                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6GPSZgylPbMJdO7MUYRxHK8pXT84DqatEg&usqp=CAU" alt="" className="img-fluid imgProjects" />
                                   <p className="pMobile d-block d-sm-none text-center">
                                     Cactus and Plants Shop
                                   </p>
                                   {/* <img src="https://free.pagepeeker.com/v2/thumbs.php?size=x&url=https%3A%2F%2Fsendasverdes.netlify.app" alt="" className="img-fluid imgProjects" /> */}
                               {isShown2 && (
                                 <div className="projectEffect text-center">
                                   <p className="projectText ">
                                     Cactus and Plants Shop
                                   </p>
                                 </div>
                               )}
                               </a>
                            </div>
                            {/* <div className="col-sm-4  mb-5">
                               <a href="https://www.alexetid imgProjectsev.com/" 
                                      onMouseEnter={() => setIsShown3(true)}
                                      onMouseLeave={() => setIsShown3(false)}
                                      target="_blank">
                                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSotm7v3BOM1BrsUjnC_AR_Bcx6sM2OoLFkMg&usqp=CAU" alt="" className="img-fluid imgProjects" />
                               {isShown3 && (
                                 <div className="projectEffect">
                                   <p className="projectText">
                                     Actor and Model Portfolio
                                   </p>
                                 </div>
                               )}
                               </a>
                            </div> */}
                              <div className="col-xs-12 col-sm-4  col-md-3 mb-5 pHeight">
                               <a href="https://ziolukagency.netlify.app/" 
                                      onMouseEnter={() => setIsShown4(true)}
                                      onMouseLeave={() => setIsShown4(false)}
                                      target="_blank">
                                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb84GRsW2lDa3lWc_ehd27mU9qi7bbSG0KvA&usqp=CAU" alt="" className="img-fluid imgProjects" />
                                   <p className="pMobile d-block d-sm-none text-center">
                                    Content Marketing and Strategy Agency
                                   </p>
                                   {/* <img src="http://free.pagepeeker.com/v2/thumbs.php?size=x&url=https%3A%2F%2Fziolukagency.netlify.app" alt="" className="img-fluid imgProjects" /> */}
                               {isShown4 && (
                                 <div className="projectEffect">
                                   <p className="projectText">
                                     Content Marketing and Strategy Agency
                                   </p>
                                 </div>
                               )}
                               </a>
                            </div> 
                            <div className="col-xs-12 col-sm-4  col-md-3 mb-5 pHeight">
                               <a href="https://creaciones.netlify.app/" 
                                      onMouseEnter={() => setIsShown5(true)}
                                      onMouseLeave={() => setIsShown5(false)}
                                      target="_blank">
                                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4VAmlC_1RG4u0N4JQk-2QYkgMSgKknoQIVw&usqp=CAU" alt="" className="img-fluid imgProjects" />
                                   <p className="pMobile d-block d-sm-none text-center">
                                     Agriculture Ecosystem and Machinery
                                   </p>
                               {isShown5 && (
                                 <div className="projectEffect">
                                   <p className="projectText">
                                     Agriculture Ecosystem and Machinery
                                   </p>
                                 </div>
                               )}
                               </a>
                            </div>
                            
                            <div className="col-xs-12 col-sm-4  col-md-3 mb-5 pHeight mt-sm-5">
                               <a href="https://vantha-realstate.netlify.app/" 
                                      onMouseEnter={() => setIsShown6(true)}
                                      onMouseLeave={() => setIsShown6(false)}
                                      target="_blank">
                                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyIiKWlR-n0BeV14H0gGsfvmOBsVNxArM_aA&usqp=CAU" alt="" className="img-fluid imgProjects" />
                                   <p className="pMobile d-block d-sm-none text-center">
                                     Real State: Houses, Departments, Resorts                                   
                                   </p>
                               {isShown6 && (
                                 <div className="projectEffect">
                                   <p className="projectText">
                                     Real State: Houses, Departments, Resorts
                                   </p>
                                 </div>
                               )}
                               </a>
                            </div>
                            <div className="col-xs-12 col-sm-4  col-md-3 mb-5 pHeight mt-sm-5">
                               <a href="https://cubus.netlify.app/" 
                                      onMouseEnter={() => setIsShown7(true)}
                                      onMouseLeave={() => setIsShown7(false)}
                                      target="_blank"
                                      >
                                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-EvUeU8zqbu2s-eFIo6d93OdRDTBm8u9U9g&usqp=CAU" alt="" className="img-fluid imgProjects" />
                                   <p className="pMobile d-block d-sm-none text-center">
                                    Insurance Consulting Services                                   
                                   </p>
                                   {/* <img src="https://free.pagepeeker.com/v2/thumbs.php?size=x&url=https%3A%2F%2Fcubus.netlify.app%2Fseguros.html" alt="" className="img-fluid imgProjects" /> */}
                               {isShown7 && (
                                 <div className="projectEffect">
                                   <p className="projectText">
                                     Insurance Consulting Services
                                   </p>
                                 </div>
                               )}
                               </a>
                            </div>
                            <div className="col-xs-12 col-sm-4  col-md-3 mb-5 pHeight mt-sm-5">
                               <a href="https://muds.netlify.app/" 
                                      onMouseEnter={() => setIsShown8(true)}
                                      onMouseLeave={() => setIsShown8(false)}
                                      target="_blank">
                                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQe3YViYMFdn1EzfDEGhkW8nJXmcovepwylw&usqp=CAU" alt="" className="img-fluid imgProjects" />
                                   <p className="pMobile d-block d-sm-none text-center">
                                    Co-workers and Team App                                  
                                   </p>
                                   {/* <img src="http://free.pagepeeker.com/v2/thumbs.php?size=x&url=https%3A%2F%2Fmuds.netlify.app" alt="" className="img-fluid imgProjects" /> */}
                               {isShown8 && (
                                 <div className="projectEffect">
                                   <p className="projectText">
                                     Co-workers and Team App
                                   </p>
                                 </div>
                               )}
                               </a>
                            </div>
                            <div className="col-xs-12 col-sm-4  col-md-3 mb-5 pHeight mt-sm-5">
                               <a href="https://jolly-galileo-a7fc7c.netlify.app/" 
                                      onMouseEnter={() => setIsShown9(true)}
                                      onMouseLeave={() => setIsShown9(false)}
                                      target="_blank">
                                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBi5khClpYivnr0Z2Ta0mUHSW_oeqU6K2ufg&usqp=CAU" alt="" className="img-fluid imgProjects" />
                                   <p className="pMobile d-block d-sm-none text-center">
                                   Software Development Services                                 
                                   </p>
                                   {/* <img src="http://free.pagepeeker.com/v2/thumbs.php?size=x&url=https%3A%2F%2Fjolly-galileo-a7fc7c.netlify.app" alt="" className="img-fluid imgProjects" /> */}
                               {isShown9 && (
                                 <div className="projectEffect">
                                   <p className="projectText">
                                     Software Development Services
                                   </p>
                                 </div>
                               )}
                               </a>
                            </div>  
                     </div>         
                 </div>
             </div>
        </div>
    )
}

export default ProjectList