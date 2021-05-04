import React from 'react';
import Particles from 'react-particles-js';

const Particulas = () => {
    return (

        <div className="particulas">

            <div className="container">
				<div className="row d-flex">
					<div className="col-sm-8">
                       <h1 className="h1p d-sm-block d-none">Alex <span className="h1s">Declercq</span></h1>
   			           <h2 className="h2p d-sm-block d-none">Frontend Developer</h2>
						  {/* mobile */}
						  <div className="d-flex justify-content-center partMobile">
                              <h1 className="h1p d-block d-sm-none mx-auto">Alex Declercq</h1>
       					      {/* <span className="underline d-block d-sm-none"></span> */}
          			           <h3 className="h2p d-block d-sm-none">Frontend Developer</h3>
						  </div>
					</div>
				</div>
			</div>

            <Particles
               params={{
    	    "particles": {
    	        "number": {
    	            "value": 260,
    	            "density": {
    	                "enable": false
    	            }
    	        },
    	        "size": {
    	            "value": 10,
    	            "random": true
    	        },
    	        "move": {
    	            "direction": "bottom",
    	            "out_mode": "out"
    	        },
    	        "line_linked": {
    	            "enable": false
    	        }
        	    },
        	    "interactivity": {
        	        "events": {
        	            "onclick": {
        	                "enable": true,
        	                "mode": "remove"
        	            }
        	        },
        	        "modes": {
        	            "remove": {
        	                "particles_nb": 10
        	            }
        	        }
        	    }
        	}} 
			// height='90vh'
			style={{
				background:'black',
				// height: '100%'
				// position: 'relative'
			}}
			/>
        </div>
    )
}

export default Particulas
