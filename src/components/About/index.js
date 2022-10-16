import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

import React, { useState,useEffect } from 'react';
import {
    faCss3,
    faHtml5,
    faJsSquare,
    faGithubSquare,
    faReact,
    faJava,
    faPython,
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders';

const About = ()=>{

    const [letterClass, setLetterClass] = useState('text-animate')

    
    return (
        <>

        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx ={15}/>


                </h1>
                <p>I am a recent graduate from Wilfrid Laurier University (WLU) in 2022 with a major in Computer science and a minor in Psychology. </p>

                <p>I am seeking an opportunity that will both challenge me and provide the tools that will set me up for success as I start my career in computer and information technology</p>
                <p></p>


            </div>
            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithubSquare} color="#EC4D28" />
            </div>

            
          </div>
        </div>
      
        
        </div>
        
        <Loader type="pacman" />
        </>
    )


}


export default About