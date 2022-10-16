import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    return (


    <>
       <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['M','y',' ','S','k','i','l','l','s']}
                        idx ={15}/>


                </h1>
                <p>
                    I am proficient in many programing languages and frameworks such as   

                    <span className="tech-tag"> HTML5</span>,
                    <span class="tech-tag"> CSS</span>,
                    <span class="tech-tag"> SQL</span>,
                    <span class="tech-tag"> JavaScript</span>,
                    <span class="tech-tag"> Java</span>,
                    <span class="tech-tag"> Springboot</span>,
                    <span class="tech-tag"> Python</span>,
                    <span class="tech-tag"> Django</span>,
                    <span class="tech-tag"> Flask</span> and 
                    <span class="tech-tag"> C/C#</span>
                </p>

                
                <p>
                    Also, I have entry level experience and improving my skills with
                    
                    <span class="tech-tag"> PHP</span>,
                    <span class="tech-tag"> C++</span>,
                    <span class="tech-tag"> Keras</span>,
                    <span class="tech-tag"> OpenCV</span>,
                    <span class="tech-tag"> React</span>,
                    <span class="tech-tag"> AWS</span> and
                    <span class="tech-tag"> .net </span>,
                </p>
                <p>
                    You can visit my <a href= "https://github.com/Malcom-Maynard" target="\"> Github </a>  to see my past and current projects.
                </p>
       


            </div>

            <div className="clear"></div>
            <div class="skills-charts">
          <div id="myCanvasContainer">
            <canvas width="500" height="500" id="myCanvas"><ul>
                <li>
                  <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">HTML 5</a>
                </li>
                <li>
                  <a data-weight="25" href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">CSS3</a>
                </li>
                <li>
                  <a data-weight="25" href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>
                </li>
                <li>
                  <a data-weight="25" href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">TypeScript</a>
                </li>
                <li>
                  <a data-weight="24" href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank">REST</a>
                </li>
                <li>
                  <a data-weight="14" href="https://en.wikipedia.org/wiki/JSON" target="_blank">JSON</a>
                </li>
                <li>
                  <a data-weight="13" href="https://en.wikipedia.org/wiki/XML" target="_blank">React</a>
                </li>
                <li>
                  <a data-weight="27" href="https://en.wikipedia.org/wiki/AngularJS" target="_blank">Angular 2+</a>
                </li>
                <li>
                  <a data-weight="26" href="https://en.wikipedia.org/wiki/WordPress" target="_blank">JavaScript</a>
                </li>
                <li>
                  <a data-weight="21" href="https://en.wikipedia.org/wiki/Node.js" target="_blank">Jasmine</a>
                </li>
                <li>
                  <a data-weight="17" href="https://en.wikipedia.org/wiki/Git" target="_blank">Git</a>
                </li>
                <li><a data-weight="17" href="https://bobangajicsm.github.io/portfolio/skills.html" target="_blank">_lodash</a></li>
                <li>
                  <a data-weight="23" href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)" target="_blank">Bootstrap</a>
                </li>
                <li>
                  <a data-weight="15" href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" target="_blank">SASS</a>
                </li>
                <li>
                  <a data-weight="20" href="https://en.wikipedia.org/wiki/Responsive_web_design" target="_blank">RxJs</a>
                </li>
                <li>
                  <a data-weight="19" href="https://en.wikipedia.org/wiki/JQuery" target="_blank">jQuery</a>
                </li>
                <li>
                  <a data-weight="19" href="http://mongoosejs.com/" target="_blank">Webpack</a>
                </li>
                <li>
                  <a data-weight="19" href="https://karma-runner.github.io/1.0/index.html" target="_blank">Karma</a>
                </li>
                <li>
                  <a data-weight="19" href="http://gulpjs.com/" target="_blank">Gulp</a>
                </li>
                <li>
                  <a data-weight="19" href="https://www.npmjs.com/" target="_blank">npm</a>
                </li>
                <li>
                  <a data-weight="19" href="https://bower.io/" target="_blank">Bower</a>
                </li>
                <li>
                  <a data-weight="19" href="https://en.wikipedia.org/wiki/BEM" target="_blank">BEM</a>
                </li>
              </ul></canvas>
          </div>
          <div class="clear"></div>
        </div>

           
        </div>
        
        
        
        
        </>



    )

}


export default Skills
